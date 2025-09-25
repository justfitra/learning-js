// 1. Encapsulation
class Account {
  #balance;

  constructor(owner, balance = 0) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`${this.owner} setor Rp${amount}`);
  }

  withdraw(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
      console.log(`${this.owner} tarik Rp${amount}`);
    } else {
      console.log("Saldo Tidak Cukup ❌");
    }
  }

  getBalance() {
    return this.#balance;
  }

  // 5. Static
  static getBankName() {
    return "Bank Fitra Indonesia";
  }
}

// 2. Inheritance
class SavingsAccount extends Account {
  constructor(owner, balance, interestRate = 0.05) {
    super(owner, balance);
    this.interestRate = interestRate;
  }

  // 3. Polymorphism
  calculateMonthlyFee() {
    return 0; // Gratis
  }

  // 6. Override
  toString() {
    return `Tabungan - Pemilik: ${
      this.owner
    }, Saldo: Rp${this.getBalance()}, Bunga: ${this.interestRate * 100}%`;
  }
}

class CheckingAccount extends Account {
  constructor(owner, balance, overdraftLimit = 200000) {
    super(owner, balance);
    this.overdraftLimit = overdraftLimit;
  }

  // 3. Polymorphism
  calculateMonthlyFee() {
    return 20000;
  }

  // 6. Override
  toString() {
    return `Giro - Pemilik: ${
      this.owner
    }, Saldo: Rp${this.getBalance()}, Limit: Rp${this.overdraftLimit}`;
  }
}

// 4. Abstraction
class Transaction {
  constructor(account, amount) {
    if (new.target === Transaction) {
      throw new Error(
        "Transaction is abstract and cannot be instantiated directly!"
      );
    }
    this.account = account;
    this.amount = amount;
  }

  execute() {
    throw new Error("Execute must be implemented in subclass");
  }
}

class DepositTransaction extends Transaction {
  execute() {
    this.account.deposit(this.amount);
  }
}

class WithdrawTransaction extends Transaction {
  execute() {
    this.account.withdraw(this.amount);
  }
}

// ==============================
// 🔥 Testing
// ==============================
const tabungan = new SavingsAccount("Fitra", 1000000, 0.05);
const giro = new CheckingAccount("Maulana", 500000, 200000);

console.log(Account.getBankName()); // Static ✅

console.log(tabungan.toString()); // Override
console.log(giro.toString()); // Override

// Transaction
const t1 = new DepositTransaction(tabungan, 200000);
t1.execute();

const t2 = new WithdrawTransaction(giro, 100000);
t2.execute();

console.log(tabungan.toString());
console.log(giro.toString());
