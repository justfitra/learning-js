// 💪 Latihan Soal Singkat
// Gabungkan dua array:

const hewan1 = ["kucing", "anjing"];
const hewan2 = ["burung", "ikan"];

const semuaHewan = [...hewan1, ...hewan2];

console.log(semuaHewan);

// gabungkan dengan spread

// Buat fungsi cetakNama yang bisa menerima banyak nama:
const cetakNama = (...nama) => {
  // console.log(nama);

  return nama;
};

console.log(cetakNama("Fitra", "Budi", "Ayu"));
/*
output:
- Fitra
- Budi
- Ayu
*/
