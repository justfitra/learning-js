function manajemenDataKaryawan(dataKaryawan) {
  let rataRata = 0;
  let gajiKaryawanTetap = 0;
  let gajiSemuaKaryawan = 0;
  let gajiTertinggi = 0;
  let karyawanKontrakMuda = [];
  let karyawanPajakTinggi = [];
  let karyawanPajakRendah = [];

  for (let i = 0; i < dataKaryawan.length; i++) {
    gajiSemuaKaryawan += dataKaryawan[i].gaji;
    if (dataKaryawan[i].status === "tetap") {
      gajiKaryawanTetap += dataKaryawan[i].gaji;
    }

    if (dataKaryawan[i].gaji > gajiTertinggi) {
      gajiTertinggi = dataKaryawan[i].gaji + "," + dataKaryawan[i].nama;
    }

    if (dataKaryawan[i].status === "kontrak" && dataKaryawan[i].umur < 25) {
      karyawanKontrakMuda.push(dataKaryawan[i].nama);
    }
    const pajak = dataKaryawan[i].gaji > 7000000 ? 0.1 : 0.05;
    if (dataKaryawan[i].gaji > 7000000) {
      const newData = {
        ...dataKaryawan[i],
        pajak: pajak,
        total: dataKaryawan[i].gaji - dataKaryawan[i].gaji * pajak,
      };

      karyawanPajakTinggi.push(newData);
    } else if (dataKaryawan[i].gaji <= 7000000) {
      const newData = {
        ...dataKaryawan[i],
        pajak: pajak,
        total: dataKaryawan[i].gaji - dataKaryawan[i].gaji * pajak,
      };

      karyawanPajakRendah.push(newData);
    }
  }

  rataRata =
    gajiKaryawanTetap /
    dataKaryawan.filter((karyawan) => karyawan.status === "tetap").length;

  return [
    "Total Gaji Semua Karyawan: " + gajiSemuaKaryawan,
    "Total Gaji Karyawan Tetap: " + gajiKaryawanTetap,
    "Nama Nama Karyawan Muda: " + karyawanKontrakMuda,
    "Karyawan Gaji Tertinggi: " + gajiTertinggi,
    "Pajak Karyawan Dengan Gaji Lebih dari Rp.7.000.000: " +
      JSON.stringify(karyawanPajakTinggi),
    "Pajak Karyawan Dengan Gaji Kurang atau Sama dengan Rp.7.000.000: " +
      JSON.stringify(karyawanPajakRendah),
  ];
}

let dataKaryawan = [
  { nama: "Fitra", umur: 21, gaji: 5000000, status: "kontrak" },
  { nama: "Rina", umur: 25, gaji: 7500000, status: "tetap" },
  { nama: "Joko", umur: 28, gaji: 6000000, status: "tetap" },
  { nama: "Dian", umur: 23, gaji: 9500000, status: "kontrak" },
  { nama: "Andi", umur: 26, gaji: 8500000, status: "tetap" },
];

console.log(manajemenDataKaryawan(dataKaryawan));
