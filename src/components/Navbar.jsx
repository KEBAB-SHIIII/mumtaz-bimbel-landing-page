import React, { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { href: '#', label: 'Beranda', id: 'hero' },
  { href: '#tentang-kami', label: 'Tentang Kami', id: 'tentang-kami' },
  { href: '#testimoni', label: 'Testimoni', id: 'testimoni' },
  { href: '#program', label: 'Program', id: 'program' },
  { href: '#keunggulan', label: 'Keunggulan', id: 'keunggulan' },
  { href: '#galeri', label: 'Galeri', id: 'galeri' },
  { href: '#faq', label: 'FAQ', id: 'faq' },
  { href: '#kontak', label: 'Kontak', id: 'kontak' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#');
  const [isScrolled, setIsScrolled] = useState(false);

  const isNavClickScrolling = useRef(false);
  const navScrollTimer = useRef(null);
  const headerRef = useRef(null);

  const lockNavbarOnNavigate = (href) => {
    isNavClickScrolling.current = true;
    if (href) setActiveHref(href);
    if (navScrollTimer.current) clearTimeout(navScrollTimer.current);
    navScrollTimer.current = setTimeout(() => {
      isNavClickScrolling.current = false;
    }, 900);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const sections = document.querySelectorAll('section[id]');
    if (sections.length === 0) return;

    const spyObserver = new IntersectionObserver(
      (entries) => {
        if (isNavClickScrolling.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            setActiveHref(id === 'hero' ? '#' : `#${id}`);
          }
        });
      },
      { root: null, rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    );

    sections.forEach((sec) => spyObserver.observe(sec));
    return () => spyObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleOutside = (e) => {
      if (mobileOpen && headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('click', handleOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('click', handleOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed top-3 sm:top-4 lg:top-5 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-[1340px]"
    >
      <div
        className={`bg-white rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 flex items-center justify-between gap-3 sm:gap-4 lg:gap-6 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06),0_6px_12px_-4px_rgba(0,0,0,0.03)] border-0 outline-none transition-all duration-300 ${
          isScrolled ? 'navbar-scrolled' : ''
        }`}
      >
        {/* Brand Logo & Title */}
        <a
          className="flex items-center gap-2.5 sm:gap-3 shrink-0 group"
          href="#"
          aria-label="Bimbel Mumtaz Sampit Beranda"
          onClick={() => lockNavbarOnNavigate('#')}
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
            <img
              src="assets/images/logo-mumtaz.png"
              alt="Logo Bimbel Mumtaz"
              width="48"
              height="48"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <span className="text-[13.5px] xs:text-[14.5px] sm:text-lg lg:text-[20px] xl:text-[21px] font-extrabold text-[#0B1F3B] tracking-tight leading-tight group-hover:text-[#2563EB] transition-colors whitespace-nowrap">
              Bimbel Mumtaz Sampit
            </span>
            <span className="text-[10px] sm:text-[11px] lg:text-[11.5px] font-semibold text-[#1D4ED8] tracking-wide leading-none mt-0.5 sm:mt-1 whitespace-nowrap">
              Les Privat ke Rumah
            </span>
          </div>
        </a>

        {/* Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-2.5 xl:gap-5 2xl:gap-6" aria-label="Navigasi Utama">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => lockNavbarOnNavigate(item.href)}
              className={`nav-link text-[13px] xl:text-[14.5px] whitespace-nowrap transition-colors ${
                activeHref === item.href ? 'active' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            className="nav-portal-btn"
            href="#portal-orang-tua"
          >
            <svg width="18" height="18" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
            <span>Portal<span className="nav-portal-text-extra"> Orang Tua</span></span>
            <span className="text-[15px] sm:text-[17px] font-bold ml-0.5 leading-none">&rsaquo;</span>
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? 'Tutup Menu Navigasi' : 'Buka Menu Navigasi'}
            aria-expanded={mobileOpen}
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen((prev) => !prev);
            }}
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F0F7FF] hover:bg-[#DBEAFE] active:bg-[#BFDBFE] flex items-center justify-center transition-colors cursor-pointer text-[#0B1F3B] shrink-0"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${
          mobileOpen ? 'block' : 'hidden'
        } lg:hidden mt-2 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100/80 max-h-[75vh] overflow-y-auto`}
      >
        <div className="flex flex-col gap-1 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                lockNavbarOnNavigate(item.href);
                setMobileOpen(false);
              }}
              className={`px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-colors flex items-center justify-between ${
                activeHref === item.href
                  ? 'bg-[#F0F7FF] text-[#2563EB] font-bold'
                  : 'text-[#0B1F3B] hover:bg-[#F8FAFC]'
              }`}
            >
              <span>{item.label}</span>
              <span className="text-xs text-slate-400 font-bold">&rsaquo;</span>
            </a>
          ))}
          <a
            className="mt-2 px-4 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold flex items-center justify-center gap-2 shadow-sm text-sm transition-colors"
            href="#portal-orang-tua"
            onClick={() => setMobileOpen(false)}
          >
            <svg width="19" height="19" className="w-5 h-5 shrink-0" style={{ width: '19px', height: '19px' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
            <span>Portal Orang Tua</span>
            <span className="text-base font-bold ml-0.5 leading-none">&rsaquo;</span>
          </a>
        </div>
      </div>
    </header>
  );
}
