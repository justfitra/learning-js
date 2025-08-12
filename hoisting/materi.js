// Hoisiting menggunakan var
console.log(nama); // undefined
var nama = "Fitra";

// tidak berlaku pada let dan const
console.log(umur); // ❌ Error: Cannot access 'umur' before initialization
let umur = 19;
