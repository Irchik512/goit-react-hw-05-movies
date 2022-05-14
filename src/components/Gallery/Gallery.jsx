import PropTypes from 'prop-types';
import { GalleryItem } from 'components/GalleryItem';
import { MoviesGallery } from 'components/Gallery';

export function Gallery({ movies, onClick }) {
  return (
    <MoviesGallery className="Gallery" onClick={onClick}>
      {movies.map(movie => (
        <GalleryItem
          key={movie.id}
          alt={movie.original_title}
          src={movie.poster_path}
          title={movie.title}
          id={movie.id}
        />
      ))}
    </MoviesGallery>
  );
}

Gallery.defaultProps = {
  onClick: () => null,
};

Gallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onClick: PropTypes.func,
};
