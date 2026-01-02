import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function Waze() {
  return (
    <Section id="waze" background="blush">
      <Container size="sm">
        <FadeIn>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dusty-rose/20 mb-6">
              <svg
                className="w-8 h-8 text-rosewood"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-rosewood mb-4">
              {siteConfig.content.waze.title}
            </h2>

            <p className="text-lg text-mauve mb-8 font-sans max-w-md mx-auto">
              {siteConfig.content.waze.description}
            </p>

            <a
              href={siteConfig.wedding.venue.wazeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg">
                {siteConfig.content.waze.buttonText}
              </Button>
            </a>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

