let products = [
  { id: 1, name: "Nasi Goreng", price: 15000 },
  { id: 2, name: "Mie Ayam", price: 12000 },
  { id: 3, name: "Es Teh", price: 5000 },
];

// Simpan ke localStorage
localStorage.setItem("products", JSON.stringify(products));

// 1️⃣ Read Data (ambil semua produk)
let data = JSON.parse(localStorage.getItem("products"));
console.log(data);

// 2️⃣ Create Data (tambah produk baru)
data.push({ id: 4, name: "Bakso", price: 18000 });
localStorage.setItem("products", JSON.stringify(data));

// 3️⃣ Update Data (ubah nama/price produk tertentu)
data = data.map((item) => (item.id === 2 ? { ...item, price: 13000 } : item));
localStorage.setItem("products", JSON.stringify(data));

// 4️⃣ Delete Data (hapus produk tertentu)
data = data.filter((item) => item.id !== 3);
localStorage.setItem("products", JSON.stringify(data));

// 5️⃣ Search Data (cari produk berdasarkan nama)
let result = data.find((item) => item.name === "Nasi Goreng");
console.log(result);
