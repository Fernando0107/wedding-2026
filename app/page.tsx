import EnvelopeIntro from "@/components/EnvelopeIntro";
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
import Gifts from "@/components/sections/Gifts";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Intro con sobre animado - se muestra SIEMPRE al cargar */}
      <EnvelopeIntro />
      
      {/* Contenido principal - renderizado detrás del overlay */}
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
        <Gifts />
        <Hospedaje />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
