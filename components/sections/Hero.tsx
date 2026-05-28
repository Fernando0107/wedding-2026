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
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={siteConfig.photos.hero}
          alt="Carol y Juan Fernando"
          fill
          priority
          // puesta anillo
          className="object-cover scale-[1.15] -translate-y-[14%] md:scale-[2.2] md:-translate-y-[18%]"
          sizes="100vw"
        />
        {/* Overlay suave */}
        <div className="absolute inset-0 bg-gradient-to-br from-blush/55 via-dusty-blush/40 to-vintage-pink/55" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
        <FadeIn delay={0.2}>
          <p className="text-white/80 text-lg md:text-xl mb-6 font-sans tracking-widest uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
            {siteConfig.content.hero.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-8 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
            {siteConfig.content.hero.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mb-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-mulberry mb-2" style={{ fontFamily: "var(--font-safira), cursive" }}>
              {siteConfig.couple.shortName1}
            </h2>
            <p className="text-5xl md:text-6xl text-rosewood my-1" style={{ fontFamily: "var(--font-safira), cursive" }}>&</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-mulberry mt-2" style={{ fontFamily: "var(--font-safira), cursive" }}>
              {siteConfig.couple.shortName2}
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex items-center justify-center mb-12">
            <p className="text-lg md:text-xl lg:text-2xl font-serif text-white/90 tracking-[0.2em] uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
              {siteConfig.wedding.day} · {siteConfig.wedding.month} · {siteConfig.wedding.year}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("rsvp")}
              className="min-w-[220px] text-lg !bg-rosewood hover:!bg-mulberry hover:!scale-105 transition-all duration-300"
            >
              Confirmar Asistencia
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("calendar")}
              className="min-w-[220px] text-lg !text-white !border-white/60 hover:!bg-white/10"
            >
              Agregar al Calendario
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Indicador de scroll */}
      <FadeIn delay={1.5}>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <button
            onClick={() => scrollToSection("story")}
            className="flex flex-col items-center gap-2 text-rosewood/60 hover:text-rosewood transition-colors cursor-pointer"
            aria-label="Desplazarse hacia abajo"
          >
            <span className="text-sm font-sans tracking-wide">Desliza</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
      </FadeIn>
    </section>
  );
}
