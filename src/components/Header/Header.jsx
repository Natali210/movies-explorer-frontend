import React, {useState} from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { URLS } from "../../utils/constants";

function Header() {
  const [menuVisible, setmenuVisible] = useState(false);

  function handleMenuVisible() {
    setmenuVisible((visible) => !visible);
  }

  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        {window.location.pathname === URLS.LANDING && (
          <div className="header__authorization">
            <Link className="header__auth-button" to={URLS.REGISTER}>Регистрация</Link>
            <Link className="header__auth-button header__auth-button_dark" to={URLS.LOGIN}>Войти</Link>
          </div>
        )}

        {(window.location.pathname === URLS.MYPROFILE ||
          window.location.pathname === URLS.MOVIES ||
          window.location.pathname === URLS.MYMOVIES) && (
          <>
            <Navigation menuVisible={menuVisible} />
            <div
              onClick={handleMenuVisible}
              className={`header__menu-framework ${menuVisible ? "header__menu-framework_mob" : ""}`}>
              <span className={`header__burger-menu ${menuVisible ? "header__burger-menu_active" : ""}`}/>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
