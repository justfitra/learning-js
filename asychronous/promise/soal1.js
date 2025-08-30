const user = { id: 2, name: "Fitra Maulana", role: "admin" };

const getUserId = (user) => {
  return new Promise((resolve, reject) => {
    if (user.id === 1) {
      resolve(user);
    } else {
      reject("Data tidak ditemukan");
    }
  });
};

getUserId(user)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const getUser = new Promise((resolve) => {
  setTimeout(() => {
    resolve("User berhasil diambil 👤");
  }, 1000);
});

const userOrder = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Order berhasil diambil 🛒");
  }, 2000);
});

const getItem = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Barang berhasil ditemukan 📦");
  });
});

// Promise.all([getUser, userOrder, getItem]).then((res) => console.log(res));

const fast = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Fast selesai ⚡");
  }, 1000);
});

const medium = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Medium selesai ⏳");
  }, 2000);
});

const slow = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Slow selesai 🐢");
  }, 3000);
});

Promise.race([fast, medium, slow]).then((res) => console.log(res));

const conectionCheck = () => {
  let bool = Math.random() > 0.5;

  const promise = new Promise((resolve, reject) => {
    bool ? resolve("Koneksi internet stabil 🌐") : reject("Koneksi gagal ❌");
  });

  return promise;
};

conectionCheck()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
