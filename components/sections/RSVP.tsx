import Image from "next/image";
import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import RSVPForm from "@/components/forms/RSVPForm";

export default function RSVP() {
  return (
    <Section id="rsvp" background="white">
      <Container>
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-rosewood text-center mb-4">
            {siteConfig.content.rsvp.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-center text-mauve mb-3 font-sans max-w-2xl mx-auto">
            {siteConfig.content.rsvp.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-center text-old-rose text-sm mb-12 font-sans">
            {siteConfig.content.rsvp.deadline}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Formulario */}
          <FadeIn delay={0.4}>
            <div className="order-2 lg:order-1">
              <RSVPForm />
            </div>
          </FadeIn>

          {/* Imagen */}
          <FadeIn delay={0.5} direction="right">
            <div className="order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-soft-lg">
                <Image
                  src={siteConfig.photos.rsvp}
                  alt="RSVP"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

