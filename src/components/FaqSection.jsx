import React, { useState } from 'react';

const FAQ_DATA = [
  {
    q: 'Bagaimana sistem belajar di Bimbel Mumtaz?',
    a: 'Sistem belajar kami adalah 1 Guru 1 Murid (Privat), di mana guru akan datang langsung ke rumah siswa sehingga anak bisa lebih fokus.',
    delay: 'delay-75',
  },
  {
    q: 'Untuk jenjang pendidikan apa saja?',
    a: 'Kami melayani jenjang Pra-sekolah, PAUD, TK, SD, SMP dan SMA.',
    delay: 'delay-100',
  },
  {
    q: 'Bagaimana jadwal belajarnya?',
    a: 'Jadwal belajar kami sangat fleksibel dan dapat disesuaikan dengan rutinitas harian anak di rumah.',
    delay: 'delay-150',
  },
  {
    q: 'Apa saja materi yang diajarkan?',
    a: "Kami mengajarkan Pelajaran Umum (SD-SMA), Agama, Bahasa Arab, Bahasa Inggris, Calistung, hingga Mengaji Iqro/Al-Qur'an.",
    delay: 'delay-200',
  },
  {
    q: '1 pertemuan durasinya berapa lama?',
    a: 'Durasi belajarnya 1 pertemuan maksimal 1 jam.',
    delay: 'delay-250',
  },
  {
    q: 'Berapa biaya les atau daftar harga (price list) per bulannya?',
    a: 'Biaya les kami sangat terjangkau dan bervariasi menyesuaikan jenjang pendidikan anak. Untuk detail price list lengkap, silakan hubungi admin kami melalui WhatsApp.',
    delay: 'delay-300',
  },
  {
    q: 'Bagaimana sistem pembayarannya?',
    a: 'Pembayaran dihitung berdasarkan jumlah kehadiran (absensi) anak dalam satu bulan. Total tagihan tersebut dibayarkan sekaligus satu kali pada setiap awal bulan.',
    delay: 'delay-350',
  },
  {
    q: 'Bagaimana cara mendaftarnya?',
    a: 'Silakan mengisi formulir pada bagian Kontak atau menghubungi kami melalui pesan WhatsApp. Tim kami akan dengan senang hati menghubungi Anda kembali untuk mengatur jadwal tutor.',
    delay: 'delay-400',
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
