// Grab Application
// Grab Application

class User {
  #password;
  #orders = [];

  constructor(username, password) {
    if (!password) throw new Error("Password required");
    if (typeof password !== "string")
      throw new Error("Password must be string");

    this.username = username;
    this.#password = password;
  }

  checkPassword(password) {
    if (this.#password !== password) {
      throw new Error("Invalid password");
    }
    return "Login success";
  }

  get orders() {
    return this.#orders;
  }

  addOrder(order) {
    this.#orders.push(order);
  }

  getRoleInfo() {
    return `Penumpang ${this.username}, total pesanan: ${this.#orders.length}`;
  }
}

class Passenger extends User {
  toOrder(order) {
    this.addOrder(order);
  }

  getRoleInfo() {
    return `Penumpang ${this.username}, total pesanan: ${this.orders.length}`;
  }
}

class Driver extends User {
  receive(order, passenger) {
    this.addOrder(`Order dari ${passenger.username}: ${order}`);
  }

  getRoleInfo() {
    return `Driver ${this.username}, total perjalanan: ${this.orders.length}`;
  }
}

class Ride {
  constructor(distance, price, type) {
    if (!distance) throw new Error("Distance required");
    this.distance = distance;
    this.price = price;
    this.type = type;
  }

  calculateFare() {
    return this.distance * this.price;
  }

  toString() {
    return `Perjalanan jenis ${this.type}, Jarak: ${
      this.distance
    } km, Total Harga: Rp${this.calculateFare()}`;
  }
}

class CarRide extends Ride {
  constructor(distance) {
    super(distance, 5000, "Car Ride");
  }
}

class BikeRide extends Ride {
  constructor(distance) {
    super(distance, 3000, "Bike Ride");
  }
}

class RideService {
  static getPlatformName() {
    return "GoGoFast";
  }
}

// --- Testing ---
try {
  const passenger = new Passenger("Alice", "tidaksembarang");
  const driver = new Driver("Fitra", "sembarang1234");

  passenger.toOrder("Pergi ke Lampung");
  driver.receive("Pergi ke Lampung", passenger);

  console.log(driver.checkPassword("sembarang1234"));
  console.log(passenger.getRoleInfo());
  console.log(driver.getRoleInfo());

  const carRide = new CarRide(2);
  const bikeRide = new BikeRide(3);

  console.log(carRide.toString());
  console.log(bikeRide.toString());

  console.log("Platform:", RideService.getPlatformName());
} catch (err) {
  console.log(err.message);
}
