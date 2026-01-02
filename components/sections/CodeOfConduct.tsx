"use client";

import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

export default function CodeOfConduct() {
  return (
    <Section id="code-of-conduct" background="blush">
      <Container size="md">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            {/* Icono de no fumar */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/80 mb-8 shadow-soft">
              <svg
                className="w-10 h-10 text-dusty-rose"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-rosewood mb-6">
              {siteConfig.content.codeOfConduct.title}
            </h2>

            <p className="text-xl md:text-2xl text-mulberry font-sans mb-8 leading-relaxed">
              {siteConfig.content.codeOfConduct.description}
            </p>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-soft">
              <p className="text-lg text-old-rose font-sans">
                {siteConfig.content.codeOfConduct.additional}
              </p>
            </div>

            {/* Decorative element */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="w-12 h-px bg-dusty-rose/30" />
              <svg className="w-4 h-4 text-dusty-rose/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <div className="w-12 h-px bg-dusty-rose/30" />
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
