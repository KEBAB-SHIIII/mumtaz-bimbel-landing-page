import React, { useState, useRef, useEffect } from 'react';

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
    level: 'Kelas 9 • SMPIT Arafah Sampit',
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

function FadedTestimoniCard({ item, onSelect, ariaLabel }) {
  return (
    <div
      onClick={onSelect}
      className="testi-card-faded"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      aria-label={ariaLabel}
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
        <p className="testi-card-faded-quote">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>
      <div className="mt-4 text-center">
        <p className="testi-card-faded-name">
          {item.name}
        </p>
        <p className="testi-card-faded-level">
          {item.level}
        </p>
      </div>
    </div>
  );
}

function ActiveTestimoniCard({ item }) {
  return (
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
      <div>
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
          &ldquo;{item.quote}&rdquo;
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
  );
}

function ActiveTestimoniAuthor({ item }) {
  return (
    <div className="text-center">
      <h4 className="font-semibold text-sm sm:text-[14.5px] text-[#0B1F3B] tracking-tight">
        {item.name}
      </h4>
      <p className="text-xs text-[#2563EB] font-medium mt-0.5">
        {item.level}
      </p>
    </div>
  );
}

export default function TestimoniSection() {
  const [slideState, setSlideState] = useState({
    current: 0,
    prev: null,
    dir: 'next',
    seq: 0,
  });
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const total = TESTIMONIALS_DATA.length;

  const getIndex = (baseIndex, offset) => {
    return (baseIndex + offset + total) % total;
  };

  useEffect(() => {
    if (slideState.prev === null) return;
    const timer = setTimeout(() => {
      setSlideState((s) => ({ ...s, prev: null }));
    }, 470);
    return () => clearTimeout(timer);
  }, [slideState.seq, slideState.prev]);

  const handlePrev = () => {
    setSlideState((s) => ({
      current: s.current <= 0 ? total - 1 : s.current - 1,
      prev: s.current,
      dir: 'prev',
      seq: s.seq + 1,
    }));
  };

  const handleNext = () => {
    setSlideState((s) => ({
      current: s.current >= total - 1 ? 0 : s.current + 1,
      prev: s.current,
      dir: 'next',
      seq: s.seq + 1,
    }));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY) * 1.2) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const enterAnimClass =
    slideState.seq > 0
      ? slideState.dir === 'next'
        ? 'testi-push-in-right'
        : 'testi-push-in-left'
      : '';
  const exitAnimClass =
    slideState.dir === 'next' ? 'testi-push-out-left' : 'testi-push-out-right';

  const prevItem = TESTIMONIALS_DATA[getIndex(slideState.current, -1)];
  const currentItem = TESTIMONIALS_DATA[slideState.current];
  const nextItem = TESTIMONIALS_DATA[getIndex(slideState.current, 1)];

  const exitingPrevItem =
    slideState.prev !== null ? TESTIMONIALS_DATA[getIndex(slideState.prev, -1)] : null;
  const exitingCurrentItem =
    slideState.prev !== null ? TESTIMONIALS_DATA[slideState.prev] : null;
  const exitingNextItem =
    slideState.prev !== null ? TESTIMONIALS_DATA[getIndex(slideState.prev, 1)] : null;

  return (
    <section className="section-testimoni overflow-hidden w-full max-w-full" id="testimoni">
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
            {/* KARTU KIRI: Testimoni Sebelumnya (Pudar Abu-abu, Tersembunyi di Mobile) */}
            <div className="testi-side-col reveal-left delay-150">
              <div className="testi-side-viewport">
                {exitingPrevItem && (
                  <div
                    key={`exit-left-${slideState.seq}`}
                    className={`testi-slide-layer testi-side-exit ${exitAnimClass}`}
                    aria-hidden="true"
                  >
                    <FadedTestimoniCard
                      item={exitingPrevItem}
                      onSelect={handlePrev}
                      ariaLabel={`Pilih testimoni sebelumnya dari ${exitingPrevItem.name}`}
                    />
                  </div>
                )}
                <div
                  key={`enter-left-${slideState.seq}`}
                  className={`testi-slide-layer ${enterAnimClass}`}
                >
                  <FadedTestimoniCard
                    item={prevItem}
                    onSelect={handlePrev}
                    ariaLabel={`Pilih testimoni sebelumnya dari ${prevItem.name}`}
                  />
                </div>
              </div>
            </div>

            {/* KARTU TENGAH: Testimoni Terpilih (Transisi Geser Penuh Ala PPT) */}
            <div className="testi-center-col relative reveal-pop delay-200">
              {/* Pembungkus Balon Chat dengan Tombol Panah Tetap di Sisi Kiri & Kanan */}
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

                <div className="testi-slide-viewport">
                  {exitingCurrentItem && (
                    <div
                      key={`exit-center-${slideState.seq}`}
                      className={`testi-slide-layer testi-slide-exit ${exitAnimClass}`}
                      aria-hidden="true"
                    >
                      <ActiveTestimoniCard item={exitingCurrentItem} />
                    </div>
                  )}
                  <div
                    key={`enter-center-${slideState.seq}`}
                    className={`testi-slide-layer ${enterAnimClass}`}
                  >
                    <ActiveTestimoniCard item={currentItem} />
                  </div>
                </div>
              </div>

              {/* Identitas Pengulas di Bawah Balon */}
              <div className="testi-author-viewport">
                {exitingCurrentItem && (
                  <div
                    key={`exit-author-${slideState.seq}`}
                    className={`testi-slide-layer testi-author-exit ${exitAnimClass}`}
                    aria-hidden="true"
                  >
                    <ActiveTestimoniAuthor item={exitingCurrentItem} />
                  </div>
                )}
                <div
                  key={`enter-author-${slideState.seq}`}
                  className={`testi-slide-layer ${enterAnimClass}`}
                >
                  <ActiveTestimoniAuthor item={currentItem} />
                </div>
              </div>
            </div>

            {/* KARTU KANAN: Testimoni Berikutnya (Pudar Abu-abu, Tersembunyi di Mobile) */}
            <div className="testi-side-col reveal-right delay-250">
              <div className="testi-side-viewport">
                {exitingNextItem && (
                  <div
                    key={`exit-right-${slideState.seq}`}
                    className={`testi-slide-layer testi-side-exit ${exitAnimClass}`}
                    aria-hidden="true"
                  >
                    <FadedTestimoniCard
                      item={exitingNextItem}
                      onSelect={handleNext}
                      ariaLabel={`Pilih testimoni berikutnya dari ${exitingNextItem.name}`}
                    />
                  </div>
                )}
                <div
                  key={`enter-right-${slideState.seq}`}
                  className={`testi-slide-layer ${enterAnimClass}`}
                >
                  <FadedTestimoniCard
                    item={nextItem}
                    onSelect={handleNext}
                    ariaLabel={`Pilih testimoni berikutnya dari ${nextItem.name}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
