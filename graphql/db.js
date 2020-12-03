import axios from "axios";
const BASE_URL = "https://yts.mx/api/v2/";
const MOVIES_URL = `${BASE_URL}list_movies.json?`;
const MOVIE_URL = `${BASE_URL}movie_details.json?`;
const SUGGEST_URL = `${BASE_URL}movie_suggestions.json?`;

export const getMovies = async(limit, rating) => {
  const {
    data:{
      data:{movies}
    }
  } = await axios(MOVIES_URL, {
    params: {
      limit : limit,
      minimum_rating : rating
    }
  });
  return movies;
}

export const getMovie = async (id) => {
  const {
    data :{
      data: {movie}
    }
  } = await axios(MOVIE_URL, {
    params : {
      movie_id : id
    }
  });
  return movie;
}

export const getSuggest = async (id) => {
  const{
    data:{
      data:{movies}
    }
  } = await axios(SUGGEST_URL, {
    params:{
      movie_id : id
    }
  });
  return movies;
}