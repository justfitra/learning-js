// Sudah kamu pelajari (extends), tapi di intermediate kita kombinasikan dengan:
// Override method parent.
// Tambahkan properti/fitur spesifik ke child.
// Panggil method parent pakai super.methodName().

class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    console.log("Hewan ini bersuara...");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  sound() {
    super.sound(); // panggil versi parent
    console.log(`${this.name} ${this.breed} menggonggong: Guk! Guk!`);
  }
}

const dog = new Dog("Bulldog", "Pitbull");
dog.sound();

// 2. Polymorphism
// Satu method tapi implementasinya bisa berbeda di tiap class.
// Kamu sudah coba dengan info() (mobil vs motor).
// Ini berguna saat looping banyak object dengan tipe berbeda.

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

const shapes = [new Square(4), new Circle(3)];
shapes.forEach((s) => console.log(s.area())); // polymorphism

// 3. Composition (HAS-A)
// Kadang lebih baik pakai composition daripada inheritance.
// Misalnya: Car HAS-A Engine.

class Engine {
  constructor(name) {
    this.name = name;
  }
  start() {
    console.log(`Mesin ${this.name} dinyalakan`);
  }
}

class Car {
  constructor(brand, engine) {
    this.brand = brand;
    this.engine = engine;
  }
  startCar() {
    console.log(`Mobil ${this.brand} siap jalan 🚗`);
    this.engine.start();
  }
}

const engine = new Engine("Turbo");
const car = new Car("Toyota", engine);
car.startCar();

// 4. Encapsulation dengan getter & setter
// Supaya properti lebih aman dikontrol.

class User {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    if (value < 0) {
      console.log("Umur tidak valid ❌");
    } else {
      this._age = value;
    }
  }
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === "string") {
      this._name = value;
    } else {
      console.log("Name Harus String");
    }
  }
}

const user = new User("Fitra", 19);
console.log(user.age); // 19
user.age = -5; // invalid
user.age = 20;
user.name = 2;
user.name = "Maulana";
console.log(user.name);

console.log(user.age); // 20

// 5. Static property & method
// Properti/method yang bisa dipanggil tanpa buat object.

class MathUtil {
  static PI = 3.14;
  static square(x) {
    return x * x;
  }
}

console.log(MathUtil.PI); // 3.14
console.log(MathUtil.square(5)); // 25

// 6. Error Handling dalam OOP
// Lempar error di dalam class → tangani di luar.

class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error("Saldo tidak cukup ❌");
    }
    this.balance -= amount;
  }
}

try {
  const account = new BankAccount("Fitra", 1000);
  account.withdraw(2000);
} catch (err) {
  console.log("Error:", err.message);
}
