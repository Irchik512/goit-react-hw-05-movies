import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useFetchMovieInfo } from 'hooks';
import { fetchMovieDetails } from 'moviesApi';
import Loader from 'components/Loader/Loader';
import { Button } from 'components/Button';
import { MovieInfo } from 'components/MovieInfo';
import { Sections } from 'components/Section';
import { AdditionInfo } from 'pages/MovieDetailsPage';

export const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const backLinkLocationRef = useRef(location.state?.from ?? '/movies')
  const { data, loading, movieId } = useFetchMovieInfo(fetchMovieDetails);
  console.log(data);
  return (
    <>
      <Sections>
        <Button onClick={() => navigate(location?.state?.from ?? '/')}>
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
                <Link
                  to={`/movies/${movieId}/cast`}
                  state={{ from: location?.state?.from ?? '/' }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to={`/movies/${movieId}/reviews`}
                  state={{ from: location?.state?.from ?? '/' }}
                >
                  Reviews
                </Link>
              </li>
            </AdditionInfo>
            <Outlet />
          </Sections>
        </>
      )}
    </>
  );
};
