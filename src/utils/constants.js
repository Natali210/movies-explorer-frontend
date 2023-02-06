export const BASE_URL = "https://api.nomoreparties.co/";

// Адреса страниц
export const URLS = {
  LANDING: "/",
  MOVIES: "/movies",
  MYMOVIES: "/saved-movies",
  MYPROFILE: "/profile",
  LOGIN: "/signin",
  REGISTER: "/signup",
};

// Фильмы
export const cardsInDesktop = 12; // Ширина больше 1280px
export const cardsInTablet = 8; // Ширина меньше 1280px и до 768px
export const cardsInMob = 5; // Ширина меньше 768px
export const addCardsInDesktop = 3; // Ширина больше 768px
export const addCardsInMob = 2; // Ширина меньше или равна 768px

export const shortFilms = 40; // Длительность до 40 минут включительно

// Валидация
export const nameRegExp = /^[а-яА-ЯЁёa-zA-Z /s -]+$/i;
export const emailRegExp = /^(([^()<>[\],.:;\s@"]+(\.[^()<>[\],.:;\s@"]+)*)|(".+"))@(([^()<>[\],.:;\s@"]+\.)+[^()<>[\],.:;\s@"]{2,})$/iu;

export const validationConfig = {
  USER: {
    INPUTS: ["name", "email"],
    REGEXP: {
      name: nameRegExp,
      email: emailRegExp,
    },
    TEXT: {
      name: "Используйте только кириллические или латинские буквы, дефисы, пробелы",
      email: "Некорректно указан e-mail",
    },
  },
};