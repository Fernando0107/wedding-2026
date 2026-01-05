"use client";

import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

export default function Hospedaje() {
  return (
    <Section id="hospedaje" background="white">
      <Container size="lg">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-rosewood text-center mb-4">
            {siteConfig.content.accommodation.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-dusty-rose/40" />
            <svg className="w-5 h-5 text-dusty-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <div className="w-12 h-px bg-dusty-rose/40" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-center text-mauve mb-3 font-sans max-w-2xl mx-auto text-lg">
            {siteConfig.content.accommodation.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-center text-old-rose mb-12 font-sans text-base">
            {siteConfig.content.accommodation.hotelName}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tarifa sin desayuno */}
          <FadeIn delay={0.4}>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-soft h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dusty-rose/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-rosewood"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-old-rose font-sans uppercase tracking-wide">
                    {siteConfig.content.accommodation.rates.withoutBreakfast.title}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-3xl md:text-4xl font-serif text-rosewood mb-2">
                  {siteConfig.content.accommodation.rates.withoutBreakfast.price}
                </p>
                <p className="text-sm text-mauve font-sans">
                  {siteConfig.content.accommodation.rates.withoutBreakfast.description}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Tarifa con desayuno */}
          <FadeIn delay={0.5}>
            <div className="bg-vintage-pink rounded-2xl p-8 md:p-10 shadow-soft h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dusty-rose/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-rosewood"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-old-rose font-sans uppercase tracking-wide">
                    {siteConfig.content.accommodation.rates.withBreakfast.title}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-3xl md:text-4xl font-serif text-rosewood mb-2">
                  {siteConfig.content.accommodation.rates.withBreakfast.price}
                </p>
                <p className="text-sm text-mauve font-sans">
                  {siteConfig.content.accommodation.rates.withBreakfast.description}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-mauve font-sans text-sm md:text-base leading-relaxed">
              {siteConfig.content.accommodation.contactInfo}
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
