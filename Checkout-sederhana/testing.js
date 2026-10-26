const fs = require("fs");
const path = require("path");

// Ganti "checkout.js" jika nama file utama Anda berbeda
const filePath = path.join(__dirname, "checkout.js");

if (!fs.existsSync(filePath)) {
  console.error(`File tidak ditemukan: ${filePath}`);
  console.error("Pastikan checkout.js berada di folder yang sama dengan testing.js.");
  process.exit(1);
}

try {
  require(filePath);
  console.log("File berhasil dimuat tanpa error.");
} catch (error) {
  console.error("Terjadi error saat menjalankan file:", error.message);
  process.exit(1);
}