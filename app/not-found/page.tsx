"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  const searchParams = useSearchParams();
  const fam = searchParams.get("fam");

  return (
    <Section id="not-found" background="white">
      <Container>
        <div className="min-h-screen flex items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl"
          >
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-serif text-rosewood mb-4">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-serif text-rosewood mb-4">
                Invitación no encontrada
              </h2>
              {fam && (
                <p className="text-lg text-mauve font-sans mb-2">
                  No se encontró una invitación para la familia:{" "}
                  <span className="font-semibold text-rosewood">{fam}</span>
                </p>
              )}
              <p className="text-mauve font-sans">
                Por favor, verifica el enlace de invitación que recibiste.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-soft-berry hover:bg-dusty-rose text-white rounded-xl font-sans font-medium transition-all"
              >
                Volver al inicio
              </Link>
              <Link
                href="/#rsvp"
                className="px-6 py-3 bg-dusty-rose/20 hover:bg-dusty-rose/30 text-rosewood rounded-xl font-sans font-medium transition-all border-2 border-dusty-rose/50"
              >
                Ver sección RSVP
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-vintage-pink/30">
              <p className="text-sm text-mauve/70 font-sans">
                Si crees que esto es un error, por favor contacta a los novios.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
