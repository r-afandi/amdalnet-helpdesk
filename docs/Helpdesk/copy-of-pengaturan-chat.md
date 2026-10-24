---
title: Pengaturan Chat
deprecated: false
hidden: false
metadata:
  robots: noindex
---
## Pengaturan Chat

![](https://files.readme.io/bba42b788967351bede76309c7b8ef0f0441d90b51b885756113d8d736211efb-Screenshot_2026-10-22_at_16.57.46.png)

Klik tombol **Pengaturan** pada halaman daftar Chat Bantuan.

Pengaturan terdiri dari lima tab:

1. Template Chat.
2. SMTP.
3. Agen Chat.
4. Jam Operasional.
5. Hari Libur.

### 1. Template Chat

![](https://files.readme.io/eb006ff40486f520f190950a0e3800c530b977d12dd7a2145c3a9c4b78e8aaeb-Screenshot_2026-10-22_at_16.58.46.png)

![](https://files.readme.io/dd400d855f34d5420539fdc0e0454801ae9d099618d172aeb6cb3bd6b220fcc8-Screenshot_2026-10-22_at_16.58.19.png)

Admin dapat melihat, menambahkan, mengubah, dan menghapus template.

#### Menambahkan Template

1. Buka tab Template Chat.
2. Klik **Tambah Template**.
3. Isi judul, slot, dan isi balasan.
4. Klik **Simpan**.

Batas pada form frontend:

| Field | Ketentuan                      |
| ----- | ------------------------------ |
| Judul | Wajib, maksimal 100 karakter   |
| Slot  | Wajib, maksimal 20 karakter    |
| Isi   | Wajib, maksimal 1.000 karakter |

Slot menggunakan huruf kecil, angka, tanda hubung, atau underscore, dengan awal dan akhir berupa huruf/angka.

Rekomendasi slot:

- `salam-pembuka`
- `jawaban-cepat`
- `tindak-lanjut`
- `salam-penutup`
- `luar-jam-kerja`

Judul dan slot yang sudah digunakan dapat ditolak oleh sistem.

#### Mengubah atau Menghapus Template

1. Klik menu opsi pada kartu template.
2. Pilih **Edit** atau **Hapus**.
3. Simpan perubahan atau konfirmasi penghapusan.

Template pada ruang chat dimuat saat digunakan. Setelah perubahan pengaturan, muat ulang halaman ruang chat jika daftar template belum diperbarui.

### 2. SMTP

![](https://files.readme.io/2db4de1cbce186765d5580b6fdf907e7cf9a6e54887f9ba539db9c4734b78584-Screenshot_2026-10-22_at_16.59.09.png)

![](https://files.readme.io/511d0efbbadabee5d76fad9b98f7a1aef3b3db444f87b003cff17842507d63c7-Screenshot_2026-10-22_at_16.59.22.png)

SMTP digunakan untuk mengirim email notifikasi chat.

Admin dapat:

- Melihat daftar akun SMTP.
- Menambahkan akun.
- Mengubah konfigurasi.
- Mengirim email pengujian.
- Mengganti akun default.
- Menghapus akun non-default.

#### Menambahkan atau Mengubah SMTP

Isi konfigurasi berikut:

- Nama akun.
- Nama pengirim.
- Alamat email pengirim.
- Host SMTP.
- Port.
- Enkripsi: tanpa enkripsi, TLS, atau SSL.
- Username.
- Password.

<Callout icon="far fa-triangle-exclamation" theme="warn">
  ### Perhatian

  Jika Anda hendak menggunakan gmail SMTP, pastikan kolom password menggunakan APP PASSWORD yang di-generate di pengaturan akun google tersebut. <Anchor target="_blank" href="https://support.google.com/mail/answer/185833?hl=id">Lihat panduan disini</Anchor>
</Callout>

Saat mengubah akun, password dapat dikosongkan apabila tidak ingin mengganti password lama. Password tersimpan tidak ditampilkan kembali oleh API.

#### Mengirim Email Pengujian

1. Isi konfigurasi SMTP.
2. Isi alamat tujuan pada **Kirim Email Test**.
3. Klik **Kirim Test**.
4. Periksa Inbox atau SPAM pada alamat tujuan.

#### Mengganti SMTP Default

1. Buka menu opsi akun.
2. Pilih **Jadikan default**.
3. Konfirmasi perubahan.

Akun default digunakan sebagai pengirim notifikasi chat.

Akun default tidak dapat dihapus. Pindahkan default ke akun lain terlebih dahulu sebelum menghapusnya.

Jangan mencantumkan password SMTP pada dokumentasi, screenshot, atau pesan yang dibagikan.

### 3. Agen Chat

![](https://files.readme.io/53498483f187792c7ac629dbba58f6a88f0af731d886e5fc5c746097f9d56134-Screenshot_2026-10-22_at_17.00.42.png)

Admin dapat:

- Melihat nama dan email agen.
- Melihat status aktif/nonaktif.
- Melihat jumlah chat aktif.
- Memfilter status agen.
- Memuat ulang daftar agen.
- Menambahkan agen.
- Mengaktifkan atau menonaktifkan agen.
- Menghapus keanggotaan agen.

#### Menambahkan Agen

![](https://files.readme.io/7fc5617dd46b9ad476618469bc91ab25848c5c9b4cfe2b584246688b52f3107a-Screenshot_2026-10-22_at_17.01.05.png)

1. Klik **Tambah Agen**.
2. Cari pengguna berdasarkan nama atau email.
3. Pilih pengguna.
4. Klik **Simpan**.

Ketentuan:

- Kandidat harus memiliki role `helpdesk`.
- Pengguna yang sudah menjadi agen tidak dapat ditambahkan ulang.
- Penambahan agen tidak membuat akun pengguna baru.
- Penambahan agen tidak otomatis mengubah role pengguna.

Akun admin atau admin-child yang hanya memiliki role tersebut tidak otomatis menjadi kandidat agen.

#### Mengaktifkan atau Menonaktifkan Agen

Gunakan switch pada kolom Status.

Agen nonaktif tidak dapat dipilih sebagai tujuan penugasan baru.

#### Menghapus Agen

Klik **Hapus**, lalu ikuti konfirmasi.

Penghapusan ini menghapus keanggotaan agen, bukan akun pengguna.

Menonaktifkan atau menghapus agen tidak otomatis memindahkan seluruh chat lamanya. Tinjau dan atur ulang penugasan chat yang masih aktif jika diperlukan.

### 4. Jam Operasional

![](https://files.readme.io/289cb3f88851771d838bd063b50ff8453066e70bd49394218c99265d0db1f921-Screenshot_2026-10-22_at_17.01.29.png)

Admin dapat mengatur jadwal untuk Senin sampai Minggu.

Pada setiap hari:

1. Aktifkan atau nonaktifkan layanan.
2. Tentukan jam buka.
3. Tentukan jam tutup.
4. Klik **Simpan**.

Ketentuan:

- Jam tutup harus setelah jam buka.
- Hari nonaktif dianggap tutup.
- Zona waktu operasional adalah Asia/Jakarta atau WIB.
- Jadwal disimpan sebagai satu pengaturan tujuh hari.

Saat pengguna memulai chat di luar jam operasional, sistem dapat memberikan balasan otomatis.

Isi balasan menggunakan template slot `luar-jam-kerja`. Jika template tidak tersedia, sistem menggunakan pesan bawaan.

Pengaturan jam operasional bukan tombol untuk menonaktifkan seluruh fitur chat. Chat di luar jam layanan tetap dapat masuk.

### 5. Hari Libur

![](https://files.readme.io/d08ad4380c3a9cf186f01189d565c6ae75479a1566287e7b3c0e034113e34116-Screenshot_2026-10-22_at_17.01.52.png)

Admin dapat:

- Melihat daftar hari libur.
- Memfilter berdasarkan tahun dan bulan.
- Mencari berdasarkan keterangan.
- Menambahkan hari libur.
- Mengubah tanggal atau keterangan.
- Menghapus hari libur.

#### Menambahkan Hari Libur

![](https://files.readme.io/231bb8ee02a7769a7828e6b1b9d6aafa1a567fbed8a9fc4da1d59795b8e2c547-Screenshot_2026-10-22_at_17.02.12.png)

1. Klik **Tambah Libur**.
2. Pilih tanggal.
3. Isi keterangan.
4. Klik **Simpan**.

Ketentuan:

- Tanggal wajib diisi dan tidak boleh duplikat.
- Keterangan wajib diisi, maksimal 255 karakter.
- Tanggal yang terdaftar sebagai hari libur dianggap di luar jam operasional, walaupun jadwal hari tersebut biasanya buka.

Hari libur diatur per tanggal, bukan otomatis berulang setiap tahun.

<br />