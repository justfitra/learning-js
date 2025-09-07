/*
Soal 1 – Array & Object

Buat sebuah array berisi daftar mahasiswa (minimal 3 orang).
Tiap mahasiswa punya object: { nama, umur, jurusan }.

👉 Tampilkan semua mahasiswa yang jurusannya "Informatika" pakai .filter().
*/
const students = [
  { name: "Andika", age: 20, major: "Informatika" },
  { name: "Budi", age: 19, major: "Economic" },
  { name: "Prayoga", age: 18, major: "Informatika" },
];

const informatics = students.filter((res) => res.major === "Informatika");
console.log(informatics);

/*
Soal 2 – Function & Loop

Buat function hitungFaktorial(n) yang menghitung faktorial dari angka n.
Gunakan loop (for/while).
Contoh: hitungFaktorial(5) → 120.
*/

const hitungFaktorial = (n) => {
  let res = 1;
  for (let i = 0; n > i; n--) {
    res = res * n;
  }

  console.log(res);
};

hitungFaktorial(8);
/*
Soal 3 – DOM Simulation

Buat program sederhana (console aja, gak perlu HTML real):
Simulasikan tombol "Like 👍" ditekan 3 kali pakai loop → tiap kali ditekan tampil "Jumlah like: X".
*/

// const like = document.getElementById("like");
// const res = document.getElementById("res");

// let count = 0;
// like.addEventListener("click", function () {
//   count += 1;
//   res.textContent = `jumlah like : ${count}`;
// });

/*
Soal 4 – setTimeout & setInterval

Buat program countdown ujian:

Timer mundur dari 10 detik → 0.

Setiap 5 detik tampilkan "Waktu hampir habis!".

Saat habis tampilkan "Ujian selesai ⏰".
*/
let number = 10;
const countdown = setInterval(() => {
  if (number === 10) {
    console.log(number);
  }
  number--;
  console.log(number);
}, 1000);

const alerts = setInterval(() => {
  console.log("Waktu hampir habis!");
}, 5000);

setTimeout(() => {
  clearInterval(countdown);
  clearInterval(alerts);
  console.log("Ujian selesai ⏰");
}, 10000);
/*
Soal 5 – Promise Dasar

Buat Promise cekKoneksiInternet:

Jika status === true → resolve "Koneksi stabil 🌐".

Jika false → reject "Koneksi terputus ❌".

Tangani dengan .then() dan .catch().
*/

const cekKoneksiInternet = new Promise((resolve, reject) => {
  const status = Math.random() < 0.5 ? true : false;
  //   console.log(status);

  if (status === true) {
    resolve("Koneksi stabil 🌐");
  } else {
    reject("Koneksi terputus ❌");
  }
});

cekKoneksiInternet
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
/*
Soal 6 – async/await

Buat function ambilDataUser() yang:

Login user (cek username/password).

Jika berhasil → ambil data profil (simulasi pakai setTimeout).

Cetak hasilnya dengan async/await + try...catch.
*/
const user = {
  username: "fitra3",
  password: "12345",
};
const loginUser = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === "fitra" && password === "12345") {
      resolve("Login Berhasil");
    } else {
      reject("Login Gagal");
    }
  });
};

const profile = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(user), 2000);
  });
};

async function getDataUser() {
  try {
    const login = await loginUser(user.username, user.password);
    console.log(login);

    const res = await profile();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

getDataUser();
