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
    description: `Celebra con nosotros nuestra boda. ${siteConfig.couple.name1} y ${siteConfig.couple.name2}`,
    location: `${siteConfig.wedding.venue.name}, ${siteConfig.wedding.venue.address}, ${siteConfig.wedding.venue.city}`,
    startDate: siteConfig.wedding.date,
    endDate: new Date(siteConfig.wedding.date.getTime() + 6 * 60 * 60 * 1000), // +6 horas
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
    // Outlook también usa archivos ICS
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5z"/>
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
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5z"/>
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

