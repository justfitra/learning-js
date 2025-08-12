const mahasiswa = {
  nama: "Rizki",
  nim: 124762,
  perkenalan() {
    console.log(`halo nama saya ${this.nama} nim saya ${this.nim}`);
  },
};

mahasiswa.perkenalan();

const siswa = {
  nama: "Jhon Doe",
  ucapSalam: function (waktu) {
    console.log(`Selamat ${waktu}, saya ${this.nama}`);
  },
};

siswa.ucapSalam("malam");

const pengguna = {
  nama: "Andi",
  sapa: () => {
    console.log("Hai, saya " + this.nama);
  },
};

/**
 Apa output dari pengguna.sapa()?
Hai saya undefined
Kenapa hasilnya seperti itu?
Karena sapa adalah arrow function, dan di arrow function tidak bisa menggunakan this
 */
