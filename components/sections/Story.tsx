"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import ImageReveal from "@/components/animations/ImageReveal";

export default function Story() {
  return (
    <Section id="story" background="blush">
      <Container>
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-rosewood text-center mb-4">
            {siteConfig.content.story.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-px bg-dusty-rose/40" />
            <svg className="w-5 h-5 text-dusty-rose" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="w-12 h-px bg-dusty-rose/40" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Texto */}
          <FadeIn delay={0.2} direction="left">
            <div className="space-y-6 lg:pr-8">
              <p className="text-lg md:text-xl text-mauve leading-relaxed font-sans">
                {siteConfig.content.story.text}
              </p>
              <div className="pt-4">
                <p className="font-serif text-2xl text-rosewood italic">
                  &ldquo;El amor no se mira el uno al otro, sino juntos en la misma dirección.&rdquo;
                </p>
                <p className="text-sm text-old-rose mt-2">— Antoine de Saint-Exupéry</p>
              </div>
            </div>
          </FadeIn>

          {/* Grid de fotos asimétrico */}
          <div className="grid grid-cols-5 gap-4">
            {/* Foto grande - ocupa 3 columnas */}
            <ImageReveal delay={0.3} className="col-span-3 row-span-2">
              <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-soft">
                <Image
                  src={siteConfig.photos.story[0]}
                  alt="Nuestra historia - Foto principal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </ImageReveal>

            {/* Foto pequeña vertical */}
            <ImageReveal delay={0.5} className="col-span-2">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-soft">
                <Image
                  src={siteConfig.photos.story[1]}
                  alt="Nuestra historia - Foto 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
              </div>
            </ImageReveal>

            {/* Bloque decorativo con texto */}
            <div className="col-span-2 flex items-center justify-center bg-gradient-to-br from-blush to-vintage-pink rounded-2xl p-6 shadow-soft">
              <FadeIn delay={0.7}>
                <div className="text-center">
                  <p className="text-5xl md:text-6xl font-serif text-dusty-rose mb-2">
                    &
                  </p>
                  <p className="text-xs text-rosewood/70 font-sans uppercase tracking-widest">
                    {siteConfig.wedding.day}
                  </p>
                  <p className="text-sm text-rosewood font-serif">
                    {siteConfig.wedding.month}
                  </p>
                  <p className="text-xs text-rosewood/70 font-sans">
                    {siteConfig.wedding.year}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
