import { URLS, BASE_URL } from "../../utils/constants";
import "./MoviesCard.css";

function MoviesCard({ movie, isLiked, savedMovie, location }) {
  function movieTime(data) {
    const min = data % 60;
    const hours = Math.floor(data / 60);
    return hours ? `${hours}ч ${min}м` : `${min}м`;
  }

  return (
    <>
      <div className="card__element">
        <a className="movies__trailer" target="_blank" href={movie.trailerLink} rel="noreferrer">
          <img className="card__photo" alt="Кадр из фильма"
          src={`${location.pathname === URLS.MYMOVIES ? movie.image : `${BASE_URL}${movie.image.url}`}`}
          />
        </a>
        <div className="card__movie-info">
          <p className="card__movie-title">{movie.nameRU}</p>
          <button
            className={`card__like-button ${savedMovie.find((i) => i.movieId === movie.id)
              ? "card__like-button_active" : location.pathname === URLS.MYMOVIES
              ? "card__remove-button" : ""
            }`}
            onClick={() => isLiked(movie)}
          />
        </div>
        <p className="card__movie-duration">{movieTime(movie.duration)}</p>
      </div>
    </>
  );
}

export default MoviesCard;