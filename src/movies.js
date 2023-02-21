// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(function (movie) {
        return movie.director;
      });
      return allDirectors;
}

const directors = getAllDirectors(movies);
console.log(directors);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenDirector = moviesArray.filter(function(movie){
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    });

    return stevenDirector.length
}

const numMovies = howManyMovies(movies);
console.log(numMovies);



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
      const total = moviesArray.reduce(function(accumulator, currentValue) {
        if (currentValue.hasOwnProperty('score')) {
          return accumulator + currentValue.score;
        } else {
          return accumulator;
        }
      }, 0);
      const average = total / moviesArray.length;
      return Number(average.toFixed(2));
    }
    
console.log(scoresAverage(moviesArray));


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaGenre = moviesArray.filter(function(movie) {
    return movie.genre.includes('Drama');
  });

  if (dramaGenre.length === 0) {
    return 0;
  }

  const totalScore = dramaGenre.reduce(function(acc, movie) {
    return acc + movie.score;
  }, 0);

  const averageDrama = totalScore / dramaGenre.length;
  return Number(averageDrama.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = moviesArray.slice().sort(function(a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map(movie => movie.title);
  titles.sort();
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
