# Hasil Pengujian

Pengujian dijalankan dengan perintah `node testing.js`.

| No. | Skenario | Input (harga, jumlah, isMember) | Hasil |
|---:|---|---|---|
| 1 | Member mendapat diskon | (100000, 2, true) | Subtotal 200000, diskon 20000, setelah diskon 180000, ongkir 15000, total 195000 |
| 2 | Non-member tanpa diskon | (100000, 2, false) | Subtotal 200000, diskon 0, setelah diskon 200000, ongkir 15000, total 215000 |
| 3 | Total setelah diskon di bawah Rp250.000 | (100000, 2, true) | Setelah diskon 180000, ongkir 15000, total 195000 |
| 4 | Total tepat Rp250.000 | (250000, 1, false) | Setelah diskon 250000, ongkir 0, total 250000 |
| 5 | Total di atas Rp250.000 | (260000, 1, false) | Setelah diskon 260000, ongkir 0, total 260000 |
| 6 | Jumlah 0 | (100000, 0, false) | Error: jumlah harus berupa bilangan bulat positif |
| 7 | Jumlah pecahan | (100000, 1.5, false) | Error: jumlah harus berupa bilangan bulat positif |
| 8 | Harga tidak valid | (-1000, 1, false) | Error: harga harus berupa angka positif |

## Kesimpulan
Seluruh skenario mengikuti aturan validasi, diskon member, dan ongkos kirim. Ongkos kirim ditentukan berdasarkan total setelah diskon.