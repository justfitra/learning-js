// Event Bubbling
document.getElementById("child").addEventListener("click", () => {
  console.log("Child diklik");
});

// document.getElementById("parent").addEventListener("click", () => {
//   console.log("Parent ikut kena (Bubbling)");
// });

// Event Capturing
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent dulu (Capturing)");
  },
  true
);

// Event Delegation
document.getElementById("menu").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log("Kamu pilih:", e.target.textContent);
  }
});

// event.preventDefault()
document.getElementById("link").addEventListener("click", function (e) {
  e.preventDefault(); // cegah pindah halaman
  console.log("Link diblokir, tetap di sini.");
});

// event.stopPropagation
document.getElementById("child").addEventListener("click", function (e) {
  e.stopPropagation(); // hentikan event di sini
  console.log("Child diklik, parent tidak ikut");
});
