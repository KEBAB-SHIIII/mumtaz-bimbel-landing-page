import React from 'react';

export default function AboutSection() {
  return (
    <>
      {/* 1. Profil & Tentang Kami (Latar Putih Bersih) */}
      <section className="pt-16 sm:pt-20 pb-16 sm:pb-20 bg-white overflow-hidden" id="tentang-kami">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center about-profile-grid">
            {/* Sisi Kiri: Kolase 3 Foto Siswa & Tutor */}
            <div className="reveal-left lg:col-span-5 grid grid-cols-5 gap-3 sm:gap-4">
              <div className="col-span-3">
                <div className="about-collage-main photo-frame aspect-[3/4] rounded-3xl about-collage-card">
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80"
                    alt="Siswa belajar bersama tutor privat di rumah"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="about-collage-stack col-span-2 flex flex-col gap-3 sm:gap-4 pt-8">
                <div className="reveal-left delay-150 photo-frame aspect-square rounded-3xl about-collage-card">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80"
                    alt="Siswa belajar dengan tutor privat"
                    loading="lazy"
                  />
                </div>
                <div className="reveal-left delay-300 photo-frame aspect-square rounded-3xl about-collage-card">
                  <img
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80"
                    alt="Siswa mengerjakan latihan soal bimbingan belajar"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Sisi Kanan: Narasi Profil Bimbingan Belajar */}
            <div className="lg:col-span-7">
              <div className="reveal-right delay-75">
                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight leading-[1.18] text-[#0B1F3B]">
                  Belajar lebih dekat, nyaman, dan{' '}
                  <span className="text-[#2563EB]">benar-benar paham</span>
                </h2>
              </div>

              <div className="reveal-right delay-150">
                <p className="text-[#475569] mt-6 text-base sm:text-lg leading-relaxed">
                  Mumtaz Bimbel Sampit adalah lembaga bimbingan belajar terpercaya di Sampit yang berkomitmen menghadirkan pendidikan berkualitas. Kami mendampingi siswa dari tingkat TK hingga SMA melalui sistem privat <span className="font-semibold text-[#0B1F3B] whitespace-nowrap">1-on-1 (guru datang langsung ke rumah)</span> untuk meningkatkan prestasi akademik sekaligus membimbing kegiatan mengaji dengan pendekatan yang ramah dan terarah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visi & Misi Bimbel Mumtaz (Latar Soft Blue Penuh Satu Layar) */}
      <section
        className="section-blue-visimisi py-20 sm:py-24 overflow-hidden"
        id="visi-misi"
        style={{ backgroundColor: '#F0F7FF' }}
      >
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          {/* Header Visi & Misi */}
          <div className="reveal-element delay-75 mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-[2.3rem] font-extrabold text-[#0B1F3B] tracking-tight">
              Visi &amp; Misi <span className="text-[#2563EB]">Bimbel Mumtaz</span>
            </h3>
            <p className="text-sm sm:text-base text-[#475569] mt-2 max-w-2xl leading-relaxed">
              Komitmen dan arah pendidikan kami dalam mendampingi tumbuh kembang akademik anak di Sampit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Sisi Kiri: Visi (Animasi Muncul dari Kiri) */}
            <div className="reveal-left delay-150 lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 about-visi-card relative">
              <div>
                {/* Header Visi dengan Logo Resmi Bimbel Mumtaz */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#BFDBFE] bg-white shrink-0 shadow-xs">
                    <img
                      src="assets/images/logo-mumtaz.png"
                      alt="Logo Bimbel Mumtaz"
                      className="w-full h-full object-contain p-1"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-[#0B1F3B] tracking-tight">Visi</h4>
                  </div>
                </div>

                {/* Kutipan Visi */}
                <blockquote className="text-base sm:text-[17px] font-bold text-[#0B1F3B] leading-relaxed">
                  &ldquo;Menjadi lembaga bimbingan belajar terdepan dan terpercaya dalam mencetak generasi yang cerdas, berprestasi, dan berakhlak mulia.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Sisi Kanan: Misi */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              {/* Header Misi */}
              <div className="reveal-right delay-100 mb-4 px-1">
                <h4 className="text-xl font-extrabold text-[#0B1F3B] tracking-tight">Misi</h4>
              </div>

              {/* Daftar 3 Kartu Misi: Satu kali scroll langsung memicu animasi berurutan untuk semua kartu */}
              <div className="space-y-3 reveal-right delay-150 misi-stagger-group">
                {/* Misi 1 - Pembelajaran Adaptif */}
                <div className="misi-stagger-item">
                  <div className="about-misi-item flex items-start gap-3.5 sm:gap-4 p-4">
                    <div className="w-8 h-8 rounded-xl bg-[#2563EB] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs" aria-hidden="true">
                      01
                    </div>
                    <div>
                      <h5 className="text-sm sm:text-[15px] font-bold text-[#0B1F3B]">Pembelajaran Adaptif &amp; Personal</h5>
                      <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-relaxed mt-0.5">
                        Menyediakan metode pembelajaran privat yang adaptif, menyenangkan, dan berfokus pada kebutuhan individu siswa <span className="font-semibold text-[#0B1F3B] whitespace-nowrap">(1-on-1)</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Misi 2 - Pengajar Profesional */}
                <div className="misi-stagger-item">
                  <div className="about-misi-item flex items-start gap-3.5 sm:gap-4 p-4">
                    <div className="w-8 h-8 rounded-xl bg-[#2563EB] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs" aria-hidden="true">
                      02
                    </div>
                    <div>
                      <h5 className="text-sm sm:text-[15px] font-bold text-[#0B1F3B]">Pengajar Profesional &amp; Sabar</h5>
                      <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-relaxed mt-0.5">
                        Menghadirkan tenaga pengajar yang profesional, sabar, dan berpengalaman menghadapi berbagai karakter anak.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Misi 3 - Akademik & Mengaji */}
                <div className="misi-stagger-item">
                  <div className="about-misi-item flex items-start gap-3.5 sm:gap-4 p-4">
                    <div className="w-8 h-8 rounded-xl bg-[#2563EB] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs" aria-hidden="true">
                      03
                    </div>
                    <div>
                      <h5 className="text-sm sm:text-[15px] font-bold text-[#0B1F3B]">Pendampingan Akademik &amp; Mengaji</h5>
                      <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-relaxed mt-0.5">
                        Mengintegrasikan pendampingan akademik secara menyeluruh, mulai dari pelajaran sekolah umum hingga bimbingan mengaji.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
