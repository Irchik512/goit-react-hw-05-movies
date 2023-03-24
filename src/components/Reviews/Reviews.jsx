import { movieReviews } from 'moviesApi';
import { RevieItem } from 'components/Reviews';
import { useFetchMovieInfo } from 'hooks';

const Reviews = () => {
  const { data } = useFetchMovieInfo(movieReviews);
  return (
    <>
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
export default Reviews;
