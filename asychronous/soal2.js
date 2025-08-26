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

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomstepA = getRndInteger(1, 3);
const randomstepB = getRndInteger(2, 4);

const raceSimulation = (a, b) => {
  const pingInterval = setInterval(() => {
    console.log(randomstepA);

    if (randomstepA || randomstepB === 20) {
      clearInterval(pingInterval);
    }
  }, 1000);
};

raceSimulation("Fitra", "Tutur");
