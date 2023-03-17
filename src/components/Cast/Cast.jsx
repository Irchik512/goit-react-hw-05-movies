import Loader from 'components/Loader/Loader';
import { CastList } from 'components/Cast';
import { FotoCard } from 'components/FotoCard';
import { useFetchMovieInfo } from 'hooks';
import { movieCasts } from 'moviesApi';

export const Cast = () => {
  const { data, loading } = useFetchMovieInfo(movieCasts);
  console.dir(data);
  return (
    <>
      {loading && <Loader />}
      {data && (
        <CastList>
          {data.map(({ cast_id, profile_path, name, character }) => (
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
