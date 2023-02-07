//export const BASE_URL = "http://localhost:3001/";
export const BASE_URL = "https://api.movies.nsarycheva.nomoredomains.club/";

function request({ url, token, data, method = "POST" }) {
  return fetch(`${BASE_URL}${url}`, {
    mode: "cors",
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...(!!token && { Authorization: `Bearer ${token}` }),
    },
    credentials: "include",
    ...(!!data && { body: JSON.stringify(data) }),
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Возникла ошибка: ${res.status}`);
    }
    return res.json();
  });
}

export const tokenCheck = () => {
  return request({
    method: "GET",
    url: "users/me",
  });
};

export const signup = (name, email, password) => {
  return request({
    data: { name, email, password },
    url: "signup",
  });
};

export const signin = (email, password) => {
  return request({
    data: { email, password },
    url: "signin",
  });
};

export const logout = () => {
  return request({
    method: "POST",
    url: "signout",
  });
};

export const changeUserData = (name, email) => {
  return request({
    data: { name, email },
    method: "PATCH",
    url: "users/me",
  });
};

export const getFilms = () => {
  return request({
    method: "GET",
    url: "movies",
  });
};

const addMovie = (item) => { 
  return request({
    data: {
      movieId: item.id,
      nameRU: item.nameRU,
      nameEN: item.nameEN,
      country: item.country,
      director: item.director,
      trailerLink: item.trailerLink,
      duration: item.duration,
      year: item.year,
      description: item.description,
      image:
        item.image instanceof Object
          ? `https://api.nomoreparties.co/${item.image.url}`
          : item.image,
      thumbnail:
        item.image instanceof Object
          ? `https://api.nomoreparties.co/${item.image.formats.thumbnail.url}`
          : item.thumbnail,
    },
    url: "movies",
  });
};

const dislikeMovies = (id) => {
  return request({
    method: "DELETE",
    url: `movies/${id}`,
  });
};

export const changeSavedOrUnsaved = (item, isLiked) => {
  return !isLiked ? addMovie(item) : dislikeMovies(item._id);
};