import axios from 'axios';

// import { pagination } from './pagination';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = `6c934d67464856a6476afafcb7e85695`;

export async function fetchTrendingMovies(page = 1) {
  const response = await axios.get(
    `trending/movie/day?api_key=${KEY}&page=${page}`
  );
  const movies = response.data.results;
  // const quantity = response.data.total_results;
  // if (page === 1) {
  //   pagination.reset(quantity);
  //   pagination.setTotalItems(quantity);
  // }
  return movies;
}

export async function fetchApiConfig() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/configuration?api_key=${KEY}`
  );
  const config = response;
  console.log(config);
}

export async function fetchMoviesOnQuery(searchQuery, page = 1) {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}&page=${page}`
  );
  const movies = response.data.results;
  // if (page === 1) {
  //   pagination.reset(response.data.total_results);
  // }
  // if (!response.data.total_results) {
  //   pagination.reset(0);
  //   pagination.setTotalItems(0);
  //   refs.gallery.innerHTML = '';
  // try {
  //   document.getElementById('tui-pagination-container').style.display =
  //     'none';
  // } catch (err) {}
  // } else {
  //   document.getElementById('tui-pagination-container').style.display =
  //     'block';
  // }
  return movies;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios.get(
    `movie/${movieId}?api_key=${KEY}&append_to_response=images,credits,reviews`
  );
  const movie = await response.data;
  return movie;
}
