// // Simpan data
// localStorage.setItem("name", "Fitra");

// // Ambil data
// console.log(localStorage.getItem("name")); // "Fitra"

// // Hapus data
// localStorage.removeItem("name");

// // Hapus semua
// localStorage.clear();

// Simpan array
let todos = ["Belajar JS", "Ngoding", "Makan"];
localStorage.setItem("todos", JSON.stringify(todos));

// Ambil array
let ambilTodos = JSON.parse(localStorage.getItem("todos"));
console.log(ambilTodos); // ["Belajar JS", "Ngoding", "Makan"]

// Simpan object
let user = { name: "Fitra", age: 19 };
localStorage.setItem("user", JSON.stringify(user));

// Ambil object
let ambilUser = JSON.parse(localStorage.getItem("user"));
console.log(ambilUser.name); // "Fitra"
