function totalShopping(shopping) {
  let totalPrice = 0;
  let totalDiscount = 0;
  let totalShopping = 0;

  for (let i = 0; i < shopping.length; i++) {
    totalPrice += shopping[i].price * shopping[i].quantity;
  }

  if (totalPrice >= 100000) {
    totalDiscount = totalPrice * 0.1;
  }

  totalShopping = totalPrice - totalDiscount;

  return [
    "total current discount = " + totalPrice,
    "total discount = " + totalDiscount,
    "total shopping = " + totalShopping,
  ];
}

shopping = [
  { name: "jagung", price: 12000, quantity: 2 },
  { name: "sayur", price: 95000, quantity: 3 },
];

console.log(totalShopping(shopping));

function primaCheck(n) {
  if (n < 2) return false;
  console.log(Math.sqrt(n));
  for (let i = 2; i <= n / 2; i++) {
    console.log(i);
    if (n % i === 0) return false;
  }
  return true;
}

console.log(primaCheck(3));

let number = 25;

console.log(Math.sqrt(number));
