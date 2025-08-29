// const countdown = (n) => {
//   console.log(n);

//   if (n === 2) {
//     console.log("Boom");
//   } else {
//     setTimeout(() => {
//       countdown(n - 2);
//     }, 1000);
//   }
// };

// countdown(10);

// Trafic Light Simulation
/* Buat program lampu lalu lintas menggunakan setInterval dan setTimeout:

5 detik lampu merah

3 detik lampu kuning

5 detik lampu hijau

Ulangi terus siklusnya.
Output di console harus menunjukkan lampu mana yang aktif*/

// const trafic = (count) => {
//   let light = "";
//   console.log(count);

//   if (count === 5) {
//     light = "Lampu Merah";
//   } else {
//     setTimeout(() => {
//       trafic(count + 1);
//     }, 1000);
//   }

//   if (light === "Lampu Merah") {
//     count = 0;
//     setTimeout(() => {
//       trafic(count + 1);
//     }, 1000);
//   }

//   if (count === 3) {
//     light = "Lampu Kuning";
//   }
// };

const trafic = (count) => {
  let light = "";

  //   if (light === "") {
  const set = setInterval(() => {
    count++;
    console.log(count);

    light = "";
    if (count === 5 && count < 6) {
      light = "Lampu Merah";
    }
    if (count === 8 && count < 9) {
      light = "Lampu Kuning";
    }
    if (count === 12 && count < 13) {
      light = "Lampu Hijau";
    }
    if (light === "Lampu Hijau") {
      count = 0;
    }
    console.log(light);
  }, 1000);

  //   }
};
trafic(0);
