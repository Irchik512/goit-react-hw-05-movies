import { movieReviews } from 'moviesApi';
import Loader from 'components/Loader/Loader';
import { RevieItem } from 'components/Reviews';
import { useFetchData } from 'hooks';

export const Reviews = () => {
  const { data, loading } = useFetchData(movieReviews);

  return (
    <>
      {loading && <Loader />}
      {data && (
        <ul>
          {data.map(({ id, author, content }) => (
            <RevieItem key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </RevieItem>
          ))}
        </ul>
      )}
    </>
  );
};
