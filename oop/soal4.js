class Vehicle {
  constructor(brand, pricePerDay) {
    this.brand = brand;
    this.pricePerDay = pricePerDay;
    this.isAvailable = true;
  }

  info() {
    console.log(
      `Mobil ${this.brand}, ${this.pricePerDay}/hari, status: ${
        this.isAvailable ? "Tersedia" : "Dipinjam"
      }`
    );
  }
}

class Car extends Vehicle {
  constructor(brand, pricePerDay, doors) {
    super(brand, pricePerDay);
    this.doors = doors;
  }

  info() {
    console.log(
      `Mobil ${this.brand}, ${this.pricePerDay}/hari, ${
        this.doors
      } pintu, status: ${this.isAvailable ? "Tersedia" : "Dipinjam"}`
    );
  }
}

class Rental {
  constructor() {
    this.cars = [];
  }

  addCar(car) {
    return this.cars.push(car);
  }

  rentCar(brand, days) {
    const car = this.cars.find((res) => res.brand === brand);
    if (!car) {
      console.log(`Mobil ${brand} tidak ditemukan ❌`);
      return;
    }
    if (car.isAvailable) {
      car.isAvailable = false;
      const total = car.pricePerDay * days;
      console.log(
        `Mobil ${car.brand} berhasil disewa ${days} hari, total ${total}`
      );
    } else {
      console.log(`Mobil ${car.brand} sedang tidak tersedia ❌`);
    }
  }

  listCar() {
    this.cars.map((car) => car.info());
  }
}
const car1 = new Car("Avanza", 300000, 4);
const car2 = new Car("Pajero", 500000, 4);

const rental = new Rental();

rental.addCar(car1);
rental.addCar(car2);
rental.listCar();
rental.rentCar("Avanza", 3);
rental.listCar();
rental.rentCar("Avanza", 3);
