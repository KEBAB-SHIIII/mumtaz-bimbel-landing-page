import React from 'react';

export const OFFICIAL_WA_NUMBER = '6287742486612';
export const OFFICIAL_WA_DISPLAY = '+62 877-4248-6612';
export const OFFICIAL_ADDRESS =
  'Jl. H. Ikap No.1, Mentawa Baru Hilir, Kec. Mentawa Baru Ketapang, Kabupaten Kotawaringin Timur, Kalimantan Tengah 74321, Indonesia';
export const OFFICIAL_HOURS = 'Senin-Minggu, 08.00 - 21.00';
export const OFFICIAL_EMAIL = 'bimbelmumtaz01@gmail.com';
export const OFFICIAL_INSTAGRAM_HANDLE = '@bimbel_mumtaz_sampit';
export const OFFICIAL_INSTAGRAM_URL = 'https://www.instagram.com/bimbel_mumtaz_sampit';
export const OFFICIAL_TIKTOK_HANDLE = '@bimbelmumtazsampit';
export const OFFICIAL_TIKTOK_URL = 'https://www.tiktok.com/@bimbelmumtazsampit';

export default function Footer() {
  return (
    <footer className="footer-clear-border pt-12 sm:pt-14 pb-20 sm:pb-24 text-sm text-white">
      <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 items-start">
          {/* Kolom 1: Profil Brand */}
          <div>
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                <img
                  src="assets/images/logo-mumtaz.png"
                  alt="Logo Bimbel Mumtaz"
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-[17px] text-white leading-tight">
                  Bimbel Mumtaz Sampit
                </h3>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#93C5FD]">
                  Les Privat ke Rumah
                </span>
              </div>
            </div>
            <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed">
              Bimbingan belajar privat profesional dengan guru datang ke rumah di Sampit untuk jenjang TK, SD, SMP, SMA, dan mengaji Al-Qur'an.
            </p>
          </div>

          {/* Kolom 2: Alamat & Operasional */}
          <div>
            <h4 className="font-bold text-base text-white mb-4">
              Alamat &amp; Layanan
            </h4>
            <div className="space-y-3.5 text-xs sm:text-[13px] text-white/90">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 shrink-0 mt-0.5" fill="#FFFFFF" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="leading-relaxed">{OFFICIAL_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="#FFFFFF" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                <span>{OFFICIAL_HOURS}</span>
              </div>
            </div>
          </div>

          {/* Kolom 3: Kontak Kami (Sesuai Referensi Gambar) */}
          <div>
            <h4 className="font-bold text-base text-white mb-4">
              Kontak Kami
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-[13px]">
              <li>
                <a
                  href={`https://wa.me/${OFFICIAL_WA_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 shrink-0" fill="#FFFFFF" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.14l-.3-.18-3.12.82.83-3.04-.2-.32a8.196 8.196 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24zM8.83 7.36c-.18 0-.48.07-.73.34-.24.26-.93.91-.93 2.23s.96 2.58 1.09 2.76c.13.18 1.89 2.89 4.58 4.05.64.28 1.14.44 1.53.57.64.2 1.22.17 1.68.1.52-.08 1.6-.65 1.82-1.29.23-.63.23-1.17.16-1.28-.07-.11-.25-.17-.52-.31-.26-.14-1.56-.77-1.8-.86-.24-.09-.41-.13-.59.13-.17.27-.67.87-.82 1.04-.15.17-.3.2-.56.07-.26-.13-1.11-.41-2.11-1.3-.78-.7-1.31-1.56-1.46-1.82-.15-.26-.02-.4.12-.54.12-.12.26-.31.39-.47.13-.16.17-.27.26-.44.09-.18.04-.33-.02-.46-.07-.13-.59-1.43-.81-1.96-.22-.51-.43-.44-.59-.45-.15 0-.32-.01-.5-.01z" />
                  </svg>
                  <span>WhatsApp: <strong className="font-semibold text-white whitespace-nowrap">{OFFICIAL_WA_DISPLAY}</strong></span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${OFFICIAL_EMAIL}`}
                  className="inline-flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 shrink-0" fill="#FFFFFF" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                  </svg>
                  <span className="whitespace-nowrap">{OFFICIAL_EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Ikuti Kami (Sesuai Referensi Gambar) */}
          <div>
            <h4 className="font-bold text-base text-white mb-4">
              Ikuti Kami
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-[13px]">
              <li>
                <a
                  href={OFFICIAL_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                  aria-label="Instagram Bimbel Mumtaz Sampit"
                >
                  <svg className="w-5 h-5 shrink-0" fill="#FFFFFF" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram: <strong className="font-semibold text-white">{OFFICIAL_INSTAGRAM_HANDLE}</strong></span>
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                  aria-label="TikTok Bimbel Mumtaz Sampit"
                >
                  <svg className="w-5 h-5 shrink-0" fill="#FFFFFF" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.33a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 8.68 5.89 6.34 6.34 0 0 0 4-5.89V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
                  </svg>
                  <span>TikTok: <strong className="font-semibold text-white">{OFFICIAL_TIKTOK_HANDLE}</strong></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
