const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;


Cinema.prototype.findListOfFilmTitles = function(films) {
  const filmTitles = films.map(function(film) {
    return film.title
  })
  return filmTitles

}

Cinema.prototype.findFilmByTitle = function(title){
  const filteredFilms = this.films.filter(film => film.title === title)
    return filteredFilms[0]
}

Cinema.prototype.findFilmByGenre = function(genre){
  const filteredFilms = this.films.filter(film => film.genre === genre)
  return filteredFilms
}

Cinema.prototype.findFilmsByYear = function(year){
  const filteredFilms = this.films.filter(film => film.year === year)
  return filteredFilms
}

Cinema.prototype.findFilmsByLength = function(length){
  const filteredFilms = this.films.filter(film => film.length >= length)
  return filteredFilms
  }

Cinema.prototype.totalRunningTime = function(){
  const totalLength = this.films.reduce(function(, obj){

  }, 0)
  }
