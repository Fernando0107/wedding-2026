"use client";

import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

export default function Welcome() {
  return (
    <Section id="welcome" background="white">
      <Container size="md">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl font-serif text-rosewood leading-relaxed italic">
              {siteConfig.content.welcome.message}
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
