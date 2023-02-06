class MoviesApi {
    constructor({ headers, baseUrl }) {
      this._headers = headers;
      this._baseUrl = baseUrl;
    }
  
    getMovies() {
      return fetch(this._baseUrl, {
        headers: this._headers,
        method: "GET",
      }).then( res => {
        return res.ok
            ? res.json()
            : Promise.reject(`Возникла ошибка: ${res.status}`)
    })
    }
  }
  
  export const api = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
      "Content-Type": "application/json",
    },
  });