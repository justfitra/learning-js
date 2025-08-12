const profil = {
  nama: "Fitra",
  kontak: {
    email: "fitra@email.com",
  },
};

// Apa hasil dari:
console.log(profil.kontak?.email); // fitra@gmail.com
console.log(profil.kontak?.noHp); // undefined
console.log(profil.alamat?.desa); // undefined
