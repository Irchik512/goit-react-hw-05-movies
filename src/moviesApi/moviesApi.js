import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = `6c934d67464856a6476afafcb7e85695`;

export async function fetchTrendingMovies() {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  const movies = response.data.results;
  return movies;
}

export async function fetchMoviesOnQuery(searchQuery) {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`
  );
  const movies = response.data.results;

  return movies;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios.get(`movie/${movieId}?api_key=${KEY}`);
  const movie = await response.data;
  return movie;
}

export async function movieCasts(movieId) {
  const response = await axios.get(`movie/${movieId}/credits?api_key=${KEY}`);
  const cast = await response.data.cast;
  return cast;
}

export async function movieReviews(movieId) {
  const response = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}`);
  const reviews = await response.data.results;
  return reviews;
}
