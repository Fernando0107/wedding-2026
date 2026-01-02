import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

export default function DressCode() {
  return (
    <Section id="dress-code" background="white">
      <Container size="md">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-vintage-pink mb-6">
              <svg
                className="w-8 h-8 text-rosewood"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-rosewood mb-4">
              {siteConfig.content.dressCode.title}
            </h2>

            <p className="text-2xl md:text-3xl font-serif text-mulberry mb-6">
              {siteConfig.content.dressCode.description}
            </p>

            <p className="text-lg text-mauve font-sans leading-relaxed">
              {siteConfig.content.dressCode.details}
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

