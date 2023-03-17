import { movieReviews } from 'moviesApi';
import Loader from 'components/Loader/Loader';
import { RevieItem } from 'components/Reviews';
import { useFetchMovieInfo } from 'hooks';

export const Reviews = () => {
  const { data, loading } = useFetchMovieInfo(movieReviews);
  console.log(data);
  return (
    <>
      {loading && <Loader />}
      {data && data.length > 0 ? (
        <ul>
          {data.map(({ id, author, content }) => (
            <RevieItem key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </RevieItem>
          ))}
        </ul>
      ) : null}
    </>
  );
};
