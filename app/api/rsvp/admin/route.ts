import { NextRequest, NextResponse } from 'next/server';
import { getSql } from '@/lib/db';
import { FamilyRSVP, FamilyRSVPWithGuests } from '@/types';
import { getFamilyGuests, getAllFamilyKeys, getTotalGuests, getFamily } from '@/lib/families';

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

// Autenticación básica - puedes cambiar esta contraseña
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'wedding2026';

// GET /api/rsvp/admin - Obtener todas las confirmaciones (requiere autenticación)
export async function GET(request: NextRequest) {
  try {
    // Verificar autenticación
    const authHeader = request.headers.get('authorization');
    const password = authHeader?.replace('Bearer ', '');
    
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, message: 'No autorizado' },
        { status: 401 }
      );
    }
    
    // Obtener el total de invitados del JSON (solo para estadísticas)
    const totalGuestsFromJSON = getTotalGuests();
    
    // Obtener todas las familias del JSON
    const allFamiliesFromJSON = getAllFamilyKeys();
    
    // Obtener todos los RSVPs, ordenados por fecha de actualización (más recientes primero)
    const sql = getSql();
    const rows = await sql`SELECT * FROM rsvps ORDER BY COALESCE(updated_at, submitted_at) DESC`;

    // Agregar guests del JSON a cada RSVP
    const rsvps: FamilyRSVPWithGuests[] = rows.map((row) => {
      const rsvp = rowToRSVP(row as unknown as RSVPRow);
      return {
        ...rsvp,
        guests: getFamilyGuests(rsvp.familyKey),
      };
    });

    const familyKeysWithRSVP = new Set(rsvps.map((r) => r.familyKey));
    
    // Calcular familias pendientes (están en el JSON pero no tienen RSVP en Redis)
    const pendingFamilies = allFamiliesFromJSON.filter(
      (familyKey) => !familyKeysWithRSVP.has(familyKey)
    );
    
    // Calcular total de invitados pendientes (sumar guests de familias pendientes)
    const totalPendingGuests = pendingFamilies.reduce((sum, familyKey) => {
      const family = getFamily(familyKey);
      return sum + (family?.guests?.length || 0);
    }, 0);
    
    // Calcular estadísticas - TODO viene de Redis, excepto totalGuests y pending que vienen del JSON
    const stats = {
      total: rsvps.length, // Total de familias que han respondido
      confirmed: rsvps.filter(r => r.status === 'confirmed').length,
      declined: rsvps.reduce((sum, r) => sum + (r.declinedGuests?.length || 0), 0), // Total de invitados que declinaron
      pending: totalPendingGuests, // Total de invitados pendientes (familias en JSON sin RSVP en Redis)
      totalConfirmedGuests: rsvps
        .filter(r => r.status === 'confirmed')
        .reduce((sum, r) => sum + (r.confirmedGuests?.length || 0), 0),
      totalGuests: totalGuestsFromJSON, // Total de invitados según el JSON
    };
    
    // Si no hay RSVPs, calcular pendientes desde el JSON
    if (rsvps.length === 0) {
      const allFamiliesFromJSON = getAllFamilyKeys();
      const totalPendingGuests = allFamiliesFromJSON.reduce((sum, familyKey) => {
        const family = getFamily(familyKey);
        return sum + (family?.guests?.length || 0);
      }, 0);
      
      return NextResponse.json({
        success: true,
        data: [],
        stats: {
          total: 0,
          confirmed: 0,
          declined: 0, // Total de invitados que declinaron
          pending: totalPendingGuests, // Total de invitados pendientes del JSON
          totalConfirmedGuests: 0,
          totalGuests: totalGuestsFromJSON,
        },
      });
    }
    
    return NextResponse.json({
      success: true,
      data: rsvps,
      stats,
    });
  } catch (error) {
    console.error('Error al obtener RSVPs:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error al obtener los RSVPs',
      },
      { status: 500 }
    );
  }
}
