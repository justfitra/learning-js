/*
⚡ Soal 1 – Mesin Cuci Otomatis

Buat simulasi mesin cuci sederhana:

Setelah 2 detik tampil "Mengisi air...".

Setelah 5 detik tampil "Mencuci pakaian...".

Setelah 8 detik tampil "Membilas pakaian...".

Setelah 10 detik tampil "Selesai, pakaian bersih ✅".

Gunakan setTimeout.
*/
// const runStep = (message, delay) => {
//   setTimeout(() => {
//     console.log(message);
//   }, delay);
// };

// const steps = [
//   { time: 2000, msg: "Mengisi air ..." },
//   { time: 5000, msg: "Mencuci pakaian ...." },
//   { time: 8000, msg: "Membilas pakaian ...." },
//   { time: 10000, msg: "Selesai, pakaian bersih ✅" },
// ];

// steps.forEach((step) => {
//   runStep(step.msg, step.time);
// });

/*
⚡ Soal 2 – Timer Ujian

Buat program yang mensimulasikan ujian online:

Timer jalan mundur dari 30 detik ke 0.

Setiap 5 detik tampil pesan "Waktu hampir habis, segera kerjakan!".

Jika waktu habis (0 detik) → tampil "Ujian berakhir ⏰".

Gunakan kombinasi setInterval + setTimeout.
*/

// let time = 30;

// const timer = setInterval(() => {
//   console.log(time);
//   time--;
//   if (time % 5 === 0) {
//     console.log("Waktu hampir habis,segera kerjakan!");
//   }
// }, 1000);

// setTimeout(() => {
//   clearInterval(timer);
//   console.log("Ujian Berakhir");
// }, 30000);

/*
Soal 3 – Simulasi Loading Data

Buat animasi di console:

Loading.
Loading..
Loading...


Ulangi pola ini setiap 1 detik, tapi berhenti otomatis setelah 5 detik dengan pesan "Data berhasil dimuat ✅".
*/
const value1 = "5";
const value2 = 9;
let sum = Number(value1) + value2;

console.log(sum);
