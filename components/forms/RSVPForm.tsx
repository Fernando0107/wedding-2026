"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { rsvpFormSchema, RSVPFormData } from "@/lib/validations";
import { siteConfig } from "@/lib/config";
import Button from "@/components/ui/Button";

export default function RSVPForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpFormSchema),
    defaultValues: {
      guests: 0,
    },
  });

  const confirmationValue = watch("confirmation");

  const onSubmit = async (data: RSVPFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simular envío (aquí conectarías con tu backend o servicio)
      console.log("Datos del formulario:", data);
      
      // Simulación de delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      reset();
      
      // Resetear el mensaje después de 5 segundos
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error al enviar:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl border-2 border-vintage-pink/50 focus:border-dusty-rose focus:outline-none focus:ring-2 focus:ring-dusty-rose/20 transition-all bg-white text-foreground placeholder:text-mauve/50";
  const labelClasses = "block text-sm font-sans text-rosewood mb-2 font-medium";
  const errorClasses = "mt-1.5 text-sm text-soft-berry flex items-center gap-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Nombre */}
      <div>
        <label htmlFor="name" className={labelClasses}>
          {siteConfig.content.rsvp.fields.name.label} *
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          placeholder={siteConfig.content.rsvp.fields.name.placeholder}
          className={inputClasses}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <p className={errorClasses} role="alert">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClasses}>
          {siteConfig.content.rsvp.fields.email.label} *
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder={siteConfig.content.rsvp.fields.email.placeholder}
          className={inputClasses}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className={errorClasses} role="alert">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Confirmación */}
      <div>
        <label className={labelClasses}>
          {siteConfig.content.rsvp.fields.confirmation.label} *
        </label>
        <div className="space-y-3 mt-3">
          {Object.entries(siteConfig.content.rsvp.fields.confirmation.options).map(
            ([value, label]) => (
              <label 
                key={value} 
                className={`flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all ${
                  confirmationValue === value 
                    ? "border-dusty-rose bg-dusty-rose/10" 
                    : "border-vintage-pink/50 hover:border-dusty-rose/50 bg-white"
                }`}
              >
                <input
                  type="radio"
                  value={value}
                  {...register("confirmation")}
                  className="sr-only"
                />
                <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 transition-all ${
                  confirmationValue === value 
                    ? "border-dusty-rose bg-dusty-rose" 
                    : "border-mauve"
                }`}>
                  {confirmationValue === value && (
                    <span className="w-2 h-2 bg-white rounded-full" />
                  )}
                </span>
                <span className={`font-sans ${confirmationValue === value ? "text-rosewood" : "text-mauve"}`}>
                  {label}
                </span>
              </label>
            )
          )}
        </div>
        {errors.confirmation && (
          <p className={errorClasses} role="alert">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.confirmation.message}
          </p>
        )}
      </div>

      {/* Acompañantes - solo si confirmó asistencia */}
      <AnimatePresence>
        {confirmationValue === "si" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <label htmlFor="guests" className={labelClasses}>
              {siteConfig.content.rsvp.fields.guests.label}
            </label>
            <input
              id="guests"
              type="number"
              min="0"
              max="10"
              defaultValue={0}
              {...register("guests", { valueAsNumber: true })}
              placeholder={siteConfig.content.rsvp.fields.guests.placeholder}
              className={inputClasses}
            />
            {errors.guests && (
              <p className={errorClasses} role="alert">
                {errors.guests.message}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Alergias - solo si confirmó asistencia */}
      <AnimatePresence>
        {confirmationValue === "si" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>

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
          className="w-full"
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

      {/* Mensajes de estado */}
      <AnimatePresence mode="wait">
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 rounded-xl bg-vintage-pink/50 border border-dusty-rose/30 text-rosewood text-center font-sans"
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-dusty-rose" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {siteConfig.content.rsvp.successMessage}
            </div>
          </motion.div>
        )}

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
      </AnimatePresence>
    </form>
  );
}
