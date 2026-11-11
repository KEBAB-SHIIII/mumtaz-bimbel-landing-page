import React, { useState } from 'react';

const FAQ_DATA = [
  {
    q: 'Apakah tutor datang ke rumah?',
    a: 'Ya. Semua program berbasis kunjungan ke rumah siswa di wilayah Sampit sesuai jadwal yang disepakati.',
    delay: 'delay-75',
  },
  {
    q: 'Jenjang apa saja yang dilayani?',
    a: "TK, SD, SMP, SMA termasuk persiapan SNBT/UTBK, serta privat mengaji Al-Qur'an.",
    delay: 'delay-150',
  },
  {
    q: 'Bagaimana jadwal belajarnya?',
    a: 'Fleksibel. Pilih sesi pagi, siang, sore, atau malam dari Senin sampai Sabtu.',
    delay: 'delay-200',
  },
  {
    q: 'Berapa biayanya?',
    a: 'Biaya mengikuti jenjang dan jumlah pertemuan per bulan. Hubungi admin lewat WhatsApp untuk rincian paket.',
    delay: 'delay-250',
  },
  {
    q: 'Bagaimana cara mendaftar?',
    a: 'Isi formulir di bagian Kontak atau kirim pesan WhatsApp. Tim kami akan menghubungi Anda dan mengatur jadwal tutor.',
    delay: 'delay-300',
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-white" id="faq">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="reveal-element max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15] text-[#0B1F3B]">
            Pertanyaan yang sering ditanyakan
          </h2>
          <p className="text-[#475569] mt-3.5 text-base sm:text-lg leading-relaxed">
            Jawaban cepat seputar layanan Bimbel Mumtaz.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div key={item.q} className={`reveal-element ${item.delay}`}>
                <article className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button
                    className="faq-trigger"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setActiveIndex(isOpen ? -1 : idx)}
                  >
                    <span>{item.q}</span>
                    <div className="faq-icon-wrapper" aria-hidden="true">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>
                  <div className="faq-collapse">
                    <div className="faq-answer-inner">
                      <p className="text-sm sm:text-[0.95rem] text-[#475569] leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
