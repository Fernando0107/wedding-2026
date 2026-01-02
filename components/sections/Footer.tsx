"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/config";
import FadeIn from "@/components/animations/FadeIn";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-dusty-blush to-vintage-pink py-20 md:py-24 overflow-hidden">
      {/* Imagen de fondo decorativa */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src={siteConfig.photos.footer}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      {/* Patrón decorativo */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(212, 165, 165, 0.3) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(200, 135, 135, 0.2) 0%, transparent 50%)`
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center space-y-8">
            {/* Decoración superior */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-rosewood/20" />
              <svg className="w-6 h-6 text-dusty-rose" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <div className="w-16 h-px bg-rosewood/20" />
            </div>

            {/* Mensaje principal */}
            <p className="text-xl md:text-2xl font-serif text-rosewood italic">
              {siteConfig.content.footer.message}
            </p>

            {/* Nombres */}
            <h3 className="text-4xl md:text-5xl font-serif text-mulberry">
              {siteConfig.content.footer.names}
            </h3>

            {/* Fecha */}
            <p className="text-lg md:text-xl text-old-rose font-serif">
              {siteConfig.wedding.dateString}
            </p>

            {/* Decoración inferior */}
            <div className="flex items-center justify-center gap-3 pt-6">
              <div className="w-8 h-px bg-dusty-rose/30" />
              <div className="w-2 h-2 rounded-full bg-dusty-rose/40" />
              <div className="w-8 h-px bg-dusty-rose/30" />
            </div>

            {/* Copyright */}
            <p className="text-sm text-mauve/70 font-sans pt-8">
              © {currentYear} {siteConfig.couple.shortName1} & {siteConfig.couple.shortName2}. 
              <span className="block md:inline md:ml-1">Hecho con amor.</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
