"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import ImageReveal from "@/components/animations/ImageReveal";
import RSVPForm from "@/components/forms/RSVPForm";

export default function RSVP() {
  const searchParams = useSearchParams();
  const [familyKey, setFamilyKey] = useState<string | null>(null);

  // Leer familyKey de query params o del hash
  useEffect(() => {
    // Primero intentar desde query parameters (formato: /?fam=gonzalez#rsvp)
    let fam = searchParams.get("fam");
    
    // Si no está en query params, intentar leer del hash (formato: /#rsvp?fam=gonzalez)
    if (!fam && typeof window !== "undefined") {
      const hash = window.location.hash;
      // Buscar ?fam= en el hash
      const hashMatch = hash.match(/[?&]fam=([^&]+)/);
      if (hashMatch) {
        fam = hashMatch[1];
      }
    }
    
    setFamilyKey(fam);
  }, [searchParams]);
  return (
    <Section id="rsvp" background="white">
      <Container>
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-rosewood text-center mb-4">
            {siteConfig.content.rsvp.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-dusty-rose/40" />
            <svg className="w-5 h-5 text-dusty-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <div className="w-12 h-px bg-dusty-rose/40" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-center text-mauve mb-3 font-sans max-w-2xl mx-auto text-lg">
            {siteConfig.content.rsvp.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-center text-old-rose text-sm mb-12 font-sans">
            {siteConfig.content.rsvp.deadline}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Formulario */}
          <FadeIn delay={0.4}>
            <div className="order-2 lg:order-1 bg-blush/30 rounded-2xl p-6 md:p-8 shadow-soft">
              <RSVPForm familyKey={familyKey} />
            </div>
          </FadeIn>

          {/* Imagen */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-8">
            <ImageReveal delay={0.5}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
                <Image
                  src={siteConfig.photos.rsvp}
                  alt="Confirma tu asistencia"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "0% 50%" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay decorativo */}
                <div className="absolute inset-0 bg-gradient-to-t from-rosewood/10 to-transparent" />
              </div>
            </ImageReveal>

            {/* Mensaje adicional */}
            <FadeIn delay={0.6}>
              <div className="mt-6 text-center">
                <p className="text-rosewood font-serif text-lg italic">
                  &ldquo;Tu presencia es el mejor regalo&rdquo;
                </p>
                <p className="text-sm text-mauve mt-2">
                  Esperamos celebrar este día tan especial contigo
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
