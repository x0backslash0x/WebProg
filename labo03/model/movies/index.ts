interface Movie {
  title: string;
  year: number;
  actors: string[];
  metascore: number;
  seen: boolean;
}

let myFavoriteMovie: Movie = {
  title: "The Empire Strikes Back",
  year: 1980,
  actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
  metascore: 82,
  seen: true,
};

let myWorstMovie: Movie = {
  title: "The Rise of Skywalker",
  year: 2019,
  actors: ["Daisy Ridley", "Adam Driver", "John Boyega"],
  metascore: 53,
  seen: true,
};

console.log("My favorite movie:");
console.log(myFavoriteMovie.title + " (" + myFavoriteMovie.year + ")");
console.log("Actors: " + myFavoriteMovie.actors.join(", "));
console.log("Metascore: " + myFavoriteMovie.metascore);
console.log(myFavoriteMovie.seen ? "Seen: YES" : "Seen: NO");

console.log("My worst movie:");
console.log(myWorstMovie.title + " (" + myWorstMovie.year + ")");
console.log("Actors: " + myWorstMovie.actors.join(", "));
console.log("Metascore: " + myWorstMovie.metascore);
console.log(myWorstMovie.seen ? "Seen: YES" : "Seen: NO");

let myLastMovie: Movie = {
  title: "Dune: part two",
  year: 2024,
  actors: ["Thimothée Chalamet", "Zendaya", "Christopher Walker"],
  metascore: 79,
  seen: true,
};

console.log("My last movie:");
console.log(myLastMovie.title + " (" + myLastMovie.year + ")");
console.log("Actors: " + myLastMovie.actors.join(", "));
console.log("Metascore: " + myLastMovie.metascore);
console.log(myLastMovie.seen ? "Seen: YES" : "Seen: NO");

function wasMovieMadeInThe80s(movie: Movie): boolean {
  return movie.year >= 1980 && movie.year <= 1989;
}

console.log(wasMovieMadeInThe80s(myFavoriteMovie));
console.log(wasMovieMadeInThe80s(myWorstMovie));
console.log(wasMovieMadeInThe80s(myLastMovie));

function averageMetaScore(movies: Movie[]): number {
  return movies.reduce((acc: number, cur: Movie) => acc + cur.metascore, 0) / movies.length;
}

console.log(averageMetaScore([myFavoriteMovie, myLastMovie, myWorstMovie]));

function fakeMetaScore(movie: Movie, score: number): Movie {
  return {
    title: movie.title,
    year: movie.year,
    actors: movie.actors,
    metascore: score,
    seen: movie.seen,
  };
}

let fakeMovie: Movie = fakeMetaScore(myWorstMovie, 90);

console.log("Fake movie:");
console.log(fakeMovie.title + " (" + fakeMovie.year + ")");
console.log("Actors: " + fakeMovie.actors.join(", "));
console.log("Metascore: " + fakeMovie.metascore);
console.log(fakeMovie.seen ? "Seen: YES" : "Seen: NO");