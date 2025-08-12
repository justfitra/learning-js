// Spread pada Array

const nums1 = [1, 2, 3];
const nums2 = [...nums1, 4, 5]; // gabung dengan 4 dan 5

console.log(nums2); // [1, 2, 3, 4, 5]

// Spread pada Object

const user = { name: "Fitra", age: 19 };
const updatedUser = { ...user, city: "Trenggalek" };

console.log(updatedUser);
// { name: 'Fitra', age: 19, city: 'Trenggalek' }

// Rest Paramenter

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
