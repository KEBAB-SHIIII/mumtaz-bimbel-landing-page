import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero-section-gradient pt-32 sm:pt-36 pb-20 sm:pb-28 overflow-hidden" id="hero">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 xl:col-span-7">
            <h1 className="hero-item text-[34px] sm:text-5xl lg:text-[52px] font-extrabold text-[#0B1F3B] tracking-tight leading-[1.15]">
              <span className="hero-title-part part-1 hero-gradient-text">Bimbel Mumtaz</span>{' '}
              <span className="hero-title-part part-2 relative inline-block hero-gradient-text">
                Sampit
                <svg
                  className="hero-underline-svg"
                  viewBox="0 0 180 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 9C52 3 128 3 176 8"
                    stroke="#60A5FA"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span className="hero-title-part part-3">Privat Berkualitas, Dekat &amp; Terpercaya!</span>
            </h1>

            <p className="hero-item delay-150 text-[#475569] text-base sm:text-lg mt-6 max-w-2xl leading-relaxed">
              Layanan bimbingan belajar privat dan online terpercaya di Sampit. Dengan sistem guru datang langsung ke rumah <span className="whitespace-nowrap">(1-on-1)</span>, kami mendampingi siswa dari TK sampai SMA secara personal, ramah, dan terarah, mencakup peningkatan prestasi akademik hingga mengaji dengan metode yang menyenangkan.
            </p>

            <div className="hero-item delay-250 flex flex-wrap items-center gap-4 mt-9">
              <a className="btn-sky" href="#kontak">
                Daftar Sekarang
              </a>
              <a className="btn-outline-modern" href="#program">
                Lihat Program
              </a>
            </div>
          </div>

          <div className="hero-item delay-200 lg:col-span-5 xl:col-span-5 w-full max-w-[460px] mx-auto lg:mx-0 lg:ml-auto">
            <div className="hero-visual-stage">
              <svg
                viewBox="0 0 440 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Logo Bimbel Mumtaz Sampit"
              >
                <defs>
                  <linearGradient id="heroSky" x1="220" y1="10" x2="220" y2="390" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E5F0FF" />
                    <stop offset="0.55" stopColor="#CFE4FF" />
                    <stop offset="1" stopColor="#B8D5FF" />
                  </linearGradient>
                  <linearGradient id="heroSphere" x1="90" y1="50" x2="360" y2="340" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#DBEAFE" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="heroPodiumTop" x1="80" y1="280" x2="360" y2="335" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF" />
                    <stop offset="1" stopColor="#DCEBFF" />
                  </linearGradient>
                  <linearGradient id="heroPodiumSide" x1="80" y1="305" x2="360" y2="355" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#93C5FD" />
                    <stop offset="1" stopColor="#3B82F6" />
                  </linearGradient>
                  <linearGradient id="heroLogoRing" x1="110" y1="68" x2="330" y2="288" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF" />
                    <stop offset="1" stopColor="#DBEAFE" />
                  </linearGradient>
                  <clipPath id="heroLogoClip">
                    <circle cx="220" cy="178" r="97" />
                  </clipPath>
                </defs>

                <rect x="16" y="16" width="408" height="368" rx="44" fill="url(#heroSky)" />
                <circle cx="220" cy="182" r="136" fill="url(#heroSphere)" />
                <circle cx="96" cy="110" r="42" fill="#FFFFFF" opacity="0.55" />
                <circle cx="356" cy="120" r="34" fill="#EFF6FF" opacity="0.7" />

                <path d="M84 295C62 276 50 250 54 228C74 236 86 262 84 295Z" fill="#60A5FA" opacity="0.65" />
                <path d="M68 310C46 298 34 280 38 264C56 268 68 286 68 310Z" fill="#93C5FD" opacity="0.8" />
                <path d="M358 292C380 272 392 246 388 224C368 232 356 258 358 292Z" fill="#3B82F6" opacity="0.55" />
                <path d="M372 308C394 296 404 278 400 262C382 266 372 284 372 308Z" fill="#60A5FA" opacity="0.75" />

                <ellipse cx="220" cy="340" rx="154" ry="28" fill="#60A5FA" opacity="0.35" />
                <path
                  d="M76 304C76 322 140 336 220 336C300 336 364 322 364 304V322C364 340 300 354 220 354C140 354 76 340 76 322V304Z"
                  fill="url(#heroPodiumSide)"
                />
                <ellipse cx="220" cy="304" rx="144" ry="30" fill="url(#heroPodiumTop)" />
                <ellipse cx="220" cy="302" rx="118" ry="21" fill="#EBF3FF" />
                <ellipse cx="220" cy="301" rx="84" ry="14" fill="#93C5FD" opacity="0.45" />

                <g className="hero-logo-centerpiece">
                  <circle cx="220" cy="182" r="112" fill="#60A5FA" opacity="0.18" />
                  <circle cx="220" cy="178" r="108" fill="url(#heroLogoRing)" stroke="#FFFFFF" strokeWidth="4" />
                  <circle cx="220" cy="178" r="101" fill="#FFFFFF" />
                  <image
                    href="assets/images/logo-mumtaz.jpg"
                    x="110"
                    y="68"
                    width="220"
                    height="220"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#heroLogoClip)"
                  />
                  <circle cx="220" cy="178" r="102" stroke="#DCEBFF" strokeWidth="2.5" />
                </g>

                <path
                  d="M332 68L337 79L349 81L340 89L342 101L332 95L322 101L324 89L315 81L327 79L332 68Z"
                  fill="#FBBF24"
                />
                <path
                  d="M364 116L367.5 123.5L376 125L369.8 130.8L371.2 139L364 135L356.8 139L358.2 130.8L352 125L360.5 123.5L364 116Z"
                  fill="#38BDF8"
                />
                <path
                  d="M90 156L92.5 161.5L98.5 162.5L94 166.8L95 172.8L90 170L85 172.8L86 166.8L81.5 162.5L87.5 161.5L90 156Z"
                  fill="#60A5FA"
                />
                <path d="M362 56L370 42" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
                <path d="M374 66L388 58" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
