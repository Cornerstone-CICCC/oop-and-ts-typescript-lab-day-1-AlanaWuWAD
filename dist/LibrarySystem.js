"use strict";
// 📚 Create a simple Library System where users can add books, borrow books, return books, and check availability.
// 1. Create an enum called BookGenre with at least 5 book genres.
// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.
var BookGenre;
(function (BookGenre) {
    BookGenre[BookGenre["Fantasy"] = 0] = "Fantasy";
    BookGenre[BookGenre["Romance"] = 1] = "Romance";
    BookGenre[BookGenre["ScienceFiction"] = 2] = "ScienceFiction";
    BookGenre[BookGenre["Paranormal"] = 3] = "Paranormal";
    BookGenre[BookGenre["Mystery"] = 4] = "Mystery";
    BookGenre[BookGenre["Horror"] = 5] = "Horror";
})(BookGenre || (BookGenre = {}));
var library = [];
function addBook(bookId, title, author, genre) {
    library.push({
        bookId: bookId,
        title: title,
        author: author,
        genre: genre,
        isAvailable: true
    });
    return library;
}
function borrowBook(bookId) {
    var bookTitle = "";
    library.forEach(function (book) {
        if (book.bookId === bookId) {
            bookTitle = book.title;
            book.isAvailable = false;
        }
    });
    return " \"".concat(bookTitle, "\" has been borrowed");
}
function returnBook(bookId) {
    var returnResult = "";
    library.forEach(function (book) {
        if (book.bookId === bookId) {
            book.isAvailable = false;
            if (book.isAvailable = true) {
                returnResult = "\"".concat(book.title, "\" has been returned.");
            }
            else {
                returnResult = "\"".concat(book.title, "\" has not been returned.");
            }
        }
    });
    return returnResult;
}
function checkAvailability(bookId) {
    var check = false;
    library.forEach(function (book) {
        if (book.bookId === bookId) {
            check = book.isAvailable;
        }
    });
    return check;
}
function removeBook(bookId) {
    var bookRemove = "";
    library.forEach(function (book, i) {
        if (book.bookId === bookId) {
            library.splice(i, 1);
            bookRemove = "\"".concat(book.title, " has been removed from the library\"");
        }
    });
    return bookRemove;
}
// Test cases (Create more if needed)
console.log(addBook(1, "The Hobbit", "J.R.R. Tolkien", BookGenre.Fantasy)); // { bookId: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.Fantasy, isAvailable: true }
console.log(borrowBook(1)); // "The Hobbit has been borrowed"
console.log(checkAvailability(1)); // false
console.log(returnBook(1)); // "The Hobbit has been returned"
console.log(removeBook(1)); // "The Hobbit has been removed from the library"
