"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import ImageReveal from "@/components/animations/ImageReveal";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = useCallback(() => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  }, [selectedImage]);

  const handleNext = useCallback(() => {
    if (selectedImage !== null && selectedImage < siteConfig.photos.gallery.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  }, [selectedImage]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedImage === null) return;
    
    if (e.key === "Escape") {
      setSelectedImage(null);
    } else if (e.key === "ArrowLeft") {
      handlePrevious();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  }, [selectedImage, handlePrevious, handleNext]);

  useEffect(() => {
    if (selectedImage !== null) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, handleKeyDown]);

  return (
    <>
      <Section id="gallery" background="blush">
        <Container>
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-rosewood text-center mb-4">
              {siteConfig.content.gallery.title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="w-12 h-px bg-dusty-rose/40" />
              <svg className="w-5 h-5 text-dusty-rose" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
              <div className="w-12 h-px bg-dusty-rose/40" />
            </div>
          </FadeIn>

          {/* Grid de galería */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {siteConfig.photos.gallery.map((photo, index) => (
              <ImageReveal key={index} delay={0.1 * (index % 3)}>
                <button
                  onClick={() => setSelectedImage(index)}
                  className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-dusty-rose focus:ring-offset-2"
                  aria-label={`Ver imagen ${index + 1} en tamaño completo`}
                >
                  <Image
                    src={photo}
                    alt={`Galería foto ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay sutil en hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rosewood/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </ImageReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-mulberry/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Visor de imagen en pantalla completa"
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              aria-label="Cerrar visor"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Botón anterior */}
            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-2 md:left-6 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Imagen anterior"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Imagen */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[80vh] md:w-[85vw] md:h-[85vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={siteConfig.photos.gallery[selectedImage]}
                alt={`Galería foto ${selectedImage + 1}`}
                fill
                className="object-contain rounded-lg"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Botón siguiente */}
            {selectedImage < siteConfig.photos.gallery.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 md:right-6 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Imagen siguiente"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Contador */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-sans bg-black/20 px-4 py-2 rounded-full">
              {selectedImage + 1} / {siteConfig.photos.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
