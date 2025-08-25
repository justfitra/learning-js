// Object Definitions

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const persons = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
});

// Create an Object:
const persin = {
  firstName: "John",
  lastName: "Doe",
};

// Create new Object
const man = Object.create(persin);
man.firstName = "Peter";

// fromEntries()
const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500],
];

const myObj = Object.fromEntries(fruits);

// Create Target Object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Create Source Object
const person2 = { firstName: "Anne", lastName: "Smith" };

// Assign Source to Target
let obj = Object.assign(person1, person2);
// console.log(obj);

// Object Type Person
function Personi(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// console.log(Personi);

// You can NOT add a new property
// Person.nationality = "English";

// To add a new property, you must add it to the constructor function prototype:
Personi.prototype.nationality = "English";

const myFather = new Personi("Fitra", "maulana", 18, "black");
console.log(myFather);
console.log(myFather.nationality);
