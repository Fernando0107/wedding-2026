import Image from "next/image";
import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import ImageReveal from "@/components/animations/ImageReveal";

export default function Story() {
  return (
    <Section id="story" background="white">
      <Container>
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-rosewood text-center mb-12">
            {siteConfig.content.story.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <FadeIn delay={0.2} direction="left">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-mauve leading-relaxed font-sans">
                {siteConfig.content.story.text}
              </p>
            </div>
          </FadeIn>

          {/* Grid de fotos asimétrico */}
          <div className="grid grid-cols-2 gap-4">
            {/* Foto grande - ocupa 2 filas */}
            <ImageReveal delay={0.3} className="col-span-2">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-soft">
                <Image
                  src={siteConfig.photos.story[0]}
                  alt="Nuestra historia - Foto 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ImageReveal>

            {/* Foto pequeña */}
            <ImageReveal delay={0.5} className="col-span-1">
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-soft">
                <Image
                  src={siteConfig.photos.story[1]}
                  alt="Nuestra historia - Foto 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </ImageReveal>

            {/* Bloque decorativo con texto */}
            <div className="col-span-1 flex items-center justify-center bg-blush rounded-xl p-6">
              <FadeIn delay={0.7}>
                <div className="text-center">
                  <p className="text-6xl md:text-7xl font-serif text-dusty-rose mb-2">
                    &
                  </p>
                  <p className="text-sm text-rosewood/70 font-sans">
                    {siteConfig.wedding.dateString}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

