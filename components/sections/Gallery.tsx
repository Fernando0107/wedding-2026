"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import ImageReveal from "@/components/animations/ImageReveal";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < siteConfig.photos.gallery.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedImage(null);
    } else if (e.key === "ArrowLeft") {
      handlePrevious();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  return (
    <>
      <Section id="gallery" background="blush">
        <Container>
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif text-rosewood text-center mb-16">
              {siteConfig.content.gallery.title}
            </h2>
          </FadeIn>

          {/* Grid de galería */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.photos.gallery.map((photo, index) => (
              <ImageReveal key={index} delay={0.1 * index}>
                <button
                  onClick={() => setSelectedImage(index)}
                  className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow duration-300 cursor-pointer group"
                  aria-label={`Ver imagen ${index + 1} en tamaño completo`}
                >
                  <Image
                    src={photo}
                    alt={`Galería foto ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay en hover */}
                  <div className="absolute inset-0 bg-rosewood/0 group-hover:bg-rosewood/10 transition-colors duration-300" />
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
            className="fixed inset-0 z-50 bg-mulberry/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label="Visor de imagen en pantalla completa"
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-dusty-rose transition-colors p-2"
              aria-label="Cerrar"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Botón anterior */}
            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 text-white hover:text-dusty-rose transition-colors p-2"
                aria-label="Imagen anterior"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
            )}

            {/* Imagen */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={siteConfig.photos.gallery[selectedImage]}
                alt={`Galería foto ${selectedImage + 1}`}
                fill
                className="object-contain rounded-lg"
                sizes="90vw"
              />
            </motion.div>

            {/* Botón siguiente */}
            {selectedImage < siteConfig.photos.gallery.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 text-white hover:text-dusty-rose transition-colors p-2"
                aria-label="Imagen siguiente"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            )}

            {/* Contador */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {selectedImage + 1} / {siteConfig.photos.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

