function buatPenghitung() {
  let count = 0;

  return function () {
    count++;
    console.log("Nilai sekarang: " + count);
  };
}

const hitung = buatPenghitung();
const hitung2 = buatPenghitung();
hitung(); // 1
hitung2(); // 2
hitung(); // 3

/*
Pertanyaan:

Kenapa count tetap bertambah meski buatPenghitung() sudah selesai dipanggil?
karena count mengingat nilai sebelumnya dan variabel hitung jika dipanggil akan terus mengeksekusi function yang sana

Coba buat dua penghitung: hitung1 dan hitung2, apakah mereka saling mempengaruhi?
tidak variabel hitung dua adalah variabel baru jadi nilai awal yang di hitung
*/
