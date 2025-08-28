/*
Soal 1 – Alarm Reminder

Buat fungsi setReminder(message, seconds) yang:

Tampil "Reminder akan muncul dalam X detik...".

Setelah X detik → tampilkan pesan reminder.

👉 Contoh:

setReminder("Bangun belajar JavaScript!", 3);
// Output:
// Reminder akan muncul dalam 3 detik...
// (tunggu 3 detik)
// Bangun belajar JavaScript!
*/

// const setReminder = (message, seconds) => {
//   console.log("Reminder akan muncul dalam 3 detik");
//   return setTimeout(() => {
//     console.log(message);
//   }, seconds * 1000);
// };

// setReminder("Belajar javaScript!", 3);

/*
⚡ Soal 2 – Dynamic Progress Bar

Buat simulasi progress bar di console:

Setiap 1 detik, progress naik 10%.

Kalau sudah 100% → tampil "Selesai!".
*/
// let persent = 0;
// const progress = setInterval(() => {
//   console.log(`Progress : ${persent}%`);
//   persent += 10;
//   if (persent === 10) {
//     clearInterval(progress);
//     console.log("Selesai!");
//   }
// }, 1000);

let timeLeft = 5; // countdown 5 detik
let defused = false;

const bombTimer = setInterval(() => {
  if (timeLeft > 0 && !defused) {
    console.log(`💣 Bom akan meledak dalam ${timeLeft} detik`);
    timeLeft--;
  } else if (defused) {
    console.log("✅ Bom berhasil dijinakkan");
    clearInterval(bombTimer);
  } else {
    console.log("💥 BOOM!");
    clearInterval(bombTimer);
  }
}, 1000);

const defuse = () => {
  defused = true;
};

defuse();
