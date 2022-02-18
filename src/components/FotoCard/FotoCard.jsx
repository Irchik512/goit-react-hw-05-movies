export const FotoCard = ({ name, src, character }) => {
  return (
    <li key={name}>
      <div>
        <img alt={name} src={src} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>Character: {character}</p>
      </div>
    </li>
  );
};
