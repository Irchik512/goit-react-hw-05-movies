import PropTypes from 'prop-types';

export default function Finder({ filter, onChange }) {
  return (
    <label>
      {' '}
      Find movie by name{' '}
      <input
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onChange}
        required
      />
    </label>
  );
}

Finder.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
