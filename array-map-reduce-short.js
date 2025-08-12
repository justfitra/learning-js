const number = [1, 2, 3, 4, 5];
const hasil = number.map((x) => x);

console.log("array map : " + hasil);

// reduce menjumlah array
const reduceNumber = [1, 2, 3, 4];
const result = number.reduce((arr, curr) => arr + curr, 0);

console.log("array reduce : " + result);

const sortNumber = [4, 6, 8, 1, 2, 3];
const resultSort = sortNumber.sort((a, b) => a - b);

console.log("array sort : " + sortNumber);

const hitung = () => {
  let hasil = 0;
  return function () {
    hasil++;
    return hasil;
  };
};

const resultHitung = hitung();
console.log(resultHitung());
console.log(resultHitung());
