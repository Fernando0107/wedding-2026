"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";
import { CountdownTime } from "@/types";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +siteConfig.wedding.date - +new Date();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    };

    // Calcular inmediatamente
    setTimeLeft(calculateTimeLeft());

    // Actualizar cada segundo
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: siteConfig.content.countdown.labels.days },
    { value: timeLeft.hours, label: siteConfig.content.countdown.labels.hours },
    { value: timeLeft.minutes, label: siteConfig.content.countdown.labels.minutes },
    { value: timeLeft.seconds, label: siteConfig.content.countdown.labels.seconds },
  ];

  return (
    <Section id="countdown" background="white">
      <Container size="md">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-rosewood text-center mb-16">
            {siteConfig.content.countdown.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {timeUnits.map((unit, index) => (
            <FadeIn key={unit.label} delay={0.1 * index}>
              <div className="bg-blush rounded-2xl p-6 md:p-8 shadow-soft text-center">
                <div className="text-4xl md:text-6xl font-serif text-rosewood mb-2 tabular-nums">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base text-mauve font-sans uppercase tracking-wide">
                  {unit.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <p className="text-center text-lg md:text-xl text-old-rose font-serif mt-12">
            {siteConfig.wedding.dateString}
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}

