import React, { useState, useRef } from 'react';

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Orang tua Akbar',
    level: 'Kelas 2 • SDIT Arafah Sampit',
    quote:
      'Alhamdulillah meningkat nilai abay apalagi hafalan surat nya 80 keatas semua, Makasih bu.',
  },
  {
    id: 2,
    name: 'Orang tua Syamil',
    level: 'TK B • TKIT Arafah Sampit',
    quote:
      'Mulai Senin Syamil balik les baca tulis hitung ya Bu, Alhamdulillah Syamil nya sudah keterima masuk SD Baiturrahim 🙏🏻',
  },
  {
    id: 3,
    name: 'Orang tua Zaki',
    level: 'Kelas 6 • SDN 9 Baamang Tengah Sampit',
    quote:
      'Alhamdulillah untuk nilai-nilai Zaki bagus... Kalo disuruh ngerjakan PR sudah bisa sendiri...',
  },
  {
    id: 4,
    name: 'Syifa',
    level: 'Kelas 5 • SDIT Arafah Sampit',
    quote:
      'Nilai ulangan Sejarah Kebudayaan Islam syifa kemaren 100 kak',
  },
  {
    id: 5,
    name: 'Orang tua Syifa dan Athifa',
    level: 'Kelas 9 & 5 • SMPIT dan SDIT Arafah Sampit',
    quote:
      'Alhamdulillah, Syifa katanya sangat puas dan ngerti kalo les dengan pian, kalo Athifa juga katanya enak tutor nya, terima kasih banyak bu',
  },
  {
    id: 6,
    name: 'Orang Tua Azzura',
    level: 'Kelas 4 • SDN 7 Ketapang Sampit',
    quote:
      'Alhamdulillah mba, azzura suka gurunya ramah dan sabar',
  },
  {
    id: 7,
    name: 'Mba Adelia',
    level: 'Kelas Umum • Murid Mengaji Bimbel Mumtaz Sampit',
    quote:
      'Alhamdulillah aman aja mba, cara ngajarnya langsung praktek dan langsung diuji jadi ngebuat kita lebih cepet progress belajarnya. Penyampaian nya juga enak dan jelas dan waktu belajarnya lebih lama jadi tidak terburu-buru mengajarnya 🙏🏻',
  },
  {
    id: 8,
    name: 'Orang Tua Hayfa',
    level: 'Kelas 4 • SDIT Arafah Sampit',
    quote:
      'Alhamdulillah belajar di Mumtaz Bimbel menyenangkan.. anak saya sekarang bisa memahami pelajaran terutama Matematika dan IPAS selain itu waktu les lebih fleksibel menyesuaikan jadwal anak.. Tutor Alhamdulillah juga ramah dan sabar 🤭',
  },
  {
    id: 9,
    name: 'Orang tua Faza',
    level: 'Kelas 4 • SDN 3 Mentawa Baru Hulu Sampit',
    quote:
      'Alhamdulillah Faza nya cocok sama mba Elin mba, ramah orang nya 🤩',
  },
  {
    id: 10,
    name: 'Orang Tua Ziyad',
    level: 'TK B • TKIT Arafah Sampit',
    quote:
      'Alhamdulillah aman aja kak.. senang dede ngaji nya..',
  },
  {
    id: 11,
    name: 'Orang Tua Daniel',
    level: 'Kelas 7 • SMP Cita Bunda Sampit',
    quote:
      'Terima kasih kaka pengajar bimbel mumtaz, udah bantuin dan bimbing daniel belajar. Cara belajarnya seru dan oke banget. Daniel cepet ngerti soalnya cara belajarnya gak kaku, santai tapi gampang ngertinya. Daniel bisa lebih paham matematika dan ipa. Oke banget pokoknya...',
  },
  {
    id: 12,
    name: 'Orang Tua Fikri dan Fathian',
    level: 'Kelas 4 & 1 • SDN 3 Mentawa Baru Hulu Sampit',
    quote:
      'Alhamdulillah selama Fikri dan Fathian bimbel di Mumtaz Sangat membantu belajar Fikri dan Fathian',
  },
];

