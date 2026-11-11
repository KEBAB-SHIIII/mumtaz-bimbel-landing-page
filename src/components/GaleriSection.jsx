import React from 'react';

export default function GaleriSection() {
  return (
    <section className="section-blue-galeri py-20 sm:py-28" id="galeri">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="reveal-element max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15]">
            Galeri kegiatan belajar
          </h2>
          <p className="text-[#475569] mt-4">Suasana bimbingan belajar Mumtaz.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[190px] gap-3 sm:gap-4">
          <figure className="gallery-item reveal-scale col-span-2 row-span-2">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80"
              alt="Pendampingan belajar anak di rumah"
              loading="lazy"
            />
            <figcaption>Pendampingan telaten</figcaption>
          </figure>
          <figure className="gallery-item reveal-scale delay-100">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80"
              alt="Diskusi soal latihan"
              loading="lazy"
            />
            <figcaption>Diskusi soal</figcaption>
          </figure>
          <figure className="gallery-item reveal-scale delay-200">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80"
              alt="Bimbingan mengaji"
              loading="lazy"
            />
            <figcaption>Bimbingan mengaji</figcaption>
          </figure>
          <figure className="gallery-item reveal-scale delay-100">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80"
              alt="Belajar fokus bersama tutor"
              loading="lazy"
            />
            <figcaption>Belajar fokus</figcaption>
          </figure>
          <figure className="gallery-item reveal-scale delay-200">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80"
              alt="Latihan soal terarah"
              loading="lazy"
            />
            <figcaption>Latihan soal</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
