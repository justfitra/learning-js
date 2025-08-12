const nilaiMahasiswa = {
  nama: "Fitra Maulana",
  nilai: [85, 92, 78, 90, 88],

  hitungRataRata() {
    const result =
      this.nilai.reduce((total, nilai) => total + nilai, 0) / this.nilai.length;
    return result.toFixed(1);
  },

  tambahNilai(n) {
    // tambahkan nilai baru ke array nilai
    const add = this.nilai.push(n);
    return add;
  },

  cetakRingkasan() {
    // tampilkan nama dan rata-rata nilai

    console.log(
      `hallo ${this.nama} rata-rata nilai kamu adalah ${this.hitungRataRata()}`
    );
  },
};

nilaiMahasiswa.hitungRataRata();
nilaiMahasiswa.tambahNilai(98);
nilaiMahasiswa.cetakRingkasan();
