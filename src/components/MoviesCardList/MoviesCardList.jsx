import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ showMoviesList, isConfirmed, isLoad, mySavedMovies, isLiked, location }) {
  return (
    <section className="movies__card-list">
      {isLoad ? (<Preloader />) 
      : !isConfirmed ? (
        <p className="movies__error-in-list">"К сожалению, отобразить эту страницу сейчас невозможно. Попробуйте ещё раз позже."</p>
      ) : (
        <>
          {showMoviesList.map((movie) => {
              return (
                <MoviesCard
                  movie={movie}  
                  location={location}
                  key={movie.id || movie._id}
                  isLiked={isLiked}
                  savedMovie={mySavedMovies}
                />
              );
          })}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;