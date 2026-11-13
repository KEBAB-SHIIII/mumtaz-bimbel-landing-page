import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TestimoniSection from './components/TestimoniSection';
import ProgramSection from './components/ProgramSection';
import KeunggulanSection from './components/KeunggulanSection';
import GaleriSection from './components/GaleriSection';
import FaqSection from './components/FaqSection';
import KontakSection from './components/KontakSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { useLandingAnimations } from './hooks/useLandingAnimations';

export default function App() {
  useLandingAnimations();

  return (
    <>
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <TestimoniSection />
        <ProgramSection />
        <KeunggulanSection />
        <GaleriSection />
        <FaqSection />
        <KontakSection />
        <div id="portal-orang-tua" className="sr-only"></div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
