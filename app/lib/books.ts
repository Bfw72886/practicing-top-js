class Book {
  title: string;
  author: string;
  pages: number;
  read: boolean;

  constructor(title: string, author: string, pages: number, read: boolean) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info(): string {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not read yet"
    }`;
  }
}

export const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
