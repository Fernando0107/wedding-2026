"use client";

import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function Waze() {
  return (
    <Section id="waze" background="blush">
      <Container size="md">
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

            <p className="text-lg text-mauve mb-10 font-sans max-w-md mx-auto">
              {siteConfig.content.waze.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={siteConfig.wedding.ceremony.wazeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" className="min-w-[200px]">
                  <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                  </svg>
                  {siteConfig.content.waze.ceremonyButton}
                </Button>
              </a>
              <a
                href={siteConfig.wedding.reception.wazeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="min-w-[200px]">
                  <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  {siteConfig.content.waze.receptionButton}
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
