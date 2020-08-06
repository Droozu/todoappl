import React from 'react';
import PropTypes from 'prop-types';

const TaskList = ({ children }) => {
  return <ul className="todo-list">{children}</ul>;
};

export default TaskList;

TaskList.propTypes = {
  children: PropTypes.array.isRequired,
};
