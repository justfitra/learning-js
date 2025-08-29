/*
Cara Membuat Promise

Kita buat promise pakai new Promise().
Fungsinya menerima executor function dengan 2 parameter: resolve & reject.
*/

const janji = new Promise((resolve, reject) => {
  let sukses = false;

  if (sukses) {
    resolve("Pesanan berhasil sampai ✅"); // kalau berhasil
  } else {
    reject("Pesanan gagal ❌"); // kalau gagal
  }
});

janji
  .then((result) => console.log(result)) // kalau sukses
  .catch((error) => console.log(error)); // kalau gagal

function downloadFile() {
  return new Promise((resolve, reject) => {
    console.log("Mengunduh file... ⏳");

    setTimeout(() => {
      let sukses = true;

      if (sukses) {
        resolve("File berhasil diunduh ✅");
      } else {
        reject("Gagal mengunduh file ❌");
      }
    }, 2000);
  });
}

// Menjalankan promise
// downloadFile()
//   .then((result) => console.log(result)) // kalau resolve
//   .catch((error) => console.log(error)); // kalau reject

downloadFile()
  .then((result) => {
    console.log(result);
    return "Membuka file 📂"; // nilai baru untuk .then berikutnya
  })
  .then((langkah) => {
    console.log(langkah);
    return "Menampilkan isi file 📝";
  })
  .then((langkah) => console.log(langkah))
  .catch((error) => console.log(error));

const task1 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 1 selesai"), 1000)
);
const task2 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 2 selesai"), 2000)
);

Promise.all([task1, task2]).then((result) => console.log(result)); // ["Task 1 selesai", "Task 2 selesai"]
