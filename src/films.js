// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((jar) => jar.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter((jar) => jar.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let pelis = array.filter((jar) => jar.director == director);
  let averageScore =
    pelis.reduce((total, next) => total + next.score, 0) / pelis.length;
  return averageScore;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let getTitulos = array.map((jar) => jar.title);
  let first20 = getTitulos.sort().slice(0, 20);
  return first20;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let sorted = array
    .map((jar) => jar)
    .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
  sorted.sort((a, b) => a.year - b.year);
  return sorted;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let sortCat = array.map(film => film).filter(jar => jar.genre == genre).filter(jarScore => jarScore.score > 0);
  let average = sortCat.reduce((total, prox) => total + prox.score, 0) / sortCat.length;
  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let hours = 0,
    min = 0,
    newDuracion;

  let movieList = array.map(function (film) {
    newDuracion = film.duration.split(" ");
    hours = parseInt(newDuracion[0]);
    min = parseInt(newDuracion[1]);
    if (newDuracion.length == 1) {
      min = 0;
    }
    let result = hours * 60 + min;

    return {
      ...film,
      duration: result,
    };

  });

  return movieList;

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const bestFilm = [array.filter(jar => jar.year === year).sort((pre, now) => pre.score + now.score)[0]];

  return bestFilm;

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}