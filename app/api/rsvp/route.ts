import { NextRequest, NextResponse } from 'next/server';
import { redis } from '@/lib/redis';
import { rsvpFormSchema } from '@/lib/validations';
import { FamilyRSVP, FamilyRSVPWithGuests, RSVPResponse } from '@/types';
import { getFamily, familyExists, getFamilyGuests } from '@/lib/families';

// POST /api/rsvp - Guardar una confirmación RSVP
export async function POST(request: NextRequest) {
  try {
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
    
    // Buscar RSVP existente
    const redisKey = `family:${validatedData.familyKey}`;
    const existingRSVP = await redis.get<FamilyRSVP>(redisKey);
    
    // Crear o actualizar el RSVP
    // Guardamos: familyKey, status, confirmedGuests (los que dijeron "si"), declinedGuests (los que dijeron "no"), allergies, message
    const rsvpData: FamilyRSVP = {
      familyKey: validatedData.familyKey,
      status,
      confirmedGuests: confirmedGuests.length > 0 ? confirmedGuests : undefined,
      declinedGuests: declinedGuests.length > 0 ? declinedGuests : undefined,
      allergies: validatedData.allergies || undefined,
      message: validatedData.message || undefined,
      submittedAt: existingRSVP?.submittedAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    // Guardar en Redis
    await redis.set(redisKey, rsvpData);
    
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
  } catch (error: any) {
    console.error('Error al guardar RSVP:', error);
    
    // Si es error de validación de Zod
    if (error.name === 'ZodError') {
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
    
    const redisKey = `family:${familyKey}`;
    
    const rsvp = await redis.get<FamilyRSVP>(redisKey!);
    
    if (!rsvp) {
      return NextResponse.json(
        { success: false, message: 'RSVP no encontrado' },
        { status: 404 }
      );
    }
    
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
