import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTrendingMovies, fetchMoviesOnQuery } from 'moviesApi';
import { toast } from 'react-toastify';

export const useFetchMovies = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getTrendingMovies() {
      setLoading(true);
      try {
        const data = await fetchTrendingMovies(1);
        setItems(data);
      } catch (error) {
        toast.error('The resource could not be found.');
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, []);
  return { items, loading };
};

export const useFetchData = dataAPI => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
      try {
        const movie = await dataAPI(movieId);
        setData(movie);
      } catch (error) {
        toast.error('The resource you requested could not be found.');
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [dataAPI, movieId]);
  return { loading, data, movieId };
};

export const useFetchByQuery = query => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchQuery = query.get('query');
    if (!searchQuery) return;

    async function getMovies() {
      setLoading(true);
      try {
        const data = await fetchMoviesOnQuery(searchQuery);
        setData(data);
      } catch (error) {
        toast.error('The resource you requested could not be found.');
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [query]);
  return { loading, data };
};
