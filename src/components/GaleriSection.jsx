import React from 'react';

const BASE = import.meta.env.BASE_URL;

const GALLERY_PHOTOS = [
  {
    src: `${BASE}assets/images/Belajar_Fokus.jpeg`,
    alt: 'Pendampingan belajar anak di rumah',
    caption: 'Pendampingan telaten',
    slotClass: 'gallery-slot-hero',
    objectPosition: 'center 25%',
    width: 846,
    height: 1200,
  },
  {
    src: `${BASE}assets/images/belajarfokus.jpg`,
    alt: 'Diskusi soal latihan',
    caption: 'Diskusi soal',
    slotClass: 'gallery-slot-land-top',
    objectPosition: 'center 20%',
    width: 1200,
    height: 900,
  },
  {
    src: `${BASE}assets/images/mengerjakansoal.jpeg`,
    alt: 'Latihan soal terarah',
    caption: 'Latihan soal',
    slotClass: 'gallery-slot-land-bottom',
    objectPosition: 'center 18%',
    width: 900,
    height: 1200,
  },
  {
    src: `${BASE}assets/images/foto_mengaji.jpeg`,
    alt: 'Bimbingan mengaji',
    caption: 'Bimbingan mengaji',
    slotClass: 'gallery-slot-mengaji',
    objectPosition: 'center 35%',
    width: 675,
    height: 1200,
  },
  {
    src: `${BASE}assets/images/belajar_fokus.jpg`,
    alt: 'Belajar fokus bersama tutor',
    caption: 'Belajar fokus',
    slotClass: 'gallery-slot-fokus',
    objectPosition: 'center 22%',
    width: 554,
    height: 1200,
  },
];

export default function GaleriSection() {
  return (
    <section className="section-blue-galeri py-20 sm:py-28 overflow-hidden w-full max-w-full" id="galeri">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="reveal-element max-w-xl mb-12">
          <h2 className="section-heading-h2">
            Galeri kegiatan belajar
          </h2>
          <p className="section-subtitle-p mt-3.5">Suasana bimbingan belajar Mumtaz.</p>
        </div>

        {/* Satu kali scroll pada kontainer galeri langsung memicu animasi berurutan untuk ke-5 foto */}
        <div className="gallery-bento reveal-element gallery-stagger-group">
          {GALLERY_PHOTOS.map((photo) => (
            <figure
              key={photo.src}
              className={`gallery-item gallery-stagger-item ${photo.slotClass}`.trim()}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                style={{ objectPosition: photo.objectPosition }}
                loading="lazy"
              />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
