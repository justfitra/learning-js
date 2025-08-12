const user = {
  name: "Fitra",
  greet: function () {
    console.log("Halo, saya " + this.name);
  },
};

user.greet(); // Output: Halo, saya Fitra

const siswa = {
  nama: "Budi",
  ucapSalam: function (waktu) {
    console.log(`Selamat ${waktu}, saya ${this.nama}`);
  },
};

siswa.ucapSalam("pagi"); // Output: Selamat pagi, saya Budi

const users = {
  name: "Dina",
  greet: () => {
    console.log("Halo, saya " + this.name);
  },
};

users.greet(); // Output: Halo, saya undefined ❌

const biodata = {
  name: "fitra",
  age: 20,
  gender: "Male",
  address: "Trenggalek",
  introduce() {
    console.log(
      `hello my name is ${this.name}, i am ${this.age} years old, i am ${this.gender},i am live in ${this.address}`
    );
  },
};

biodata.introduce();
