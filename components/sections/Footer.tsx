import Image from "next/image";
import { siteConfig } from "@/lib/config";
import FadeIn from "@/components/animations/FadeIn";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dusty-blush py-16 md:py-20">
      {/* Imagen de fondo decorativa */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src={siteConfig.photos.footer}
          alt="Footer"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center space-y-6">
            {/* Mensaje principal */}
            <p className="text-xl md:text-2xl font-serif text-rosewood italic">
              {siteConfig.content.footer.message}
            </p>

            {/* Nombres */}
            <h3 className="text-3xl md:text-4xl font-serif text-mulberry">
              {siteConfig.content.footer.names}
            </h3>

            {/* Decoración */}
            <div className="flex items-center justify-center gap-4 py-6">
              <div className="w-16 h-px bg-dusty-rose/30" />
              <svg
                className="w-6 h-6 text-dusty-rose"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <div className="w-16 h-px bg-dusty-rose/30" />
            </div>

            {/* Fecha */}
            <p className="text-lg text-old-rose font-sans">
              {siteConfig.wedding.dateString}
            </p>

            {/* Copyright */}
            <p className="text-sm text-mauve/70 font-sans pt-8">
              © {currentYear} Carol & Juan Fernando. Todos los derechos reservados.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}

