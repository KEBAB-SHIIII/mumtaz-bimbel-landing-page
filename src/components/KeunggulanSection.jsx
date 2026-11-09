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
            <p className="text-[#475569] mt-4 max-w-lg leading-relaxed">
              Di kelas yang penuh, guru sulit mendampingi satu per satu. Di rumah, anak bebas bertanya tanpa rasa malu.
            </p>

            <div className="mt-9 space-y-5">
              <div className="benefit-row reveal-element delay-75 flex gap-4">
                <span className="benefit-icon">1</span>
                <div>
                  <h3 className="font-bold">Pembelajaran privat</h3>
                  <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                    Satu tutor untuk satu anak, tanpa gangguan teman sekelas.
                  </p>
                </div>
              </div>
              <div className="benefit-row reveal-element delay-150 flex gap-4">
                <span className="benefit-icon">2</span>
                <div>
                  <h3 className="font-bold">Pendampingan personal</h3>
                  <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                    Tutor sabar dan ramah sehingga anak berani bertanya.
                  </p>
                </div>
              </div>
              <div className="benefit-row reveal-element delay-200 flex gap-4">
                <span className="benefit-icon">3</span>
                <div>
                  <h3 className="font-bold">Jadwal fleksibel</h3>
                  <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                    Pagi sampai malam, Senin sampai Sabtu, sesuai rutinitas keluarga.
                  </p>
                </div>
              </div>
              <div className="benefit-row reveal-element delay-300 flex gap-4">
                <span className="benefit-icon">4</span>
                <div>
                  <h3 className="font-bold">Metode sesuai kebutuhan</h3>
                  <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                    Cara mengajar disesuaikan dengan gaya belajar tiap siswa.
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
