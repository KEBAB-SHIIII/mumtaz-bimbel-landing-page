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
                <div className="mini-program-body">
                  <span className="program-pill">SEKOLAH &amp; UJIAN</span>
                  <h4 className="mini-program-title">Pelajaran Umum</h4>
                </div>
                <div className="mini-card-illust" aria-hidden="true">
                  <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="85" cy="45" r="38" fill="#DBEAFE" opacity="0.65" />
                    <ellipse cx="80" cy="88" rx="42" ry="9" fill="#93C5FD" opacity="0.4" />
                    {/* Clipboard */}
                    <rect x="35" y="16" width="60" height="72" rx="7" fill="#1E3A8A" />
                    <rect x="38" y="19" width="54" height="66" rx="5" fill="#2563EB" />
                    {/* Metal Clip */}
                    <rect x="52" y="11" width="26" height="11" rx="3" fill="#CBD5E1" />
                    <rect x="56" y="9" width="18" height="5" rx="2" fill="#94A3B8" />
                    <circle cx="65" cy="15" r="2" fill="#475569" />
                    {/* Paper Sheet */}
                    <rect x="42" y="24" width="46" height="58" rx="4" fill="#FFFFFF" />
                    {/* Test check lines */}
                    <line x1="48" y1="36" x2="68" y2="36" stroke="#94A3B8" strokeWidth="2.4" strokeLinecap="round" />
                    <line x1="48" y1="46" x2="64" y2="46" stroke="#CBD5E1" strokeWidth="2.4" strokeLinecap="round" />
                    <line x1="48" y1="56" x2="62" y2="56" stroke="#CBD5E1" strokeWidth="2.4" strokeLinecap="round" />
                    {/* Green checkmarks */}
                    <path d="M72 34L75 37L80 32" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M72 44L75 47L80 42" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Gold A+ Stamp */}
                    <circle cx="75" cy="68" r="13" fill="#F59E0B" />
                    <circle cx="75" cy="68" r="11" fill="#FBBF24" stroke="#FEF3C7" strokeWidth="1.2" />
                    <text x="75" y="73" textAnchor="middle" fill="#FFFFFF" fontFamily="Manrope, Inter, sans-serif" fontWeight="800" fontSize="12">A+</text>
                    {/* Pencil on side */}
                    <g transform="translate(94, 25) rotate(22)">
                      <rect x="0" y="0" width="7" height="38" rx="2" fill="#3B82F6" />
                      <path d="M0 38L3.5 45L7 38H0Z" fill="#FDE047" />
                      <path d="M2.5 43L3.5 45L4.5 43H2.5Z" fill="#1F2937" />
                      <rect x="0" y="0" width="7" height="5" rx="1" fill="#F43F5E" />
                    </g>
                    {/* Sparkle */}
                    <path d="M106 16L108 20L112 21L108 23L106 27L105 23L101 21L105 20L106 16Z" fill="#F59E0B" />
                  </svg>
                </div>
              </article>
            </div>

            {/* Card 2: Agama & Mengaji (Green Theme) */}
            <div className="reveal-pop delay-150">
              <article className="mini-program-card mini-card-green">
                <div className="mini-program-body">
                  <span className="program-pill">IQRO' &amp; AL-QUR'AN</span>
                  <h4 className="mini-program-title">Agama &amp; Mengaji</h4>
                </div>
                <div className="mini-card-illust" aria-hidden="true">
                  <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="78" cy="46" r="38" fill="#D1FAE5" opacity="0.75" />
                    <circle cx="74" cy="50" r="24" fill="#FEF3C7" opacity="0.6" />
                    <ellipse cx="74" cy="88" rx="38" ry="9" fill="#A7F3D0" opacity="0.5" />
                    {/* Lantern Ring */}
                    <circle cx="74" cy="14" r="4.5" stroke="#F59E0B" strokeWidth="2.2" fill="none" />
                    <line x1="74" y1="18" x2="74" y2="24" stroke="#D97706" strokeWidth="2" />
                    {/* Lantern Dome */}
                    <path d="M60 32C60 25 67 24 74 24C81 24 88 25 88 32H60Z" fill="#065F46" />
                    <rect x="58" y="32" width="32" height="4" rx="2" fill="#F59E0B" />
                    {/* Lantern Glass Body */}
                    <path d="M62 36L66 66H82L86 36H62Z" fill="#FEF08A" stroke="#F59E0B" strokeWidth="1.5" />
                    <line x1="74" y1="36" x2="74" y2="66" stroke="#D97706" strokeWidth="1.5" />
                    <path d="M62 36C68 46 68 56 66 66" stroke="#D97706" strokeWidth="1.2" fill="none" />
                    <path d="M86 36C80 46 80 56 82 66" stroke="#D97706" strokeWidth="1.2" fill="none" />
                    {/* Candle Light */}
                    <circle cx="74" cy="50" r="6" fill="#F59E0B" />
                    <circle cx="74" cy="50" r="3.5" fill="#FFFFFF" />
                    {/* Lantern Base */}
                    <rect x="62" y="66" width="24" height="4" rx="1.5" fill="#F59E0B" />
                    <path d="M64 70L60 76H88L84 70H64Z" fill="#065F46" />
                    <rect x="58" y="76" width="32" height="3" rx="1.5" fill="#10B981" />
                    {/* Crescent Moon & Star */}
                    <path d="M100 22C95.5 22 92 25.5 92 30C92 34.5 95.5 38 100 38C101.8 38 103.5 37.3 104.8 36.2C102.5 35.8 100.8 33.8 100.8 31.5C100.8 28.8 103 26.6 105.7 26.6C106.3 26.6 107 26.8 107.5 27C106.2 24.2 103.3 22 100 22Z" fill="#F59E0B" />
                    <polygon points="110,18 111.5,21.5 115,22 112.5,24.5 113,28 110,26 107,28 107.5,24.5 105,22 108.5,21.5" fill="#FBBF24" />
                    {/* Sparkle dots */}
                    <circle cx="46" cy="46" r="3" fill="#34D399" opacity="0.75" />
                    <circle cx="41" cy="56" r="2.5" fill="#6EE7B7" opacity="0.65" />
                  </svg>
                </div>
              </article>
            </div>

            {/* Card 3: Bahasa Asing (Purple Theme) */}
            <div className="reveal-pop delay-200">
              <article className="mini-program-card mini-card-purple">
                <div className="mini-program-body">
                  <span className="program-pill">INGGRIS &amp; ARAB</span>
                  <h4 className="mini-program-title">Bahasa Asing</h4>
                </div>
                <div className="mini-card-illust" aria-hidden="true">
                  <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="75" cy="48" r="38" fill="#EDE9FE" opacity="0.75" />
                    <ellipse cx="75" cy="88" rx="42" ry="9" fill="#DDD6FE" opacity="0.5" />
                    {/* Blue/Indigo Bubble: EN */}
                    <rect x="24" y="22" width="52" height="36" rx="10" fill="#4338CA" />
                    <rect x="26" y="24" width="48" height="32" rx="8" fill="#6366F1" />
                    <path d="M36 56L30 65L46 56H36Z" fill="#6366F1" />
                    <text x="50" y="46" textAnchor="middle" fill="#FFFFFF" fontFamily="Manrope, Inter, sans-serif" fontWeight="800" fontSize="16" letterSpacing="0.05em">EN</text>
                    {/* Purple/Violet Bubble: AR */}
                    <rect x="62" y="36" width="54" height="38" rx="10" fill="#6B21A8" />
                    <rect x="64" y="38" width="50" height="34" rx="8" fill="#9333EA" />
                    <path d="M100 72L108 81L92 72H100Z" fill="#9333EA" />
                    <text x="89" y="61" textAnchor="middle" fill="#FFFFFF" fontFamily="Manrope, Inter, sans-serif" fontWeight="800" fontSize="15" letterSpacing="0.05em">AR</text>
                    {/* Center Exchange Loop Badge */}
                    <circle cx="70" cy="46" r="12" fill="#FFFFFF" stroke="#DDD6FE" strokeWidth="1.8" />
                    <path d="M64 43H75M75 43L71 40M75 43L71 46" stroke="#6366F1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M76 49H65M65 49L69 46M65 49L69 52" stroke="#9333EA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Sparkle */}
                    <path d="M116 22L118 26L122 27L118 29L116 33L114 29L110 27L114 26L116 22Z" fill="#F59E0B" />
                  </svg>
                </div>
              </article>
            </div>

            {/* Card 4: Calistung (Amber / Gold Theme) */}
            <div className="reveal-pop delay-250">
              <article className="mini-program-card mini-card-amber">
                <div className="mini-program-body">
                  <span className="program-pill">USIA DINI</span>
                  <h4 className="mini-program-title">Baca Tulis Hitung</h4>
                </div>
                <div className="mini-card-illust" aria-hidden="true">
                  <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="75" cy="48" r="38" fill="#FEF3C7" opacity="0.75" />
                    <ellipse cx="75" cy="88" rx="42" ry="9" fill="#FDE68A" opacity="0.5" />
                    {/* Abacus Outer Frame */}
                    <rect x="30" y="24" width="68" height="50" rx="6" fill="#78350F" />
                    <rect x="34" y="28" width="60" height="42" rx="4" fill="#FFFBEB" />
                    {/* Abacus Beam */}
                    <line x1="34" y1="41" x2="94" y2="41" stroke="#92400E" strokeWidth="2.5" />
                    {/* Wire Rods */}
                    <line x1="47" y1="28" x2="47" y2="70" stroke="#D97706" strokeWidth="1.8" />
                    <line x1="64" y1="28" x2="64" y2="70" stroke="#D97706" strokeWidth="1.8" />
                    <line x1="81" y1="28" x2="81" y2="70" stroke="#D97706" strokeWidth="1.8" />
                    {/* Upper Beads */}
                    <ellipse cx="47" cy="34" rx="6" ry="4" fill="#F59E0B" />
                    <ellipse cx="64" cy="38" rx="6" ry="4" fill="#EC4899" />
                    <ellipse cx="81" cy="34" rx="6" ry="4" fill="#3B82F6" />
                    {/* Lower Beads */}
                    <ellipse cx="47" cy="48" rx="6" ry="4" fill="#10B981" />
                    <ellipse cx="47" cy="57" rx="6" ry="4" fill="#10B981" />
                    <ellipse cx="47" cy="65" rx="6" ry="4" fill="#10B981" />
                    <ellipse cx="64" cy="45" rx="6" ry="4" fill="#F59E0B" />
                    <ellipse cx="64" cy="61" rx="6" ry="4" fill="#F59E0B" />
                    <ellipse cx="81" cy="50" rx="6" ry="4" fill="#8B5CF6" />
                    <ellipse cx="81" cy="63" rx="6" ry="4" fill="#8B5CF6" />
                    {/* Crayon crossing on right */}
                    <g transform="translate(96, 36) rotate(30)">
                      <rect x="0" y="0" width="8" height="34" rx="2" fill="#F97316" />
                      <path d="M0 34L4 43L8 34H0Z" fill="#FDE047" />
                      <path d="M3 39L4 43L5 39H3Z" fill="#1F2937" />
                      <rect x="1.5" y="7" width="5" height="18" rx="1" fill="#FFFFFF" opacity="0.35" />
                    </g>
                    {/* Numbers 1 2 3 */}
                    <text x="23" y="36" fill="#D97706" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="11">1</text>
                    <text x="20" y="52" fill="#EA580C" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="11">2</text>
                    <text x="21" y="68" fill="#16A34A" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="11">3</text>
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
