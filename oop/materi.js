// 🔑 Konsep Dasar OOP di JavaScript

// 1. Class
// Template/blueprint untuk bikin object.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Halo, nama saya ${this.name}, umur ${this.age} tahun`);
  }
}

const fitra = new Person("Fitra", 19);
fitra.sayHello(); // Halo, nama saya Fitra, umur 19 tahun

//2.Inheritance (Pewarisan)
// Class bisa mewarisi class lain pakai extends.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} bersuara`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} menggonggong 🐶`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} mengeong`);
  }
}
const dog = new Dog("Buddy");
const cat = new Cat("Ali");
dog.speak(); // Buddy menggonggong 🐶
cat.speak();

// 3. Encapsulation
// Biar data/properti lebih aman, kita pakai private field (#).

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    console.log(`Saldo masuk: Rp${amount}, total saldo: Rp${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(5000); // Saldo masuk: Rp5000, total saldo: Rp5000
console.log(account.getBalance()); // 5000

// 4 .Polymorphism
// Satu method, bisa punya implementasi berbeda di class anak.

class Shape {
  area() {
    return 0;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const square = new Square(4);
const circle = new Circle(3);

console.log(square.area()); // 16
console.log(circle.area()); // 28.27

// 👉 Jadi intinya, OOP = ngatur kode pake class & object biar reusable, rapih, dan mudah dikembangkan.
