import { FotoCard } from 'components/FotoCard/FotoCard';
export const Cast = ({ casts = [] }) => {
  return (
    <ul>
      {casts.map(({ profile_path, name, character }) => (
        <FotoCard
          name={name}
          src={`https://image.tmdb.org/t/p/w100/${profile_path}`}
          character={character}
        />
      ))}
    </ul>
  );
};
