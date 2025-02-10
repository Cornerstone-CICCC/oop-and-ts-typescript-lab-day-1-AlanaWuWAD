// 🎟️ Create a Movie Ticket Booking System where users can book tickets and check seat availability.
// 1. Create an enum called MovieGenre with at least 5 movie genres.
// 2. Create a tuple type called Seat which holds (rowLetter: string, seatNumber: number).
// 3. Create a type alias called Movie which contains: movieId (number), title (string), genre (MovieGenre), availableSeats (Seat[]).
// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.

enum MovieGenre {
  Action,
  Comedy,
  Drama, 
  Adventure,
  Horror
}

type Seat = [rowLetter:string, seatNumber:number]

type Movie = {
  movieId : number, 
  title : string, 
  genre : MovieGenre, 
  availableSeats :Seat[]
}

const movies: Movie[] = [];

function addMovie(movieId: number, title: string, genre: MovieGenre, availableSeats: Seat[]): Movie{
  const newMovie = {movieId, title, genre,availableSeats}
  
  movies.push(newMovie)

  return newMovie
}

function bookSeat(movieId: number, rowLetter: string, seatNumber: number): string {
  const bookedSeat: Seat = [rowLetter,seatNumber]

  movies.forEach(movie =>{
    if(movie.movieId === movieId){
      movie.availableSeats = [bookedSeat]
    }
  })

  return `Seat ${bookedSeat[0]}${bookedSeat[1]} booked`
}

function checkSeatAvailability(movieId: number, rowLetter: string, seatNumber: number): boolean {
  let seatCheck: boolean = false;
  const bookedSeat: Seat = [rowLetter,seatNumber]
  movies.forEach(movie =>{
    if(movie.movieId === movieId){
      movie.availableSeats.forEach(seat =>{
        // console.log('if', seat.join(''), bookedSeat.join('') , (seat.join(``) === bookedSeat.join('')))
        if(seat.join() === bookedSeat.join()){
          seatCheck = false
        }else {
          seatCheck = true
        }
      })
    }
  })
  return seatCheck
}

// Test cases (Create more if needed)
console.log(addMovie(1, "Avengers", MovieGenre.Action, [["A", 1], ["A", 2]])) // { movieId: 1, title: "Avengers", genre: MovieGenre.Action, availableSeats: [["A", 1], ["A", 2]] }
console.log(bookSeat(1, "A", 1)) // "Seat A1 booked successfully"
console.log(checkSeatAvailability(1, "A", 1)) // false