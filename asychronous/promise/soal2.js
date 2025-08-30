const user = {
  username: "Fitra Maulana",
  password: "12345",
};

const bookingTicket = (user) => {
  const authenticate = new Promise((resolve, reject) => {
    if (user.username === "Fitra Maulana" && user.password === "12345") {
      resolve("Login berhasil ✅");
    } else {
      reject("Login gagal ❌");
    }
  });

  return authenticate;
};

const getSchedule = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Jadwal film berhasil diambil 🎬");
  }, 2000);
});

const getSeat = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data kursi berhasil diambil 💺");
  }, 3000);
});

const paymentGateway = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Pembayaran berhasil 💳");
  }, 2000);
});

const timeoutPayment = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Waktu pembayaran habis ⏰");
  }, 5000);
});

bookingTicket(user)
  .then((res) => {
    console.log(res);

    return Promise.all([getSchedule, getSeat]);
  })
  .then((res) => {
    console.log(res);

    return Promise.race([paymentGateway, timeoutPayment]);
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
