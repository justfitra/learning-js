const sapa = (nama) => `heloo ${nama}`;

console.log(sapa("fitra"));

const kalkulator = (a, b, option) => {
  let hasil = 0;
  switch (option) {
    case "tambah":
      hasil = a + b;
      break;
    case "kali":
      hasil = a * b;
      break;
    case "bagi":
      hasil = a / b;
      break;
    case "kurang":
      hasil = a - b;
      break;
  }
  return hasil;
};

console.log(kalkulator(12, 45, "kali"));
