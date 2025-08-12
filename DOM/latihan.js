document.getElementById("tampilkan").addEventListener("click", function () {
  const nama = document.getElementById("namaInput").value;
  document.getElementById("hasil").textContent = `hall0,${nama}`;
});
