"use strict";
// 🎟️ Create a Movie Ticket Booking System where users can book tickets and check seat availability.
// 1. Create an enum called MovieGenre with at least 5 movie genres.
// 2. Create a tuple type called Seat which holds (rowLetter: string, seatNumber: number).
// 3. Create a type alias called Movie which contains: movieId (number), title (string), genre (MovieGenre), availableSeats (Seat[]).
// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.
var MovieGenre;
(function (MovieGenre) {
    MovieGenre[MovieGenre["Action"] = 0] = "Action";
    MovieGenre[MovieGenre["Comedy"] = 1] = "Comedy";
    MovieGenre[MovieGenre["Drama"] = 2] = "Drama";
    MovieGenre[MovieGenre["Adventure"] = 3] = "Adventure";
    MovieGenre[MovieGenre["Horror"] = 4] = "Horror";
})(MovieGenre || (MovieGenre = {}));
var movies = [];
function addMovie(movieId, title, genre, availableSeats) {
    var newMovie = { movieId: movieId, title: title, genre: genre, availableSeats: availableSeats };
    movies.push(newMovie);
    return newMovie;
}
function bookSeat(movieId, rowLetter, seatNumber) {
    var bookedSeat = [rowLetter, seatNumber];
    movies.forEach(function (movie) {
        if (movie.movieId === movieId) {
            movie.availableSeats = [bookedSeat];
        }
    });
    return "Seat ".concat(bookedSeat[0]).concat(bookedSeat[1], " booked");
}
function checkSeatAvailability(movieId, rowLetter, seatNumber) {
    var seatCheck = false;
    var bookedSeat = [rowLetter, seatNumber];
    movies.forEach(function (movie) {
        if (movie.movieId === movieId) {
            movie.availableSeats.forEach(function (seat) {
                // console.log('if', seat.join(''), bookedSeat.join('') , (seat.join(``) === bookedSeat.join('')))
                if (seat.join() === bookedSeat.join()) {
                    seatCheck = false;
                }
                else {
                    seatCheck = true;
                }
            });
        }
    });
    return seatCheck;
}
// Test cases (Create more if needed)
console.log(addMovie(1, "Avengers", MovieGenre.Action, [["A", 1], ["A", 2]])); // { movieId: 1, title: "Avengers", genre: MovieGenre.Action, availableSeats: [["A", 1], ["A", 2]] }
console.log(bookSeat(1, "A", 1)); // "Seat A1 booked successfully"
console.log(checkSeatAvailability(1, "A", 1)); // false
