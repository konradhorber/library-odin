function myLibrary() {
    const library = [];
    this.addBookToLibrary = function(book) {
        library.push(book);
    }
    this.prettyPrintLibrary = function() {
        for (book of library) {
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

const hobbit = new Book('Hobbit', 'Tolkien', '295', 'read');
const dune = new Book('Dune', 'Frank Herbert', '412', 'read');
const foundation = new Book('Foundation', 'Isaac Asimov', '255', 'unread');
const braveNewWorld = new Book('Brave New World', 'Aldous Huxley', '288', 'read');
const neuromancer = new Book('Neuromancer', 'William Gibson', '271', 'unread');

const konradLibrary = new myLibrary;
konradLibrary.addBookToLibrary(hobbit);
konradLibrary.addBookToLibrary(dune);
konradLibrary.addBookToLibrary(foundation);
konradLibrary.addBookToLibrary(braveNewWorld);
konradLibrary.addBookToLibrary(neuromancer);


konradLibrary.prettyPrintLibrary();