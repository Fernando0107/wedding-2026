"use client";

import dynamic from "next/dynamic";
import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import { Church, PartyPopper, Navigation } from "lucide-react";

const MapEmbed = dynamic(() => import("@/components/ui/MapEmbed"), {
  ssr: false,
  loading: () => <div className="h-32 rounded-xl bg-vintage-pink/40" />,
});

function SummaryItem({
  icon: Icon,
  label,
  name,
  time,
  address,
  city,
  coordinates,
  wazeLink,
  wazeLabel,
}: {
  icon: typeof Church;
  label: string;
  name: string;
  time: string;
  address: string;
  city: string;
  coordinates: { lat: number; lng: number };
  wazeLink: string;
  wazeLabel: string;
}) {
  return (
    <div className="flex-1 flex flex-col gap-4 p-5">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-dusty-rose/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-rosewood" />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] text-old-rose font-sans uppercase tracking-widest mb-0.5">
            {label} · {time} hrs
          </p>
          <p className="text-sm md:text-base font-serif text-mulberry leading-snug min-h-10 md:min-h-11">
            {name}
          </p>
        </div>
      </div>

      <p className="text-sm text-mauve font-sans">
        {address}, {city}
      </p>

      <div className="h-32 rounded-xl overflow-hidden">
        <MapEmbed lat={coordinates.lat} lng={coordinates.lng} name={name} />
      </div>

      <a
        href={wazeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-dusty-rose text-white hover:bg-soft-berry transition-colors text-sm font-sans self-center"
      >
        <Navigation className="w-4 h-4" />
        {wazeLabel}
      </a>
    </div>
  );
}

export default function Summary() {
  return (
    <Section id="summary" background="pink" className="py-10 md:py-14 lg:py-16">
      <Container size="md">
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
          <div className="bg-white rounded-2xl shadow-soft grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-dusty-rose/15">
            <SummaryItem
              icon={Church}
              label={siteConfig.content.summary.ceremony.label}
              name={siteConfig.wedding.ceremony.name}
              time={siteConfig.wedding.ceremony.time}
              address={siteConfig.wedding.ceremony.address}
              city={siteConfig.wedding.ceremony.city}
              coordinates={siteConfig.wedding.ceremony.coordinates}
              wazeLink={siteConfig.wedding.ceremony.wazeLink}
              wazeLabel={siteConfig.content.summary.ceremony.wazeButton}
            />
            <SummaryItem
              icon={PartyPopper}
              label={siteConfig.content.summary.reception.label}
              name={siteConfig.wedding.reception.name}
              time={siteConfig.wedding.reception.time}
              address={siteConfig.wedding.reception.address}
              city={siteConfig.wedding.reception.city}
              coordinates={siteConfig.wedding.reception.coordinates}
              wazeLink={siteConfig.wedding.reception.wazeLink}
              wazeLabel={siteConfig.content.summary.reception.wazeButton}
            />
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
