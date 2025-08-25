/*
📌 Recap Materi + Soal
1. Dasar JavaScript

Soal 1:
Buat program yang nge-print semua angka dari 1–20, tapi:

Jika angka kelipatan 3 tulis "Fizz"

Jika angka kelipatan 5 tulis "Buzz"

Jika kelipatan 3 dan 5 tulis "FizzBuzz"

2. Function & Scope


Soal 2:
Buat fungsi hitung yang menerima 2 parameter (a, b) dan sebuah callback.

Callback pertama: jumlahkan

Callback kedua: kalikan

Callback ketiga: kurangkan

3. Array & Object

Soal 3:
Dari array berikut:

const users = [
  { name: "Andi", age: 20 },
  { name: "Budi", age: 25 },
  { name: "Citra", age: 17 },
];

Buat:

Array baru berisi semua nama.

Filter hanya yang age >= 18.

Hitung total umur pakai reduce.

4. Optional Chaining

Cek property nested tanpa error.

Soal 4:

const data = { user: { profile: { name: "Fitra" } } };


Gunakan optional chaining untuk ngecek apakah data.user.profile.age ada.
Kalau tidak ada → tampilkan "Age not found".

5. JSON

JSON.parse → ubah string jadi object

JSON.stringify → ubah object jadi string

Soal 5:
Convert object ini jadi JSON string lalu parse kembali jadi object:

const student = { id: 1, name: "Denis", age: 19 };

6. LocalStorage

Simpan data

Ambil data

Hapus data

Soal 6:
Buat form sederhana dengan input task.
Saat submit:

Simpan ke localStorage (dalam bentuk array JSON).

Render semua task ke <ul>.

Data tetap ada meski halaman direfresh.
*/

let number = 20;

for (i = 1; i <= number; i++) {
  if (i % 3 === 0) {
    console.log("fizzz");
  } else if (i % 5 === 0) {
    console.log("buzzz");
  } else if ((i % 3 === 0) & (i % 5 === 0)) {
    console.log("fizzbuzzz");
  } else {
    console.log(i);
  }
}

const total = (a, b, callback) => {
  return callback(a, b);
};

const sum = (a, b) => a + b;
const min = (a, b) => a - b;
const mul = (a, b) => a * b;

console.log(total(12, 12, sum)); // 24
console.log(total(12, 2, min)); // 10
console.log(total(12, 2, mul)); // 24

const users = [
  { name: "Andi", age: 20 },
  { name: "Budi", age: 25 },
  { name: "Citra", age: 17 },
];

let names = [];

users.map((res) => {
  names.push(res.name);
});

let ageFilter = users.filter((res) => res.age >= 18);
let sumAge = users.reduce((arr, curr) => arr + curr.age, 0);
console.log(names);
console.log(ageFilter);
console.log(sumAge);

const data = { user: { profile: { name: "Fitra" } } };

const age = data.user?.profile?.age ?? "Age not found";
console.log(age); // Age not found

const student = { id: 1, name: "Denis", age: 19 };

const stringify = JSON.stringify(student);
console.log(stringify);

const parse = JSON.parse(stringify);
console.log(parse);
