---
title: Mengelola Daftar Percakapan
excerpt: Tampilan UI tabel history percakapan beserta filter & action untuk helpdesk
deprecated: false
hidden: false
metadata:
  robots: index
---
## Tampilan Tabel

Helpdesk dapat melihat aduan chat secara kronologis melalui tampilan tabel yang tersedia. Terdapat beberapa kolom yang ditunjukkan dalam tabel:

1. Nomor urut: nomor sekuensial dimulai dari angka 1 untuk mempermudah mengurutkan chat aduan masuk
2. ID: kode chat unik untuk tiap chat masuk. Juga merepresentasikan tiket chat aduan pengguna.
3. Tanggal mulai: tanggal dan waktu mulai chat aduan masuk
4. Nama: Nama pengguna yang mengadukan keluhan
5. Email: Email pengguna yang mengadukan chat
6. Nama Instansi: Nama instansi/perusahaan asal pengguna
7. Update terakhir: Snippet pesan terakhir dan kapan pesan tersebut dikirim
8. Status: status chat, dapat bernilai "Menunggu user", "Menunggu admin", atau "Selesai".
9. Penugasan: personel chat agent yang harus menangani chat aduan tersebut
10. Aksi masuk chat: masuk ke chat room untuk membalas pesan aduan.

![](https://files.readme.io/deb50cc8ff58a5a7542581b457c8a7287155d5909d0dd1bdee94c871363b4a5f-image.png)

### Mencari Percakapan

![](https://files.readme.io/198e2c646223efc945baebfca6588059dec45ac731603ae1eb1288d3699f15c4-Screenshot_2026-10-22_at_16.41.46.png)

Gunakan kolom pencarian untuk mencari berdasarkan:

- Kode chat.
- Nama pengguna.
- Email.
- Nomor telepon.
- Nomor registrasi AMDALNET.
- Nama instansi.

Langkah penggunaan:

1. Masukkan kata kunci.
2. Tunggu hasil pencarian atau klik tombol pencarian.
3. Sistem menampilkan percakapan yang sesuai.

Pencarian daftar chat tidak mencari seluruh isi pesan percakapan.

### Memfilter Status

![](https://files.readme.io/7200ecb3d31fb3448ab5e6402187af00da8257696affc7e382b99319e311a075-Screenshot_2026-10-22_at_16.42.53.png)

Admin dapat memilih satu atau beberapa status:

| Status         | Arti                                                 |
| -------------- | ---------------------------------------------------- |
| Menunggu Admin | Percakapan sedang menunggu tanggapan admin           |
| Menunggu User  | Admin sudah membalas dan menunggu tanggapan pengguna |
| Selesai        | Percakapan sudah diakhiri                            |

Status **Menunggu Admin** tidak sama dengan penanda belum dibaca. Membuka percakapan tidak otomatis mengubahnya menjadi **Menunggu User**.

### Memfilter Agen

![](https://files.readme.io/08d17f8269acd02367800559de6c1734f408269162535da0e6270d4ba5c6fa79-Screenshot_2026-10-22_at_16.44.15.png)

Admin dapat:

- Memilih satu atau beberapa agen.
- Mencari opsi agen berdasarkan nama atau email.
- Memilih **Belum ditugaskan**.
- Menggabungkan pilihan agen dengan percakapan yang belum ditugaskan.

Filter agen dapat menampilkan agen nonaktif untuk membantu penelusuran percakapan lama.

### Memfilter Tanggal

![](https://files.readme.io/201c51014b6cf161d9e07fa8a1da39a08e1b85c677a12d657eb6f2d087321630-Screenshot_2026-10-22_at_16.44.45.png)

1. Pilih tanggal awal.
2. Pilih tanggal akhir.
3. Sistem menyaring berdasarkan tanggal mulai percakapan.

Tanggal akhir tidak boleh lebih awal daripada tanggal awal.

### Mereset Filter

Klik **Reset** untuk mengosongkan pencarian, status, rentang tanggal, dan filter agen.

Pada akun admin, reset mengembalikan daftar ke cakupan semua agen.