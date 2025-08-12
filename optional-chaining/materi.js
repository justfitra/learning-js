const user = {
  nama: "Fitra",
  sayHi: () => console.log("Halo!"),
};

user.sayHi?.(); // "Halo!"
user.sayBye?.(); // tidak error, tapi tidak ngapa-ngapain

const person = {};

console.log(person.alamat?.kota); // ✅ undefined (tidak error!)

const biodata = {
  nama: "Fitra",
  alamat: {
    kota: "Trenggalek",
  },
};

console.log(biodata.alamat?.kota); // "Trenggalek"
console.log(biodata.pekerjaan?.jenis); // undefined (tanpa error)
