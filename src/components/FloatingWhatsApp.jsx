import React from 'react';
import { OFFICIAL_WA_NUMBER } from './Footer';

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-quick-action animate-pulse-glow"
      href={`https://wa.me/${OFFICIAL_WA_NUMBER}?text=Halo%20Bimbel%20Mumtaz%20Sampit,%20saya%20ingin%20konsultasi%20les%20privat%20ke%20rumah.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi WhatsApp Mumtaz Sampit"
    >
      <span className="material-symbols-outlined text-[20px]">chat</span>
      <span className="hidden sm:inline">Tanya Les Privat</span>
    </a>
  );
}
