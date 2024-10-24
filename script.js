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

// Select booklist container to later add books
const booklistContainer = document.querySelector(".booklist-container");


// modal function variables
const newBookButton = document.querySelector(".new-book");
const newBookDialog = document.querySelector(".new-book-dialog");
const confirmBtn = document.querySelector("#confirmBtn");

// user input variables
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

newBookButton.addEventListener("click", () => {
    newBookDialog.showModal();
});

let i = 0;
newBookDialog.addEventListener("close", () => {
    if (!(newBookDialog.returnValue === "default")) {
        library.addBookToLibrary(new Book(
            userInput["title"],
            userInput["author"],
            userInput["pages"],
            userInput["read"],
        ));
    }
    const newBookTile = new CreateBookTile(library.library[i]);
    booklistContainer.appendChild(newBookTile.div);
    i += 1;
});


let userInput = {}
confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    userInput = {
        "title": titleInput.value,
        "author": authorInput.value,
        "pages": pagesInput.value,
        "read": readInput.value
    };
    newBookDialog.close();
});
