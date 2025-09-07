/*
📌 Soal Async/Await – Level Menengah

Buat simulasi proses belanja online dengan alur berikut:

loginUser(username, password) → return Promise.

Jika username === "fitra" dan password === "12345" → resolve "Login berhasil ✅".

Jika salah → reject "Login gagal ❌".

getProducts() → return Promise dengan delay 2 detik, resolve "Daftar produk berhasil diambil 🛍️".

addToCart() → return Promise dengan delay 1,5 detik, resolve "Produk berhasil dimasukkan ke keranjang 🛒".

checkout() → return Promise dengan delay 3 detik, resolve "Checkout berhasil 💳".

👉 Tugasmu:

Buat fungsi async function startShopping()

Jalankan semua step di atas secara berurutan dengan await.

Jika salah login → hentikan proses dan tampilkan pesan error.

⚡ Tantangan tambahan (opsional):
Tambahkan try...catch agar jika ada error, program tetap jalan tanpa crash.
*/

const loginUser = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === "fitra" && password === "12345") {
      resolve("Login berhasil ✅");
    } else {
      reject("Login gagal ❌");
    }
  });
};

const getProduct = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Daftar produk berhasil diambil 🛍️"), 2000);
  });
};

const addToCart = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Produk berhasil dimasukkan ke keranjang 🛒");
    }, 1500);
  });
};

const checkout = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Checkout berhasil 💳");
    }, 3000);
  });
};

async function startShopping() {
  try {
    const login = await loginUser("fitra", "123457");
    console.log(login);

    const product = await getProduct();
    console.log(product);

    const cart = await addToCart();
    console.log(cart);

    const pay = await checkout();
    console.log(pay);

    console.log("🎉 Belanja selesai, terima kasih!");
  } catch (err) {
    console.log(err);
  }
}

startShopping();
