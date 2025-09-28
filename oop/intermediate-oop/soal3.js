/*
Soal Project OOP – Sistem Perpustakaan Digital

Buat sistem manajemen perpustakaan dengan ketentuan:

Encapsulation

Buat class Book dengan properti private #stock.

Tambahkan method borrowBook() dan returnBook() untuk mengatur stok.

Tidak boleh mengubah #stock langsung dari luar.

Inheritance

Buat class EBook dan PrintedBook yang mewarisi dari Book.

EBook punya properti tambahan fileSize.

PrintedBook punya properti tambahan weight.

Polymorphism

Buat method getInfo() di Book.

Override method di EBook → tampilkan "E-Book {judul}, file {fileSize}MB, stok {stock}".

Override method di PrintedBook → tampilkan "Buku Cetak {judul}, berat {weight}gr, stok {stock}".

Abstraction

Buat abstract class Member dengan method borrow(book).

Buat subclass StudentMember dan TeacherMember yang implementasi borrow(book) berbeda:

StudentMember maksimal pinjam 3 buku.

TeacherMember maksimal pinjam 5 buku.

Static

Tambahkan method static Library.getLibraryName() yang mengembalikan "Perpustakaan Fitra".

Override Parent

Override toString() di Library agar menampilkan:
"Perpustakaan Fitra, total koleksi: {jumlah buku}".

👉 Tugasmu: Buat program OOP sesuai ketentuan di atas, lalu tunjukkan cara kerja dengan minimal:

Membuat 2 EBook dan 2 PrintedBook.

Membuat 1 StudentMember dan 1 TeacherMember.

Menyimpan semua buku ke dalam class Library.

Simulasikan:

Student pinjam buku → jika lebih dari 3, tampilkan error.

Teacher pinjam buku → jika lebih dari 5, tampilkan error.

Cetak daftar koleksi dengan getInfo().

Cetak nama perpustakaan dengan Library.getLibraryName().
*/

class Book {
  #stock;
  constructor(title, writer, stock = 10) {
    this.title = title;
    this.writer = writer;
    this.#stock = stock;
  }

  borrowBook() {
    if (this.#stock === 0) {
      throw new Error("This Book Sold out");
    }
    return (this.#stock -= 1);
  }

  returnBook() {
    this.#stock += 1;
    this.books.push(this.#stock);
    return `${this.title} writer ${this.writer} has returned. Stock : ${
      this.#stock
    }`;
  }

  getInfo() {
    return `Book ${this.title}, stock : ${this.#stock}`;
  }

  stock() {
    return this.#stock;
  }
}

class EBook extends Book {
  constructor(title, writer, fileSize) {
    super(title, writer);
    this.fileSize = fileSize;
  }

  toString() {
    console.log(
      `E-Book ${this.title}, file ${this.fileSize}MB, stok ${this.borrowBook()}`
    );
  }
}

class PrintedBook extends Book {
  constructor(title, writer, weight) {
    super(title, writer);
    this.weight = weight;
  }

  toString() {
    console.log(
      `Buku Cetak ${this.title}, berat ${
        this.weight
      }gr, stok ${this.borrowBook()}`
    );
  }
}

class Member {
  constructor(name) {
    this.name = name;
    this.borrowBooks = [];
  }

  borrow() {
    throw new Error("This Method called in childern Class");
  }
}

class StudentMember extends Member {
  constructor(name) {
    super(name);
    this.role = "Student";
  }

  borrow(book) {
    const studentFilter = this.borrowBooks.filter(
      (res) => res.role === "Student"
    );
    if (studentFilter.length > 3) {
      throw new Error(`${this.role} can only borrow 3 books`);
    }

    book.borrowBook();
    this.borrowBooks.push({ ...book, role: this.role });
  }
}

class TeacherMember extends Member {
  constructor(name) {
    super(name);
    this.role = "Teacher";
  }

  borrow(book) {
    const teacherFilter = this.borrowBooks.filter(
      (res) => res.role === "Teacher"
    );
    if (teacherFilter.length > 5) {
      throw new Error(`${this.role} can only borrow 5 books`);
    }
    book.borrowBook();
    this.borrowBooks.push({ ...book, role: this.role });
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listBook() {
    return this.books.map((res) => res.getInfo());
  }
  static getLibraryName() {
    return "Perpustakaan Fitra";
  }

  toString() {
    const stock = this.books.map((res) => res.stock());
    const totalStock = stock.reduce((acc, curr) => acc + curr, 0);
    return `Perpustakaan Fitra, total koleksi: ${totalStock}`;
  }
}

console.log(Library.getLibraryName());
const library = new Library();
const eBook = new EBook("The Black Window", "Fatkur", 20);
library.addBook(eBook);
const eBook1 = new EBook("Dari Penjara Ke Penjara", "Tan Malaka", 20);
library.addBook(eBook1);
const printedBook = new PrintedBook("Makanya Mikir", "Cania", 10);
library.addBook(printedBook);
const printedBook1 = new PrintedBook("Madilog", "Tan Malaka", 10);
library.addBook(printedBook1);

const studentMember = new StudentMember("Fitra");
const teacherMember = new TeacherMember("Alice");

studentMember.borrow(eBook);
studentMember.borrow(eBook);
studentMember.borrow(eBook);
teacherMember.borrow(printedBook);
teacherMember.borrow(printedBook1);
teacherMember.borrow(printedBook1);
teacherMember.borrow(printedBook1);
teacherMember.borrow(printedBook1);

console.log(library.listBook());
console.log(library.toString());
