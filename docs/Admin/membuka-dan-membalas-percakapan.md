---
title: Membuka dan Membalas Percakapan
deprecated: false
hidden: false
metadata:
  robots: index
---
## Membuka dan Membalas Percakapan

### 1. Membuka Chat

![](https://files.readme.io/51087e486ac7abf9e2b303fb7d2ff4d414f54a194cb5e010d8178692dc374e0c-Screenshot_2026-10-22_at_16.49.27.png)

Pada kolom Aksi:

- Klik **Masuk Chat** untuk percakapan yang belum selesai.
- Klik **Lihat Chat** untuk percakapan yang sudah selesai.

Percakapan dibuka pada tab atau jendela browser terpisah, bergantung pada pengaturan browser. Membuka kode chat yang sama kembali akan menggunakan tab bernama sama apabila masih tersedia.

### 2. Informasi pada Ruang Chat

![](https://files.readme.io/840060502306c2fcba082e9d8902af77644d55dc2407c5334fc4e769ae136b1c-Screenshot_2026-10-22_at_16.50.58.png)

Admin dapat melihat:

- Nama pengguna.
- Kode chat.
- Email dan nomor telepon.
- Status percakapan.
- Riwayat pesan dan lampiran.
- Waktu pesan serta pengelompokan berdasarkan tanggal.
- Informasi waktu penutupan jika chat sudah selesai.

Klik ikon salin di samping kode chat untuk menyalin kode tersebut.

### 3. Memuat Pesan Terbaru


<Image src="https://files.readme.io/840060502306c2fcba082e9d8902af77644d55dc2407c5334fc4e769ae136b1c-Screenshot_2026-10-22_at_16.50.58.png" align="center" />

Klik tombol **Muat ulang chat** di kanan atas.

Pada implementasi saat ini, admin perlu menggunakan tombol tersebut untuk melihat pesan masuk terbaru. Jangan mengasumsikan pesan pengguna selalu muncul otomatis secara realtime.

### 4. Mengirim Pesan

1. Ketik balasan pada kolom pesan.
2. Klik tombol kirim.
3. Sistem menyimpan balasan dan memperbarui percakapan.

Pada perangkat desktop:

- Enter digunakan untuk mengirim.
- Shift + Enter digunakan untuk membuat baris baru.

Pada perangkat sentuh, Enter digunakan untuk membuat baris baru; gunakan tombol kirim.

Kolom pesan pada frontend saat ini dibatasi maksimal **1.000 karakter**.

Setelah admin membalas, status percakapan menjadi **Menunggu User**.

Sistem menjalankan pengiriman email notifikasi kepada pengguna. Penerimaan email bergantung pada konfigurasi SMTP dan layanan email penerima.

### 5. Menggunakan Emoji

1. Klik ikon Emoji.
2. Pilih emoji.
3. Emoji disisipkan pada posisi kursor atau menggantikan teks yang dipilih.
4. Kirim pesan seperti biasa.

### 6. Membuka Tautan

Tautan yang dikenali pada pesan ditampilkan sebagai link yang dapat diklik.

- Tautan ke domain pemerintah `.go.id` dibuka langsung.
- Tautan ke domain lain menampilkan konfirmasi sebelum dibuka.

Admin tetap perlu memeriksa tujuan tautan dan mengenali pengirimnya.

##