import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

export default function Directions() {
  return (
    <Section id="directions" background="white">
      <Container size="md">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-rosewood text-center mb-8">
            {siteConfig.content.directions.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-center text-mauve mb-12 font-sans">
            {siteConfig.content.directions.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="bg-blush rounded-2xl p-8 md:p-12 shadow-soft">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif text-mulberry">
                {siteConfig.wedding.venue.name}
              </h3>
              <p className="text-lg text-rosewood font-sans">
                {siteConfig.wedding.venue.address}
              </p>
              <p className="text-lg text-old-rose font-sans">
                {siteConfig.wedding.venue.city}
              </p>
            </div>

            {/* Mapa embebido (Google Maps) */}
            {siteConfig.wedding.venue.coordinates.lat !== 0 && (
              <div className="mt-8 rounded-xl overflow-hidden shadow-soft">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${siteConfig.wedding.venue.coordinates.lng}!3d${siteConfig.wedding.venue.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s`}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del evento"
                />
              </div>
            )}

            {/* Botón de Google Maps */}
            <div className="mt-6 text-center">
              <a
                href={siteConfig.wedding.venue.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-rosewood hover:text-soft-berry transition-colors font-sans"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

