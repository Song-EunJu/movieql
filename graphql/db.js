import fetch from "node-fetch";
const MOVIES_URL = "https://yts.mx/api/v2/list_movies.json?";
const MOVIE_URL = "https://yts.mx/api/v2/movie_details.json?";
const SUGGEST_URL = "https://yts.mx/api/v2/movie_suggestions.json?";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = MOVIES_URL;
  if(limit > 0){
    REQUEST_URL += `limit=${limit}`;
  }
  if(rating > 0){
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
}

export const getMovie = (id) => {
  let REQUEST_URL = MOVIE_URL+`movie_id=${id}`;
  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movie);
}

export const getSuggest = (id) => {
  let REQUEST_URL = SUGGEST_URL + `movie_id=${id}`;
  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
}