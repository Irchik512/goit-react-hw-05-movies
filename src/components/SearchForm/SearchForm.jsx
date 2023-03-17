import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  FindMovieForm,
  FindMovieInput,
  FindMovieButton,
} from 'components/SearchForm';

export const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const trimQuery = searchQuery.trim();
    if (trimQuery === '') {
      return toast.error('There is nothing to find. Try again!', {
        theme: 'colored',
      });
    }
    onSubmit(trimQuery);
    setSearchQuery('');
  };

  return (
    <FindMovieForm className="searchForm" onSubmit={handleSubmit}>
      <FindMovieButton type="submit" className="searchForm-button">
        <BiSearch></BiSearch>
      </FindMovieButton>

      <FindMovieInput
        className="searchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter movies name"
        value={searchQuery}
        onChange={handleChange}
      />
    </FindMovieForm>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
