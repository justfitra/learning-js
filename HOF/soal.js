// Soal 1:
// Buatlah fungsi prosesData(data, callback) yang:

// menerima sebuah array angka, dan

// memanggil callback pada setiap item

function prosesData(data, callback) {
  data.map((x) => callback(x));
}

prosesData([1, 2, 3], function (angka) {
  console.log(angka * 2);
});
// Output:
// 2
// 4
// 6

// Soal 2:
// Buat fungsi filterGanjil(data) yang mengembalikan array hanya angka ganjil, lalu gunakan .filter().
const data = [1, 2, 3, 4, 5, 6];

const filterGanjil = (data, callback) => {
  const number = data.filter((x) => x % 2 !== 0);

  callback(number);
};

filterGanjil(data, (number) => console.log(number));
// hasil: [1, 3, 5]

const tambahSeratus = (data) => {
  return data.map((x) => x + 100);
};

console.log(tambahSeratus([10, 20, 30]));
// [110, 120, 130]

const ambilLebihDari50 = (data) => {
  return data.filter((x) => x > 50);
};

console.log(ambilLebihDari50([20, 55, 60, 40])); // [55, 60])

const jumlahkan = (data) => {
  return data.reduce((arr, curr) => arr + curr, 0);
};
console.log(jumlahkan([10, 20, 30]));

const olahData = (data, callback) => {
  const genap = data.filter((x) => x % 2 === 0);
  const dikalikan = genap.map((x) => x * 2);
  const jumlah = dikalikan.reduce((arr, curr) => arr + curr, 0);
  const result = [
    "Genap = " + genap,
    "Dikalikan = " + dikalikan,
    "Jumlah = " + jumlah,
  ];
  callback(result);
  return result;
};
console.log(
  olahData([1, 2, 3, 4, 5, 6], (result) =>
    result.map((res) => console.log(res))
  )
);
