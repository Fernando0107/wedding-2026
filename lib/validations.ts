import { z } from "zod";

export const rsvpFormSchema = z.object({
  familyKey: z
    .string()
    .min(1, { message: "La clave de familia es requerida" }),
  
  // Confirmaciones por invitado: { "Juan Fer": "si", "Alice": "no", ... }
  guestConfirmations: z
    .record(z.enum(["si", "no"]))
    .refine(
      (confirmations) => {
        // Debe haber al menos una confirmación
        return Object.keys(confirmations).length > 0;
      },
      { message: "Debes confirmar al menos un invitado" }
    ),
  
  allergies: z.string().max(500).optional(),
  
  message: z.string().max(1000).optional(),
});

export type RSVPFormData = z.infer<typeof rsvpFormSchema>;
