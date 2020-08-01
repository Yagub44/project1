"use strict";

const numberOfFilms = +prompt("Skolko filmov vi uje prosmotreli", "" );

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
  
for (let i = 0; i <2; i++) {
     const  a = prompt("Odin iz poslednix prosmotrennix filmov?", ""),
            b = prompt("Na skolko ocenite ego", "");

    if (a != null && b != null && a != " " && b != " " && a.lenght < 50) {
        personalMovieDB.movies[a] = b;
        console.log("Done");

    } else {
        console.log("Error!");
        i--;
    }     
}
 console.log (personalMovieDB); 
    
     

