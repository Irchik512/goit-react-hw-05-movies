import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTrendingMovies, fetchMoviesOnQuery } from 'moviesApi';
import { toast } from 'react-toastify';

export const useFetchMovies = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const data = await fetchTrendingMovies(1);
        setItems(data);
      } catch (error) {
        toast.error('The resource could not be found.');
      }
    }
    getTrendingMovies();
  }, []);
  return { items };
};

export const useFetchByQuery = query => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const searchQuery = query.get('query');
    if (!searchQuery) return;

    async function getMovies() {
      try {
        const data = await fetchMoviesOnQuery(searchQuery);
        setData(data);
      } catch (error) {
        toast.error('The resource you requested could not be found.');
      }
    }
    getMovies();
  }, [query]);
  return { data };
};

export const useFetchMovieInfo = dataAPI => {
  const [data, setData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const movie = await dataAPI(movieId);
        if (movie.length === 0) {
          return console.error();
        }
        setData(movie);
      } catch (error) {
        toast.error('The resource you requested not exist yet.');
      }
    }
    getMovieDetails();
  }, [dataAPI, movieId]);
  return { data, movieId };
};
