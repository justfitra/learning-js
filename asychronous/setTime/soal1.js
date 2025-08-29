/*
Typewriter Effect ⌨️

Buat program yang menampilkan teks "Belajar JavaScript itu asik!" ke console, tapi huruf demi huruf muncul setiap 300ms (mirip mesin ketik).
Gunakan setTimeout recursive.
*/

// const word = "Belajar JavaScript itu asik!";
// const wordArr = word.split("");
// for (let i = 0; i < wordArr.length; i++) {
//   setTimeout(() => {
//     console.log(wordArr[i]);
//   }, i * 300);
// }

/*
Typewriter Effect ⌨️
Versi Recursive dengan setTimeout
*/

// const word = "Belajar JavaScript itu asik!";
// const wordArr = word.split("");

// let i = 0;

// function typeWriter() {
//   if (i < wordArr.length) {
//     console.log(wordArr[i]); // cetak huruf
//     i++;
//     setTimeout(typeWriter, 300); // panggil lagi setelah 300ms
//   } else {
//     console.log("✅ Done!"); // setelah selesai
//   }
// }

// typeWriter(); // mulai
// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// let start = 10;
// const Countdown = () => {
//   if (start > 0) {
//     console.log(start);
//     start--;
//     const random = getRndInteger(500, 2000);
//     setTimeout(Countdown, random);
//   } else {
//     console.log("Game Over");
//   }
// };

// Countdown();
// Interval 1 -> setiap 1 detik cetak "Ping"
// const pingInterval = setInterval(() => {
//   console.log("Ping");
// }, 1000);

// // Interval 2 -> setiap 2 detik cetak "Pong"
// const pongInterval = setInterval(() => {
//   console.log("Pong");
// }, 2000);

// // Stop semua interval setelah 10 detik
// setTimeout(() => {
//   clearInterval(pingInterval);
//   clearInterval(pongInterval);
//   console.log("Game Over ⏹️");
// }, 10000);

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let posA = 0;
// let posB = 0;

// const race = setInterval(() => {
//   // Gerakan acak tiap detik
//   posA += getRndInteger(1, 3);
//   posB += getRndInteger(2, 4);

//   console.log(`A: ${posA} langkah | B: ${posB} langkah`);

//   // Cek siapa pemenang
//   if (posA >= 20 && posB >= 20) {
//     console.log("Hasil: Seri 🤝");
//     clearInterval(race);
//   } else if (posA >= 20) {
//     console.log("Pemenang: A 🏆");
//     clearInterval(race);
//   } else if (posB >= 20) {
//     console.log("Pemenang: B 🏆");
//     clearInterval(race);
//   }
// }, 1000);
// const sumArr = (arr) => {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     if (typeof value === "number" && !isNaN(value)) {
//       result += value;
//     }
//   }
//   return result;
// };

// console.log(sumArr([1, , 3, 4, 5])); // 13
// console.log(sumArr([1, 2, "3", NaN, null])); // 3

const seconds = 5;

const countdown = (seconds) => {
  const interval = setInterval(() => {
    console.log(seconds);
    seconds--;

    if (seconds === 0) {
      clearInterval(interval);
    }
  }, 1000);
};

countdown(seconds);

const Loading = setInterval(() => {
  console.log("Loading...");
}, 1000);

setTimeout(() => {
  clearInterval(Loading);
  console.log("Data Berhasil Ditambahkan");
}, 5000);
