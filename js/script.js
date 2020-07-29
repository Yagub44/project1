"use strict";

const numberOfFilms = +prompt("Skolko filmov vi uje prosmotreli", "" );

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Odin iz poslednix prosmotrennix filmov?", ""),
      b = +prompt("Na skolko ocenite ego", ""),
      c = prompt("Odin iz poslednix prosmotrennix filmov?", ""),
      d = +prompt("Na skolko ocenite ego", "");
      
 personalMovieDB.movies[a] = b;
 personalMovieDB.movies[c] = d;

 console.log(personalMovieDB);



  

