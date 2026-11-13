import React, { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { href: '#', label: 'Beranda', id: 'hero' },
  { href: '#tentang-kami', label: 'Tentang Kami', id: 'tentang-kami' },
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
  const [isHidden, setIsHidden] = useState(false);

  const lastScrollY = useRef(0);
  const isNavClickScrolling = useRef(false);
  const navScrollTimer = useRef(null);
  const headerRef = useRef(null);

  const lockNavbarOnNavigate = (href) => {
    isNavClickScrolling.current = true;
    setIsHidden(false);
    if (href) setActiveHref(href);
    if (navScrollTimer.current) clearTimeout(navScrollTimer.current);
    navScrollTimer.current = setTimeout(() => {
      isNavClickScrolling.current = false;
      lastScrollY.current = window.scrollY;
    }, 900);
  };

  useEffect(() => {
    const SCROLL_THRESHOLD = 6;
    lastScrollY.current = window.scrollY;
    setIsScrolled(window.scrollY > 30);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);

      if (isNavClickScrolling.current) {
        setIsHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY <= 35) {
        setIsHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollY.current;
      if (Math.abs(diff) >= SCROLL_THRESHOLD) {
        if (diff > 0) {
          setIsHidden(true);
          setMobileOpen(false);
        } else {
          setIsHidden(false);
        }
        lastScrollY.current = currentScrollY;
      }
    };

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
      className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-[1240px] ${
        isHidden ? 'navbar-hidden' : ''
      }`}
    >
      <div
        className={`bg-white/95 backdrop-blur border border-[#DBEAFE] rounded-full px-3.5 sm:px-5 py-2 flex items-center justify-between gap-2 xl:gap-3 transition-shadow duration-300 ${
          isScrolled ? 'navbar-scrolled' : ''
        }`}
      >
        <a
          className="flex items-center gap-2 shrink-0"
          href="#"
          aria-label="Bimbel Mumtaz Sampit Beranda"
          onClick={() => lockNavbarOnNavigate('#')}
        >
          <div className="w-9 h-9 rounded-full overflow-hidden border border-[#DBEAFE] shrink-0">
            <img
              src="assets/images/logo-mumtaz.png"
              alt="Logo Bimbel Mumtaz"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-base font-bold text-[#0B1F3B]">Bimbel Mumtaz</span>
            </div>
            <span className="text-[9px] font-medium uppercase tracking-wider text-[#2563EB] mt-0.5">
              Les Privat ke Rumah
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Navigasi Utama">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => lockNavbarOnNavigate(item.href)}
              className={`nav-link px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm rounded-full whitespace-nowrap ${
                activeHref === item.href ? 'active' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 xl:px-5 py-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
            href="#portal-orang-tua"
          >
            <span className="material-symbols-outlined text-[17px]">supervisor_account</span>
            <span>Portal Orang Tua</span>
          </a>
          <button
            type="button"
            aria-label="Buka Menu Navigasi"
            aria-expanded={mobileOpen}
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen((prev) => !prev);
            }}
            className="lg:hidden w-9 h-9 rounded-full bg-[#F0F7FF] hover:bg-[#DBEAFE] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`${
          mobileOpen ? '' : 'hidden'
        } lg:hidden mt-2 bg-white border border-[#DBEAFE] rounded-3xl p-5 shadow-lg`}
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
              className={
                activeHref === item.href
                  ? 'px-4 py-2.5 rounded-xl font-semibold bg-[#F0F7FF] text-[#2563EB]'
                  : 'px-4 py-2.5 rounded-xl hover:bg-[#F0F7FF]'
              }
            >
              {item.label}
            </a>
          ))}
          <a
            className="mt-2 px-4 py-2.5 rounded-xl bg-[#2563EB] text-white font-semibold flex items-center justify-center gap-2"
            href="#portal-orang-tua"
            onClick={() => setMobileOpen(false)}
          >
            <span className="material-symbols-outlined text-[18px]">supervisor_account</span>
            <span>Portal Orang Tua</span>
          </a>
        </div>
      </div>
    </header>
  );
}
