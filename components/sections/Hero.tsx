"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { scrollToSection } from "@/lib/utils";
import Button from "@/components/ui/Button";

// Simple fade animation without useInView overhead
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" }
  })
};

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
          className="object-cover scale-125 -translate-x-[12%] -translate-y-[2%]"
          sizes="100vw"
        />
        {/* Overlay suave */}
        <div className="absolute inset-0 bg-gradient-to-br from-blush/85 via-dusty-blush/75 to-vintage-pink/85" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
        <motion.p 
          className="text-rosewood/70 text-lg md:text-xl mb-6 font-sans tracking-widest uppercase"
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeIn}
        >
          {siteConfig.content.hero.subtitle}
        </motion.p>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-rosewood mb-8 leading-tight"
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeIn}
        >
          {siteConfig.content.hero.title}
        </motion.h1>

        <motion.div 
          className="mb-10"
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-mulberry mb-3 drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]">
            {siteConfig.couple.shortName1}
          </h2>
          <p className="text-4xl md:text-5xl font-serif text-rosewood my-2 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">&</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-mulberry mt-3 drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]">
            {siteConfig.couple.shortName2}
          </h2>
        </motion.div>

        <motion.div 
          className="flex items-center justify-center gap-4 mb-12"
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeIn}
        >
          <div className="w-16 md:w-24 h-px bg-rosewood/30" />
          <p className="text-xl md:text-2xl lg:text-3xl font-serif text-rosewood tracking-wider">
            {siteConfig.wedding.day} · {siteConfig.wedding.month} · {siteConfig.wedding.year}
          </p>
          <div className="w-16 md:w-24 h-px bg-rosewood/30" />
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial="hidden"
          animate="visible"
          custom={0.5}
          variants={fadeIn}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection("rsvp")}
            className="min-w-[220px] text-lg !bg-soft-berry hover:!bg-dusty-rose hover:!scale-105 transition-all duration-300"
          >
            Confirmar Asistencia
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("calendar")}
            className="min-w-[220px] text-lg"
          >
            Agregar al Calendario
          </Button>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial="hidden"
        animate="visible"
        custom={0.7}
        variants={fadeIn}
      >
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
      </motion.div>
    </section>
  );
}
