function myLibrary() {
    this.library = [];
    this.addBookToLibrary = function(book) {
        this.library.push(book);
    }
    this.prettyPrintLibrary = function() {
        for (book of this.library) {
            book.info();
        }
    }
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(title + ' by ' + author + ', ' + pages + ' pages, ' + read + '.');
    }
}



function CreateBookTile(book) {
    this.div = document.createElement("div");
    this.div.setAttribute("class", "book-div");

    this.title = document.createElement("h3");
    this.title.setAttribute("class", "book-title");
    this.title.textContent = book.title;
    this.div.appendChild(this.title);

    this.author = document.createElement("p");
    this.author.setAttribute("class", "book-author");
    this.author.textContent = "By " + book.author;
    this.div.appendChild(this.author);

    this.other = document.createElement("p");
    this.other.setAttribute("class", "book-other");
    this.other.textContent = book.pages + " pages, " + book.read + ".";
    this.div.appendChild(this.other);
}


// Create a library instance
const library = new myLibrary();

// Create books
const book1 = new Book("1984", "George Orwell", 328, "Not read");
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "Read");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281, "Read");

// Add books to the library
library.addBookToLibrary(book1);
library.addBookToLibrary(book2);
library.addBookToLibrary(book3);

const booklistContainer = document.querySelector(".booklist-container");
for (const book of library.library) {
    newBookTile = new CreateBookTile(book);
    booklistContainer.appendChild(newBookTile.div);
}


// const dialog = document.querySelector(".modal");

// const btn = document.getElementById("new-book");
// btn.addEventListener("click", () => {
//     dialog.showModal();
// });


// const closeButton = document.querySelector("dialog button");