import PropTypes from 'prop-types';
import NoImg from 'helpers/ImageNotFound.jpg';
import { Thumb } from 'components/MovieInfo/MovieInfo.styled';

export const FotoCard = ({ name, src, character }) => {
  return (
    <li>
      <Thumb>
        <img
          alt={name}
          src={
            src === null ? `${NoImg}` : `https://image.tmdb.org/t/p/w300${src}`
          }
        />
      </Thumb>
      <div>
        <h3>{name}</h3>
        <p>Character: {character}</p>
      </div>
    </li>
  );
};

FotoCard.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
