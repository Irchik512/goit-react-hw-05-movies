import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { fetchMovieDetails } from 'moviesApi';
import Loader from 'components/Loader/Loader';
import { Button } from 'components/Button';
import { MovieInfo } from 'components/MovieInfo';
import { Sections } from 'components/Section';
import { AdditionInfo } from 'pages/MovieDetailsPage';

export const MovieDetailsPage = () => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieData(movie);
      } catch (error) {
        toast.error(
          'The resource you requested could not be found. Try again!'
        );
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      <Sections>
        <Button onClick={() => navigate(-1)}>
          <FaArrowLeft /> Go back
        </Button>
        {loading && <Loader />}
      </Sections>
      {movieData && (
        <>
          <Sections>
            <MovieInfo movie={movieData} />
          </Sections>
          <Sections>
            <AdditionInfo>
              Additional information:
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </AdditionInfo>
            <Outlet />
          </Sections>
        </>
      )}
    </>
  );
};
