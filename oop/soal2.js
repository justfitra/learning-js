/*
Soal 1 – Bank Account System

Buat class BankAccount dengan properti:

owner

balance (default 0)

Method:

deposit(amount) → tambah saldo.

withdraw(amount) → kurangi saldo, jika saldo tidak cukup lempar error "Saldo tidak cukup ❌".

info() → tampilkan nama + saldo.

Buat class SavingAccount yang extends BankAccount, dengan tambahan properti:

interestRate

method addInterest() → tambahkan bunga ke saldo (balance += balance * interestRate).
*/

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance || 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance > 0 && this.balance > amount
      ? (this.balance -= amount)
      : console.log("Saldo tidak cukup ❌");
  }

  info() {
    console.log(`${this.owner} saldo kamu ${this.balance}`);
  }
}

class SavingAccount extends BankAccount {
  constructor(owner, balance) {
    super(owner, balance);
    this.interestRate = 0.5;
  }

  addInterest() {
    this.balance += this.balance * this.interestRate;
  }
}

const account = new SavingAccount("Fitra", 2000000);

account.addInterest();
account.info();

/*
Soal 2 – E-Commerce Order

Buat class Product dengan properti name dan price.

Buat class Order dengan:

properti items (array kosong).

method addItem(product, qty) → push ke array.

method getTotal() → hitung total harga semua barang.

method summary() → tampilkan daftar barang + total belanja.

Tambahan: buat 3 product (Laptop, Mouse, Keyboard) lalu masukkan ke order dan cetak ringkasan.
*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  constructor() {
    this.items = [];
  }

  addItem(product, qty) {
    const newData = { ...product, quantity: qty };
    this.items.push(newData);
  }

  getTotal() {
    let total = [];
    this.items.map((res) => total.push(res.price * res.quantity));
    return total.reduce((arr, curr) => arr + curr);
  }

  summary() {
    console.log(this.items, this.getTotal());
  }
}

const product1 = new Product("Laptop", 5000000);
const product2 = new Product("Mouse", 50000);
const product3 = new Product("Keyboard", 100000);

const order = new Order();
order.addItem(product1, 1);
order.addItem(product2, 2);
order.addItem(product3, 2);

order.getTotal();
order.summary();
/*
Soal 3 – Employee Management (Polymorphism)

Buat class Employee dengan:

properti name dan salary.

method info() → tampilkan nama + gaji.

Buat class Manager yang extends Employee, dengan tambahan properti bonus.
Override method info() → tampilkan nama + gaji + bonus.

Buat class Developer yang extends Employee, dengan tambahan properti language.
Override method info() → tampilkan nama + gaji + bahasa pemrograman.
 */

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  info() {
    console.log(this.name, this, this.salary);
  }
}

class Manager extends Employee {
  constructor(name, salary, bonus) {
    super(name, salary);
    this.bonus = bonus;
  }

  info() {
    console.log(this.name, this.salary, this.bonus);
  }
}

class Developer extends Employee {
  constructor(name, salary, language) {
    super(name, salary);
    this.language = language;
  }

  info() {
    console.log(this.name, this.salary, this.language);
  }
}

const manager = new Manager("Fatkur", 10000, 10000);
const developer = new Developer("Fitra Maulana", 10000, "C++");

manager.info();
developer.info();
