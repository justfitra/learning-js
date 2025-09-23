/*
Soal Project OOP Intermediate (Satu Kesatuan)

Buatlah sebuah sistem Manajemen Akun Bank dengan ketentuan berikut:

1. Encapsulation

Buat class Account dengan properti #balance (private).

Harus ada method deposit(amount) dan withdraw(amount) untuk mengatur saldo (tidak bisa diubah langsung dari luar).

2. Inheritance

Buat class SavingsAccount dan CheckingAccount yang extends Account.

SavingsAccount punya properti tambahan interestRate.

CheckingAccount punya properti tambahan overdraftLimit.

3. Polymorphism

Kedua class (SavingsAccount dan CheckingAccount) harus punya method calculateMonthlyFee() tapi dengan implementasi berbeda.

SavingsAccount → biaya bulanan 0 (gratis).

CheckingAccount → biaya bulanan Rp20.000.

4. Abstraction

Buat class Transaction sebagai abstract class (nggak boleh langsung dipakai).

Transaction punya method execute().

Buat subclass DepositTransaction dan WithdrawTransaction yang implementasi execute()-nya berbeda.

5. Static

Tambahkan method Account.getBankName() yang mengembalikan nama bank, misalnya "Bank Fitra Indonesia".

Method ini bisa dipanggil tanpa bikin objek.

6. Override Parent

Override method toString() pada setiap subclass (SavingsAccount & CheckingAccount) supaya menampilkan info akun masing-masing.

Contoh output:
"Tabungan - Saldo: 1.000.000, Bunga: 5%"
"Giro - Saldo: 500.000, Limit: 200.000"
*/
class Account {
  #balance = 0;

  constructor(name) {
    this.name = name;
  }

  deposit(amount) {
    return (this.#balance += amount);
  }

  withdraw(amount) {
    if (this.#balance < amount) {
      console.log("Saldo Tidak Cukup");
    } else {
      return (this.#balance -= amount);
    }
  }
}

class SavingAccount extends Account {
  constructor() {
    super();
    this.intersetRate = 0.05;
  }

  calculateMonthlyFee() {
    return 0;
  }
}

class CheckingAccount extends Account {
  constructor() {
    super();
    this.overdraftLimit = 200000;
  }

  calculateMonthlyFee() {
    return 20000;
  }
}

// class Transaction {
//   constructor(account) {
//     this.transaction = [];
//     this.account = account;
//   }

//   execute(transactionName, transactionMethod) {
//     const trasnc = `${this.account.name} ${transactionName} ${transactionMethod}`;

//     this.transaction.push(trasnc);
//   }
// }

// class DepositTransaction extends Transaction() {
//   constructor(account) {
//     super(account);
//   }
//   execute() {
//     this.execute("Deposit", this.account);
//   }
// }

const tabungan = new Account("Tabungan");
const giro = new Account("Giro");

tabungan.deposit(1200000);
giro.deposit(500000);

giro.withdraw(900000);

console.log(tabungan);
console.log(giro);
