import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

export default function Program() {
  return (
    <Section id="program" background="blush">
      <Container size="md">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-rosewood text-center mb-16">
            {siteConfig.content.program.title}
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {siteConfig.content.program.events.map((event, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div className="flex gap-6 md:gap-8 items-start">
                {/* Hora */}
                <div className="flex-shrink-0 w-20 md:w-24">
                  <div className="text-2xl md:text-3xl font-serif text-rosewood">
                    {event.time}
                  </div>
                </div>

                {/* Línea vertical */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-dusty-rose" />
                  {index < siteConfig.content.program.events.length - 1 && (
                    <div className="w-0.5 h-full bg-dusty-rose/30 mt-2" />
                  )}
                </div>

                {/* Contenido */}
                <div className="flex-grow pb-8">
                  <h3 className="text-xl md:text-2xl font-serif text-mulberry mb-2">
                    {event.title}
                  </h3>
                  <p className="text-mauve font-sans">{event.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}

