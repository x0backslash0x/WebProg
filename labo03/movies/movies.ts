/* movies.ts

   2024-2025 Patrick Lanove
   BA Electronica-ICT/Cybersecurity
   OLOD Web programming

   labo 3 oefening 3

    WERKWIJZE
  x1 Movie class
  x2 instance myFavoriteMovie
  x3 print method voor class
  x4 instance myWorstMovie
  x5 instance myLastMovie
  x6 functie wasMovieMadeInThe90s
  x7 functie averageMetaScore
  x8 functie fakeMetaScore

*/

class Movie {
    title: string;
    year: number;
    actors: string[];
    metascore: number;
    seen: boolean;

    constructor(title: string, year: number, actors: string[], metascore: number, seen: boolean) {
        this.title = title;
        this.year = year;
        this.actors = actors;
        this.metascore = metascore;
        this.seen = seen;
    }

    print(type: string): void {
        console.log(`My ${type} movie:`)
        console.log(this.title + " (" + this.year + ")")
        console.log("Actors: " + this.actors)
        console.log("Metascore: " + this.metascore)
        console.log("Seen: " + this.seen + "\n");
    }
}

function wasMovieMadeInThe90s(movie: Movie): boolean {
    if(movie.year >= 1990 && movie.year <= 1999) {
        return true;
    } else {
        return false;
    }
}

function averageMetaScore(movies: Movie[]): number {
    let score1: number = movies[0].metascore;
    let score2: number = movies[1].metascore;
    let score3: number = movies[2].metascore;
    return Math.floor((score1 + score2 + score3)/3);
}

function fakeMetaScore(movie: Movie, newscore: number): Movie {
    let newmovie: Movie = movie;
    movie.metascore = newscore;
    return newmovie;
}

// gezien fakeMetaScore een nieuw object terug geeft kan deze instance gerust statisch zijn (ipv let)
const myFavoriteMovie = new Movie("Interstellar", 2014, ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"], 74, true)
myFavoriteMovie.print("favorite");

let myWorstMovie = new Movie("The Departed", 2006, ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"], 85, true)
myFavoriteMovie.print("worst");

let myLastMovie = new Movie("Dune: Part Two", 2024, ["Timothée Chalamet ", "Zendaya ", "Rebecca Ferguson"], 79, true)
myFavoriteMovie.print("last");

console.log(wasMovieMadeInThe90s(myFavoriteMovie));
console.log(wasMovieMadeInThe90s(myWorstMovie));
console.log(wasMovieMadeInThe90s(myLastMovie));
console.log(averageMetaScore([myFavoriteMovie, myWorstMovie, myLastMovie]));
console.log(fakeMetaScore(myFavoriteMovie, 96).print("favorite"));
