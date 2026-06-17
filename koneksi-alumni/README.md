# KonekSI Alumni — Landing Page (DPP)

Landing page presentasi Desain Pengalaman Pengguna untuk **KonekSI Alumni**, dibuat mengikuti struktur navigasi seperti referensi "Jago Teknik" namun dengan identitas visual KonekSI Alumni (navy–teal, mengikuti logo infinity).

## Struktur Folder

```
koneksi-alumni/
├── index.html      → Halaman utama (single page, semua section)
├── style.css        → Seluruh styling (token warna, tipografi, layout, responsive)
├── script.js         → Interaksi: mobile menu toggle, highlight nav aktif saat scroll
└── assets/
    ├── logo-symbol-tight.png   → Logo kecil untuk navbar & footer
    ├── logo-symbol-badge.png   → Logo versi badge untuk hero
    └── team-*.png               → Foto 5 anggota kelompok (placeholder, posisi sejajar)
```

## Section yang tersedia

1. **Home** — Hero dengan headline, CTA, dan statistik singkat
2. **About** — Insight & penjelasan konsep (lorem ipsum, siap diisi konten asli)
3. **Features** — 3 fitur inti: Talent Pool, Mentoring Eksklusif, Sistem Referral
4. **Prototypes** — Showcase tampilan prototipe + tahapan low-fi → hi-fi
5. **Demo** — Concept video & demo video (placeholder thumbnail)
6. **Design Process** — 4 tahap proses desain (Insight, Research, Tasks, Value in Design)
7. **Team** — 5 kartu anggota kelompok, foto sejajar rapi (rasio 1:1 seragam)

## Cara pakai

- **Lihat langsung**: buka `index.html` di browser apa pun (tidak perlu server).
- **Edit konten**: semua teks lorem ipsum bisa langsung diganti di `index.html`. Cari teks "Lorem Ipsum" untuk menemukan area yang perlu diisi ulang (nama anggota, NRP, deskripsi fitur, dll).
- **Ganti foto tim**: timpa file `assets/team-*.png` dengan foto asli, pastikan rasio mendekati 1:1 agar tetap sejajar rapi (CSS sudah pakai `object-fit: cover` jadi otomatis ter-crop tengah).
- **Upload ke GitHub**: ekstrak zip ini langsung ke dalam folder repository kamu (misalnya `docs/` jika ingin pakai GitHub Pages), lalu commit & push.

## Catatan teknis

- Fully responsive: breakpoint di 980px (tablet) dan 760px / 480px (mobile).
- Mobile menu pakai vanilla JS, tidak ada dependency eksternal.
- Font: Google Fonts (Sora untuk display, Inter untuk body) — perlu koneksi internet saat dibuka, atau bisa di-host lokal jika ingin offline penuh.
- Tidak ada framework build (pure HTML/CSS/JS) sehingga langsung jalan di GitHub Pages, Netlify, atau hosting statis lain.
