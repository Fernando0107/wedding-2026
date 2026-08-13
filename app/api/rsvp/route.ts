import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { getSql } from '@/lib/db';
import { rsvpFormSchema } from '@/lib/validations';
import { FamilyRSVP, FamilyRSVPWithGuests, RSVPResponse } from '@/types';
import { familyExists, getFamilyGuests } from '@/lib/families';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';

const RSVP_WRITE_LIMIT = 10;
const RSVP_READ_LIMIT = 30;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

interface RSVPRow {
  family_key: string;
  status: FamilyRSVP['status'];
  confirmed_guests: string[] | null;
  declined_guests: string[] | null;
  allergies: string | null;
  message: string | null;
  submitted_at: string | Date;
  updated_at: string | Date | null;
}

// Convierte una fila de la tabla rsvps al shape de FamilyRSVP
function rowToRSVP(row: RSVPRow): FamilyRSVP {
  return {
    familyKey: row.family_key,
    status: row.status,
    confirmedGuests: row.confirmed_guests || undefined,
    declinedGuests: row.declined_guests || undefined,
    allergies: row.allergies || undefined,
    message: row.message || undefined,
    submittedAt: new Date(row.submitted_at).toISOString(),
    updatedAt: row.updated_at ? new Date(row.updated_at).toISOString() : undefined,
  };
}

// POST /api/rsvp - Guardar una confirmación RSVP
export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    if (!checkRateLimit(`rsvp:write:${clientIp}`, RSVP_WRITE_LIMIT, RATE_LIMIT_WINDOW_MS)) {
      return NextResponse.json(
        { success: false, message: 'Demasiadas solicitudes. Por favor intenta de nuevo más tarde.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validar datos del formulario
    const validatedData = rsvpFormSchema.parse(body);
    
    // Validar que la familia existe en el JSON
    if (!familyExists(validatedData.familyKey)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Familia no encontrada',
        },
        { status: 404 }
      );
    }
    
    // Obtener los invitados de la familia desde el JSON
    const familyGuests = getFamilyGuests(validatedData.familyKey);
    
    // Validar que todos los invitados en guestConfirmations están en la lista de invitados
    const guestNames = Object.keys(validatedData.guestConfirmations);
    const invalidGuests = guestNames.filter(
      (guest) => !familyGuests.includes(guest)
    );
    
    if (invalidGuests.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Los siguientes invitados no son válidos: ${invalidGuests.join(', ')}`,
        },
        { status: 400 }
      );
    }
    
    // Obtener lista de invitados confirmados (los que dijeron "si")
    const confirmedGuests = guestNames.filter(
      (guest) => validatedData.guestConfirmations[guest] === 'si'
    );
    
    // Obtener lista de invitados que declinaron (los que dijeron "no")
    const declinedGuests = guestNames.filter(
      (guest) => validatedData.guestConfirmations[guest] === 'no'
    );
    
    // Determinar el status general de la familia
    // Si al menos uno confirma, el status es "confirmed"
    // Si todos declinan, es "declined"
    let status: FamilyRSVP['status'] = 'pending';
    if (confirmedGuests.length > 0) {
      status = 'confirmed';
    } else if (declinedGuests.length === guestNames.length) {
      status = 'declined';
    }
    
    // Crear o actualizar el RSVP (upsert atómico, submitted_at se conserva en updates)
    const sql = getSql();
    const rows = await sql`
      INSERT INTO rsvps (family_key, status, confirmed_guests, declined_guests, allergies, message, updated_at)
      VALUES (
        ${validatedData.familyKey},
        ${status},
        ${confirmedGuests.length > 0 ? confirmedGuests : null},
        ${declinedGuests.length > 0 ? declinedGuests : null},
        ${validatedData.allergies || null},
        ${validatedData.message || null},
        now()
      )
      ON CONFLICT (family_key) DO UPDATE SET
        status = excluded.status,
        confirmed_guests = excluded.confirmed_guests,
        declined_guests = excluded.declined_guests,
        allergies = excluded.allergies,
        message = excluded.message,
        updated_at = excluded.updated_at
      RETURNING *
    `;
    const rsvpData = rowToRSVP(rows[0] as unknown as RSVPRow);

    // Preparar respuesta con datos completos (incluyendo guests del JSON)
    const responseData: FamilyRSVPWithGuests = {
      ...rsvpData,
      guests: familyGuests, // Agregar guests del JSON para la respuesta
    };
    
    const response: RSVPResponse = {
      success: true,
      message: 'RSVP guardado exitosamente',
      data: responseData,
    };
    
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error al guardar RSVP:', error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Datos inválidos',
          errors: error.errors,
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      {
        success: false,
        message: 'Error al guardar el RSVP',
      },
      { status: 500 }
    );
  }
}

// GET /api/rsvp - Obtener RSVP por familyKey
export async function GET(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    if (!checkRateLimit(`rsvp:read:${clientIp}`, RSVP_READ_LIMIT, RATE_LIMIT_WINDOW_MS)) {
      return NextResponse.json(
        { success: false, message: 'Demasiadas solicitudes. Por favor intenta de nuevo más tarde.' },
        { status: 429 }
      );
    }

    const { searchParams } = new URL(request.url);
    const familyKey = searchParams.get('familyKey');

    if (!familyKey) {
      return NextResponse.json(
        { success: false, message: 'Se requiere familyKey' },
        { status: 400 }
      );
    }
    
    // Validar que la familia existe
    if (!familyExists(familyKey)) {
      return NextResponse.json(
        { success: false, message: 'Familia no encontrada' },
        { status: 404 }
      );
    }
    
    const sql = getSql();
    const rows = await sql`SELECT * FROM rsvps WHERE family_key = ${familyKey}`;

    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, message: 'RSVP no encontrado' },
        { status: 404 }
      );
    }

    const rsvp = rowToRSVP(rows[0] as unknown as RSVPRow);

    // Obtener guests del JSON
    const familyGuests = getFamilyGuests(rsvp.familyKey);

    // Preparar respuesta con datos completos
    const responseData: FamilyRSVPWithGuests = {
      ...rsvp,
      guests: familyGuests,
    };
    
    return NextResponse.json({
      success: true,
      data: responseData,
    });
  } catch (error) {
    console.error('Error al obtener RSVP:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error al obtener el RSVP',
      },
      { status: 500 }
    );
  }
}
