// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result =  array.map(jar=>jar.director)
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter(jar=>jar.director===director);
  console.log("EXERCICE 2 ->", result);
  return result;
} 
 
// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let pelis = array.filter(jar => jar.director == director);
  let averageScore = pelis.reduce((total,next) => total + next.score,0) / pelis.length;
  return averageScore;
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
    bestFilmOfYear,
  };
}
