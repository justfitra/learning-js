function salam(nama) {
  return function () {
    console.log("Halo " + nama);
  };
}

const sapaFitra = salam("Fitra");
sapaFitra(); // Output: Halo Fitra

const sum = (number) => {
  return function () {
    number += 1;

    console.log(number);
  };
};

const tambahSatu = sum(5);

tambahSatu();
tambahSatu();
tambahSatu();
