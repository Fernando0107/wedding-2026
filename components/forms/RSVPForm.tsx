"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
  } = useForm({
    resolver: zodResolver(rsvpFormSchema),
    defaultValues: {
      guests: 0,
    },
  });

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Nombre */}
      <div>
        <label htmlFor="name" className="block text-sm font-sans text-rosewood mb-2">
          {siteConfig.content.rsvp.fields.name.label}
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          placeholder={siteConfig.content.rsvp.fields.name.placeholder}
          className="w-full px-4 py-3 rounded-lg border-2 border-vintage-pink focus:border-dusty-rose focus:outline-none transition-colors bg-white text-foreground"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-soft-berry">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-sans text-rosewood mb-2">
          {siteConfig.content.rsvp.fields.email.label}
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder={siteConfig.content.rsvp.fields.email.placeholder}
          className="w-full px-4 py-3 rounded-lg border-2 border-vintage-pink focus:border-dusty-rose focus:outline-none transition-colors bg-white text-foreground"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-soft-berry">{errors.email.message}</p>
        )}
      </div>

      {/* Confirmación */}
      <div>
        <label className="block text-sm font-sans text-rosewood mb-3">
          {siteConfig.content.rsvp.fields.confirmation.label}
        </label>
        <div className="space-y-2">
          {Object.entries(siteConfig.content.rsvp.fields.confirmation.options).map(
            ([value, label]) => (
              <label key={value} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value={value}
                  {...register("confirmation")}
                  className="w-4 h-4 text-dusty-rose focus:ring-dusty-rose border-mauve"
                />
                <span className="ml-3 text-mauve font-sans">{label}</span>
              </label>
            )
          )}
        </div>
        {errors.confirmation && (
          <p className="mt-1 text-sm text-soft-berry">{errors.confirmation.message}</p>
        )}
      </div>

      {/* Acompañantes */}
      <div>
        <label htmlFor="guests" className="block text-sm font-sans text-rosewood mb-2">
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
          className="w-full px-4 py-3 rounded-lg border-2 border-vintage-pink focus:border-dusty-rose focus:outline-none transition-colors bg-white text-foreground"
        />
        {errors.guests && (
          <p className="mt-1 text-sm text-soft-berry">{errors.guests.message}</p>
        )}
      </div>

      {/* Alergias */}
      <div>
        <label htmlFor="allergies" className="block text-sm font-sans text-rosewood mb-2">
          {siteConfig.content.rsvp.fields.allergies.label}
        </label>
        <input
          id="allergies"
          type="text"
          {...register("allergies")}
          placeholder={siteConfig.content.rsvp.fields.allergies.placeholder}
          className="w-full px-4 py-3 rounded-lg border-2 border-vintage-pink focus:border-dusty-rose focus:outline-none transition-colors bg-white text-foreground"
        />
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="message" className="block text-sm font-sans text-rosewood mb-2">
          {siteConfig.content.rsvp.fields.message.label}
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder={siteConfig.content.rsvp.fields.message.placeholder}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border-2 border-vintage-pink focus:border-dusty-rose focus:outline-none transition-colors resize-none bg-white text-foreground"
        />
      </div>

      {/* Botón de envío */}
      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Enviando..." : siteConfig.content.rsvp.submitButton}
        </Button>
      </div>

      {/* Mensajes de estado */}
      {submitStatus === "success" && (
        <div className="p-4 rounded-lg bg-vintage-pink text-rosewood text-center font-sans">
          {siteConfig.content.rsvp.successMessage}
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 rounded-lg bg-soft-berry/20 text-mulberry text-center font-sans">
          {siteConfig.content.rsvp.errorMessage}
        </div>
      )}
    </form>
  );
}

