"use client";

import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import { Church, Building2, MapPin, Navigation } from "lucide-react";

export default function Directions() {
  return (
    <Section id="directions" background="white">
      <Container size="lg">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-rosewood text-center mb-8">
            {siteConfig.content.directions.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-center text-mauve mb-12 font-sans max-w-2xl mx-auto">
            {siteConfig.content.directions.description}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ceremonia */}
          <FadeIn delay={0.3}>
            <div className="bg-vintage-pink rounded-2xl p-8 md:p-10 shadow-soft h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dusty-rose/20 flex items-center justify-center">
                  <Church className="w-6 h-6 text-rosewood" />
                </div>
                <div>
                  <span className="text-sm text-old-rose font-sans uppercase tracking-wide">
                    {siteConfig.content.directions.ceremony.title}
                  </span>
                  <p className="text-sm text-mauve">{siteConfig.wedding.ceremony.time} hrs</p>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-serif text-mulberry mb-3">
                {siteConfig.wedding.ceremony.name}
              </h3>
              <p className="text-rosewood font-sans mb-2">
                {siteConfig.wedding.ceremony.address}
              </p>
              <p className="text-old-rose font-sans mb-6">
                {siteConfig.wedding.ceremony.city}
              </p>

              <p className="text-sm text-mauve mb-6">
                {siteConfig.content.directions.ceremony.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.wedding.ceremony.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dusty-rose/10 text-rosewood hover:bg-dusty-rose/20 transition-colors text-sm font-sans"
                >
                  <MapPin className="w-4 h-4" />
                  Google Maps
                </a>
                <a
                  href={siteConfig.wedding.ceremony.wazeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dusty-rose/10 text-rosewood hover:bg-dusty-rose/20 transition-colors text-sm font-sans"
                >
                  <Navigation className="w-4 h-4" />
                  Waze
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Recepción */}
          <FadeIn delay={0.4}>
            <div className="bg-blush rounded-2xl p-8 md:p-10 shadow-soft h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dusty-rose/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-rosewood" />
                </div>
                <div>
                  <span className="text-sm text-old-rose font-sans uppercase tracking-wide">
                    {siteConfig.content.directions.reception.title}
                  </span>
                  <p className="text-sm text-mauve">{siteConfig.wedding.reception.time} hrs</p>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-serif text-mulberry mb-3">
                {siteConfig.wedding.reception.name}
              </h3>
              <p className="text-rosewood font-sans mb-2">
                {siteConfig.wedding.reception.address}
              </p>
              <p className="text-old-rose font-sans mb-6">
                {siteConfig.wedding.reception.city}
              </p>

              <p className="text-sm text-mauve mb-6">
                {siteConfig.content.directions.reception.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.wedding.reception.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dusty-rose/10 text-rosewood hover:bg-dusty-rose/20 transition-colors text-sm font-sans"
                >
                  <MapPin className="w-4 h-4" />
                  Google Maps
                </a>
                <a
                  href={siteConfig.wedding.reception.wazeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dusty-rose/10 text-rosewood hover:bg-dusty-rose/20 transition-colors text-sm font-sans"
                >
                  <Navigation className="w-4 h-4" />
                  Waze
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
