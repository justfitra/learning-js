/*
📝 Latihan Soal

Soal 1 – Pembagian angka
Buat fungsi bagi(a, b) dengan arrow function.

Jika b === 0, lempar error "Tidak bisa dibagi dengan 0 ❌".

Tangani error dengan try/catch.

Di finally, selalu return object:

{ status: "done", result: hasil_atau_null }
*/

const bagi = (a, b) => {
  try {
    if (b === 0) {
      throw new Error("Tidak bisa dibagi dengan 0 ❌");
    }
    return { status: "done", result: a / b };
  } catch (err) {
    console.log(err.message);
    return { status: "done", result: null }; // kalau error, result harus null
  }
};

console.log(bagi(8, 0));
// { status: "done", result: null }
console.log(bagi(10, 2));
// { status: "done", result: 5 }

/*
Soal 2 – JSON Parse
Buat fungsi parseJson(str) yang mencoba JSON.parse(str).

Jika berhasil → return hasil JSON.

Jika gagal (string tidak valid) → tangkap error.

Di finally, tetap return { status: "done" } sebagai tambahan.
👉 Jadi hasil akhir harus berupa gabungan data parse + status.
*/

const parseJson = (str) => {
  let result = null;
  try {
    result = JSON.parse(str);
  } catch (err) {
    result = { error: err.message };
  } finally {
    return { ...result, status: "done" };
  }
};

console.log(parseJson('{ "name": "Alice", "age": 25 }'));
// { name: "Alice", age: 25, status: "done" }

console.log(parseJson("invalid json"));
// { error: "Unexpected token i in JSON at position 0", status: "done" }

/*
Soal 3 – Simulasi API
Buat async function getData() dengan Promise:

50% chance berhasil (resolve("Data berhasil ✅")).

50% chance gagal (reject("Gagal ambil data ❌")).

Tangani dengan try/catch.

Di finally, return { status: "request selesai" }.
*/

const getData = async () => {
  try {
    const chance = Math.random() > 0.5; // random true/false
    const res = await new Promise((resolve, reject) => {
      setTimeout(() => {
        chance ? resolve("Data berhasil ✅") : reject("Gagal ambil data ❌");
      }, 1000);
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    return { status: "request selesai" };
  }
};

getData().then(console.log);
// Output salah satu:
// Data berhasil ✅
// { status: "request selesai" }
// --- atau ---
// Gagal ambil data ❌
// { status: "request selesai" }
