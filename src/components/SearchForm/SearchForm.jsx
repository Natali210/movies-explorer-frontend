import "./SearchForm.css";
import { URLS } from "../../utils/constants";
import { useEffect, useState } from "react";

function SearchForm({ location, searchMovies, searchedValues, searchSavedMovies, isShortFilm }) {
  const [wrongSearch, setWrongSearch] = useState(false);
  const [userValue, setUserValue] = useState(location.pathname === URLS.MOVIES ? searchedValues.value : "");
  const [checkboxStatus, setCheckboxStatus] = useState(location.pathname === URLS.MOVIES ? searchedValues.checkbox : false);

  useEffect(() => {
    if (location.pathname === URLS.MOVIES) {
      setUserValue(searchedValues.value);
      setCheckboxStatus(searchedValues.checkbox);
    }
  }, [searchedValues, location]);

  function handleSearchSubmit(evt) {
    evt.preventDefault();

    if (evt.target[0].value === "" && location.pathname === URLS.MOVIES) {
      setWrongSearch(true);
      return;
    }

    setWrongSearch(false);

    if (location.pathname === URLS.MYMOVIES) {
      searchSavedMovies(userValue, checkboxStatus);
    } else {
      searchMovies(userValue, checkboxStatus);
    }
  }

  function handleTextSearch(evt) {
    setUserValue(evt.target.value);
  }

  function handleUseCheckbox(evt) {
    const checkbox = evt.target.checked;
    isShortFilm(userValue, checkbox);
    setCheckboxStatus(checkbox);
  }
  
  return (
    <section className="search">
      <form className="search__framework" onSubmit={handleSearchSubmit}>
        <div className="search__input-block">
          <input className="search__input" placeholder="Фильм"
          onChange={handleTextSearch} value={userValue}
          type="text" name="search"/> 
          <span className="search__error">{wrongSearch ? "Введите слово для поиска" : " "}</span>
          <button className="search__button-img" type="submit"></button>
        </div>
        <div className="search__switch-block">
          <p className="search__switch-title">Короткометражки</p>
          <label className="search__switch-item">
            <input 
            id="search-checkbox" checked={checkboxStatus}
            name="checkbox" type="checkbox"
            onChange={handleUseCheckbox}
            />
            <span className="search__switch" />
          </label>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;