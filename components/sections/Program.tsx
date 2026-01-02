"use client";

import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

export default function Program() {
  return (
    <Section id="program" background="blush">
      <Container size="md">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-rosewood text-center mb-4">
            {siteConfig.content.program.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-px bg-dusty-rose/40" />
            <svg className="w-5 h-5 text-dusty-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <div className="w-12 h-px bg-dusty-rose/40" />
          </div>
        </FadeIn>

        <div className="relative">
          {/* Línea vertical de timeline */}
          <div className="absolute left-[39px] md:left-[47px] top-0 bottom-0 w-px bg-gradient-to-b from-dusty-rose/50 via-dusty-rose/30 to-dusty-rose/10" />

          <div className="space-y-8">
            {siteConfig.content.program.events.map((event, index) => (
              <FadeIn key={index} delay={0.15 * index}>
                <div className="flex gap-6 md:gap-8 items-start relative">
                  {/* Hora */}
                  <div className="flex-shrink-0 w-16 md:w-20 text-right">
                    <span className="text-xl md:text-2xl font-serif text-rosewood">
                      {event.time}
                    </span>
                  </div>

                  {/* Punto del timeline */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-4 h-4 rounded-full bg-dusty-rose ring-4 ring-blush" />
                  </div>

                  {/* Contenido */}
                  <div className="flex-grow bg-white rounded-xl p-5 md:p-6 shadow-soft -mt-1">
                    <h3 className="text-lg md:text-xl font-serif text-mulberry mb-2">
                      {event.title}
                    </h3>
                    <p className="text-mauve font-sans text-sm md:text-base leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
