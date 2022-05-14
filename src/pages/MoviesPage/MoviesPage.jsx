import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchMoviesOnQuery } from 'moviesApi';
import { Gallery } from 'components/Gallery';
import { Sections } from 'components/Section';
import { SearchForm } from 'components/Form';

export const MoviesPage = () => {
  const [movies, setMovies] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams('');

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) return;

    async function getMovies() {
      try {
        const data = await fetchMoviesOnQuery(searchQuery);
        setMovies(data);
      } catch (error) {
        toast.error('The resource you requested could not be found.');
      } finally {
      }
    }
    getMovies();
  }, [searchParams]);

  const onSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <Sections>
      <SearchForm onSubmit={onSubmit} />
      {movies && <Gallery movies={movies} />}
    </Sections>
  );
};
