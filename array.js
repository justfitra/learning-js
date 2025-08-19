let teman = ["Budi", 7, "Sinta", "Rama", "Deni"];

console.log("jumlah teman : " + teman.length);
console.log("nama pertama teman : " + teman[0]);

let teman2 = "";
for (let i = 0; i < teman.length; i++) {
  teman2 += teman[i] + " ";
}

console.log("nama nama semua teman : " + teman2);
console.log(teman.filter("budi", 2, 4));