export default function TestimoniSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');
  const [animKey, setAnimKey] = useState(0);
  const touchStartX = useRef(null);

  const total = TESTIMONIALS_DATA.length;

  const getIndex = (offset) => {
    return (activeIndex + offset + total) % total;
  };

  const prevItem = TESTIMONIALS_DATA[getIndex(-1)];
  const currentItem = TESTIMONIALS_DATA[activeIndex];
  const nextItem = TESTIMONIALS_DATA[getIndex(1)];

  const handlePrev = () => {
    setSlideDirection('prev');
    setActiveIndex((prev) => (prev <= 0 ? total - 1 : prev - 1));
    setAnimKey((k) => k + 1);
  };

  const handleNext = () => {
    setSlideDirection('next');
    setActiveIndex((prev) => (prev >= total - 1 ? 0 : prev + 1));
    setAnimKey((k) => k + 1);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section className="section-testimoni overflow-hidden" id="testimoni">
      <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
        {/* Header Section dengan Animasi Muncul Saat Scroll & Garis Kuas Terlukis */}
        <div className="text-center testi-header-spacing reveal-element delay-75">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#0B1F3B] tracking-tight inline-block relative leading-[1.25] pb-3 sm:pb-4">
            Kata Mereka Tentang{' '}
            <span
              className="relative inline-block ml-1.5 sm:ml-2 text-[#2563EB]"
              style={{ color: '#2563EB' }}
            >
              Mumtaz
              <svg
                width="120"
                height="12"
                className="absolute left-0 w-full pointer-events-none"
                style={{ bottom: '-14px', height: '12px' }}
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  className="testi-brush-path"
                  d="M4 8C52 2.5 148 2.5 196 7.5"
                  stroke="#2563EB"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-[#475569] mt-4 sm:mt-5 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Pengalaman nyata para wali murid dan siswa selama mengikuti bimbingan belajar Mumtaz.
          </p>
        </div>

        {/* 3 Kartu Berjejer: Kiri (Pudar), Tengah (Biru Terpilih dengan Teks Menonjol), Kanan (Pudar) */}
        <div
          className="testi-carousel-wrapper"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="testi-3col-grid">
            {/* KARTU KIRI: Testimoni Sebelumnya (Pudar, Animasi Masuk dari Kiri Saat Scroll) */}
            <div
              onClick={handlePrev}
              className="testi-card-faded reveal-left delay-150"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handlePrev()}
              aria-label={`Pilih testimoni sebelumnya dari ${prevItem.name}`}
            >
              <div>
                <svg
                  width="20"
                  height="20"
                  className="testi-quote-icon-sm mb-2 shrink-0"
                  style={{ width: '20px', height: '20px', fill: '#94A3B8' }}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed line-clamp-5">
                  &ldquo;{prevItem.quote}&rdquo;
                </p>
              </div>
              <div className="mt-4 text-center">
                <p className="font-medium text-xs text-[#64748B] truncate">
                  {prevItem.name}
                </p>
                <p className="text-[11px] text-[#94A3B8] truncate mt-0.5">
                  {prevItem.level}
                </p>
              </div>
            </div>

            {/* KARTU TENGAH: Testimoni Terpilih (Animasi Pop Muncul Saat Scroll & Transisi Halus Saat Ganti) */}
            <div className="relative reveal-pop delay-200">
              {/* Pembungkus Balon Chat dengan Tombol Panah Melayang di Sisi Kiri & Kanan */}
              <div className="relative">
                {/* Tombol Panah Kiri di Pinggir Kartu */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="testi-arrow-side testi-arrow-left"
                  aria-label="Testimoni sebelumnya"
                >
                  <svg
                    width="18"
                    height="18"
                    style={{ width: '18px', height: '18px' }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Tombol Panah Kanan di Pinggir Kartu */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="testi-arrow-side testi-arrow-right"
                  aria-label="Testimoni berikutnya"
                >
                  <svg
                    width="18"
                    height="18"
                    style={{ width: '18px', height: '18px' }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <article
                  className="testi-card-active"
                  style={{
                    background: 'linear-gradient(135deg, #F0F7FF 0%, #DFEEFE 45%, #BFDCFE 100%)',
                    color: '#0B1F3B',
                    borderRadius: '24px',
                    border: '1.5px solid #93C5FD',
                    boxShadow: '0 20px 45px -12px rgba(37, 99, 235, 0.22), 0 4px 12px -2px rgba(37, 99, 235, 0.08)',
                  }}
                >
                  <div
                    key={animKey}
                    className={slideDirection === 'next' ? 'testi-anim-next' : 'testi-anim-prev'}
                  >
                    {/* Ikon Kutipan Berwarna Biru Mumtaz */}
                    <svg
                      width="26"
                      height="26"
                      className="testi-quote-icon mb-3 shrink-0"
                      style={{
                        width: '26px',
                        height: '26px',
                        maxWidth: '26px',
                        maxHeight: '26px',
                        fill: '#2563EB',
                      }}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    {/* Teks Ulasan Profesional */}
                    <blockquote
                      className="text-[15px] sm:text-[16.5px] leading-relaxed font-semibold text-[#0B1F3B]"
                      style={{ color: '#0B1F3B' }}
                    >
                      &ldquo;{currentItem.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Segitiga / Ekor Balon Chat */}
                  <div
                    className="testi-bubble-tail"
                    style={{
                      backgroundColor: '#BFDCFE',
                      borderBottom: '1.5px solid #93C5FD',
                      borderRight: '1.5px solid #93C5FD',
                    }}
                    aria-hidden="true"
                  ></div>
                </article>
              </div>

              {/* Identitas Pengulas di Bawah Balon */}
              <div
                key={`author-${animKey}`}
                className={`text-center mt-4 sm:mt-5 ${slideDirection === 'next' ? 'testi-anim-next' : 'testi-anim-prev'}`}
              >
                <h4 className="font-semibold text-sm sm:text-[14.5px] text-[#0B1F3B] tracking-tight">
                  {currentItem.name}
                </h4>
                <p className="text-xs text-[#64748B] mt-0.5">
                  {currentItem.level}
                </p>
              </div>
            </div>

            {/* KARTU KANAN: Testimoni Berikutnya (Pudar, Animasi Masuk dari Kanan Saat Scroll) */}
            <div
              onClick={handleNext}
              className="testi-card-faded reveal-right delay-250"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNext()}
              aria-label={`Pilih testimoni berikutnya dari ${nextItem.name}`}
            >
              <div>
                <svg
                  width="20"
                  height="20"
                  className="testi-quote-icon-sm mb-2 shrink-0"
                  style={{ width: '20px', height: '20px', fill: '#94A3B8' }}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed line-clamp-5">
                  &ldquo;{nextItem.quote}&rdquo;
                </p>
              </div>
              <div className="mt-4 text-center">
                <p className="font-medium text-xs text-[#64748B] truncate">
                  {nextItem.name}
                </p>
                <p className="text-[11px] text-[#94A3B8] truncate mt-0.5">
                  {nextItem.level}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
