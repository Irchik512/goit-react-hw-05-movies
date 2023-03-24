import { Gallery } from 'components/Gallery';
import { Sections } from 'components/Section';
import { useFetchMovies } from 'hooks';

const HomePage = () => {
  const { items } = useFetchMovies();

  return (
    <Sections title={'Trending today'}>
      <Gallery movies={items} />
    </Sections>
  );
};
export default HomePage;
