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
  #stock = 10;
  constructor(title, writer) {
    this.title = title;
    this.writer = writer;
    this.books = [];
  }

  borrrowBook() {
    if (!this.#stock) {
      throw new Error("This book out of stock");
    }
    this.#stock -= 1;

    return `${this.title} writer ${this.writer} has borowed. Stock : ${
      this.#stock
    }`;
  }

  returnBook() {
    this.#stock += 1;
    this.books.push(this.#stock);
    return `${this.title} writer ${this.writer} has returned. Stock : ${
      this.#stock
    }`;
  }

  getInfo() {
    const result = this.books.map((res) => {
      let type;
      let x;
      if (res.weight) {
        type = "Print Book";
        x = res.weight;
      } else {
        type = "E-Book";
        x = res.fileSize;
      }
      return `Judul : ${res.title} , Penulis : ${res.writer} , Stok :  ${
        res.books[0]
      }, Tipe : ${type}, ${res.weight ? "Berat : " : "Ukuran File : "} ${x}`;
    });
    return result;
  }

  totalStock() {
    const total = this.books.reduce((arr, curr) => arr + curr.books[0], 0);

    return total;
  }
}

class EBook extends Book {
  constructor(title, writer, fileSize) {
    super(title, writer);
    this.fileSize = fileSize;
  }

  toString() {
    const stock = this.books.map((res) => res);
    console.log(`E-Book ${this.title}, file ${this.fileSize}MB, stok ${stock}`);
  }
}

class PrintedBook extends Book {
  constructor(title, writer, weight) {
    super(title, writer);
    this.weight = weight;
  }

  toString() {
    const stock = this.books.map((res) => res);
    console.log(
      `Buku Cetak ${this.title}, berat ${this.weight}gr, stok ${stock}`
    );
  }
}

class Member {
  constructor(name) {
    this.name = name;
  }

  borrow(book) {
    return book;
  }
}

class StudentMember extends Member {
  constructor(name) {
    super(name);
    this.role = "Student";
    this.books = [];
  }

  studentBorrow() {
    if (this.books.length > 3) {
      throw new Error(`${this.role} can only borrow 3 books`);
    }

    return this.books;
  }
}

class TeacherMember extends Member {
  constructor(name) {
    super(name);
    this.role = "Teacher";
    this.books = [];
  }

  studentBorrow() {
    if (this.books.length > 5) {
      throw new Error(`${this.role} can only borrow 5 books`);
    }

    return this.books;
  }
}

class Library {
  constructor(allStock) {
    this.allStock = allStock;
  }
  static getLibraryName() {
    return "Perpustakaan Fitra";
  }

  toString() {
    return `Perpustakaan Fitra, total koleksi: ${this.allStock}`;
  }
}

console.log(Library.getLibraryName());

const eBook = new EBook("The Black Window", "Fatkur", 20);
const eBook1 = new EBook("Dari Penjara Ke Penjara", "Tan Malaka", 20);
const printedBook = new PrintedBook("Makanya Mikir", "Cania", 10);
// const printedBook1 = new PrintedBook("Madilog", "Tan Malaka", 10);
const book = new Book();
book.books.push(eBook, eBook1, printedBook);

const student = new Member("Fitra");
const teacher = new Member("Aly");
const studentMember = new StudentMember(student);
const teacherMember = new TeacherMember(teacher);

studentMember.books.push(student.borrow(eBook.borrrowBook()));
studentMember.books.push(student.borrow(eBook1.borrrowBook()));
studentMember.books.push(student.borrow(printedBook.borrrowBook()));
teacherMember.books.push(teacher.borrow(printedBook.borrrowBook()));
// studentMember.books.push(member.borrow(printedBook1.borrrowBook()));

try {
  studentMember.studentBorrow();
} catch (err) {
  console.log(err);
}

studentMember.toString();
eBook.toString();
printedBook.toString();
const library = new Library(book.totalStock());
console.log(book.getInfo());

console.log(library.toString());
