
## `analysis.md`

```md
# Problem Decomposition

## Input
- `harga`: harga satu produk, berupa angka positif.
- `jumlah`: jumlah produk, berupa bilangan bulat positif.
- `isMember`: status member, berupa boolean (`true` atau `false`).

## Proses
1. Validasi harga, jumlah, dan status member.
2. Jika salah satu input tidak valid, hentikan proses dan kembalikan pesan error.
3. Hitung subtotal dengan rumus `harga × jumlah`.
4. Jika pelanggan member, diskon adalah 10% dari subtotal. Jika bukan member, diskon adalah 0.
5. Hitung total setelah diskon.
6. Jika total setelah diskon minimal Rp250.000, ongkos kirim adalah Rp0.
7. Jika total setelah diskon kurang dari Rp250.000, ongkos kirim adalah Rp15.000.
8. Hitung total pembayaran dengan menjumlahkan total setelah diskon dan ongkos kirim.

## Output
Untuk input valid, program menghasilkan:
- subtotal
- diskon
- total setelah diskon
- ongkos kirim
- total pembayaran

Untuk input tidak valid, program menghasilkan pesan error.

## Aturan Keputusan
- Harga valid jika berupa angka finite dan lebih dari 0.
- Jumlah valid jika bilangan bulat dan lebih dari 0.
- Status member valid jika berupa boolean.
- Diskon 10% diberikan hanya kepada member.
- Ongkos kirim gratis jika total setelah diskon >= Rp250.000.

## Pattern
Program menggunakan validasi berurutan, operasi aritmetika, dan percabangan `if/else` untuk menentukan diskon dan ongkos kirim.

## Abstraction
Program hanya menangani perhitungan checkout. Antarmuka pengguna, pembayaran, penyimpanan data, API, dan database tidak termasuk dalam ruang lingkup.