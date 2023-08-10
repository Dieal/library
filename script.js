/* Books Storage */
let myLibrary = [];

/* Book Constructor */
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.getReadStatus = function() {
    return this.read ? "Read" : "Not read yet";
}

Book.prototype.toString = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.getReadStatus}`;
}

/* const book = new Book("1984", "George Orwell", 260, true);
console.log(book.toString()); */

/* Add book to the library */
function addBookToLibrary() {

    let title = prompt("Book Name");
    let author = prompt("Author");
    let pages = prompt("Pages");
    let read = prompt("Have you read it? (y/n)");

    if (read === "y") {
        read = true;
    } else if (read === "n") {
        read = false;
    }

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);

}

/* Display books */
function displayBooks() {

    const booksGrid = document.querySelector(".books"); 
    booksGrid.textContent = ""; // Remove all the elements inside it

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const card = createCard(book);
        booksGrid.appendChild(card);
    }

}

function createCard(book) {

    const card = document.createElement("div");
    card.classList.add("card");

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;

    const bookPages = document.createElement("p");
    bookPages.textContent = book.pages + " pages";

    const bookReadStatus = document.createElement("p");
    bookReadStatus.textContent = book.getReadStatus();

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookReadStatus);

    return card;

}