"use client";

import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

export default function DressCode() {
  return (
    <Section id="dress-code" background="white">
      <Container size="md">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            {/* Icono */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-vintage-pink to-blush mb-8 shadow-soft">
              <svg
                className="w-10 h-10 text-rosewood"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-rosewood mb-6">
              {siteConfig.content.dressCode.title}
            </h2>

            {/* Badge de etiqueta */}
            <div className="inline-block mb-8">
              <span className="px-6 py-2 bg-dusty-rose/10 border border-dusty-rose/30 rounded-full text-lg md:text-xl font-serif text-mulberry">
                {siteConfig.content.dressCode.description}
              </span>
            </div>

            <p className="text-lg text-mauve font-sans leading-relaxed mb-10">
              {siteConfig.content.dressCode.details}
            </p>

            {/* Sugerencias visuales */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <FadeIn delay={0.2}>
                <div className="bg-blush rounded-xl p-6 shadow-soft">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-dusty-rose/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-rosewood" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25c0-4.3 3.7-7.75 8-7.75s8 3.45 8 7.75" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg text-rosewood mb-2">Caballeros</h3>
                  <p className="text-sm text-mauve">Traje oscuro o smoking</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-blush rounded-xl p-6 shadow-soft">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-dusty-rose/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-rosewood" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25c0-4.3 3.7-7.75 8-7.75s8 3.45 8 7.75" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg text-rosewood mb-2">Damas</h3>
                  <p className="text-sm text-mauve">Vestido largo o cocktail</p>
                </div>
              </FadeIn>
            </div>

            {/* Nota sobre el color blanco */}
            <FadeIn delay={0.4}>
              <div className="mt-8 p-4 bg-vintage-pink/50 rounded-lg border border-dusty-rose/20">
                <p className="text-sm text-rosewood/80 font-sans italic">
                  ✨ Por favor evitar el color blanco, reservado para la novia.
                </p>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
