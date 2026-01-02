import { z } from "zod";

export const rsvpFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(100, { message: "El nombre es demasiado largo" }),
  
  email: z
    .string()
    .email({ message: "Por favor ingresa un correo electrónico válido" }),
  
  confirmation: z.enum(["si", "no", "tal-vez"], {
    message: "Por favor selecciona una opción",
  }),
  
  guests: z
    .number()
    .int()
    .min(0, { message: "El número de acompañantes no puede ser negativo" })
    .max(10, { message: "El número de acompañantes no puede exceder 10" }),
  
  allergies: z.string().max(500).optional(),
  
  message: z.string().max(1000).optional(),
});

export type RSVPFormData = z.infer<typeof rsvpFormSchema>;
