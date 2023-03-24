import { Gallery } from 'components/Gallery';
import { Sections } from 'components/Section';
import { SearchForm } from 'components/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { useFetchByQuery } from 'hooks';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const { data } = useFetchByQuery(searchParams);
  const onSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <Sections>
      <SearchForm onSubmit={onSubmit} />
      {data && <Gallery movies={data} />}
    </Sections>
  );
};
export default MoviesPage;
