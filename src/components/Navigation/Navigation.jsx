import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { URLS } from "../../utils/constants";

function Navigation({ menuVisible }) {
  return (
    <>
      {window.screen.width >= 769 ? (
        <nav className="navigation">
          <div className="navigation__links-block">
            <div className="navigation__links">
              <NavLink className="navigation__item" to={URLS.MOVIES} activeClassName="navigation__item_active">Фильмы</NavLink>
              <NavLink className="navigation__item" to={URLS.MYMOVIES} activeClassName="navigation__item_active">Сохранённые фильмы</NavLink>
            </div>
            <div className="navigation__profile">
              <NavLink className="navigation__item navigation__item_profile" to={URLS.MYPROFILE} activeClassName="navigation__item_active">Аккаунт</NavLink>
            </div>
          </div>
        </nav>
      ) : (
        <nav className={`navigation ${menuVisible ? "navigation_visible" : ""}`}>
          <div className={`navigation__links-block ${menuVisible ? "navigation__links-block_visible" : ""}`}>
            <div className="navigation__links">
              <NavLink className="navigation__item" to={URLS.LANDING}>Главная{window.location.pathname === URLS.PROMO}</NavLink>
              <NavLink className="navigation__item" to={URLS.MOVIES}>Фильмы{window.location.pathname === URLS.MOVIES}</NavLink>
              <NavLink className="navigation__item" to={URLS.MYMOVIES}>Сохранённые фильмы{window.location.pathname === URLS.MYMOVIES}</NavLink>
            </div>
            <div className="navigation__profile">
              <NavLink className="navigation__item navigation__item_profile" to={URLS.MYPROFILE}>Аккаунт</NavLink>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navigation;