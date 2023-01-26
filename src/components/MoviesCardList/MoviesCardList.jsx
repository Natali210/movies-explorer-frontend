import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ isLoading }) {
  return (
    <section className="movies-list">
      <div className="movies__card-list"><MoviesCard /></div>
      <div className="movies__more-items">
        <button className="movies__show-more" type="button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;