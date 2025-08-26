// setTimeout
// Fungsinya menunda eksekusi kode.

console.log("Mulai");

setTimeout(() => {
  console.log("Ini muncul setelah 2 detik");
}, 9000);

console.log("Selesai");

// setInterval
// Fungsinya mengulang eksekusi kode tiap interval waktu.

let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Hitungan: " + count);

  if (count === 5) {
    clearInterval(intervalId); // stop setelah 5 kali
    console.log("Selesai looping!");
  }
}, 1000);

let time = 0;
setTimeout(() => {
  console.log("hello");
}, 1000);

setTimeout(() => {
  console.log("world");
}, 3000);

let start = 5;
const countdown = setInterval(() => {
  start--;
  if (start === 0) {
    clearInterval(countdown);
    console.log("boom");
  }
}, 1000);

let stat = 5;

const countdownTimeout = (n) => {
  console.log(n);

  if (n === 0) {
    console.log("Boom!");
  } else {
    setTimeout(() => {
      countdownTimeout(n - 1);
    }, 1000);
  }
};

countdownTimeout(stat);
