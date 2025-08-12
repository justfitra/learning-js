/*
Tugasmu:

1. Buat function `bookManagement` yang menerima dua parameter: `books` dan `callback`
2. Ambil semua buku yang harganya di atas Rp50.000
3. Ambil daftar judul buku yang ditulis oleh penulis bernama "Tere Liye"
4. Hitung total harga dari semua buku
5. Kembalikan hasil dalam bentuk array [bukuMahal, judulTereLiye, totalHarga]
6. Panggil function dengan callback dan tampilkan hasilnya
*/

const bookManagement = (books, callback) => {
  const expensiveBook = books.filter((book) => book.harga > 50000);
  const tereLiyeBook = books.filter((book) => book.penulis === "Tere Liye");
  const totalPrice = books.reduce((arr, curr) => arr + curr.harga, 0);
  const result = [expensiveBook, tereLiyeBook, totalPrice];
  callback(result);
  return result;
};

const books = [
  { judul: "Hujan", penulis: "Tere Liye", harga: 60000 },
  { judul: "Bumi", penulis: "Tere Liye", harga: 75000 },
  { judul: "Laskar Pelangi", penulis: "Andrea Hirata", harga: 50000 },
  { judul: "Negeri 5 Menara", penulis: "Ahmad Fuadi", harga: 40000 },
  { judul: "Rindu", penulis: "Tere Liye", harga: 80000 },
  { judul: "Pulang", penulis: "Tere Liye", harga: 90000 },
];

bookManagement(books, (result) => {
  const [bukuMahal, judulTereLiye, totalHarga] = result;
  console.log("Buku mahal: ", bukuMahal);
  console.log("Judul buku Tere Liye: ", judulTereLiye);
  console.log("Total Harga", totalHarga);
});
