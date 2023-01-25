import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useFetchData } from 'hooks';
import { fetchMovieDetails } from 'moviesApi';
import Loader from 'components/Loader/Loader';
import { Button } from 'components/Button';
import { MovieInfo } from 'components/MovieInfo';
import { Sections } from 'components/Section';
import { AdditionInfo } from 'pages/MovieDetailsPage';

export const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const { data, loading, movieId } = useFetchData(fetchMovieDetails);

  return (
    <>
      <Sections>
        <Button onClick={() => navigate(-1)}>
          <FaArrowLeft /> Go back
        </Button>
        {loading && <Loader />}
      </Sections>
      {data && (
        <>
          <Sections>
            <MovieInfo movie={data} />
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
