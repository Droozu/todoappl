import React from 'react';
import PropTypes from 'prop-types';
import FilterButton from './FilterButton';

const TasksFilter = ({ filter, setFilter }) => {
  return (
    <ul className="filters">
      <FilterButton name="All" filter={filter} setFilter={setFilter}>
        All
      </FilterButton>
      <FilterButton name="Active" filter={filter} setFilter={setFilter}>
        Active
      </FilterButton>
      <FilterButton name="Completed" filter={filter} setFilter={setFilter}>
        Completed
      </FilterButton>
    </ul>
  );
};

TasksFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default TasksFilter;
