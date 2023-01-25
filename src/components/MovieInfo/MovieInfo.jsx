import PropTypes from 'prop-types';
import NoImg from 'helpers/ImageNotFound.jpg';
import { Wraper, Thumb, MovieTitle } from 'components/MovieInfo';

export const MovieInfo = ({
  movie: {
    title,
    poster_path,
    release_date,
    vote_average,
    overview,
    genres = [],
  },
}) => {
  return (
    <Wraper>
      <Thumb>
        <img
          alt={title}
          src={
            poster_path === null
              ? `${NoImg}`
              : `https://image.tmdb.org/t/p/w300${poster_path}`
          }
        />
      </Thumb>
      <div>
        <MovieTitle>
          {title} {release_date && `(${release_date})`}
        </MovieTitle>
        <p>User score: {(vote_average * 10).toFixed(2) + '% '}</p>
        <h2> Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p> {genres.map(genre => genre.name + ' ')} </p>
      </div>
    </Wraper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ).isRequired,
  }).isRequired,
};
