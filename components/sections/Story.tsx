"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ImageReveal from "@/components/animations/ImageReveal";

function Polaroid({
  src,
  size,
  tilt,
  offset,
  delay,
}: {
  src: string;
  size: string;
  tilt: string;
  offset: string;
  delay: number;
}) {
  return (
    <div className={`${tilt} ${offset} hover:rotate-0 transition-transform duration-500 ease-out`}>
      <ImageReveal delay={delay} className={size}>
        <div className="bg-white p-3 pb-7 rounded-sm shadow-soft-lg">
          <div className="relative w-full aspect-[4/5] overflow-hidden">
            <Image
              src={src}
              alt="Un momento nuestro"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 45vw, 20vw"
            />
          </div>
        </div>
      </ImageReveal>
    </div>
  );
}

export default function Story() {
  const [photo1, photo2, photo3, photo4, photo5] = siteConfig.photos.story;

  return (
    <Section id="story" background="blush">
      <Container size="lg">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-10 md:gap-x-6">
          <Polaroid src={photo1} size="w-40 sm:w-48 md:w-56" tilt="-rotate-6" offset="md:translate-y-4" delay={0} />
          <Polaroid src={photo2} size="w-36 sm:w-44 md:w-48" tilt="rotate-3" offset="md:-translate-y-6" delay={0.1} />

          <div className="rotate-0 md:-translate-y-2">
            <ImageReveal delay={0.5} className="w-24 md:w-28">
              <div className="aspect-square rounded-full bg-gradient-to-br from-blush to-vintage-pink border-2 border-gold/40 shadow-soft-lg flex items-center justify-center">
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                  <Image
                    src="/logo/icon-512.png"
                    alt="Logo Carol & Juan Fernando"
                    fill
                    className="object-contain rounded-full"
                    sizes="80px"
                  />
                </div>
              </div>
            </ImageReveal>
          </div>

          <Polaroid src={photo3} size="w-44 sm:w-52 md:w-60" tilt="-rotate-2" offset="md:translate-y-8" delay={0.2} />
          <Polaroid src={photo4} size="w-36 sm:w-44 md:w-48" tilt="rotate-6" offset="md:-translate-y-2" delay={0.3} />
          <Polaroid src={photo5} size="w-40 sm:w-48 md:w-52" tilt="-rotate-4" offset="md:translate-y-2" delay={0.4} />
        </div>
      </Container>
    </Section>
  );
}
