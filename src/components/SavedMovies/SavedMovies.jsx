import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({
  location,
  isConfirmed,
  showMoviesList,
  mySavedMovies,
  searchInSavedFilms,
  savedMoviesFiltered,
  handleSearchSavedMovies,
  searchedValues,
  isLiked,
  isShortFilm
}) {
  return (
    <>
      <main className="saved__movies">
        <SearchForm
          location={location}
          searchedValues={searchedValues}
          searchSavedMovies={handleSearchSavedMovies}
          isShortFilm={isShortFilm}      
        />
        {!mySavedMovies.length ? (<p className="saved__nothing">Ни один фильм еще не сохранен.</p>) : (
          !savedMoviesFiltered.length && searchInSavedFilms && <p className="saved__nothing">Фильмы не найдены.</p>)}
        <MoviesCardList 
          location={location}
          showMoviesList={showMoviesList}
          mySavedMovies={mySavedMovies}
          savedMoviesFiltered={savedMoviesFiltered}
          isLiked={isLiked}
          isConfirmed={isConfirmed}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;