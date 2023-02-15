import "./App.css";
import { useEffect, useState } from "react";
import { Route, useLocation, useHistory, Switch, Redirect } from "react-router-dom";
import { URLS, cardsInDesktop, cardsInTablet, cardsInMob, addCardsInDesktop, addCardsInMob, shortFilms } from "../../utils/constants";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as MainApi from "../../utils/MainApi";
import { api } from "../../utils/MoviesApi";
import LocalStorage from "../../utils/LocalStorage";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import StatusPopup from "../StatusPopup/StatusPopup";
// Получение данных LocalStorage
const localMoviesArray = new LocalStorage("movies");
const localSearchValue = new LocalStorage("search-value");
const localCheckboxStatus = new LocalStorage("search-checkbox");

function App() {
  // Маршруты и текущая url
  const history = useHistory();
  const location = useLocation();

  // Авторизация и данные пользователя
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  // Фильмы
  const [fullMoviesArray, setFullMoviesArray] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [mySavedMovies, setMySavedMovies] = useState([]);
  const [savedMoviesFiltered, setSavedMoviesFiltered] = useState([]);
  const [searchInSaved, setSearchInSaved] = useState(false);
  const [showMoviesList, setShowMoviesList] = useState([]);
  const [amountOfShowedMovies, setAmountOfShowedMovies] = useState(cardsInDesktop);
  const [searchedValues, setSearchedValues] = useState({
    value: "",
    checkbox: "",
  });

  // Загрузка с сервера
  const [isLoad, setIsLoad] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(true);
  const [openStatusPopup, setOpenStatusPopup] = useState(false);

  // Регистрация пользователя
  function handleRegister(name, email, password) {
    return MainApi.signup(name, email, password)
    .then((data) => {
      if (!data) return;
      setSearchedValues({
        value: "",
        checkbox: "",
      });
      setIsAuthorized(true);
      handleLogin({ email, password });
    })
    .catch(() => {
      setIsAuthorized(false);
      setIsConfirmed(false);
      setOpenStatusPopup(true);
    });
  }

  // Вход, авторизация пользователя
  function handleLogin({ email, password }) {
    return MainApi.signin(email, password)
    .then((data) => {
      if (!data) return;
      setSearchedValues({
        value: "",
        checkbox: "",
      });
      setIsAuthorized(true);
      setOpenStatusPopup(true);
    })
    .then(() => {
      history.push(URLS.MOVIES);
    })
    .catch(() => {
      setIsAuthorized(false);
      setCurrentUser({});
      setOpenStatusPopup(true);
      setIsConfirmed(false);
    });
  }

// Изменение данных в аккаунте
function handleChangeUserData({ name, email }) {
  return MainApi.changeUserData(name, email)
  .then((data) => {
    setIsConfirmed(true);
    setCurrentUser(data);
    setOpenStatusPopup(true);
  })
  .catch(() => {
    setIsConfirmed(false);
    setOpenStatusPopup(true);
  });
}

// Выход
function handleUserLogout() {
  return MainApi.logout()
  .then((data) => {
    if (!data) return;
    setCurrentUser({});
    setIsAuthorized(false);
    setMoviesFiltered([]);
    setFullMoviesArray([]);
    setMySavedMovies([]);
    setSavedMoviesFiltered([]);
    setShowMoviesList([]);
    setSearchedValues({
      value: "",
      checkbox: "",
    });
    history.push(URLS.LANDING);
    localStorage.clear();
  })
  .catch(() => {
    setIsAuthorized(false);
    setIsConfirmed(true);
  });
}

useEffect(() => {
  // Поиск фильмов по данным из LocalStorage
  if (searchedValues.value && fullMoviesArray.length && location.pathname === URLS.MOVIES) {
    handleFilmsSearch(searchedValues.value, searchedValues.checkbox);
  }
  // eslint-disable-next-line
}, [location, fullMoviesArray]);

// Фильмы в LocalStorage по текущему пользователю
useEffect(() => {
  if (localMoviesArray) {
    setFullMoviesArray(localMoviesArray.get());
  }

  // Проверка значений поиска
  if (localSearchValue || localCheckboxStatus) {
    setSearchedValues({
      value: localSearchValue.get(),
      checkbox: localCheckboxStatus.get(),
    });
  }

  // Использование данных текущего пользователя
  function getContent() {
    return MainApi.tokenCheck()
      .then((user) => {
        setCurrentUser(user);
        setIsAuthorized(true);
      })
      .catch((err) => {
        setIsAuthorized(false);
        setCurrentUser({});
      });
  }

  getContent();
}, [isAuthorized]);

// Получение с сервера фильмов текущего пользователя
useEffect(() => {
  if (location.pathname === URLS.LOGIN || location.pathname === URLS.REGISTER) return;
  if (isAuthorized && !mySavedMovies.length &&
    (location.pathname === URLS.MOVIES || location.pathname === URLS.MYMOVIES)
  ) {
    MainApi.getFilms()
      .then((movies) => {setMySavedMovies(movies.reverse());})
      .catch((err) => console.log(err));
  }
}, [isAuthorized, location, mySavedMovies.length]);

// Количество фильмов в зависимости от экрана
useEffect(() => {
  if (location.pathname === URLS.MOVIES) {
    window.addEventListener("resize", () => {
      setTimeout(() => {window.screen.width >= 1280
          ? setAmountOfShowedMovies(cardsInDesktop)
          : window.screen.width < 768
          ? setAmountOfShowedMovies(cardsInMob)
          : setAmountOfShowedMovies(cardsInTablet);
      }, 1500);
    });
  } else {window.removeEventListener("resize", () => {});}
}, [location]);

// Кнопка "Ещё"
function handleAddCardsButton() {
  const amountToShow = window.screen.width <= 768 ? addCardsInMob : addCardsInDesktop;
  setAmountOfShowedMovies(showMoviesList.length + amountToShow);
}

// Отображение фильмов по локации и поиску
useEffect(() => {
  setShowMoviesList(
    location.pathname === URLS.MOVIES
      ? moviesFiltered.slice(0, amountOfShowedMovies)
      : searchInSaved
      ? savedMoviesFiltered
      : mySavedMovies
  );
}, [location, moviesFiltered, mySavedMovies, savedMoviesFiltered, searchInSaved, amountOfShowedMovies]);

// Поиск по введенным значениям и короткометражкам
function handleFilmsSearch(value, checkbox) {
  setSearchedValues({ value: value, checkbox: checkbox });
  localSearchValue.set(value);
  localCheckboxStatus.set(checkbox);

  setSearchInSaved(false);

  function filter(movies) {
    window.screen.width >= 1280
      ? setAmountOfShowedMovies(cardsInDesktop)
      : window.screen.width < 768
      ? setAmountOfShowedMovies(cardsInMob)
      : setAmountOfShowedMovies(cardsInTablet);

    setMoviesFiltered(
      movies.filter((item) => {
        if (checkbox) { return (item.nameRU.toLowerCase().includes(value.toLowerCase()) && item.duration <= shortFilms)} 
        else { return item.nameRU.toLowerCase().includes(value.toLowerCase()) }})
    );
  }

  if (!fullMoviesArray.length) {
    setIsLoad(true);
    api
      .getMovies()
      .then((movies) => {
        setFullMoviesArray(movies);
        localMoviesArray.set(movies);
        filter(movies);
        setIsLoad(false);
        setIsConfirmed(true);
      })
      .catch(() => {
        setIsConfirmed(false);
        setOpenStatusPopup(true);
      });
  } else {
    filter(fullMoviesArray);
  }
}

// Фильтр для сохраненных фильмов
function handleSearchSavedMovies(value, checkbox) {
  setSearchInSaved(true);
  const searchAtSaved = mySavedMovies.filter((item) => item.nameRU.toLowerCase().includes(value.toLowerCase()));
  const searchInShortSavedFilms = mySavedMovies.filter((item) => item.nameRU.toLowerCase().includes(value.toLowerCase()) && item.duration <= shortFilms);

  if (searchAtSaved || searchInShortSavedFilms) {
    if (checkbox && searchInShortSavedFilms) {
      setSavedMoviesFiltered([...searchInShortSavedFilms]);
    } else if (searchAtSaved) {
      setSavedMoviesFiltered([...searchAtSaved]);
    }
  }
}

// Короткометражки
function handleShortFilmCheck(value, checkbox) {
  if (location.pathname === URLS.MOVIES) {handleFilmsSearch(value, checkbox)} 
  else if (location.pathname === URLS.MYMOVIES) {
    handleSearchSavedMovies(value, checkbox)
  }
  localCheckboxStatus.set(checkbox);
}

// Лайки
function handleLikeToMovie(movie) {
  const movieLiked = mySavedMovies.find((item) => item.movieId === movie.id || movie.movieId);

  return MainApi.changeSavedOrUnsaved(
    movieLiked && location.pathname === URLS.MOVIES ? movieLiked : movie, movieLiked)
    .then((req) => {
      if (!movieLiked) {
        setMySavedMovies([req, ...mySavedMovies]);
      } else if (location.pathname === URLS.MOVIES) {
        setMySavedMovies((state) => state.filter((item) => item.movieId !== movie.id));
      } else {
        setMySavedMovies((state) => state.filter((item) => item.movieId !== movie.movieId));
      }
    })
    .catch(() => {
      setOpenStatusPopup(true);
      setIsConfirmed(false);
    });
}

return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
    <Header isAuthorized={isAuthorized}/>
      <main className="root">
        <Switch>
          <Route path={URLS.LANDING} exact><Main /></Route>
          <Route path={URLS.REGISTER} exact>{isAuthorized ? (<Redirect to={URLS.MOVIES} />) : (<Register submitRegister={handleRegister} />)}</Route>
          <Route path={URLS.LOGIN} exact>{isAuthorized ? (<Redirect to={URLS.MOVIES} />) : (<Login submitLogin={handleLogin} />)}</Route>

          <ProtectedRoute isAuthorized={isAuthorized} path={URLS.MOVIES} exact>  
            <Movies 
              location={location}
              isConfirmed={isConfirmed}
              isLoad={isLoad}
              fullMoviesArray={fullMoviesArray}
              showMoviesList={showMoviesList}
              isLiked={handleLikeToMovie}
              mySavedMovies={mySavedMovies}
              searchedValues={searchedValues}
              onFilmsSearch={handleFilmsSearch}
              moviesFiltered={moviesFiltered}
              onAddCardsButton={handleAddCardsButton}
              isShortFilm={handleShortFilmCheck}         
            />
          </ProtectedRoute>
          <ProtectedRoute isAuthorized={isAuthorized} path={URLS.MYMOVIES} exact>
            <SavedMovies 
              location={location}
              isConfirmed={isConfirmed}
              showMoviesList={showMoviesList}
              mySavedMovies={mySavedMovies}
              searchInSavedFilms={searchInSaved}
              savedMoviesFiltered={savedMoviesFiltered}
              searchedValues={searchedValues}
              handleSearchSavedMovies={handleSearchSavedMovies}
              isLiked={handleLikeToMovie}
              isShortFilm={handleShortFilmCheck}         
            />
          </ProtectedRoute>
          <ProtectedRoute isAuthorized={isAuthorized} path={URLS.MYPROFILE} exact>
            <Profile changedUserData={handleChangeUserData} unauthorizedUser={handleUserLogout} />
          </ProtectedRoute>
        
          <Route path="*"><NotFound /></Route>
        </Switch>
      </main>
      <StatusPopup
        isOpen={openStatusPopup} isConfirmed={isConfirmed}
        onClose={() => {setOpenStatusPopup(false);}}
        successInfo="Успешно" unsuccessInfo="Ошибка, попробуйте ещё раз"
      />
    </div>
  </CurrentUserContext.Provider>
);
}

export default App;