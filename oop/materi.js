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

// Advanced OOP
// Encapsulation (Private Fields & Methods)

// Gunakan # untuk properti/method private.

// Hanya bisa diakses di dalam class.

class User {
  #password; // private
  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  checkPassword(pass) {
    return this.#password === pass;
  }
}

const u = new User("fitra", "12345");
console.log(u.username); // fitra
// console.log(u.#password); ❌ Error
console.log(u.checkPassword("12345")); // true

// Getter & Setter

// Kontrol akses properti dengan get & set.

class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (value < 0) throw new Error("Harga tidak boleh negatif ❌");
    this._price = value;
  }
}

const p = new Product("Laptop", 5000000);
console.log(p.price); // 5000000
p.price = 6000000; // ✅
// p.price = -10;     // ❌ Error

// Static Properties & Methods

// Bisa dipanggil langsung dari class tanpa buat object.

class MathHelper {
  static PI = 3.14;

  static circleArea(r) {
    return this.PI * r * r;
  }
}

console.log(MathHelper.circleArea(10)); // 314

// Abstract Class (via Polymorphism)

// JS gak punya keyword abstract, tapi bisa disimulasikan.

class Animal {
  makeSound() {
    throw new Error("Method makeSound() harus dioverride");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof 🐶");
  }
}

const dog3 = new Dog();
dog3.makeSound(); // Woof

// Interface-like (Duck Typing)

// JS gak punya interface resmi, tapi bisa dipaksa dengan kontrak method.

// Inheritance + Polymorphism Lebih Kompleks

// Kombinasi class parent dan child dengan override method.

// Contoh Mini Project: Bank System Advanced
class BankAccount {
  #pin;
  constructor(owner, balance, pin) {
    this.owner = owner;
    this.balance = balance || 0;
    this.#pin = pin;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner} setor ${amount}, saldo: ${this.balance}`);
  }

  withdraw(amount, pin) {
    if (pin !== this.#pin) return console.log("PIN salah ❌");
    if (amount > this.balance) return console.log("Saldo tidak cukup ❌");

    this.balance -= amount;
    console.log(`${this.owner} tarik ${amount}, saldo: ${this.balance}`);
  }

  get info() {
    return `Akun ${this.owner}, saldo: ${this.balance}`;
  }
}

class SavingAccount extends BankAccount {
  static interestRate = 0.02;

  addInterest() {
    this.deposit(this.balance * SavingAccount.interestRate);
  }
}

const acc1 = new SavingAccount("Fitra", 1000000, 1234);
console.log(acc1.info);
acc1.deposit(500000);
acc1.withdraw(200000, 1234);
acc1.addInterest();
console.log(acc1.info);
