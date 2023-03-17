import Loader from 'components/Loader/Loader';
import { Gallery } from 'components/Gallery';
import { Sections } from 'components/Section';
import { useFetchMovies } from 'hooks';

const HomePage = () => {
  const { items, loading } = useFetchMovies();

  return (
    <Sections title={'Trending today'}>
      {loading && <Loader />}
      <Gallery movies={items} />
    </Sections>
  );
};
export default HomePage;
