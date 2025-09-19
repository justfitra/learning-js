class Book {
  constructor(title, author, isBorrowed) {
    this.title = title;
    this.author = author;
    this.isBorrowed = isBorrowed || false;
  }
}

class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  borrowBook(title) {
    const fil = this.books.filter((res) => res.title === title);
    fil.map((res) => (res.isBorrowed = true));
    console.log(`Buku ${title} berhasil dipinjam`);
  }
  listBook() {
    let status = "";
    this.books.map((res) => {
      res.isBorrowed ? (status = "Dipinjam") : (status = "Tersedia");
      console.log(`${res.title} - ${res.author} (${status})`);
    });
  }
}

const book1 = new Book("Madilog", "Tan Malaka");
const book2 = new Book("Makanya Mikir", "Cania dan Abigail");

const library = new Library();
library.addBook(book1);
library.addBook(book2);

library.listBook();
library.borrowBook("Madilog");

library.listBook();
