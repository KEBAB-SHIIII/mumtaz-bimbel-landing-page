import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-white" id="tentang-kami">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal-left grid grid-cols-5 gap-3 sm:gap-4">
            <div className="photo-frame col-span-3 aspect-[3/4] rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80"
                alt="Siswa belajar bersama tutor"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-3 sm:gap-4 pt-10">
              <div className="photo-frame aspect-square rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80"
                  alt="Siswa belajar dengan laptop"
                  loading="lazy"
                />
              </div>
              <div className="photo-frame aspect-square rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80"
                  alt="Siswa mengerjakan latihan soal"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15]">
              Belajar lebih dekat, nyaman, dan <span className="text-[#2563EB]">benar-benar paham</span>
            </h2>
            <p className="text-[#475569] mt-5 leading-relaxed">
              Bimbel Mumtaz melayani keluarga di Sampit yang ingin anaknya mendapat perhatian penuh. Tutor datang ke rumah, mengenali cara belajar anak, lalu menyusun materi dari pelajaran sekolahnya sendiri.
            </p>
            <ul className="mt-7 space-y-3.5 text-[15px]">
              <li className="about-check-item reveal-element delay-75 flex gap-3">
                <span className="material-symbols-outlined text-[#2563EB] text-[22px]">check_circle</span>
                Tutor datang ke rumah, tanpa antar jemput
              </li>
              <li className="about-check-item reveal-element delay-150 flex gap-3">
                <span className="material-symbols-outlined text-[#2563EB] text-[22px]">check_circle</span>
                Materi mengikuti kurikulum sekolah anak
              </li>
              <li className="about-check-item reveal-element delay-250 flex gap-3">
                <span className="material-symbols-outlined text-[#2563EB] text-[22px]">check_circle</span>
                Perkembangan dilaporkan berkala ke orang tua
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
