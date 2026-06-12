"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { rsvpFormSchema, RSVPFormData } from "@/lib/validations";
import { siteConfig } from "@/lib/config";
import { getFamilyGuests, familyExists } from "@/lib/families";
import Button from "@/components/ui/Button";

interface RSVPFormProps {
  familyKey: string | null;
}

export default function RSVPForm({ familyKey }: RSVPFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [guests, setGuests] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alreadyConfirmed, setAlreadyConfirmed] = useState(false);

  // Validar familia, cargar invitados y verificar si ya confirmó
  useEffect(() => {
    const checkFamilyAndRSVP = async () => {
      if (!familyKey) {
        setIsLoading(false);
        return;
      }

      if (!familyExists(familyKey)) {
        router.push(`/not-found?fam=${familyKey}`);
        return;
      }

      const familyGuests = getFamilyGuests(familyKey);
      setGuests(familyGuests);

      // Verificar si ya existe un RSVP en Redis
      try {
        const response = await fetch(`/api/rsvp?familyKey=${familyKey}`);
        if (response.ok) {
          const result = await response.json();
          if (result.success && result.data) {
            // Ya existe un RSVP, mostrar mensaje de agradecimiento
            setAlreadyConfirmed(true);
            setSubmitStatus("success");
          }
        }
      } catch (error) {
        console.error("Error al verificar RSVP:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkFamilyAndRSVP();
  }, [familyKey, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpFormSchema),
    defaultValues: {
      familyKey: familyKey || "",
      guestConfirmations: {},
    },
  });

  // Actualizar familyKey cuando cambia (asegurarse de que siempre tenga un valor)
  useEffect(() => {
    if (familyKey) {
      setValue("familyKey", familyKey, { shouldValidate: true });
    } else {
      setValue("familyKey", "", { shouldValidate: false });
    }
  }, [familyKey, setValue]);

  // Inicializar confirmaciones por defecto (todos confirman)
  useEffect(() => {
    if (guests.length > 0) {
      const defaultConfirmations: Record<string, "si" | "no"> = {};
      guests.forEach((guest) => {
        defaultConfirmations[guest] = "si"; // Por defecto todos confirman
      });
      setValue("guestConfirmations", defaultConfirmations);
    }
  }, [guests, setValue]);

  const guestConfirmations = watch("guestConfirmations");

  const onSubmit = async (data: RSVPFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Error al enviar el RSVP');
      }

      setSubmitStatus("success");
      // No resetear el formulario, solo mostrar el mensaje de éxito
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl border-2 border-vintage-pink/50 focus:border-dusty-rose focus:outline-none focus:ring-2 focus:ring-dusty-rose/20 transition-all bg-white text-foreground placeholder:text-mauve/50";
  const labelClasses = "block text-sm font-sans text-rosewood mb-2 font-medium";
  const errorClasses = "mt-1.5 text-sm text-soft-berry flex items-center gap-1";
  const selectClasses = "w-full px-4 py-3 rounded-xl border-2 border-vintage-pink/50 focus:border-dusty-rose focus:outline-none focus:ring-2 focus:ring-dusty-rose/20 transition-all bg-white text-foreground";

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin h-8 w-8 border-4 border-dusty-rose border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!familyKey) {
    return (
      <div className="p-4 rounded-xl bg-yellow-50 border-2 border-yellow-300 text-yellow-800 text-center font-sans">
        <p>Por favor, usa el enlace de invitación que recibiste.</p>
        <p className="text-sm mt-2 text-yellow-700">
          El enlace debe incluir <code className="bg-yellow-100 px-2 py-1 rounded">?fam=tu-familia</code>
        </p>
      </div>
    );
  }

  // Calcular estadísticas de confirmación
  const confirmedCount = Object.values(guestConfirmations || {}).filter(c => c === "si").length;
  const declinedCount = Object.values(guestConfirmations || {}).filter(c => c === "no").length;

  // Si ya se confirmó exitosamente o ya existe en Redis, mostrar mensaje de agradecimiento
  if (submitStatus === "success" || alreadyConfirmed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-2xl bg-gradient-to-br from-vintage-pink/30 to-dusty-rose/20 border-2 border-dusty-rose/50 text-center"
      >
        <div className="mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 mx-auto mb-4 bg-dusty-rose rounded-full flex items-center justify-center"
          >
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-serif text-rosewood mb-3">
            ¡Gracias por confirmar!
          </h3>
          <p className="text-mauve font-sans text-lg mb-2">
            Tu confirmación ha sido registrada exitosamente
          </p>
          <p className="text-mauve/80 font-sans text-sm">
            Estamos muy emocionados de celebrar este día especial contigo
          </p>
        </div>
        <div className="pt-4 border-t border-dusty-rose/30">
          <p className="text-xs text-mauve/70 font-sans italic">
            "Tu presencia es el mejor regalo"
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit(
        onSubmit,
        () => {
          setSubmitStatus("error");
        }
      )} 
      className="space-y-5"
    >
      <input 
        type="hidden" 
        {...register("familyKey")}
        value={familyKey || ""}
      />

      {/* Confirmaciones por invitado */}
      <div>
        <label className={labelClasses}>
          Confirmación de asistencia *
        </label>
        <p className="text-xs text-mauve mb-4 font-sans">
          Por favor, confirma la asistencia de cada invitado
        </p>
        <div className="space-y-3">
          {guests.map((guest, index) => (
            <motion.div
              key={guest}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-4 rounded-xl border-2 border-vintage-pink/50 bg-white"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1">
                  <label htmlFor={`guest-${guest}`} className="text-sm font-sans text-rosewood font-medium">
                    {guest}
                  </label>
                </div>
                <div className="flex-1 sm:max-w-xs">
                  <select
                    id={`guest-${guest}`}
                    {...register(`guestConfirmations.${guest}` as const)}
                    defaultValue="si"
                    className={selectClasses}
                    onChange={(e) => {
                      const current = watch("guestConfirmations") || {};
                      setValue("guestConfirmations", {
                        ...current,
                        [guest]: e.target.value as "si" | "no"
                      });
                    }}
                  >
                    <option value="si">Sí asistiré</option>
                    <option value="no">No asistiré</option>
                  </select>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {errors.guestConfirmations && (
          <p className={errorClasses} role="alert">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {typeof errors.guestConfirmations === 'object' && 'message' in errors.guestConfirmations 
              ? String(errors.guestConfirmations.message)
              : 'Debes confirmar al menos un invitado'}
          </p>
        )}

        {/* Resumen de confirmaciones */}
        {(confirmedCount > 0 || declinedCount > 0) && (
          <div className="mt-4 p-3 rounded-xl bg-blush/50 border border-vintage-pink/30">
            <p className="text-xs font-sans text-mauve mb-2">Resumen:</p>
            <div className="flex flex-wrap gap-3 text-xs font-sans">
              {confirmedCount > 0 && (
                <span className="px-2 py-1 rounded bg-green-100 text-green-800">
                  {confirmedCount} confirmado{confirmedCount !== 1 ? "s" : ""}
                </span>
              )}
              {declinedCount > 0 && (
                <span className="px-2 py-1 rounded bg-red-100 text-red-800">
                  {declinedCount} no asistirán
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Alergias */}
      <div>
        <label htmlFor="allergies" className={labelClasses}>
          {siteConfig.content.rsvp.fields.allergies.label}
        </label>
        <input
          id="allergies"
          type="text"
          {...register("allergies")}
          placeholder={siteConfig.content.rsvp.fields.allergies.placeholder}
          className={inputClasses}
        />
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          {siteConfig.content.rsvp.fields.message.label}
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder={siteConfig.content.rsvp.fields.message.placeholder}
          rows={4}
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Botón de envío */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full !bg-soft-berry hover:!bg-dusty-rose hover:!scale-105 transition-all duration-300"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Enviando...
            </span>
          ) : (
            siteConfig.content.rsvp.submitButton
          )}
        </Button>
      </div>

      {/* Mensajes de error */}
      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="p-4 rounded-xl bg-soft-berry/20 border border-soft-berry/30 text-mulberry text-center font-sans"
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {siteConfig.content.rsvp.errorMessage}
          </div>
        </motion.div>
      )}
    </form>
  );
}
