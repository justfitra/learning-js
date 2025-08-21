// Simpan data
sessionStorage.setItem("theme", "dark");

// Ambil data
console.log(sessionStorage.getItem("theme")); // "dark"

// Tutup tab → buka lagi → datanya hilang
const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
  let currentTheme = sessionStorage.getItem("theme");

  if (currentTheme === "dark") {
    document.body.style.background = "white";
    sessionStorage.setItem("theme", "light");
  } else {
    document.body.style.background = "black";
    sessionStorage.setItem("theme", "dark");
  }
});

// Saat load ulang → langsung cek theme
if (sessionStorage.getItem("theme") === "dark") {
  document.body.style.background = "black";
}
