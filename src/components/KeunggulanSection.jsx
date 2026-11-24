import React from 'react';

export default function KeunggulanSection() {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden w-full max-w-full" id="keunggulan">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="tablet-12col-grid grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-8 lg:gap-14 items-stretch">
          <div className="reveal-left md-col-span-5 lg:col-span-5 flex">
            <div className="photo-frame keunggulan-photo-frame rounded-[32px] w-full">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=640&h=800&q=75"
                alt="Siswa berdiskusi dan belajar bersama"
                width="640"
                height="800"
                decoding="async"
                loading="lazy"
              />
            </div>
          </div>

          <div className="reveal-right md-col-span-7 lg:col-span-7 flex flex-col justify-center">
            <h2 className="section-heading-h2">
              Kenapa memilih Bimbel Mumtaz
            </h2>

            <div className="mt-7 space-y-4">
              <div className="benefit-row reveal-element delay-75 flex gap-4">
                <span className="benefit-icon">1</span>
                <div>
                  <h3 className="item-heading-title">Guru Datang ke Rumah &amp; Pendampingan Personal (1-on-1)</h3>
                  <p className="item-body-text mt-1">
                    Solusi praktis bagi orang tua yang sibuk tanpa perlu mengantar anak les, dengan sesi privat eksklusif satu guru satu murid agar belajar lebih fokus, interaktif, dan mudah dipahami.
                  </p>
                </div>
              </div>
              <div className="benefit-row reveal-element delay-150 flex gap-4">
                <span className="benefit-icon">2</span>
                <div>
                  <h3 className="item-heading-title">Pengajar Berpengalaman dan Sabar</h3>
                  <p className="item-body-text mt-1">
                    Didukung oleh tenaga pendidik yang profesional, ramah, dan telaten menghadapi berbagai karakter anak.
                  </p>
                </div>
              </div>
              <div className="benefit-row reveal-element delay-200 flex gap-4">
                <span className="benefit-icon">3</span>
                <div>
                  <h3 className="item-heading-title">Cakupan Luas dan Lengkap</h3>
                  <p className="item-body-text mt-1">
                    Melayani jenjang pendidikan dari PAUD, TK sampai SMA, mencakup pelajaran sekolah umum hingga bimbingan mengaji.
                  </p>
                </div>
              </div>
              <div className="benefit-row reveal-element delay-250 flex gap-4">
                <span className="benefit-icon">4</span>
                <div>
                  <h3 className="item-heading-title">Jadwal Fleksibel</h3>
                  <p className="item-body-text mt-1">
                    Waktu belajar dapat disesuaikan dengan kenyamanan dan kesibukan siswa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
