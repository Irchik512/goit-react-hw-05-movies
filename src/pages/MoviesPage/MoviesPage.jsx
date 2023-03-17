import Loader from 'components/Loader/Loader';
import { Gallery } from 'components/Gallery';
import { Sections } from 'components/Section';
import { SearchForm } from 'components/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { useFetchByQuery } from 'hooks';

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const { data, loading } = useFetchByQuery(searchParams);
  const onSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <Sections>
      <SearchForm onSubmit={onSubmit} />
      {loading && <Loader />}
      {data && <Gallery movies={data} />}
    </Sections>
  );
};
