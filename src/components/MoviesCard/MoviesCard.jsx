import { URLS } from "../../utils/constants";
import "./MoviesCard.css";

function MoviesCard() {
  return (
    <>
      <div className="card__element">
        <img src={require("../../images/picture-1.png")} className="card__photo" alt="Кадр из фильма"/>
        <div className="card__movie-info">
          <p className="card__movie-title">33 слова о дизайне</p>
          {window.location.pathname === URLS.MOVIES && (<button className="card__like-button"/>)}
          {window.location.pathname === URLS.MYMOVIES && (<button className="card__remove-button"/>)}
        </div>
        <p className="card__movie-duration">1ч 47м</p>
      </div>
      <div className="card__element">
        <img src={require("../../images/picture-2.png")} className="card__photo" alt="Кадр из фильма"/>
        <div className="card__movie-info">
          <p className="card__movie-title">Киноальманах «100 лет дизайна»</p>
          {window.location.pathname === URLS.MOVIES && (<button className="card__like-button card__like-button_active"/>)}
          {window.location.pathname === URLS.MYMOVIES && (<button className="card__remove-button"/>)}
        </div>
        <p className="card__movie-duration">1ч 47м</p>
      </div>
      <div className="card__element">
        <img src={require("../../images/picture-3.png")} className="card__photo" alt="Кадр из фильма"/>
        <div className="card__movie-info">
          <p className="card__movie-title">В погоне за Бенкси</p>
          {window.location.pathname === URLS.MOVIES && (<button className="card__like-button"/>)}
          {window.location.pathname === URLS.MYMOVIES && (<button className="card__remove-button"/>)}
        </div>
        <p className="card__movie-duration">1ч 47м</p>
      </div>
      <div className="card__element">
        <img src={require("../../images/picture-4.png")} className="card__photo" alt="Кадр из фильма"/>
        <div className="card__movie-info">
          <p className="card__movie-title">Баския: Взрыв реальности</p>
          {window.location.pathname === URLS.MOVIES && (<button className="card__like-button"/>)}
          {window.location.pathname === URLS.MYMOVIES && (<button className="card__remove-button"/>)}
        </div>
        <p className="card__movie-duration">1ч 47м</p>
      </div>
      <div className="card__element">
        <img src={require("../../images/picture-5.png")} className="card__photo" alt="Кадр из фильма"/>
        <div className="card__movie-info">
          <p className="card__movie-title">Бег это свобода</p>
          {window.location.pathname === URLS.MOVIES && (<button className="card__like-button"/>)}
          {window.location.pathname === URLS.MYMOVIES && (<button className="card__remove-button"/>)}
        </div>
        <p className="card__movie-duration">1ч 47м</p>
      </div>
      <div className="card__element">
        <img src={require("../../images/picture-6.png")} className="card__photo" alt="Кадр из фильма"/>
        <div className="card__movie-info">
          <p className="card__movie-title">Книготорговцы</p>
          {window.location.pathname === URLS.MOVIES && (<button className="card__like-button"/>)}
          {window.location.pathname === URLS.MYMOVIES && (<button className="card__remove-button"/>)}
        </div>
        <p className="card__movie-duration">1ч 47м</p>
      </div>
    </>
  );
}

export default MoviesCard;