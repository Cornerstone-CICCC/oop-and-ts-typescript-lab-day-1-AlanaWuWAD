// 📚 Create a simple Library System where users can add books, borrow books, return books, and check availability.
// 1. Create an enum called BookGenre with at least 5 book genres.
// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.

enum BookGenre {
  Fantasy,
  Romance,
  ScienceFiction, 
  Paranormal, 
  Mystery,
  Horror, 
}

type Book = {
  bookId :number, 
  title :string, 
  author :string, 
  genre :BookGenre, 
  isAvailable :boolean
}

const library: Book[] = [];

function addBook(bookId:number, title:string, author:string, genre:BookGenre) : Book[]{
  library.push({
    bookId,
    title,
    author,
    genre,
    isAvailable: true
  })
  return library
}

function borrowBook(bookId:number): string {
  let bookTitle : string = ``
  library.forEach(book =>{
  if(book.bookId === bookId){
    bookTitle = book.title
    book.isAvailable = false
  }
 })
 return ` "${bookTitle}" has been borrowed`
}

function returnBook(bookId: number): string {
  let returnResult: string = ``
  library.forEach(book =>{
  if(book.bookId === bookId){
    book.isAvailable = false
    if(book.isAvailable = true) {
      returnResult=`"${book.title}" has been returned.`
    }else{
       returnResult=`"${book.title}" has not been returned.`
    }
  }
 })
 return returnResult
}

function checkAvailability(bookId: number): boolean {
  let check: boolean = false
  library.forEach(book =>{
    if(book.bookId === bookId){
      check = book.isAvailable 
    }
  })
  return check
}

function removeBook(bookId:number): string {
  let bookRemove:string = ``
  library.forEach((book,i) => {
    if(book.bookId === bookId){
      library.splice(i,1)
      bookRemove = `"${book.title} has been removed from the library"`
    }
  })
  return bookRemove
}

// Test cases (Create more if needed)
console.log(addBook(1, "The Hobbit", "J.R.R. Tolkien", BookGenre.Fantasy)) // { bookId: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.Fantasy, isAvailable: true }
console.log(borrowBook(1)) // "The Hobbit has been borrowed"
console.log(checkAvailability(1)) // false
console.log(returnBook(1)) // "The Hobbit has been returned"
console.log(removeBook(1)) // "The Hobbit has been removed from the library"