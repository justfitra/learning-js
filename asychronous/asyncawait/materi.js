async function hello() {
  return "Hello World";
}

hello().then((res) => console.log(res)); // Output: Hello World

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function run() {
  console.log("Mulai...");
  await delay(2000); // tunggu 2 detik
  console.log("Selesai!");
}

run();

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data berhasil diambil 📦"), 2000);
  });
}

async function fetchData() {
  const res = await getData();
  console.log(res);
}

fetchData();

async function login(user, pass) {
  try {
    if (user === "Fitra" && pass === "12345") {
      return console.log("Login berhasil ✅");
    } else {
      throw new Error("Login gagal ❌");
    }
  } catch (err) {
    console.log(err.message);
  }
}

// login("Fitra", "12345"); // ✅
login("Fitra", 1); // ❌
