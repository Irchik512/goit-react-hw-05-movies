import { CastList } from 'components/Cast';
import { FotoCard } from 'components/FotoCard';
import { useFetchMovieInfo } from 'hooks';
import { movieCasts } from 'moviesApi';

const Cast = () => {
  const { data } = useFetchMovieInfo(movieCasts);
  return (
    <>
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
export default Cast;
