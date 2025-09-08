// 1. Basic Try...Catch
try {
  let angka = 10 / 0;
  console.log("Hasil:", angka);

  // Contoh error
  console.log(tidakAdaVariabel);
} catch (error) {
  console.log("Terjadi error:", error.message);
}

// 2. Try...Catch + Finally
try {
  let data = JSON.parse('{"name":"Fitra"}'); // ✅ format benar
  console.log("Data:", data);
} catch (err) {
  console.log("Format JSON salah ❌");
} finally {
  console.log("Proses selesai ✅");
}

// 3. Lempar Error Sendiri (throw)
function bagi(a, b) {
  if (b === 0) {
    throw new Error("Tidak bisa dibagi dengan 0 ❌");
  }
  return a / b;
}

try {
  console.log(bagi(10, 0));
} catch (err) {
  console.log("Error:", err.message);
}

// 📌 Contoh 1 – return di try, logging di finally

const data = {
  username: "fitra",
  password: "12345",
};

function getUser(data) {
  try {
    if (!data.username) throw new Error("Username tidak ada ❌");
    return { status: "success", user: data };
  } catch (err) {
    return { status: "error", message: err.message };
  } finally {
    console.log("Selesai ambil data ✅"); // cuma log, return dari try/catch aman
  }
}

console.log(getUser());

/*
📌 Contoh 2 – return di finally (override hasil try/catch)
function getUser(data) {
  try {
    if (!data.username) throw new Error("Username tidak ada ❌");
    return { status: "success", user: data };
  } catch (err) {
    return { status: "error", message: err.message };
  } finally {
    return { status: "done", user: "default" }; // override semua hasil
  }
}

console.log(getUser(data));


👉 Output:

{ status: 'done', user: 'default' }
*/
