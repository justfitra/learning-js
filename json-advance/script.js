let products = [
  { id: 1, name: "Nasi Goreng", price: 15000 },
  { id: 2, name: "Mie Ayam", price: 12000 },
  { id: 3, name: "Es Teh", price: 5000 },
];

// add data products to Local Storage
localStorage.setItem("data", JSON.stringify(products));

// get all data
let data = JSON.parse(localStorage.getItem("data"));
// console.log(data);

// create new data
data.push(
  { id: 4, name: "Es Jeruk", price: 14000 },
  { id: 5, name: "Es Doger", price: 5000 }
);
console.log(data);
// update data
data = data.map((res) => (res.id === 1 ? { ...res, name: "Nasi Uduk" } : res));
localStorage.setItem("data", JSON.stringify(data));

// delete data
data = data.filter((res) => res.id !== 4);
localStorage.setItem("data", JSON.stringify(data));

// search data
data = data.find((res) => res.name === "Es Teh");
//

// localStorage.clear();
