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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
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

    setTimeLeft(calculateTimeLeft());

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-rosewood text-center mb-4">
            {siteConfig.content.countdown.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-px bg-dusty-rose/40" />
            <svg className="w-5 h-5 text-dusty-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="w-12 h-px bg-dusty-rose/40" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {timeUnits.map((unit, index) => (
            <FadeIn key={unit.label} delay={0.15 * index}>
              <div className="bg-gradient-to-br from-blush to-vintage-pink rounded-2xl p-6 md:p-8 lg:p-10 shadow-soft text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-serif text-rosewood mb-3 tabular-nums leading-none">
                  {mounted ? String(unit.value).padStart(2, "0") : "--"}
                </div>
                <div className="text-sm md:text-base text-mauve font-sans uppercase tracking-widest">
                  {unit.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.7}>
          <div className="text-center mt-12">
            <p className="text-xl md:text-2xl text-old-rose font-serif">
              {siteConfig.wedding.dateString}
            </p>
            <p className="text-sm text-mauve mt-2">
              {siteConfig.wedding.ceremony.name}
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
