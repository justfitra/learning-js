let number = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    number += i;
  }
}

console.log(number);

for (let i = 3; i <= 30; i++) {
  if (i % 3 === 0) {
    if (i === 15) {
      continue;
    }

    console.log(i);
  }
}

let input = prompt("masukkan angka : ");

if (input % 2 === 1) {
  console.log("angka ganjil");
} else {
  console.log("angka genap");
}

let whileNumber = 1;
let whileCounter = 0;

while (whileNumber <= 50) {
  whileNumber += 2;
  console.log("total sekarang = ", whileNumber);
  if (whileNumber <= 50) {
    whileCounter = whileNumber;
    continue;
  }
  console.log("angka terakhir = ", whileCounter);
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// loop 1 -10

let whileNumber2 = 1;
let doNumber = 5;

while (whileNumber2 <= 3) {
  console.log("belajar js");
  whileNumber2++;
}
// belajar js 3 kali

do {
  console.log(doNumber);
  doNumber--;
} while (doNumber >= 1);
// 5 4 3 2 1

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
// loop skip kelipatan 3
