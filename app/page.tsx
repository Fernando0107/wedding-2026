"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EnvelopeIntro from "@/components/sections/EnvelopeIntro";
import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import Story from "@/components/sections/Story";
// import Gallery from "@/components/sections/Gallery";
import Countdown from "@/components/sections/Countdown";
import Program from "@/components/sections/Program";
import Directions from "@/components/sections/Directions";
import Waze from "@/components/sections/Waze";
import Hospedaje from "@/components/sections/Hospedaje";
import DressCode from "@/components/sections/DressCode";
import CodeOfConduct from "@/components/sections/CodeOfConduct";
import RSVP from "@/components/sections/RSVP";
import Calendar from "@/components/sections/Calendar";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [showEnvelope, setShowEnvelope] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showEnvelope && (
          <EnvelopeIntro 
            key="envelope"
            onComplete={() => setShowEnvelope(false)} 
          />
        )}
      </AnimatePresence>
      
      <main id="main-content" className="min-h-screen">
        <Hero />
        <Welcome />
        <Story />
        {/* <Gallery /> */}
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
    </>
  );
}
