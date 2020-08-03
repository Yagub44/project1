"use strict";

let numberOfFilms;

function start() {
     numberOfFilms = +prompt("Skolko filmov vi uje prosmotreli", "" );
    
     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Skolko filmov vi uje prosmotreli", "" );

     }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
  


function rememberMyFilms () {
    for (let i = 0; i <2; i++) {
        const  a = prompt("Odin iz poslednix prosmotrennix filmov?", ""),
               b = prompt("Na skolko ocenite ego", "");
   
       if (a != null && b != null && a != "" && b != "" && a.length < 50) {
           personalMovieDB.movies[a] = b;
           console.log("Done");
   
       } else {
           i--;
           console.log("Error!");
           
       }     
   }

}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);

    }

}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`vash lubimiy janr pod nomerom ${i}`);
        personalMovieDB.genres[i - 1] = genre;

    }
}

writeYourGenres();





 console.log (personalMovieDB); 
    
     

