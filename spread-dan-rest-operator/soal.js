const karyawanTetap = [
  { nama: "Andi", jabatan: "Manager" },
  { nama: "Budi", jabatan: "Staff" },
];

const karyawanKontrak = [
  { nama: "Citra", jabatan: "Admin" },
  { nama: "Dewi", jabatan: "Marketing" },
];

/* 
Tugasmu:
- Gabungkan kedua array ke dalam array baru bernama semuaKaryawan
- Tampilkan hasilnya dalam bentuk array of object 
*/
const semuaKaryawan = [...karyawanTetap, ...karyawanKontrak];

console.log(semuaKaryawan);

const hitungBelanja = (...hargaBarang) => {
  const result = hargaBarang.reduce((arr, harga) => arr + harga, 0);

  return result;
};

console.log(hitungBelanja(10000, 15000, 20000)); // Output: 45000

const angka = [10, 20, 30, 40, 50];

const [pertama, kedua, ...sisaAngka] = angka;
console.log(pertama, kedua, sisaAngka); // Output: 10 20
/* 
Tugasmu:
- Ambil angka pertama ke dalam variabel 'pertama'
- Ambil angka kedua ke dalam variabel 'kedua'
- Sisanya masukkan ke array 'sisaAngka'
*/

const siswaLama = ["Fitra", "Budi", "Dina"];
const siswaBaru = ["Eka"];

const semuaSiswa = [...siswaLama, ...siswaBaru, "Andi"];

console.log(semuaSiswa);

/*
Tugasmu:
- Gabungkan data siswa lama dan baru ke array semuaSiswa
- Tambahkan satu nama siswa tambahan langsung di spread
- Cetak semuaSiswa
*/
