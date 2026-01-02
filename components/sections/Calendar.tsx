"use client";

import { siteConfig } from "@/lib/config";
import { generateICSFile, downloadICS, getGoogleCalendarUrl } from "@/lib/utils";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function Calendar() {
  const eventConfig = {
    title: `Boda de ${siteConfig.couple.shortName1} & ${siteConfig.couple.shortName2}`,
    description: `Celebra con nosotros nuestra boda. ${siteConfig.couple.name1} y ${siteConfig.couple.name2}. Ceremonia: ${siteConfig.wedding.ceremony.name}. Recepción: ${siteConfig.wedding.reception.name}`,
    location: `${siteConfig.wedding.ceremony.name}, ${siteConfig.wedding.ceremony.address}, ${siteConfig.wedding.ceremony.city}`,
    startDate: siteConfig.wedding.date,
    endDate: new Date(siteConfig.wedding.date.getTime() + 11 * 60 * 60 * 1000),
  };

  const handleGoogleCalendar = () => {
    const url = getGoogleCalendarUrl(eventConfig);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleICS = () => {
    const icsContent = generateICSFile(eventConfig);
    downloadICS(icsContent, "boda-carol-juan-fernando.ics");
  };

  const handleOutlook = () => {
    const icsContent = generateICSFile(eventConfig);
    downloadICS(icsContent, "boda-carol-juan-fernando.ics");
  };

  return (
    <Section id="calendar" background="blush">
      <Container size="md">
        <FadeIn>
          <div className="text-center">
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
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-rosewood mb-4">
              {siteConfig.content.calendar.title}
            </h2>

            <p className="text-lg text-mauve mb-12 font-sans max-w-2xl mx-auto">
              {siteConfig.content.calendar.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <FadeIn delay={0.2}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleGoogleCalendar}
                  className="min-w-[200px]"
                >
                  <svg
                    className="w-5 h-5 mr-2 inline"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm7 5H7v5h5v-5z"/>
                  </svg>
                  {siteConfig.content.calendar.buttons.google}
                </Button>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleICS}
                  className="min-w-[200px]"
                >
                  <svg
                    className="w-5 h-5 mr-2 inline"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  {siteConfig.content.calendar.buttons.ical}
                </Button>
              </FadeIn>

              <FadeIn delay={0.4}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleOutlook}
                  className="min-w-[200px]"
                >
                  <svg
                    className="w-5 h-5 mr-2 inline"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                  </svg>
                  {siteConfig.content.calendar.buttons.outlook}
                </Button>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
