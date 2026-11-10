import React from 'react';

export default function ProgramSection() {
  return (
    <section className="section-blue-program py-20 sm:py-28" id="program">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="reveal-element max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15]">
            Program untuk setiap jenjang
          </h2>
          <p className="text-[#475569] mt-4">
            Semua program dilaksanakan privat di rumah dengan jadwal yang bisa disesuaikan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {/* Card 1: Privat TK */}
          <div className="reveal-element lg:col-span-2">
            <article className="program-card">
              <div className="program-card-body">
                <span className="program-pill">USIA DINI</span>
                <h3 className="program-title">Privat TK</h3>
              </div>
              <div className="program-illust" aria-hidden="true">
                <svg viewBox="0 0 180 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="tkSphere1" x1="40" y1="20" x2="150" y2="140" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E0ECFF" />
                      <stop offset="1" stopColor="#C3DAFE" />
                    </linearGradient>
                    <linearGradient id="tkSphere2" x1="20" y1="80" x2="90" y2="145" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#EBF3FF" />
                      <stop offset="1" stopColor="#C7D2FE" />
                    </linearGradient>
                    <linearGradient id="tkPodium" x1="40" y1="105" x2="165" y2="145" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#DCEBFF" />
                      <stop offset="1" stopColor="#B2D0FF" />
                    </linearGradient>
                  </defs>
                  <circle cx="112" cy="74" r="52" fill="url(#tkSphere1)" opacity="0.65" />
                  <circle cx="52" cy="112" r="28" fill="url(#tkSphere2)" opacity="0.8" />
                  <ellipse cx="106" cy="126" rx="64" ry="22" fill="url(#tkPodium)" />
                  <ellipse cx="106" cy="118" rx="52" ry="10" fill="#93C5FD" opacity="0.45" />
                  <path d="M156 20L158 25L163 27L158 29L156 34L154 29L149 27L154 25L156 20Z" fill="#93C5FD" />
                  <path d="M133 34L138 22" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M144 43L155 37" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" />
                  <g transform="translate(50, 74)">
                    <path d="M0 10L8 2H44L44 38L36 46H0V10Z" fill="#F59E0B" />
                    <path d="M0 10L8 2H44L36 10H0Z" fill="#FDE68A" />
                    <path d="M36 10L44 2V38L36 46V10Z" fill="#D97706" />
                    <rect x="0" y="10" width="36" height="36" rx="5" fill="#FBBF24" />
                    <rect x="4" y="14" width="28" height="28" rx="3.5" stroke="#FEF3C7" strokeWidth="1.5" fill="#F59E0B" fillOpacity="0.25" />
                    <text x="18" y="36" textAnchor="middle" fill="#FFFFFF" fontFamily="Manrope, Inter, sans-serif" fontWeight="800" fontSize="22">B</text>
                  </g>
                  <g transform="translate(94, 76)">
                    <path d="M0 10L8 2H46L46 38L38 46H0V10Z" fill="#10B981" />
                    <path d="M0 10L8 2H46L38 10H0Z" fill="#A7F3D0" />
                    <path d="M38 10L46 2V38L38 46V10Z" fill="#059669" />
                    <rect x="0" y="10" width="38" height="36" rx="5" fill="#34D399" />
                    <rect x="4" y="14" width="30" height="28" rx="3.5" stroke="#D1FAE5" strokeWidth="1.5" fill="#059669" fillOpacity="0.25" />
                    <text x="19" y="36" textAnchor="middle" fill="#FFFFFF" fontFamily="Manrope, Inter, sans-serif" fontWeight="800" fontSize="22">C</text>
                  </g>
                  <g transform="translate(71, 34)">
                    <path d="M0 10L9 2H47L47 40L38 48H0V10Z" fill="#0284C7" />
                    <path d="M0 10L9 2H47L38 10H0Z" fill="#BAE6FD" />
                    <path d="M38 10L47 2V40L38 48V10Z" fill="#0369A1" />
                    <rect x="0" y="10" width="38" height="38" rx="5" fill="#38BDF8" />
                    <rect x="4" y="14" width="30" height="30" rx="3.5" stroke="#E0F2FE" strokeWidth="1.5" fill="#0284C7" fillOpacity="0.25" />
                    <text x="19" y="37" textAnchor="middle" fill="#FFFFFF" fontFamily="Manrope, Inter, sans-serif" fontWeight="800" fontSize="23">A</text>
                  </g>
                </svg>
              </div>
            </article>
          </div>

          {/* Card 2: Privat SD */}
          <div className="reveal-element delay-100 lg:col-span-2">
            <article className="program-card">
              <div className="program-card-body">
                <span className="program-pill">KELAS 1 SAMPAI 6</span>
                <h3 className="program-title">Privat SD</h3>
              </div>
              <div className="program-illust" aria-hidden="true">
                <svg viewBox="0 0 180 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="sdSphere1" x1="50" y1="20" x2="160" y2="140" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E0ECFF" />
                      <stop offset="1" stopColor="#C3DAFE" />
                    </linearGradient>
                    <linearGradient id="sdSphere2" x1="20" y1="80" x2="95" y2="145" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#EBF3FF" />
                      <stop offset="1" stopColor="#BFDBFE" />
                    </linearGradient>
                  </defs>
                  <circle cx="114" cy="76" r="54" fill="url(#sdSphere1)" opacity="0.65" />
                  <circle cx="58" cy="114" r="32" fill="url(#sdSphere2)" opacity="0.85" />
                  <ellipse cx="104" cy="122" rx="54" ry="12" fill="#93C5FD" opacity="0.45" />
                  <path d="M114 58L128 38L133 42L119 62L114 58Z" fill="#60A5FA" />
                  <path d="M128 38L135 31L137 33L133 42L128 38Z" fill="#2563EB" />
                  <path d="M140 28L146 16" stroke="#F59E0B" strokeWidth="3.8" strokeLinecap="round" />
                  <path d="M149 38L160 31" stroke="#F59E0B" strokeWidth="3.8" strokeLinecap="round" />
                  <path d="M36 68L98 80L156 58L164 100L102 120L32 106L36 68Z" fill="#2563EB" />
                  <path d="M34 103L102 117L162 98L165 104L102 124L30 109L34 103Z" fill="#1E40AF" />
                  <path d="M40 58C58 53 80 60 98 73L100 112C82 99 60 94 36 99L40 58Z" fill="#E2E8F0" />
                  <path d="M42 54C60 49 82 56 98 69L100 108C82 95 60 90 38 95L42 54Z" fill="#FFFFFF" />
                  <path d="M154 48C136 45 114 54 98 71L100 110C116 93 138 86 158 89L154 48Z" fill="#DBEAFE" />
                  <path d="M152 44C134 41 114 50 98 69L100 106C116 89 136 82 156 85L152 44Z" fill="#F8FAFC" />
                  <path d="M98 69L100 112" stroke="#CBD5E1" strokeWidth="2.2" />
                  <path d="M51 67C63 64 76 68 88 76" stroke="#CBD5E1" strokeWidth="2.6" strokeLinecap="round" />
                  <path d="M50 76C62 73 75 77 88 85" stroke="#CBD5E1" strokeWidth="2.6" strokeLinecap="round" />
                  <path d="M49 85C61 82 74 86 86 94" stroke="#CBD5E1" strokeWidth="2.6" strokeLinecap="round" />
                  <path d="M108 74C119 65 132 60 144 60" stroke="#CBD5E1" strokeWidth="2.6" strokeLinecap="round" />
                  <path d="M109 83C120 74 133 69 145 69" stroke="#CBD5E1" strokeWidth="2.6" strokeLinecap="round" />
                  <path d="M110 92C121 83 133 78 144 78" stroke="#CBD5E1" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
              </div>
            </article>
          </div>

          {/* Card 3: Privat SMP */}
          <div className="reveal-element delay-200 lg:col-span-2">
            <article className="program-card">
              <div className="program-card-body">
                <span className="program-pill">KELAS 7 SAMPAI 9</span>
                <h3 className="program-title">Privat SMP</h3>
              </div>
              <div className="program-illust" aria-hidden="true">
                <svg viewBox="0 0 180 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="smpSphere1" x1="50" y1="20" x2="160" y2="140" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E0ECFF" />
                      <stop offset="1" stopColor="#C3DAFE" />
                    </linearGradient>
                  </defs>
                  <circle cx="114" cy="76" r="54" fill="url(#smpSphere1)" opacity="0.65" />
                  <circle cx="52" cy="116" r="30" fill="#DCEBFF" opacity="0.8" />
                  <ellipse cx="108" cy="126" rx="52" ry="11" fill="#93C5FD" opacity="0.45" />
                  <path d="M148 98C156 86 166 80 172 82C170 92 160 100 148 98Z" fill="#93C5FD" />
                  <path d="M150 108C160 100 170 98 175 102C170 110 160 112 150 108Z" fill="#60A5FA" />
                  <path d="M142 24L148 12" stroke="#F59E0B" strokeWidth="3.6" strokeLinecap="round" />
                  <path d="M152 34L163 28" stroke="#F59E0B" strokeWidth="3.6" strokeLinecap="round" />
                  <path d="M56 100L102 118L152 100L106 84L56 100Z" fill="#1E3A8A" />
                  <path d="M56 100V113L102 131L152 113V100L102 118L56 100Z" fill="#172554" />
                  <path d="M60 102V111L102 127L148 111V102L102 119L60 102Z" fill="#F1F5F9" />
                  <path d="M60 83L104 99L148 83L104 68L60 83Z" fill="#60A5FA" />
                  <path d="M60 83V95L104 111L148 95V83L104 99L60 83Z" fill="#2563EB" />
                  <path d="M64 85V93L104 108L144 93V85L104 100L64 85Z" fill="#FFFFFF" />
                  <path d="M74 56V76C74 84 88 90 104 90C120 90 134 84 134 76V56L104 67L74 56Z" fill="#1E293B" />
                  <path d="M46 46L104 24L162 46L104 68L46 46Z" fill="#334155" />
                  <path d="M50 45L104 25L158 45L104 65L50 45Z" fill="#1E3A8A" />
                  <circle cx="104" cy="45" r="4" fill="#FBBF24" />
                  <path d="M104 45L142 55V79" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                  <path d="M138 78H146L148 89H136L138 78Z" fill="#FBBF24" />
                </svg>
              </div>
            </article>
          </div>

          {/* Card 4: Privat SMA */}
          <div className="reveal-element delay-100 lg:col-span-3">
            <article className="program-card">
              <div className="program-card-body">
                <span className="program-pill">KELAS 10 SAMPAI 12</span>
                <h3 className="program-title">Privat SMA</h3>
              </div>
              <div className="program-illust program-illust-lg" aria-hidden="true">
                <svg viewBox="0 0 210 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="smaSphere1" x1="60" y1="15" x2="185" y2="145" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E0ECFF" />
                      <stop offset="1" stopColor="#C3DAFE" />
                    </linearGradient>
                    <linearGradient id="smaSphere2" x1="20" y1="80" x2="100" y2="150" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#EBF3FF" />
                      <stop offset="1" stopColor="#B2D0FF" />
                    </linearGradient>
                    <linearGradient id="trophyGold" x1="82" y1="22" x2="156" y2="96" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FDE047" />
                      <stop offset="0.5" stopColor="#FBBF24" />
                      <stop offset="1" stopColor="#D97706" />
                    </linearGradient>
                  </defs>
                  <circle cx="132" cy="78" r="58" fill="url(#smaSphere1)" opacity="0.65" />
                  <circle cx="56" cy="116" r="34" fill="url(#smaSphere2)" opacity="0.85" />
                  <ellipse cx="126" cy="134" rx="68" ry="18" fill="#C7D9FE" opacity="0.7" />
                  <path d="M98 112C82 104 70 90 66 74" stroke="#3B82F6" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M74 88C64 88 58 82 60 76C66 76 72 80 74 88Z" fill="#60A5FA" />
                  <path d="M84 98C74 100 66 96 66 90C72 88 80 92 84 98Z" fill="#3B82F6" />
                  <path d="M80 78C76 70 78 64 84 64C86 70 84 76 80 78Z" fill="#60A5FA" />
                  <path d="M142 112C158 104 170 90 174 74" stroke="#3B82F6" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M166 88C176 88 182 82 180 76C174 76 168 80 166 88Z" fill="#60A5FA" />
                  <path d="M156 98C166 100 174 96 174 90C168 88 160 92 156 98Z" fill="#3B82F6" />
                  <path d="M160 78C164 70 162 64 156 64C154 70 156 76 160 78Z" fill="#60A5FA" />
                  <path d="M168 38L174 27" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M176 47L187 42" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M88 40H74C66 40 62 47 64 56C67 66 76 73 88 73" stroke="#F59E0B" strokeWidth="7" strokeLinecap="round" />
                  <path d="M150 40H164C172 40 176 47 174 56C171 66 162 73 150 73" stroke="#F59E0B" strokeWidth="7" strokeLinecap="round" />
                  <path d="M84 24H154L148 66C145 84 133 95 119 95C105 95 93 84 90 66L84 24Z" fill="url(#trophyGold)" />
                  <ellipse cx="119" cy="24" rx="35" ry="6.5" fill="#FDE68A" />
                  <ellipse cx="119" cy="24" rx="30" ry="4" fill="#D97706" />
                  <path d="M119 39L124 49.5L135.5 51.2L127.2 59.3L129.2 70.8L119 65.4L108.8 70.8L110.8 59.3L102.5 51.2L114 49.5L119 39Z" fill="#FEF9C3" />
                  <path d="M113 93H125L129 111H109L113 93Z" fill="#D97706" />
                  <rect x="103" y="109" width="32" height="6" rx="3" fill="#FBBF24" />
                  <path d="M93 115H145L149 131H89L93 115Z" fill="#1E293B" />
                  <rect x="107" y="119" width="24" height="7" rx="2" fill="#FBBF24" />
                  <rect x="85" y="129" width="68" height="6.5" rx="3.2" fill="#0F172A" />
                </svg>
              </div>
            </article>
          </div>

          {/* Card 5: Privat Mengaji */}
          <div className="reveal-element delay-200 sm:col-span-2 lg:col-span-3">
            <article className="program-card">
              <div className="program-card-body">
                <span className="program-pill">SEMUA USIA ANAK</span>
                <h3 className="program-title">Privat Mengaji</h3>
              </div>
              <div className="program-illust program-illust-lg" aria-hidden="true">
                <svg viewBox="0 0 210 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="ngajiDome" x1="108" y1="44" x2="108" y2="110" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#93C5FD" />
                      <stop offset="1" stopColor="#DBEAFE" />
                    </linearGradient>
                    <linearGradient id="ngajiHill" x1="40" y1="110" x2="195" y2="155" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#DCEBFF" />
                      <stop offset="1" stopColor="#B6D2FF" />
                    </linearGradient>
                  </defs>
                  <circle cx="136" cy="74" r="58" fill="#E2EEFF" opacity="0.7" />
                  <path d="M74 106C74 78 92 62 110 48C128 62 146 78 146 106H74Z" fill="url(#ngajiDome)" />
                  <path d="M110 40V48" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M138 108C138 90 148 80 158 72C168 80 178 90 178 108H138Z" fill="#93C5FD" opacity="0.75" />
                  <rect x="176" y="42" width="14" height="68" fill="#93C5FD" opacity="0.85" />
                  <path d="M174 42L183 24L192 42H174Z" fill="#60A5FA" />
                  <rect x="173" y="42" width="20" height="4.5" rx="2" fill="#60A5FA" />
                  <path d="M138 14C132.5 14 128 18.5 128 24C128 29.5 132.5 34 138 34C140.2 34 142.2 33.2 143.8 32C141 31.6 138.8 29.2 138.8 26.2C138.8 22.9 141.5 20.2 144.8 20.2C145.6 20.2 146.4 20.4 147.1 20.7C145.3 16.8 141.9 14 138 14Z" fill="#60A5FA" />
                  <ellipse cx="118" cy="134" rx="76" ry="22" fill="url(#ngajiHill)" />
                  <path d="M58 130C48 122 44 110 48 102C56 108 60 118 58 130Z" fill="#60A5FA" />
                  <path d="M48 134C38 128 32 120 34 114C42 116 48 124 48 134Z" fill="#93C5FD" />
                  <path d="M176 130C186 120 190 108 186 98C178 104 174 116 176 130Z" fill="#3B82F6" />
                  <path d="M184 134C194 128 200 118 198 110C190 114 184 122 184 134Z" fill="#60A5FA" />
                  <path d="M68 134L116 90L162 96L82 139L68 134Z" fill="#92400E" />
                  <path d="M164 134L116 90L70 96L150 139L164 134Z" fill="#B45309" />
                  <path d="M56 90L116 112L176 90L171 100L116 122L61 100L56 90Z" fill="#78350F" />
                  <path d="M58 78L116 100L174 78L178 86L116 110L54 86L58 78Z" fill="#1D4ED8" />
                  <path d="M62 64C82 59 100 68 116 86V102C98 86 80 79 58 84L62 64Z" fill="#FFFFFF" />
                  <path d="M170 64C150 59 132 68 116 86V102C134 86 152 79 174 84L170 64Z" fill="#F8FAFC" />
                  <path d="M72 73C84 70 97 76 107 85" stroke="#CBD5E1" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M71 80C83 77 96 83 106 92" stroke="#CBD5E1" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M160 73C148 70 135 76 125 85" stroke="#CBD5E1" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M161 80C149 77 136 83 126 92" stroke="#CBD5E1" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
