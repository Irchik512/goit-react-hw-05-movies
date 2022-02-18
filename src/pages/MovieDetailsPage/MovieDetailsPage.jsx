import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { fetchMovieDetails } from 'moviesApi';
import { MovieInfo } from 'components/MovieInfo';
import { Section } from 'components/Section/Section.styled';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';
export const MovieDetailsPage = () => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieData(movie);
      } catch (error) {
        toast.error('The resource you requested could not be found.');
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <main>
      <Section>
        {loading && <Loader />}
        <Link to="/">
          <FaArrowLeft /> Go back
        </Link>
        {movieData && (
          <>
            <MovieInfo movie={movieData} />
            <ul>
              {' '}
              Additional information:
              <li>
                <Link to="/movies/:movieId/cast">Cast</Link>
              </li>
              <li>
                <Link to="/movies/:movieId/reviews">Reviews</Link>
              </li>
            </ul>
          </>
        )}
      </Section>
      <Section>
        <Outlet />
      </Section>
    </main>
  );
};
