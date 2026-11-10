# Bimbel Mumtaz Sampit — Aplikasi Web React & Vite

Implementasi antarmuka web profil dan pendaftaran les privat guru datang ke rumah untuk Bimbel Mumtaz Sampit menggunakan React 18 dan Vite guna menampilkan program belajar (TK, SD, SMP, SMA, dan Mengaji Al-Qur'an), akordeon FAQ, serta formulir pendaftaran yang terhubung langsung ke WhatsApp Admin.

> **Status:** aplikasi frontend SPA berbasis komponen React dengan struktur standar Vite. Nomor WhatsApp `+62 812-3456-7890`, alamat, dan surel `salam@mumtazsampit.sch.id` merupakan data contoh yang siap disesuaikan dengan kontak resmi UMKM.

## Alur utama

1. Pengunjung membuka halaman utama yang dirender oleh [`src/App.jsx`](./src/App.jsx) dan menavigasi bagian halaman melalui [`Navbar.jsx`](./src/components/Navbar.jsx) yang otomatis bersembunyi saat layar digulir ke bawah dan muncul kembali saat digulir ke atas.
2. Hook [`useLandingAnimations.js`](./src/hooks/useLandingAnimations.js) menginisialisasi `IntersectionObserver` untuk menjalankan animasi kemunculan dua arah (`bidirectional scroll reveal`) serta penghitung angka statistik pada bagian Tentang Kami.
3. Pengunjung meninjau lima kartu program pada [`ProgramSection.jsx`](./src/components/ProgramSection.jsx), empat poin keunggulan pada [`KeunggulanSection.jsx`](./src/components/KeunggulanSection.jsx), dokumentasi kegiatan pada [`GaleriSection.jsx`](./src/components/GaleriSection.jsx), dan daftar pertanyaan umum pada [`FaqSection.jsx`](./src/components/FaqSection.jsx).
4. Pada [`KontakSection.jsx`](./src/components/KontakSection.jsx), orang tua memilih program melalui custom dropdown bebas ikon/emotikon (menampilkan nama program di sisi kiri dan pill tag jenjang di sisi kanan) lalu mengisi nama, alamat rumah, dan catatan jadwal.
5. Saat formulir disubmit, komponen memvalidasi state input, menyusun teks pesan WhatsApp terformat, menampilkan notifikasi sukses beserta tombol cadangan, dan membuka tautan `wa.me/6281234567890` di tab baru.

## Struktur direktori

```text
bimbel-mumtaz-react/
├── public/
│   └── assets/
│       └── images/
│           ├── logo-mumtaz.jpg
│           └── logo.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProgramSection.jsx
│   │   ├── KeunggulanSection.jsx
│   │   ├── GaleriSection.jsx
│   │   ├── FaqSection.jsx
│   │   ├── KontakSection.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingWhatsApp.jsx
│   ├── hooks/
│   │   └── useLandingAnimations.js
│   ├── styles/
│   │   ├── tailwind.css
│   │   ├── style.css
│   │   ├── components.css
│   │   └── animations.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Stack

- Frontend: React 18.3, React DOM 18.3, Vite 6.
- Styling: Tailwind CSS v4 ([`src/styles/tailwind.css`](./src/styles/tailwind.css)) dipadukan dengan stylesheet modular pada [`src/styles/style.css`](./src/styles/style.css), [`src/styles/components.css`](./src/styles/components.css), dan [`src/styles/animations.css`](./src/styles/animations.css) dengan skala proporsional `90%`.
- Tipografi: Google Fonts `Manrope` (heading & judul kartu) dan `Inter` (teks isi, label, dan kontrol UI).
- Aset: Logo resmi di [`public/assets/images/logo-mumtaz.jpg`](./public/assets/images/logo-mumtaz.jpg) dan ilustrasi vektor SVG inline.

## Mulai menjalankan proyek

1. Masuk ke direktori proyek dan pasang dependensi: `npm install`.
2. Jalankan server pengembangan lokal: `npm run dev`.
3. Untuk membuat paket produksi di dalam folder `dist/`, jalankan `npm run build`.
4. Untuk memperbarui nomor WhatsApp Admin, ubah konstanta nomor pada [`src/components/KontakSection.jsx`](./src/components/KontakSection.jsx) dan komponen terkait.
