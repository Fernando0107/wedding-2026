import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

export default function CodeOfConduct() {
  return (
    <Section id="code-of-conduct" background="blush">
      <Container size="md">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dusty-rose/20 mb-6">
              <svg
                className="w-8 h-8 text-rosewood"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-rosewood mb-4">
              {siteConfig.content.codeOfConduct.title}
            </h2>

            <p className="text-xl md:text-2xl text-mulberry font-sans mb-6 leading-relaxed">
              {siteConfig.content.codeOfConduct.description}
            </p>

            <p className="text-lg text-old-rose font-sans">
              {siteConfig.content.codeOfConduct.additional}
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

