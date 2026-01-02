"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { scrollToSection } from "@/lib/utils";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteConfig.photos.hero}
          alt="Hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay suave */}
        <div className="absolute inset-0 bg-gradient-to-br from-blush/80 via-dusty-blush/70 to-vintage-pink/80" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <FadeIn delay={0.2}>
          <p className="text-rosewood/70 text-lg md:text-xl mb-4 font-serif italic">
            {siteConfig.content.hero.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-rosewood mb-6 leading-tight">
            {siteConfig.content.hero.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-mulberry mb-4">
              {siteConfig.couple.name1}
            </h2>
            <p className="text-2xl md:text-4xl font-serif text-old-rose">&</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-mulberry mt-4">
              {siteConfig.couple.name2}
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.8}>
          <p className="text-xl md:text-3xl font-serif text-rosewood mb-12">
            {siteConfig.wedding.day} · {siteConfig.wedding.month} · {siteConfig.wedding.year}
          </p>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("rsvp")}
              className="min-w-[200px]"
            >
              Confirmar Asistencia
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("calendar")}
              className="min-w-[200px]"
            >
              Agregar al Calendario
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Indicador de scroll */}
      <FadeIn delay={1.5}>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-rosewood/60 text-sm font-sans">Desliza</span>
            <svg
              className="w-6 h-6 text-rosewood/60"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

