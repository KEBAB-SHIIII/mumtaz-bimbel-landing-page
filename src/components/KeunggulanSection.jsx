import React from 'react';

export default function KeunggulanSection() {
  return (
    <section className="py-20 sm:py-28 bg-white" id="keunggulan">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="reveal-left lg:col-span-5">
            <div className="photo-frame aspect-[4/5] rounded-[32px]">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                alt="Siswa berdiskusi dan belajar bersama"
                loading="lazy"
              />
            </div>
          </div>

          <div className="reveal-right lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15]">
              Kenapa memilih Bimbel Mumtaz
            </h2>

            <div className="mt-7 space-y-4">
              <div className="benefit-row reveal-element delay-75 flex gap-4">
                <span className="benefit-icon">1</span>
                <div>
                  <h3 className="font-bold">Guru Datang ke Rumah</h3>
                  <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                    Menjadi solusi praktis bagi orang tua yang sibuk dan tidak sempat mengantar anak les.
                  </p>
                </div>
              </div>
              <div className="benefit-row reveal-element delay-150 flex gap-4">
                <span className="benefit-icon">2</span>
                <div>
                  <h3 className="font-bold">Pendampingan Personal (1-on-1)</h3>
                  <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                    Sesi privat eksklusif satu guru satu murid membuat proses belajar lebih fokus, interaktif, dan mudah dipahami.
                  </p>
                </div>
              </div>
              <div className="benefit-row reveal-element delay-200 flex gap-4">
                <span className="benefit-icon">3</span>
                <div>
                  <h3 className="font-bold">Pengajar Berpengalaman dan Sabar</h3>
                  <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                    Didukung oleh tenaga pendidik yang profesional, ramah, dan telaten menghadapi berbagai karakter anak.
                  </p>
                </div>
              </div>
              <div className="benefit-row reveal-element delay-250 flex gap-4">
                <span className="benefit-icon">4</span>
                <div>
                  <h3 className="font-bold">Cakupan Luas dan Lengkap</h3>
                  <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                    Melayani jenjang pendidikan dari TK sampai SMA, mencakup pelajaran sekolah umum hingga bimbingan mengaji.
                  </p>
                </div>
              </div>
              <div className="benefit-row reveal-element delay-300 flex gap-4">
                <span className="benefit-icon">5</span>
                <div>
                  <h3 className="font-bold">Jadwal Fleksibel</h3>
                  <p className="text-sm text-[#475569] mt-1 leading-relaxed">
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
