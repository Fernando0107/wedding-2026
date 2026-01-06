"use client";

import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import { Home, Bed, Coffee } from "lucide-react";

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
            <Home className="w-5 h-5 text-dusty-rose" />
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
            <div className="bg-vintage-pink rounded-2xl p-8 md:p-10 shadow-soft h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dusty-rose/20 flex items-center justify-center">
                  <Bed className="w-6 h-6 text-rosewood" />
                </div>
                <div>
                  <span className="text-sm text-old-rose font-sans uppercase tracking-wide">
                    {siteConfig.content.accommodation.rates.withoutBreakfast.title}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <div className="mb-2">
                  <p className="text-3xl md:text-4xl font-serif text-rosewood">
                    {siteConfig.content.accommodation.rates.withoutBreakfast.price}
                  </p>
                  <p className="text-xs text-mauve/70 font-sans mt-1">
                    {siteConfig.content.accommodation.rates.withoutBreakfast.taxes}
                  </p>
                </div>
                <p className="text-sm text-mauve font-sans">
                  {siteConfig.content.accommodation.rates.withoutBreakfast.description}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Tarifa con desayuno */}
          <FadeIn delay={0.5}>
            <div className="bg-blush rounded-2xl p-8 md:p-10 shadow-soft h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dusty-rose/20 flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-rosewood" />
                </div>
                <div>
                  <span className="text-sm text-old-rose font-sans uppercase tracking-wide">
                    {siteConfig.content.accommodation.rates.withBreakfast.title}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <div className="mb-2">
                  <p className="text-3xl md:text-4xl font-serif text-rosewood">
                    {siteConfig.content.accommodation.rates.withBreakfast.price}
                  </p>
                  <p className="text-xs text-mauve/70 font-sans mt-1">
                    {siteConfig.content.accommodation.rates.withBreakfast.taxes}
                  </p>
                </div>
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
