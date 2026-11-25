import React from 'react';

export default function ProgramSection() {
  const BASE = import.meta.env.BASE_URL;

  return (
    <section className="section-blue-program py-20 sm:py-28 overflow-hidden w-full max-w-full" id="program">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="reveal-element max-w-2xl mb-12">
          <h2 className="section-heading-h2">
            Les Privat ke Rumah <span className="text-[#2563EB] whitespace-nowrap">(1 Guru 1 Murid)</span>
          </h2>
          <p className="section-subtitle-p mt-3.5">
            Layanan eksklusif untuk tingkat PAUD, TK, SD, SMP, hingga SMA dengan guru datang langsung ke rumah siswa.
          </p>
        </div>

        <div className="program-top-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {/* Card 1: Privat TK */}
          <div className="reveal-left delay-75 md-col-span-2 lg:col-span-2">
            <article className="program-card">
              <svg className="program-card-bg-decor" viewBox="0 0 360 165" fill="none" aria-hidden="true">
                {/* Soft right blob */}
                <path d="M225 0H360V165H195C180 120 205 55 225 0Z" fill="#DCEBFF" opacity="0.7" />
                <circle cx="315" cy="95" r="70" fill="#CFE4FF" opacity="0.55" />
                {/* Floating dice/cube */}
                <g transform="translate(188, 114) rotate(-14)" opacity="0.55">
                  <rect x="0" y="0" width="24" height="24" rx="5" fill="#93C5FD" stroke="#60A5FA" strokeWidth="1.5" />
                  <circle cx="7" cy="7" r="2" fill="#FFFFFF" />
                  <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
                  <circle cx="17" cy="17" r="2" fill="#FFFFFF" />
                </g>
                {/* Stars & sparkles */}
                <path d="M168 22L170.5 27L176 27.8L172 31.6L173 37L168 34.4L163 37L164 31.6L160 27.8L165.5 27L168 22Z" fill="#93C5FD" opacity="0.85" />
                <path d="M214 40L222 46M210 52L220 55" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="145" cy="54" r="2.5" fill="#93C5FD" opacity="0.7" />
              </svg>
              <div className="program-card-body">
                <span className="program-pill">USIA DINI</span>
                <h3 className="program-title">Privat PAUD &amp; TK</h3>
              </div>
              <div className="program-illust program-illust-tk" aria-hidden="true">
                <img
                  src={`${BASE}assets/images/icon-tk.png`}
                  alt=""
                  width="196"
                  height="220"
                  decoding="async"
                  loading="lazy"
                  className="program-char-img"
                />
              </div>
            </article>
          </div>

          {/* Card 2: Privat SD */}
          <div className="reveal-element delay-150 md-col-span-2 lg:col-span-2">
            <article className="program-card">
              <svg className="program-card-bg-decor" viewBox="0 0 360 165" fill="none" aria-hidden="true">
                <path d="M225 0H360V165H195C180 120 205 55 225 0Z" fill="#DCEBFF" opacity="0.7" />
                <circle cx="315" cy="95" r="70" fill="#CFE4FF" opacity="0.55" />
                {/* 123 Numbers */}
                <text x="160" y="36" fill="#93C5FD" opacity="0.75" fontFamily="Manrope, Inter, sans-serif" fontWeight="800" fontSize="22" transform="rotate(-10 160 36)">123</text>
                {/* Pencil outline */}
                <g transform="translate(158, 102) rotate(32)" opacity="0.65">
                  <rect x="0" y="0" width="9" height="32" rx="2" fill="#BFDBFE" stroke="#60A5FA" strokeWidth="1.4" />
                  <path d="M0 32L4.5 41L9 32H0Z" fill="#93C5FD" stroke="#60A5FA" strokeWidth="1.4" />
                  <line x1="0" y1="7" x2="9" y2="7" stroke="#60A5FA" strokeWidth="1.4" />
                </g>
                <path d="M204 114L206 118L210 118.6L207 121.5L207.8 125.5L204 123.5L200.2 125.5L201 121.5L198 118.6L202 118L204 114Z" fill="#93C5FD" opacity="0.85" />
                <circle cx="218" cy="36" r="2.5" fill="#FBBF24" opacity="0.8" />
              </svg>
              <div className="program-card-body">
                <span className="program-pill">KELAS 1 SAMPAI 6</span>
                <h3 className="program-title">Privat SD</h3>
              </div>
              <div className="program-illust program-illust-char" aria-hidden="true">
                <img
                  src={`${BASE}assets/images/icon-sd.png`}
                  alt=""
                  width="217"
                  height="220"
                  decoding="async"
                  loading="lazy"
                  className="program-char-img"
                />
              </div>
            </article>
          </div>

          {/* Card 3: Privat SMP */}
          <div className="reveal-right delay-200 md-col-span-2 lg:col-span-2">
            <article className="program-card">
              <svg className="program-card-bg-decor" viewBox="0 0 360 165" fill="none" aria-hidden="true">
                <path d="M225 0H360V165H195C180 120 205 55 225 0Z" fill="#DCEBFF" opacity="0.7" />
                <circle cx="315" cy="95" r="70" fill="#CFE4FF" opacity="0.55" />
                {/* Plus & Divide symbols */}
                <path d="M28 22V34M22 28H34" stroke="#BFDBFE" strokeWidth="2.6" strokeLinecap="round" />
                <g transform="translate(154, 118)" opacity="0.75">
                  <line x1="0" y1="8" x2="14" y2="8" stroke="#93C5FD" strokeWidth="2.4" strokeLinecap="round" />
                  <circle cx="7" cy="2.5" r="1.8" fill="#93C5FD" />
                  <circle cx="7" cy="13.5" r="1.8" fill="#93C5FD" />
                </g>
                {/* Set Square / Triangle Ruler */}
                <g transform="translate(194, 108) rotate(-8)" opacity="0.65">
                  <path d="M0 32L36 4V32H0Z" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M12 27L29 14V27H12Z" fill="#F0F7FF" stroke="#93C5FD" strokeWidth="1.2" />
                </g>
                <path d="M214 22L216.5 27L222 27.8L218 31.6L219 37L214 34.4L209 37L210 31.6L206 27.8L211.5 27L214 22Z" fill="#93C5FD" opacity="0.85" />
              </svg>
              <div className="program-card-body">
                <span className="program-pill">KELAS 7 SAMPAI 9</span>
                <h3 className="program-title">Privat SMP</h3>
              </div>
              <div className="program-illust program-illust-char" aria-hidden="true">
                <img
                  src={`${BASE}assets/images/icon-smp.png`}
                  alt=""
                  width="171"
                  height="220"
                  decoding="async"
                  loading="lazy"
                  className="program-char-img"
                />
              </div>
            </article>
          </div>

          {/* Card 4: Privat SMA */}
          <div className="reveal-left delay-150 md-col-span-3 lg:col-span-3">
            <article className="program-card">
              <svg className="program-card-bg-decor" viewBox="0 0 540 170" fill="none" aria-hidden="true">
                <path d="M350 0H540V170H310C295 118 325 52 350 0Z" fill="#DCEBFF" opacity="0.72" />
                <circle cx="465" cy="95" r="85" fill="#CFE4FF" opacity="0.55" />
                {/* Atom orbit */}
                <g transform="translate(245, 38)" opacity="0.65">
                  <ellipse cx="0" cy="0" rx="22" ry="8" stroke="#93C5FD" strokeWidth="1.6" />
                  <ellipse cx="0" cy="0" rx="22" ry="8" stroke="#93C5FD" strokeWidth="1.6" transform="rotate(60)" />
                  <ellipse cx="0" cy="0" rx="22" ry="8" stroke="#93C5FD" strokeWidth="1.6" transform="rotate(120)" />
                  <circle cx="0" cy="0" r="3.5" fill="#60A5FA" />
                </g>
                {/* Open book */}
                <g transform="translate(160, 114) rotate(-8)" opacity="0.65">
                  <path d="M0 8C10 4 20 6 26 11C32 6 42 4 52 8V34C42 30 32 32 26 37C20 32 10 30 0 34V8Z" fill="#E0ECFF" stroke="#60A5FA" strokeWidth="1.5" strokeLinejoin="round" />
                  <line x1="26" y1="11" x2="26" y2="37" stroke="#60A5FA" strokeWidth="1.5" />
                </g>
                {/* Erlenmeyer Flask behind character */}
                <g transform="translate(490, 102)" opacity="0.55">
                  <path d="M10 0H22M13 0V14L3 36C1.5 39 3.5 42 7 42H25C28.5 42 30.5 39 29 36L19 14V0" stroke="#60A5FA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="#DCEBFF" />
                </g>
                <path d="M300 72L303 78L309 79L304.5 83L305.5 89L300 86L294.5 89L295.5 83L291 79L297 78L300 72Z" fill="#93C5FD" opacity="0.85" />
              </svg>
              <div className="program-card-body">
                <span className="program-pill">KELAS 10 SAMPAI 12</span>
                <h3 className="program-title">Privat SMA</h3>
              </div>
              <div className="program-illust program-illust-lg program-illust-char" aria-hidden="true">
                <img
                  src={`${BASE}assets/images/icon-sma.png`}
                  alt=""
                  width="167"
                  height="220"
                  decoding="async"
                  loading="lazy"
                  className="program-char-img"
                />
              </div>
            </article>
          </div>

          {/* Card 5: Privat Mengaji */}
          <div className="reveal-right delay-250 sm:col-span-2 md-col-span-3 lg:col-span-3">
            <article className="program-card">
              <svg className="program-card-bg-decor" viewBox="0 0 540 170" fill="none" aria-hidden="true">
                <path d="M350 0H540V170H310C295 118 325 52 350 0Z" fill="#DCEBFF" opacity="0.72" />
                <circle cx="465" cy="95" r="85" fill="#CFE4FF" opacity="0.55" />
                {/* Mosque Silhouette */}
                <g transform="translate(230, 38)" opacity="0.65">
                  <path d="M35 76C35 46 54 30 72 16C90 30 109 46 109 76H35Z" fill="#CFE4FF" />
                  <line x1="72" y1="8" x2="72" y2="16" stroke="#93C5FD" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M8 76C8 60 17 50 26 42C35 50 44 60 44 76H8Z" fill="#DCEBFF" />
                  <rect x="0" y="26" width="10" height="50" fill="#CFE4FF" />
                  <path d="M-2 26L5 12L12 26H-2Z" fill="#93C5FD" />
                  <rect x="0" y="74" width="132" height="58" fill="#CFE4FF" />
                </g>
                {/* Open mushaf book */}
                <g transform="translate(32, 122) rotate(-5)" opacity="0.65">
                  <path d="M0 8C12 4 22 6 28 11C34 6 44 4 56 8V30C44 26 34 28 28 33C22 28 12 26 0 30V8Z" fill="#E0ECFF" stroke="#60A5FA" strokeWidth="1.5" strokeLinejoin="round" />
                  <line x1="28" y1="11" x2="28" y2="33" stroke="#60A5FA" strokeWidth="1.5" />
                </g>
                <path d="M342 36L344.5 41L350 41.8L346 45.6L347 51L342 48.4L337 51L338 45.6L334 41.8L339.5 41L342 36Z" fill="#93C5FD" opacity="0.85" />
                <path d="M368 130L370 134L374 134.6L371 137.4L371.8 141.5L368 139.5L364.2 141.5L365 137.4L362 134.6L366 134L368 130Z" fill="#FBBF24" opacity="0.75" />
              </svg>
              <div className="program-card-body">
                <span className="program-pill">SEMUA USIA</span>
                <h3 className="program-title">Privat Mengaji</h3>
              </div>
              <div className="program-illust program-illust-lg program-illust-mengaji" aria-hidden="true">
                <img
                  src={`${BASE}assets/images/icon-mengaji.png`}
                  alt=""
                  width="250"
                  height="220"
                  decoding="async"
                  loading="lazy"
                  className="program-char-img"
                />
              </div>
            </article>
          </div>
        </div>

        {/* Materi Pembelajaran */}
        <div className="program-materi-section">
          <div className="reveal-element program-materi-header">
            <h3 className="section-subheading-h3">
              Materi Pembelajaran
            </h3>
          </div>

          <div className="program-mini-grid grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* Card 1: Pelajaran Umum (Blue Theme) */}
            <div className="reveal-pop delay-75">
              <article className="mini-program-card mini-card-blue">
                <svg className="mini-card-bg-decor" viewBox="0 0 260 175" fill="none" aria-hidden="true">
                  <circle cx="215" cy="40" r="55" fill="#DCEBFF" opacity="0.55" />
                  <circle cx="210" cy="135" r="45" fill="#CFE4FF" opacity="0.5" />
                  <path d="M212 72L214 77L219 79L214 81L212 86L210 81L205 79L210 77L212 72Z" fill="#93C5FD" opacity="0.75" />
                  <path d="M142 122L144 127L149 129L144 131L142 136L140 131L135 129L140 127L142 122Z" fill="#93C5FD" opacity="0.75" />
                </svg>
                <div className="mini-program-body">
                  <span className="program-pill">SEKOLAH &amp; UMUM</span>
                  <h4 className="mini-program-title">Pelajaran Umum</h4>
                </div>
                <div className="mini-card-illust" aria-hidden="true">
                  <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="75" cy="91" rx="34" ry="6" fill="#93C5FD" opacity="0.35" />
                    {/* Clipboard */}
                    <rect x="40" y="16" width="56" height="70" rx="7" fill="#1E3A8A" />
                    <rect x="43" y="19" width="50" height="64" rx="5" fill="#2563EB" />
                    {/* Metal Clip */}
                    <rect x="56" y="11" width="24" height="10" rx="3" fill="#CBD5E1" />
                    <rect x="60" y="9" width="16" height="5" rx="2" fill="#94A3B8" />
                    <circle cx="68" cy="14.5" r="1.8" fill="#475569" />
                    {/* Paper Sheet */}
                    <rect x="47" y="24" width="42" height="54" rx="3.5" fill="#FFFFFF" />
                    {/* Checkboxes & Lines */}
                    <path d="M52 35L54.5 37.5L58.5 33" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="63" y1="35.5" x2="81" y2="35.5" stroke="#94A3B8" strokeWidth="2.4" strokeLinecap="round" />
                    <path d="M52 46L54.5 48.5L58.5 44" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="63" y1="46.5" x2="78" y2="46.5" stroke="#CBD5E1" strokeWidth="2.4" strokeLinecap="round" />
                    <path d="M52 57L54.5 59.5L58.5 55" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="63" y1="57.5" x2="74" y2="57.5" stroke="#CBD5E1" strokeWidth="2.4" strokeLinecap="round" />
                    {/* Gold A+ Stamp */}
                    <circle cx="80" cy="69" r="12" fill="#F59E0B" />
                    <circle cx="80" cy="69" r="10" fill="#FBBF24" stroke="#FEF3C7" strokeWidth="1.2" />
                    <text x="80" y="73.5" textAnchor="middle" fill="#FFFFFF" fontFamily="Manrope, Inter, sans-serif" fontWeight="800" fontSize="11">A+</text>
                    {/* Splash rays */}
                    <path d="M102 32L110 27M104 39L113 38M102 45L109 49" stroke="#FBBF24" strokeWidth="2.6" strokeLinecap="round" />
                  </svg>
                </div>
              </article>
            </div>

            {/* Card 2: Agama & Mengaji (Green Theme) */}
            <div className="reveal-pop delay-150">
              <article className="mini-program-card mini-card-green">
                <svg className="mini-card-bg-decor" viewBox="0 0 260 175" fill="none" aria-hidden="true">
                  <circle cx="210" cy="45" r="58" fill="#D1FAE5" opacity="0.55" />
                  {/* Mosque silhouette behind lantern */}
                  <g transform="translate(155, 80)" opacity="0.45">
                    <rect x="6" y="18" width="10" height="48" fill="#A7F3D0" />
                    <path d="M4 18L11 6L18 18H4Z" fill="#6EE7B7" />
                    <path d="M22 66C22 44 36 32 50 22C64 32 78 44 78 66H22Z" fill="#A7F3D0" />
                    <path d="M74 66C74 52 82 44 90 36C98 44 106 52 106 66H74Z" fill="#A7F3D0" />
                  </g>
                  <path d="M214 68L216 73L221 75L216 77L214 82L212 77L207 75L212 73L214 68Z" fill="#6EE7B7" opacity="0.85" />
                </svg>
                <div className="mini-program-body">
                  <span className="program-pill">IQRO' &amp; AL-QUR'AN</span>
                  <h4 className="mini-program-title">Agama &amp; Mengaji</h4>
                </div>
                <div className="mini-card-illust" aria-hidden="true">
                  <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="78" cy="90" rx="30" ry="6" fill="#6EE7B7" opacity="0.4" />
                    {/* Lantern Ring */}
                    <circle cx="78" cy="14" r="4" stroke="#D97706" strokeWidth="2" fill="none" />
                    <line x1="78" y1="18" x2="78" y2="23" stroke="#B45309" strokeWidth="2" />
                    {/* Lantern Dome */}
                    <path d="M63 32C63 24 70 22 78 22C86 22 93 24 93 32H63Z" fill="#D97706" />
                    <rect x="60" y="32" width="36" height="4" rx="2" fill="#F59E0B" />
                    {/* Lantern Glass Body */}
                    <path d="M64 36L68 68H88L92 36H64Z" fill="#FEF08A" stroke="#D97706" strokeWidth="1.6" />
                    <line x1="78" y1="36" x2="78" y2="68" stroke="#D97706" strokeWidth="1.5" />
                    <path d="M64 36C70 46 70 58 68 68" stroke="#D97706" strokeWidth="1.2" fill="none" />
                    <path d="M92 36C86 46 86 58 88 68" stroke="#D97706" strokeWidth="1.2" fill="none" />
                    {/* Inner Warm Glow */}
                    <circle cx="78" cy="52" r="7" fill="#F59E0B" />
                    <circle cx="78" cy="52" r="3.5" fill="#FFFFFF" />
                    {/* Lantern Base */}
                    <rect x="66" y="68" width="24" height="4" rx="1.5" fill="#F59E0B" />
                    <path d="M68 72L63 79H93L88 72H68Z" fill="#B45309" />
                    <rect x="61" y="79" width="34" height="3.5" rx="1.5" fill="#D97706" />
                  </svg>
                </div>
              </article>
            </div>

            {/* Card 3: Bahasa Asing (Purple Theme) */}
            <div className="reveal-pop delay-200">
              <article className="mini-program-card mini-card-purple">
                <svg className="mini-card-bg-decor" viewBox="0 0 260 175" fill="none" aria-hidden="true">
                  <circle cx="215" cy="40" r="55" fill="#EDE9FE" opacity="0.65" />
                  <path d="M204 68L206 73L211 75L206 77L204 82L202 77L197 75L202 73L204 68Z" fill="#C4B5FD" opacity="0.85" />
                  <path d="M126 122L128 127L133 129L128 131L126 136L124 131L119 129L124 127L126 122Z" fill="#C4B5FD" opacity="0.85" />
                </svg>
                <div className="mini-program-body">
                  <span className="program-pill">INGGRIS &amp; ARAB</span>
                  <h4 className="mini-program-title">Bahasa Asing</h4>
                </div>
                <div className="mini-card-illust" aria-hidden="true">
                  <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="76" cy="91" rx="36" ry="6" fill="#DDD6FE" opacity="0.45" />
                    {/* Blue/Indigo Bubble: EN */}
                    <rect x="24" y="24" width="54" height="36" rx="11" fill="#4F46E5" />
                    <rect x="26" y="26" width="50" height="32" rx="9" fill="#6366F1" />
                    <path d="M36 58L29 67L46 58H36Z" fill="#6366F1" />
                    <text x="51" y="48" textAnchor="middle" fill="#FFFFFF" fontFamily="Manrope, Inter, sans-serif" fontWeight="800" fontSize="16" letterSpacing="0.04em">EN</text>
                    {/* Purple/Violet Bubble: AR */}
                    <rect x="62" y="42" width="54" height="36" rx="11" fill="#7E22CE" />
                    <rect x="64" y="44" width="50" height="32" rx="9" fill="#9333EA" />
                    <path d="M100 76L108 85L92 76H100Z" fill="#9333EA" />
                    <text x="89" y="66" textAnchor="middle" fill="#FFFFFF" fontFamily="Manrope, Inter, sans-serif" fontWeight="800" fontSize="15.5" letterSpacing="0.04em">AR</text>
                    {/* Splash rays */}
                    <path d="M108 24L112 16M115 29L122 23M118 36L126 34" stroke="#FBBF24" strokeWidth="2.6" strokeLinecap="round" />
                  </svg>
                </div>
              </article>
            </div>

            {/* Card 4: Calistung (Amber / Gold Theme) */}
            <div className="reveal-pop delay-250">
              <article className="mini-program-card mini-card-amber">
                <svg className="mini-card-bg-decor" viewBox="0 0 260 175" fill="none" aria-hidden="true">
                  <circle cx="215" cy="40" r="55" fill="#FEF3C7" opacity="0.65" />
                  <path d="M214 68L216 73L221 75L216 77L214 82L212 77L207 75L212 73L214 68Z" fill="#FBBF24" opacity="0.85" />
                </svg>
                <div className="mini-program-body">
                  <span className="program-pill">USIA DINI</span>
                  <h4 className="mini-program-title">Baca Tulis Hitung</h4>
                </div>
                <div className="mini-card-illust" aria-hidden="true">
                  <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="82" cy="91" rx="36" ry="6" fill="#FDE68A" opacity="0.5" />
                    {/* Numbers 1 2 3 on left */}
                    <text x="34" y="42" fill="#EF4444" fontFamily="Manrope, Inter, sans-serif" fontWeight="800" fontSize="16">1</text>
                    <text x="22" y="62" fill="#3B82F6" fontFamily="Manrope, Inter, sans-serif" fontWeight="800" fontSize="17" transform="rotate(-8 22 62)">2</text>
                    <text x="33" y="80" fill="#10B981" fontFamily="Manrope, Inter, sans-serif" fontWeight="800" fontSize="16">3</text>
                    {/* Abacus Outer Frame (Horizontal) */}
                    <rect x="48" y="24" width="68" height="58" rx="6" fill="#D97706" />
                    <rect x="53" y="29" width="58" height="48" rx="3.5" fill="#FFFBEB" />
                    {/* Horizontal Wire Rods */}
                    <line x1="53" y1="41" x2="111" y2="41" stroke="#B45309" strokeWidth="2" />
                    <line x1="53" y1="53" x2="111" y2="53" stroke="#B45309" strokeWidth="2" />
                    <line x1="53" y1="65" x2="111" y2="65" stroke="#B45309" strokeWidth="2" />
                    {/* Row 1 Beads */}
                    <circle cx="62" cy="41" r="4.5" fill="#EF4444" />
                    <circle cx="72" cy="41" r="4.5" fill="#F59E0B" />
                    <circle cx="93" cy="41" r="4.5" fill="#10B981" />
                    <circle cx="103" cy="41" r="4.5" fill="#3B82F6" />
                    {/* Row 2 Beads */}
                    <circle cx="62" cy="53" r="4.5" fill="#10B981" />
                    <circle cx="72" cy="53" r="4.5" fill="#10B981" />
                    <circle cx="82" cy="53" r="4.5" fill="#F59E0B" />
                    <circle cx="103" cy="53" r="4.5" fill="#EC4899" />
                    {/* Row 3 Beads */}
                    <circle cx="62" cy="65" r="4.5" fill="#3B82F6" />
                    <circle cx="88" cy="65" r="4.5" fill="#8B5CF6" />
                    <circle cx="98" cy="65" r="4.5" fill="#3B82F6" />
                    {/* Abacus Stand Feet */}
                    <rect x="45" y="80" width="12" height="5" rx="2" fill="#B45309" />
                    <rect x="107" y="80" width="12" height="5" rx="2" fill="#B45309" />
                  </svg>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
