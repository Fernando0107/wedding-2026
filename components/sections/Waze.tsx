"use client";

import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { Church, Building2, Navigation } from "lucide-react";

export default function Waze() {
  return (
    <Section id="waze" background="blush">
      <Container size="md">
        <FadeIn>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dusty-rose/20 mb-6">
              <Navigation className="w-8 h-8 text-rosewood" />
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
                  <Church className="w-5 h-5 mr-2 inline" />
                  {siteConfig.content.waze.ceremonyButton}
                </Button>
              </a>
              <a
                href={siteConfig.wedding.reception.wazeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="min-w-[200px]">
                  <Building2 className="w-5 h-5 mr-2 inline" />
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
