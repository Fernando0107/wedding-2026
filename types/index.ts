export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface ProgramEvent {
  time: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface VenueInfo {
  name: string;
  address: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  wazeLink: string;
  googleMapsLink: string;
}

// RSVP Types
export type RSVPStatus = "pending" | "confirmed" | "declined";

// Estructura simplificada guardada en Redis
// Los datos de la familia (guests) vienen del JSON, no se guardan en Redis
// Guardamos quiénes confirmaron "si" y quiénes declinaron "no"
export interface FamilyRSVP {
  familyKey: string; // e.g., "gonzalez"
  status: RSVPStatus;
  confirmedGuests?: string[]; // Invitados que confirmaron "si" - estos son los que van
  declinedGuests?: string[]; // Invitados que declinaron "no" - estos no van
  allergies?: string;
  message?: string;
  submittedAt: string; // ISO date string
  updatedAt?: string; // ISO date string
}

// Respuesta de la API con datos completos (incluye guests del JSON)
export interface FamilyRSVPWithGuests extends FamilyRSVP {
  guests: string[]; // Viene del JSON
}

export interface RSVPResponse {
  success: boolean;
  message?: string;
  data?: FamilyRSVPWithGuests;
}

