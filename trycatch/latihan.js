function prosesData(data) {
  try {
    if (!data.nama) throw new Error("Nama tidak ditemukan ❌");
    return { status: "success", user: data };
  } catch (err) {
    return { status: "error", message: err.message };
  } finally {
    return { status: "done", data: "fallback" };
  }
}

console.log(prosesData({ nama: "Fitra", umur: 19 }));
console.log(prosesData({ umur: 19 }));

/*
Alasannya bukan karena dipanggil 2 kali, tapi karena:

finally akan selalu jalan setelah try atau catch.

Kalau di dalam finally ada return, maka itu mengganti hasil return dari try maupun catch.

Jadi meskipun try sukses atau catch kena error, hasil akhirnya tetap dari finally.
*/
