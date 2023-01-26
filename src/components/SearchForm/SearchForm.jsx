import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__framework">
        <div className="search__input-block">
          <input className="search__input" placeholder="Фильм" type="text" name="film" required/>
          <button className="search__button-img" type="submit"></button>
        </div>
        <div className="search__switch-block">
          <p className="search__switch-title">Короткометражки</p>
          <label className="search__switch-item">
            <input type="checkbox" />
            <span className="search__switch" />
          </label>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;