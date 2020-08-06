import React, { useState } from 'react';
import { v4 } from 'uuid';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

const NewTaskForm = ({ addTask }) => {
  const [titleValue, setTitleValue] = useState('');

  function handleChange(event) {
    setTitleValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      id: v4(),
      title: titleValue,
      date: formatDistanceToNow(new Date()),
      isCompleted: false,
      isEditing: false,
    };

    if (!newTask) return;
    addTask(newTask);
    setTitleValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="new-todo" placeholder="What needs to be done?" onChange={handleChange} value={titleValue} />
    </form>
  );
};

NewTaskForm.propTypes = {
  addTask: PropTypes.func,
};

NewTaskForm.defaultProps = {
  addTask: () => {},
};

export default NewTaskForm;
