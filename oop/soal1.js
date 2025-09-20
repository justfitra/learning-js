/*
Soal OOP

Kamu diminta membuat sistem sederhana untuk kendaraan.

Buat class Vehicle dengan property:

brand (merek kendaraan)

wheels (jumlah roda)

method info() → cetak: "Kendaraan merek {brand} dengan {wheels} roda."

Buat class Car yang extends Vehicle dengan tambahan:

property doors (jumlah pintu)

override method info() → cetak: "Mobil merek {brand}, {wheels} roda, {doors} pintu."

Buat class Motorcycle yang extends Vehicle dengan tambahan:

property helmet (boolean, default false)

method useHelmet() → set helmet = true

override method info() → cetak:

Kalau helmet = true → "Motor merek {brand}, {wheels} roda, helm dipakai ✅"

Kalau helmet = false → "Motor merek {brand}, {wheels} roda, helm tidak dipakai ❌"

🎯 Output yang diharapkan:
Kendaraan merek Toyota dengan 4 roda.
Mobil merek Toyota, 4 roda, 4 pintu.
Motor merek Yamaha, 2 roda, helm tidak dipakai ❌
Motor merek Yamaha, 2 roda, helm dipakai ✅
*/

class Vehicle {
  constructor(brand, wheels) {
    this.brand = brand;
    this.wheels = wheels;
  }

  info() {
    console.log(`Kendaraan merek ${this.brand} dengan ${this.wheels} roda.`);
  }
}

class Car extends Vehicle {
  constructor(brand, wheels, doors) {
    super(brand, wheels);
    this.doors = doors;
  }

  info() {
    console.log(
      `Mobil merek ${this.brand}, ${this.wheels} roda, ${this.doors} pintu.`
    );
  }
}

class Motorcycle extends Vehicle {
  constructor(brand, wheels) {
    super(brand, wheels);
    this.helmet = false;
  }

  useHelmet() {
    this.helmet = true;
  }

  info() {
    this.helmet === true
      ? console.log(
          `Motor merek ${this.brand}, ${this.wheels} roda, helm dipakai ✅`
        )
      : console.log(
          `Motor merek ${this.brand}, ${this.wheels} roda, helm tidak dipakai ❌`
        );
  }
}
const car = new Car("Toyota Supra", 2, 4);
car.info();

const motorcycle = new Motorcycle("Beat", 2);
motorcycle.useHelmet();
motorcycle.info();

const motorcycle1 = new Motorcycle("Fiz ER", 2);
motorcycle1.info();
