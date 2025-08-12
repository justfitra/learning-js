// HOF menggunakan callback
function halo(callback) {
  const nama = "nama";
  console.log("Hai!");
  callback(nama);
}

const tampilNama = (nama) => {
  console.log("Nama saya Fitra" + nama);
};

halo(tampilNama);
// Output:
// Hai!
// Nama saya Fitra

// HOF menggunakan closure
function buatPangkat(n) {
  return function (x) {
    return x ** n;
  };
}

const pangkat2 = buatPangkat(2);
console.log(pangkat2(5)); // 25

const pangkat3 = buatPangkat(3);
console.log(pangkat3(2)); // 8
