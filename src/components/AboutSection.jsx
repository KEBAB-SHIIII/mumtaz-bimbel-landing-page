import React from 'react';

export default function AboutSection() {
  return (
    <>
      {/* 1. Profil & Tentang Kami (Latar Putih Bersih) */}
      <section className="pt-16 sm:pt-20 pb-16 sm:pb-20 bg-white overflow-hidden w-full max-w-full" id="tentang-kami">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center about-profile-grid">
            {/* Sisi Kiri: Kolase 3 Foto Siswa & Tutor */}
            <div className="reveal-left lg:col-span-5 grid grid-cols-5 gap-3 sm:gap-4">
              <div className="col-span-3">
                <div className="about-collage-main photo-frame aspect-[3/4] rounded-3xl about-collage-card">
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&h=800&q=75"
                    alt="Siswa belajar bersama tutor privat di rumah"
                    width="600"
                    height="800"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="about-collage-stack col-span-2 flex flex-col gap-3 sm:gap-4 pt-8">
                <div className="reveal-left delay-150 photo-frame aspect-square rounded-3xl about-collage-card">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&h=400&q=75"
                    alt="Siswa belajar dengan tutor privat"
                    width="400"
                    height="400"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div className="reveal-left delay-300 photo-frame aspect-square rounded-3xl about-collage-card">
                  <img
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&h=400&q=75"
                    alt="Siswa mengerjakan latihan soal bimbingan belajar"
                    width="400"
                    height="400"
                    decoding="async"
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
                  Mumtaz Bimbel Sampit adalah lembaga bimbingan belajar terpercaya di Sampit yang berkomitmen menghadirkan pendidikan berkualitas. Kami mendampingi siswa dari tingkat PAUD, TK hingga SMA melalui sistem privat <span className="font-semibold text-[#0B1F3B] whitespace-nowrap">1-on-1 (guru datang langsung ke rumah)</span> untuk meningkatkan prestasi akademik sekaligus membimbing kegiatan mengaji dengan pendekatan yang ramah dan terarah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visi & Misi Bimbel Mumtaz (Latar Soft Blue Penuh Satu Layar) */}
      <section
        className="section-blue-visimisi py-20 sm:py-24 overflow-hidden w-full max-w-full"
        id="visi-misi"
        style={{ backgroundColor: '#F0F7FF' }}
      >
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          {/* Header Visi & Misi */}
          <div className="reveal-element delay-75 mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.3rem] font-extrabold text-[#0B1F3B] tracking-tight">
              Visi &amp; Misi <span className="text-[#2563EB]">Bimbel Mumtaz</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-2 max-w-2xl leading-relaxed">
              Komitmen dan arah pendidikan kami dalam mendampingi tumbuh kembang akademik anak di Sampit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Sisi Kiri: Visi & Banner Foto Bimbingan (Tinggi Pas Sejajar dengan Misi) */}
            <div className="reveal-left delay-150 lg:col-span-5 flex flex-col gap-4 sm:gap-5 h-full">
              {/* Kartu Visi: Kotak Double Warna Putih + Inner Card Soft Blue Senada dengan Misi */}
              <div className="about-visi-card order-2 lg:order-1 p-6 sm:p-7 xl:p-8 shrink-0 flex flex-col justify-between">
                {/* Header Visi dengan Logo Resmi Bimbel Mumtaz */}
                <div className="flex items-center gap-3.5 mb-5 px-1">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-[#BFDBFE] bg-white shrink-0 shadow-xs flex items-center justify-center">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/images/logo-mumtaz.png`}
                      alt="Logo Bimbel Mumtaz"
                      width="48"
                      height="48"
                      decoding="async"
                      className="w-full h-full object-contain p-1"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-[22px] font-extrabold text-[#0B1F3B] tracking-tight">Visi</h3>
                  </div>
                </div>

                {/* Kotak Dalam (Inner Card) Kutipan Visi Senada dengan Item Misi */}
                <div className="about-visi-inner-card p-4 sm:p-5">
                  <blockquote className="text-[13.5px] sm:text-[14.5px] xl:text-[15px] font-normal text-[#475569] leading-relaxed">
                    &ldquo;Menjadi lembaga bimbingan belajar terdepan dan terpercaya dalam mencetak generasi yang cerdas, berprestasi, dan berakhlak mulia.&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* Gambar di Bawah Visi: Mengisi Sisa Ruang Sehingga Sejajar Presisi dengan Bawah Misi */}
              <div className="about-visi-image-card order-1 lg:order-2 group">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=700&h=480&q=75"
                  alt="Suasana belajar bimbingan Mumtaz"
                  width="700"
                  height="480"
                  decoding="async"
                  className="transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Sisi Kanan: Misi (Kotak Double Warna Putih Sebagai Latar) */}
            <div className="lg:col-span-7 h-full">
              <div className="about-misi-outer-card p-6 sm:p-7 xl:p-8 h-full flex flex-col justify-between">
                {/* Header Misi dengan Logo Resmi Bimbel Mumtaz */}
                <div className="flex items-center gap-3.5 mb-5 px-1 reveal-right delay-100">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-[#BFDBFE] bg-white shrink-0 shadow-xs flex items-center justify-center">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/images/logo-mumtaz.png`}
                      alt="Logo Bimbel Mumtaz"
                      width="48"
                      height="48"
                      decoding="async"
                      className="w-full h-full object-contain p-1"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-[22px] font-extrabold text-[#0B1F3B] tracking-tight">Misi</h3>
                  </div>
                </div>

                {/* Daftar 3 Kartu Misi: Satu kali scroll langsung memicu animasi berurutan untuk semua kartu */}
                <div className="space-y-3.5 sm:space-y-4 reveal-right delay-150 misi-stagger-group flex-1 flex flex-col justify-between">
                  {/* Misi 1 - Pembelajaran Adaptif */}
                  <div className="misi-stagger-item">
                    <div className="about-misi-item flex items-start gap-3.5 sm:gap-4 p-4 sm:p-4.5">
                      <div className="w-8 h-8 rounded-xl bg-[#2563EB] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs" aria-hidden="true">
                        01
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-[15.5px] font-bold text-[#0B1F3B]">Pembelajaran Adaptif &amp; Personal</h4>
                        <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-relaxed mt-0.5">
                          Menyediakan metode pembelajaran privat yang adaptif, menyenangkan, dan berfokus pada kebutuhan individu siswa <span className="font-semibold text-[#0B1F3B] whitespace-nowrap">(1-on-1)</span>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Misi 2 - Pengajar Profesional */}
                  <div className="misi-stagger-item">
                    <div className="about-misi-item flex items-start gap-3.5 sm:gap-4 p-4 sm:p-4.5">
                      <div className="w-8 h-8 rounded-xl bg-[#2563EB] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs" aria-hidden="true">
                        02
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-[15.5px] font-bold text-[#0B1F3B]">Pengajar Profesional &amp; Sabar</h4>
                        <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-relaxed mt-0.5">
                          Menghadirkan tenaga pengajar yang profesional, sabar, dan berpengalaman menghadapi berbagai karakter anak.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Misi 3 - Akademik & Mengaji */}
                  <div className="misi-stagger-item">
                    <div className="about-misi-item flex items-start gap-3.5 sm:gap-4 p-4 sm:p-4.5">
                      <div className="w-8 h-8 rounded-xl bg-[#2563EB] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs" aria-hidden="true">
                        03
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-[15.5px] font-bold text-[#0B1F3B]">Pendampingan Akademik &amp; Mengaji</h4>
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
        </div>
      </section>
    </>
  );
}
