# Selaras: website mandiri

Folder ini berisi website statis yang bisa dibuka di semua perangkat (Android, iPhone, laptop) lewat browser biasa.

```
index.html     halaman utama
style.css      tampilan
app.js         seluruh logika aplikasi dan materi
config.js      pengaturan (isi backendUrl di sini)
backend.js     penghubung ke backend untuk peringkat bersama
apps-script/Code.gs   backend Google Apps Script + Google Sheets
```

## 1. Pasang website (gratis)

Pilih salah satu, lalu unggah seluruh isi folder ini:

- **Netlify Drop** (app.netlify.com/drop): seret folder, langsung dapat link.
- **GitHub Pages**: unggah ke repositori, aktifkan Pages.
- **Cloudflare Pages** atau **Vercel**: hubungkan repositori atau unggah folder.

Setelah itu buat QR dari link yang kamu dapat memakai pembuat QR apa saja.
Tanpa langkah 2, aplikasi tetap jalan, tetapi poin hanya tersimpan di HP masing-masing dan peringkat hanya menampilkan pengguna itu sendiri.

## 2. Aktifkan peringkat dan rekap bersama (Google Sheets)

1. Buat Google Sheet baru (nama bebas, misalnya "Selaras data").
2. Menu **Ekstensi > Apps Script**, hapus isinya, tempel isi `apps-script/Code.gs`, simpan.
3. Di Apps Script buka **Setelan proyek > Properti skrip**, tambah properti `ADMIN_KEY` dengan nilai kata sandi panjang buatanmu (untuk kader).
4. Klik **Terapkan > Penerapan baru > Aplikasi web**.
   - Jalankan sebagai: **Saya**
   - Yang memiliki akses: **Siapa saja**
   Setujui izin yang diminta, lalu salin **URL aplikasi web** (berakhiran `/exec`).
5. Buka `config.js`, isi `backendUrl` dengan URL tersebut, lalu unggah ulang `config.js`.

Data peserta muncul otomatis di sheet `participants`. Setiap perubahan Code.gs perlu **Terapkan > Kelola penerapan > versi baru** agar berlaku.

## 3. Akses kader (Rekap dan unduh CSV)

Buka sekali di HP atau laptop kader: `https://alamat-websitemu/#admin=KATA_SANDI_ADMIN_KEY`
Peramban itu mengingat akses, lalu menu Profil menampilkan tombol Rekap trial dan Unduh CSV.
Bagikan tautan ini hanya kepada kader.

## Catatan penting

- Peringkat diperbarui setiap sekitar 20 detik saat halaman dibuka.
- Yang tersimpan di sheet hanya nama panggilan, segmen, poin, skor kuis, dan jawaban survei. Tidak ada nama asli, nomor HP, atau email. Check-in suasana hati tetap di HP peserta.
- Untuk masa trial, siapa pun yang tahu URL backend secara teknis bisa mengirim data palsu. Jangan sebarkan URL backend, dan untuk skala besar pertimbangkan backend dengan autentikasi.
- Isi `PIKR_CFG` di `app.js` (nama, Instagram, WhatsApp, lokasi, jadwal, tautan, rujukan lokal) supaya kontak PIKR tampil di FAQ dan di tombol Bantuan.
- Nomor layanan (119 tekan 8, SAPA 129, 112) tolong diverifikasi sebelum QR dicetak.
- Akhiran link untuk QR per modul: `#emosi`, `#cemas`, `#diri`, `#bully`, `#seksual`, `#dev`, serta `#faq` dan `#fasilitator`.
