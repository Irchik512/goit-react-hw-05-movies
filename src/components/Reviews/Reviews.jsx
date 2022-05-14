import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { movieReviews } from 'moviesApi';
import Loader from 'components/Loader/Loader';
import { RevieItem } from 'components/Reviews';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
      try {
        const result = await movieReviews(movieId);
        setReviews(result);
        console.log(result);
      } catch (error) {
        toast.error('The resource you requested could not be found.');
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews !== [] ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <RevieItem key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </RevieItem>
          ))}
        </ul>
      ) : (
        <p> We don't have any revievws for this movie! </p>
      )}
    </>
  );
};
