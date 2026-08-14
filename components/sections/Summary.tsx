"use client";

import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import { Church, PartyPopper } from "lucide-react";

function SummaryItem({
  icon: Icon,
  label,
  name,
  time,
}: {
  icon: typeof Church;
  label: string;
  name: string;
  time: string;
}) {
  return (
    <div className="flex-1 flex items-center gap-3 p-5">
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-dusty-rose/10 flex items-center justify-center">
        <Icon className="w-4 h-4 text-rosewood" />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] text-old-rose font-sans uppercase tracking-widest mb-0.5">
          {label} · {time} hrs
        </p>
        <p className="text-sm md:text-base font-serif text-mulberry leading-snug">
          {name}
        </p>
      </div>
    </div>
  );
}

export default function Summary() {
  return (
    <Section id="summary" background="pink" className="py-10 md:py-14 lg:py-16">
      <Container size="sm">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-heading text-rosewood text-center mb-3">
            {siteConfig.content.summary.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center px-5 py-1.5 rounded-full bg-dusty-rose/10 border border-dusty-rose/25 text-sm md:text-base font-serif text-mulberry tracking-wide">
              {siteConfig.wedding.dateString}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-white rounded-2xl shadow-soft flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-dusty-rose/15">
            <SummaryItem
              icon={Church}
              label={siteConfig.content.summary.ceremony.label}
              name={siteConfig.wedding.ceremony.name}
              time={siteConfig.wedding.ceremony.time}
            />
            <SummaryItem
              icon={PartyPopper}
              label={siteConfig.content.summary.reception.label}
              name={siteConfig.wedding.reception.name}
              time={siteConfig.wedding.reception.time}
            />
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
