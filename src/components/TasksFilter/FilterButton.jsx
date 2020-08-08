import React from 'react';
import PropTypes from 'prop-types';

const FilterButton = ({ name, filter, setFilter, children }) => {
  function handleSelect(event) {
    setFilter(event.target.name);
  }

  return (
    <li>
      <button
        name={name}
        className={filter === name ? 'selected' : ''}
        onClick={handleSelect}
        type="button"
        aria-label={name}
      >
        {children}
      </button>
    </li>
  );
};

FilterButton.propTypes = {
  name: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  children: PropTypes.elementType.isRequired,
};

export default FilterButton;
