"use strict";

function hitungCheckout(harga, jumlah, isMember) {
  // Validasi input
  if (typeof harga !== "number" || !Number.isFinite(harga) || harga <= 0) {
    throw new Error("Harga harus berupa angka lebih dari 0.");
  }

  if (!Number.isInteger(jumlah) || jumlah <= 0) {
    throw new Error("Jumlah harus berupa bilangan bulat lebih dari 0.");
  }

  if (typeof isMember !== "boolean") {
    throw new Error("Status member harus true atau false.");
  }

  const subtotal = harga * jumlah;
  const diskon = isMember ? subtotal * 0.1 : 0;
  const totalSetelahDiskon = subtotal - diskon;
  const ongkir = totalSetelahDiskon >= 250000 ? 0 : 15000;
  const totalBayar = totalSetelahDiskon + ongkir;

  return {
    subtotal,
    diskon,
    ongkir,
    totalBayar,
  };
}

function formatRupiah(nilai) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(nilai);
}

// Program utama
try {
  const harga = 100000;
  const jumlah = 3;
  const isMember = true;

  const hasil = hitungCheckout(harga, jumlah, isMember);

  console.log("=== RINCIAN CHECKOUT ===");
  console.log(`Harga produk : ${formatRupiah(harga)}`);
  console.log(`Jumlah       : ${jumlah}`);
  console.log(`Status member: ${isMember ? "Ya" : "Tidak"}`);
  console.log(`Subtotal     : ${formatRupiah(hasil.subtotal)}`);
  console.log(`Diskon       : ${formatRupiah(hasil.diskon)}`);
  console.log(`Ongkir       : ${formatRupiah(hasil.ongkir)}`);
  console.log("------------------------");
  console.log(`Total bayar  : ${formatRupiah(hasil.totalBayar)}`);
} catch (error) {
  console.error("Terjadi kesalahan:", error.message);
}