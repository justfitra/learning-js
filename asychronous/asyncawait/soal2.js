/*
📌 Soal: Sistem Pemesanan Tiket Pesawat ✈️

Buatlah program dengan async/await + Promise yang punya alur berikut:

Login user

Jika username = "fitra" dan password = "12345" → resolve "Login berhasil ✅".

Jika salah → reject "Login gagal ❌".

Cek saldo user

Saldo = 500000.

Jika harga tiket ≤ saldo → resolve "Saldo cukup 💰".

Jika tidak → reject "Saldo tidak cukup ❌".

Pesan tiket

Gunakan setTimeout(2000) untuk simulasi, hasil: "Tiket berhasil dipesan 🎫".

Pembayaran

Gunakan Promise.race dengan:

paymentSuccess → resolve "Pembayaran berhasil 💳" dalam 2 detik.

paymentTimeout → resolve "Waktu pembayaran habis ⏰" dalam 3 detik.

Jika semua langkah berhasil, tampilkan urutan hasilnya ke console.

Jika ada yang gagal, langsung hentikan proses dengan catch.
*/

const user = {
  username: "fitra",
  password: "12345",
  balance: 500000,
};

const loginUser = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === "fitra" && password === "12345") {
      resolve("Login berhasil ✅");
    } else {
      reject("Login gagal ❌");
    }
  });
};

const checkBalance = (balance) => {
  const ticketPrice = 100000;
  return new Promise((resolve, reject) => {
    if (ticketPrice <= balance) {
      resolve("Saldo cukup 💰");
    } else {
      reject("Saldo tidak cukup ❌");
    }
  });
};

const result = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Tiket berhasil dipesan 🎫"), 2000);
  });
};

const paymentSuccess = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Pembayaran berhasil 💳"), 2000);
  });
};

const paymentTimeout = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Waktu pembayaran habis ⏰"), 3000);
  });
};

async function bookingTicket() {
  try {
    const login = await loginUser(user.username, user.password);
    console.log(login);

    const balance = await checkBalance(user.balance);
    console.log(balance);

    const res = await result();
    console.log(res);

    const payment = await Promise.race([paymentSuccess(), paymentTimeout()]);
    console.log(payment);
  } catch (err) {
    console.log(err);
  }
}

bookingTicket();
