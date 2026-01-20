"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import EnvelopeIntro from "@/components/sections/EnvelopeIntro";

// Lazy load all sections - only load after envelope opens
const Hero = dynamic(() => import("@/components/sections/Hero"), { ssr: false });
const Welcome = dynamic(() => import("@/components/sections/Welcome"), { ssr: false });
const Story = dynamic(() => import("@/components/sections/Story"), { ssr: false });
const Countdown = dynamic(() => import("@/components/sections/Countdown"), { ssr: false });
const Program = dynamic(() => import("@/components/sections/Program"), { ssr: false });
const Directions = dynamic(() => import("@/components/sections/Directions"), { ssr: false });
const Waze = dynamic(() => import("@/components/sections/Waze"), { ssr: false });
const Hospedaje = dynamic(() => import("@/components/sections/Hospedaje"), { ssr: false });
const DressCode = dynamic(() => import("@/components/sections/DressCode"), { ssr: false });
const CodeOfConduct = dynamic(() => import("@/components/sections/CodeOfConduct"), { ssr: false });
const RSVP = dynamic(() => import("@/components/sections/RSVP"), { ssr: false });
const Calendar = dynamic(() => import("@/components/sections/Calendar"), { ssr: false });
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: false });
const Footer = dynamic(() => import("@/components/sections/Footer"), { ssr: false });

export default function Home() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  const handleEnvelopeComplete = () => {
    setShowEnvelope(false);
    setContentReady(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showEnvelope && (
          <EnvelopeIntro 
            key="envelope"
            onComplete={handleEnvelopeComplete} 
          />
        )}
      </AnimatePresence>
      
      {/* Only render main content after envelope starts opening */}
      {contentReady && (
        <main id="main-content" className="min-h-screen">
          <Hero />
          <Welcome />
          <Story />
          <Countdown />
          <Program />
          <Directions />
          <Waze />
          <DressCode />
          <CodeOfConduct />
          <RSVP />
          <Calendar />
          <Hospedaje />
          <FAQ />
          <Footer />
        </main>
      )}
    </>
  );
}
