import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { URLS } from "../../utils/constants";

function Movies({
  location,
  isLoad,
  fullMoviesArray,
  isConfirmed,
  showMoviesList,
  onAddCardsButton,
  moviesFiltered,
  searchedValues,
  onFilmsSearch,
  mySavedMovies, 
  isLiked,
  isShortFilm
}) {
  return (
    <>
      <main className="movies">
        <SearchForm 
        location={location}
        searchMovies={onFilmsSearch}
        searchedValues={searchedValues}
        isShortFilm={isShortFilm}
        />

        {!fullMoviesArray.length ? (<p className="saved__nothing">Ищите фильмы по ключевым словам.</p>) : (
          !moviesFiltered.length && onFilmsSearch && <p className="saved__nothing">Фильмы не найдены, попробуйте изменить запрос.</p>)}

        <MoviesCardList
          showMoviesList={showMoviesList}
          isLoad={isLoad}
          location={location}
          mySavedMovies={mySavedMovies}
          isLiked={isLiked}
          isConfirmed={isConfirmed}
        />
        {location.pathname === URLS.MOVIES && moviesFiltered && moviesFiltered?.length !== showMoviesList?.length && (
          <div className="movies__more-items">
            <button type="button" className="movies__show-more" onClick={onAddCardsButton}>Ещё</button>
          </div>
        )}  
      </main>
      <Footer />
    </>
  );
}

export default Movies;