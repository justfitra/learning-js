for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// loop 1 -10

let whileNumber = 1;
let doNumber = 5;

while (whileNumber <= 3) {
  console.log("belajar js");
  whileNumber++;
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
