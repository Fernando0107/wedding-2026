"use client";

import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import { Gift, Building2, Heart } from "lucide-react";

export default function Gifts() {
  const { gifts } = siteConfig.content;

  return (
    <Section id="regalos" background="pink">
      <Container size="lg">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-rosewood text-center mb-4">
            {gifts.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-dusty-rose/40" />
            <Gift className="w-5 h-5 text-dusty-rose" />
            <div className="w-12 h-px bg-dusty-rose/40" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-center text-mauve mb-12 font-sans max-w-2xl mx-auto text-lg">
            {gifts.description}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Transferencia bancaria */}
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-2xl p-8 shadow-soft h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dusty-rose/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-rosewood" />
                </div>
                <h3 className="text-xl font-serif text-rosewood">
                  {gifts.bankTransfer.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {gifts.bankTransfer.details.map((detail) => (
                  <li key={detail.label} className="flex flex-col gap-0.5">
                    <span className="text-xs text-old-rose font-sans uppercase tracking-wide">
                      {detail.label}
                    </span>
                    <span className="text-rosewood font-sans font-medium">
                      {detail.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Fondo de luna de miel */}
          <FadeIn delay={0.4}>
            <div className="bg-white rounded-2xl p-8 shadow-soft h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dusty-rose/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-rosewood" />
                </div>
                <h3 className="text-xl font-serif text-rosewood">
                  {gifts.honeymoon.title}
                </h3>
              </div>
              <p className="text-mauve font-sans text-sm mb-8 flex-1 leading-relaxed">
                {gifts.honeymoon.description}
              </p>
              <a
                href={gifts.honeymoon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-dusty-rose text-white rounded-xl font-sans font-medium hover:bg-soft-berry transition-all duration-200 shadow-soft hover:shadow-soft-lg"
              >
                {gifts.honeymoon.linkText}
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
