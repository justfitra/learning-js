class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  borrowBook() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`Buku "${this.title}" berhasil dipinjam ✅`);
    } else {
      console.log(`Buku "${this.title}" sedang dipinjam ❌`);
    }
  }

  returnBook() {
    this.isAvailable = true;
    console.log(`Buku "${this.title}" sudah dikembalikan 🔄`);
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listAvailableBook() {
    console.log("📚 Daftar Buku Tersedia:");
    this.books.forEach((book) => {
      if (book.isAvailable) {
        console.log(`- ${book.title} oleh ${book.author}`);
      }
    });
  }

  findBook(title) {
    const found = this.books.find((b) => b.title === title);
    if (found) {
      console.log(
        `🔍 Ditemukan: ${found.title} oleh ${found.author} (${
          found.isAvailable ? "Tersedia" : "Sedang dipinjam"
        })`
      );
    } else {
      console.log("❌ Buku tidak ditemukan");
    }
  }
}

// --- Test ---
const book1 = new Book("Naruto", "Masashi Kishimoto");
const book2 = new Book("Makanya Mikir", "Canina & Abigail");
const book3 = new Book("Dari Penjara ke Penjara", "Tan Malaka");

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listAvailableBook(); // semua tersedia
book3.borrowBook(); // pinjam Tan Malaka
library.listAvailableBook(); // tinggal Naruto & Makanya Mikir
book3.returnBook(); // kembalikan Tan Malaka
library.findBook("Naruto"); // cek Naruto
