let myLibrary = [];

/* Book Constructor */
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toString = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
}

/* const book = new Book("1984", "George Orwell", 260, true);
console.log(book.toString()); */

/* Add book to the library */
function addBookToLibrary() {

    let title = prompt("Book Name");
    let author = prompt("Author");
    let pages = prompt("Pages");
    let read = prompt("Have you read it? (y/n)");

    myLibrary.push(new Book(title, author, pages, read));

}
