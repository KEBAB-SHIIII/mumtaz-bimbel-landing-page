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
      <svg width="20" height="20" className="w-5 h-5 shrink-0" style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h10v2H7zm0-3h10v2H7zm0 6h7v2H7z" />
      </svg>
      <span className="hidden sm:inline">Tanya Les Privat</span>
    </a>
  );
}
