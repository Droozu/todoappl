import React from 'react';
import PropTypes from "prop-types";
import NewTaskForm from "./NewTaskForm";

export default function TasksFilter({ filter, setFilter }) {
  const FilterButton = (props) => {
    function handleSelect(event) {
      setFilter(event.target.name);
    }

    return (
      <li>
        <button name={props.name} className={filter === props.name ? 'selected' : ''} onClick={handleSelect}>
          {props.children}
        </button>
      </li>
    );
  };

  return (
    <ul className="filters">
      <FilterButton name="All">All</FilterButton>
      <FilterButton name="Active">Active</FilterButton>
      <FilterButton name="Completed">Completed</FilterButton>
    </ul>
  );
}
TasksFilter.propTypes = {
    addTask: PropTypes.func,
};

TasksFilter.defaultProps = {
    addTask: () => {},
};