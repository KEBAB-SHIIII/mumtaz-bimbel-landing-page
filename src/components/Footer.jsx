import React from 'react';

export const OFFICIAL_WA_NUMBER = '6281234567890';
export const OFFICIAL_WA_DISPLAY = '+62 812-3456-7890';

export default function Footer() {
  return (
    <footer className="footer-clear-border pt-12 pb-8 text-sm text-white">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/80 bg-white shrink-0">
                <img
                  src="assets/images/logo-mumtaz.jpg"
                  alt="Logo Bimbel Mumtaz"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="font-bold text-lg text-white">Bimbel Mumtaz Sampit</span>
            </div>
            <p className="text-white/85 leading-relaxed">
              Bimbingan belajar privat dengan guru datang ke rumah di Sampit.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">Hubungi Kami</h4>
            <p className="text-white/85 leading-relaxed mb-2 max-w-xs">
              Jl. Ahmad Yani, Mentawa Baru Ketapang, Sampit, Kotawaringin Timur, Kalimantan Tengah
            </p>
            <p className="text-white/90">
              WhatsApp: <span>{OFFICIAL_WA_DISPLAY}</span>
            </p>
            <p className="text-white/90">Surel: salam@mumtazsampit.sch.id</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
