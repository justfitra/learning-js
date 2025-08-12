// Global Scope
let nama = "Fitra";

function sapa() {
  console.log("Halo " + nama); // bisa akses 'nama'
}
sapa(); // output: Halo Fitra

// Function Scope
function halo() {
  let umur = 19;
  console.log(umur); // OK
}
halo();
console.log(umur); // ❌ Error: umur is not defined

// Block Scope (ES6)
if (true) {
  let makanan = "Bakso";
  console.log(makanan); // OK
}
console.log(makanan); // ❌ Error
