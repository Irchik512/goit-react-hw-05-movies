import PropTypes from 'prop-types';
import NoImg from 'helpers/ImageNotFound.jpg';
import { Thumb } from 'components/MovieInfo';
import { useLocation } from 'react-router-dom';
import {
  MovieItem,
  ItemLink,
  ItemImage,
  ItemTitle,
} from 'components/GalleryItem';

export function GalleryItem({ alt, src, title, id }) {
  const location = useLocation();
  return (
    <MovieItem>
      <ItemLink to={`/movies/${id}`} state={{ from: location }}>
        <Thumb>
          <ItemImage
            src={
              src !== null
                ? `https://image.tmdb.org/t/p/w300${src}`
                : `${NoImg}`
            }
            alt={alt}
          />
        </Thumb>
        <ItemTitle>{title}</ItemTitle>
      </ItemLink>
    </MovieItem>
  );
}

GalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
