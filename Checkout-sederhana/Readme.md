# Sistem Checkout Produk Sederhana

**Nama:** [ADIKS Market]

## Deskripsi
Program menghitung subtotal, diskon member, ongkos kirim, dan total pembayaran berdasarkan harga produk, jumlah produk, serta status member.

Aturan utama:
- Harga harus berupa angka positif.
- Jumlah harus berupa bilangan bulat positif.
- Member mendapat diskon 10% dari subtotal.
- Ongkos kirim gratis jika total setelah diskon minimal Rp250.000.
- Jika kurang dari Rp250.000, ongkos kirim Rp15.000.

## Cara Menjalankan
Pastikan Node.js sudah terpasang. Buka folder proyek di VS Code, buka terminal, lalu jalankan:

```bash
node testing.js