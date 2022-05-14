import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { movieCasts } from 'moviesApi';
import Loader from 'components/Loader/Loader';
import { CastList } from 'components/Cast';
import { FotoCard } from 'components/FotoCard';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
      try {
        const movie = await movieCasts(movieId);
        setMovieCast(movie);
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
      {movieCast && (
        <CastList>
          {movieCast.map(({ cast_id, profile_path, name, character }) => (
            <FotoCard
              key={cast_id}
              name={name}
              src={profile_path}
              character={character}
            />
          ))}
        </CastList>
      )}
    </>
  );
};
