import React, { useState, useRef, useEffect } from 'react';
import { OFFICIAL_WA_NUMBER, OFFICIAL_WA_DISPLAY } from './Footer';

const PROGRAM_OPTIONS = [
  { value: 'tk', label: 'Privat TK', tag: 'Usia Dini', waLabel: 'Privat TK (Usia Dini)' },
  { value: 'sd', label: 'Privat SD', tag: 'Kelas 1–6', waLabel: 'Privat SD (Kelas 1-6)' },
  { value: 'smp', label: 'Privat SMP', tag: 'Kelas 7–9', waLabel: 'Privat SMP (Kelas 7-9)' },
  { value: 'sma', label: 'Privat SMA', tag: 'Kelas 10–12', waLabel: 'Privat SMA (Saintek, Soshum, UTBK)' },
  { value: 'mengaji', label: "Privat Mengaji Al-Qur'an", tag: 'Semua Usia', waLabel: "Privat Mengaji Al-Qur'an" },
];

export default function KontakSection() {
  const [parentName, setParentName] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [messageNotes, setMessageNotes] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedWaUrl, setSubmittedWaUrl] = useState('');

  const dropdownRef = useRef(null);
  const triggerBtnRef = useRef(null);

  const selectedProgram = PROGRAM_OPTIONS.find((opt) => opt.value === educationLevel);

  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };
    document.addEventListener('click', handleOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('click', handleOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!educationLevel) {
      setDropdownOpen(true);
      if (triggerBtnRef.current) triggerBtnRef.current.focus();
      return;
    }
    if (!parentName.trim() || !homeAddress.trim() || !messageNotes.trim()) {
      alert('Mohon lengkapi seluruh kolom formulir sebelum mengirim.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const programLabel = selectedProgram ? selectedProgram.waLabel : educationLevel;
      const waMessage = encodeURIComponent(
        `Halo Bimbel Mumtaz Sampit, saya *${parentName.trim()}* (${homeAddress.trim()}) ingin mendaftar *${programLabel}* ke rumah.\n\nJadwal & Catatan: ${messageNotes.trim()}`
      );
      const waUrl = `https://wa.me/${OFFICIAL_WA_NUMBER}?text=${waMessage}`;
      setSubmittedWaUrl(waUrl);
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      setParentName('');
      setHomeAddress('');
      setEducationLevel('');
      setMessageNotes('');
    }, 400);
  };

  return (
    <section className="section-blue-kontak py-20 sm:py-28" id="kontak">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="reveal-element contact-shell grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Left Blue Card */}
          <div className="lg:col-span-5 contact-left-card">
            <div className="contact-illust-header" aria-hidden="true">
              <svg viewBox="0 0 380 205" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="skyHeaderGrad" x1="190" y1="0" x2="190" y2="175" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D7E8FF" />
                    <stop offset="0.55" stopColor="#9BC5FF" />
                    <stop offset="1" stopColor="#4B89F5" />
                  </linearGradient>
                  <linearGradient id="houseWall" x1="145" y1="50" x2="255" y2="148" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF" />
                    <stop offset="1" stopColor="#DCEBFF" />
                  </linearGradient>
                  <linearGradient id="roofGrad" x1="135" y1="25" x2="265" y2="95" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#60A5FA" />
                    <stop offset="1" stopColor="#2563EB" />
                  </linearGradient>
                </defs>
                <rect width="380" height="205" fill="url(#skyHeaderGrad)" />
                <circle cx="95" cy="95" r="62" fill="#EBF3FF" opacity="0.45" />
                <circle cx="290" cy="110" r="68" fill="#2563EB" opacity="0.32" />
                <path d="M0 148C68 128 145 162 235 160C305 158 348 138 380 144V205H0V148Z" fill="#2563EB" />
                <ellipse cx="195" cy="150" rx="122" ry="18" fill="#60A5FA" opacity="0.55" />
                <ellipse cx="195" cy="146" rx="108" ry="13" fill="#93C5FD" opacity="0.7" />

                <g transform="translate(76, 84)">
                  <rect x="0" y="42" width="68" height="18" rx="4" fill="#1E40AF" />
                  <rect x="4" y="45" width="58" height="12" rx="2" fill="#F1F5F9" />
                  <path d="M0 46H52C55 46 55 56 52 56H0V46Z" fill="#2563EB" />
                  <rect x="4" y="23" width="64" height="18" rx="4" fill="#2563EB" />
                  <rect x="8" y="26" width="54" height="12" rx="2" fill="#FFFFFF" />
                  <path d="M4 27H50C53 27 53 37 50 37H4V27Z" fill="#3B82F6" />
                  <rect x="2" y="4" width="66" height="18" rx="4" fill="#3B82F6" />
                  <rect x="6" y="7" width="56" height="12" rx="2" fill="#F8FAFC" />
                  <path d="M2 8H54C57 8 57 18 54 18H2V8Z" fill="#60A5FA" />
                </g>

                <g transform="translate(136, 22)">
                  <rect x="10" y="114" width="104" height="12" rx="4" fill="#93C5FD" />
                  <path d="M18 58L62 20L106 58V114H18V58Z" fill="url(#houseWall)" />
                  <rect x="30" y="72" width="24" height="42" rx="3" fill="#60A5FA" />
                  <rect x="34" y="77" width="7" height="18" rx="1.5" fill="#DBEAFE" />
                  <rect x="43" y="77" width="7" height="18" rx="1.5" fill="#DBEAFE" />
                  <rect x="64" y="70" width="28" height="28" rx="4" fill="#60A5FA" />
                  <rect x="68" y="74" width="8.5" height="8.5" rx="1" fill="#DBEAFE" />
                  <rect x="79.5" y="74" width="8.5" height="8.5" rx="1" fill="#DBEAFE" />
                  <rect x="68" y="85.5" width="8.5" height="8.5" rx="1" fill="#DBEAFE" />
                  <rect x="79.5" y="85.5" width="8.5" height="8.5" rx="1" fill="#DBEAFE" />
                  <path d="M6 62L62 12L118 62L110 70L62 27L14 70L6 62Z" fill="url(#roofGrad)" />
                  <path d="M62 12L118 62L110 70L62 27V12Z" fill="#1D4ED8" />
                </g>

                <g className="svg-sparks">
                  <path d="M262 36L268 22" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round" />
                  <path d="M273 44L285 33" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round" />
                  <path d="M278 55L292 51" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round" />
                </g>

                <g transform="translate(248, 72)">
                  <g transform="rotate(-10 14 25)">
                    <rect x="8" y="8" width="9" height="36" fill="#F97316" />
                    <polygon points="8,8 12.5,0 17,8" fill="#FDE68A" />
                    <polygon points="11,3 12.5,0 14,3" fill="#1E293B" />
                  </g>
                  <rect x="21" y="4" width="9" height="40" fill="#F59E0B" />
                  <polygon points="21,4 25.5,-5 30,4" fill="#FDE68A" />
                  <polygon points="24,-2 25.5,-5 27,-2" fill="#1E293B" />
                  <g transform="rotate(12 38 25)">
                    <rect x="33" y="8" width="9" height="36" fill="#FB923C" />
                    <polygon points="33,8 37.5,0 42,8" fill="#FDE68A" />
                    <polygon points="36,3 37.5,0 39,3" fill="#1E293B" />
                  </g>
                  <rect x="6" y="34" width="40" height="40" rx="6" fill="#3B82F6" />
                  <path d="M26 34H40C43.3 34 46 36.7 46 40V68C46 71.3 43.3 74 40 74H26V34Z" fill="#2563EB" />
                  <ellipse cx="26" cy="34" rx="20" ry="4" fill="#93C5FD" />
                </g>
              </svg>
            </div>

            <div className="contact-left-body">
              <h2 className="text-2xl sm:text-[26px] font-extrabold tracking-tight leading-[1.18] text-white">
                Undang tutor Mumtaz ke rumah Anda
              </h2>
              <p className="text-white/90 text-xs sm:text-sm mt-2.5 leading-relaxed">
                Ceritakan kebutuhan belajar anak. Kami bantu atur jadwal dan pilihkan tutor yang cocok.
              </p>

              <ul className="mt-5 space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-3">
                  <span className="contact-icon-badge">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                  </span>
                  <div>
                    <strong className="block font-bold text-white">Alamat</strong>
                    <span className="text-white/85 leading-snug block mt-0.5">
                      Jl. H. Ikap No.1, Mentawa Baru Hilir, Kec. Mentawa Baru Ketapang, Kabupaten Kotawaringin Timur, Kalimantan Tengah 74321, Indonesia
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="contact-icon-badge">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                  </span>
                  <div>
                    <strong className="block font-bold text-white">Jam belajar</strong>
                    <span className="text-white/85 leading-snug block mt-0.5">
                      Setiap Hari (Senin–Minggu), 08.00 – 21.00 WIB (Jam Sesi Fleksibel)
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="contact-icon-badge">
                    <span className="material-symbols-outlined text-[18px]">call</span>
                  </span>
                  <div>
                    <strong className="block font-bold text-white">WhatsApp admin</strong>
                    <span className="text-white/85 leading-snug block mt-0.5">{OFFICIAL_WA_DISPLAY}</span>
                  </div>
                </li>
              </ul>

              <div className="mt-6 relative z-10">
                <a
                  href={`https://wa.me/${OFFICIAL_WA_NUMBER}?text=Halo%20Bimbel%20Mumtaz%20Sampit,%20saya%20ingin%20konsultasi%20les%20privat%20ke%20rumah.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#2563EB] hover:bg-[#EFF6FF] font-bold text-xs sm:text-sm shadow-lg shadow-[#0B1F3B]/15 transition-all hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-[18px]">sms</span>
                  <span>Chat via WhatsApp</span>
                </a>
              </div>

              <svg className="contact-corner-leaves" viewBox="0 0 120 110" fill="none" aria-hidden="true">
                <path d="M68 110C64 84 74 56 92 34" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
                <path d="M74 74C56 68 44 54 46 42C60 44 72 56 74 74Z" fill="#60A5FA" opacity="0.45" />
                <path d="M82 54C74 36 78 20 88 14C96 26 92 42 82 54Z" fill="#93C5FD" opacity="0.5" />
                <path d="M78 88C92 78 108 76 116 82C108 94 92 96 78 88Z" fill="#60A5FA" opacity="0.45" />
                <path d="M56 108C40 100 28 88 28 76C42 78 54 90 56 108Z" fill="#60A5FA" opacity="0.35" />
              </svg>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 contact-right-card">
            <h3 className="font-extrabold text-xl sm:text-2xl text-[#0B1F3B] tracking-tight">Formulir pendaftaran</h3>
            <p className="text-[#475569] text-xs sm:text-sm mt-1 mb-5">
              Isi data singkat. Kami hubungi Anda secepatnya.
            </p>

            <form className="space-y-3.5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3B] mb-1.5" htmlFor="parentName">
                    Nama orang tua / wali
                  </label>
                  <input
                    className="form-field"
                    id="parentName"
                    placeholder="Contoh: Ibu Ristina"
                    required
                    type="text"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3B] mb-1.5" htmlFor="homeAddress">
                    Alamat domisili
                  </label>
                  <input
                    className="form-field"
                    id="homeAddress"
                    placeholder="Contoh: Jl. Ahmad Yani"
                    required
                    type="text"
                    value={homeAddress}
                    onChange={(e) => setHomeAddress(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-bold text-[#0B1F3B] mb-1.5"
                  id="programDropdownLabel"
                  htmlFor="programDropdownBtn"
                >
                  Program
                </label>
                <div
                  ref={dropdownRef}
                  className={`custom-select ${dropdownOpen ? 'is-open' : ''}`}
                  id="programCustomSelect"
                >
                  <button
                    ref={triggerBtnRef}
                    type="button"
                    className="custom-select-trigger"
                    id="programDropdownBtn"
                    aria-haspopup="listbox"
                    aria-expanded={dropdownOpen}
                    aria-labelledby="programDropdownLabel"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDropdownOpen((prev) => !prev);
                    }}
                  >
                    <span className={`custom-select-value ${selectedProgram ? '' : 'is-placeholder'}`}>
                      <span>{selectedProgram ? selectedProgram.label : 'Pilih program'}</span>
                    </span>
                    <svg
                      className="custom-select-arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <ul
                    className="custom-select-menu"
                    id="programDropdownMenu"
                    role="listbox"
                    aria-labelledby="programDropdownLabel"
                  >
                    {PROGRAM_OPTIONS.map((opt) => {
                      const isSelected = educationLevel === opt.value;
                      return (
                        <li
                          key={opt.value}
                          className={`custom-select-option ${isSelected ? 'is-selected' : ''}`}
                          role="option"
                          aria-selected={isSelected}
                          tabIndex={0}
                          onClick={(e) => {
                            e.stopPropagation();
                            setEducationLevel(opt.value);
                            setDropdownOpen(false);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setEducationLevel(opt.value);
                              setDropdownOpen(false);
                              if (triggerBtnRef.current) triggerBtnRef.current.focus();
                            }
                          }}
                        >
                          <span className="option-title">{opt.label}</span>
                          <span className="option-tag">{opt.tag}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0B1F3B] mb-1.5" htmlFor="messageNotes">
                  Waktu belajar dan catatan
                </label>
                <textarea
                  className="form-field resize-none"
                  id="messageNotes"
                  placeholder="Contoh: Selasa dan Kamis sore, pukul 16.00 WIB"
                  required
                  rows={2}
                  value={messageNotes}
                  onChange={(e) => setMessageNotes(e.target.value)}
                />
              </div>

              <button className="btn-sky w-full py-3 rounded-xl text-sm" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Mengirim Permohonan...</span>
                  </>
                ) : (
                  'Kirim Permohonan'
                )}
              </button>
            </form>

            {submittedWaUrl && (
              <div className="mt-4 p-4 rounded-xl bg-[#F0F7FF] border border-[#DBEAFE] flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#2563EB] font-semibold text-sm">
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  <span>Terima kasih, permohonan Anda terkirim.</span>
                </div>
                <p className="text-xs text-[#475569]">Tim Bimbel Mumtaz akan segera menghubungi Anda.</p>
                <div>
                  <a
                    href={submittedWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-xl bg-[#2563EB] text-white font-bold text-xs hover:bg-[#1D4ED8] transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Lanjutkan ke WhatsApp Admin ({OFFICIAL_WA_DISPLAY})</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
