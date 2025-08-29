/*
📌 Soal 1: Promise dasar

Buat sebuah Promise yang selesai (resolve) setelah 3 detik dengan pesan:

"Data berhasil diambil ✅"

Lalu tampilkan hasilnya ke console menggunakan .then().

*/
const data = new Promise((resolve, reject) => {
  let value = true;

  if (value) {
    resolve("Data berhasil diambil");
  } else {
    reject("Data gagal diambil");
  }
});

/*


📌 Soal 2: Promise dengan gagal (reject)

Buat sebuah Promise yang gagal (reject) dengan pesan:

"Error: Data gagal diambil ❌"
Lalu tangkap error-nya dengan .catch().
*/

data.then((res) => console.log(res));
/*

/*
📌 Soal 3: Promise dengan kondisi

Buat sebuah function cekStok(buah) yang mengembalikan Promise:

Jika buah === "apel", maka resolve("Stok apel tersedia 🍎")

Selain itu, reject("Stok tidak tersedia ❌")

Gunakan .then() dan .catch() untuk menampilkan hasilnya.
*/
const checkStock = (buah) => {
  return new Promise((resolve, reject) => {
    if (buah === "apel") {
      resolve("Stok apel tersedia 🍎");
    } else {
      reject("Stok tidak tersedia ❌");
    }
  });
};

checkStock("manggis")
  .then((res) => console.log(res))
  .catch((res) => console.log(res));
/*
📌 Soal 4: Promise chaining

Buat Promise chaining seperti ini:

Ambil data user → "User ditemukan 👤"

Ambil data order user → "Order berhasil diambil 🛒"

Ambil detail barang → "Barang berhasil ditemukan 📦"

Semua langkah dilakukan berurutan dengan .then().
*/

const user = new Promise((resolve, reject) => {
  let data = true;

  if (data) {
    resolve("User ditemukan 👤");
  } else {
    reject("User Hilang");
  }
});

user
  .then((res) => {
    console.log(res);
    return "Order berhasil diambil 🛒";
  })
  .then((res) => {
    console.log(res);
    return "Barang berhasil ditemukan 📦";
  })
  .then((res) => console.log(res))
  .catch((res) => console.log(res));
