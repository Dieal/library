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

function addBookToLibrary() {

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read-status").checked;

    console.log(read); 

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks();

}

/* Display books in a grid */
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

/* Modal to input book's data */
const modal = document.querySelector("dialog.modal");
const openModalButton = document.querySelector("button.open-modal");
const closeModalButton = document.getElementById('close-dialog');
const form = document.querySelector(".modal form");

openModalButton.onclick = () => {
    modal.showModal();
};

closeModalButton.onclick = () => {
    modal.close();
};

// When closed, the form has to be reset
modal.addEventListener('close', () => {
    form.reset();
});

// Close the modal dialog when clicking outside of it
modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
});

// Creates book when submitting form's data
form.addEventListener("submit", e => {
    e.preventDefault();
    addBookToLibrary();
});