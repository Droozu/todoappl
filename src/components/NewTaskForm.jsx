import React, { useState } from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

const NewTaskForm = ({ addTask }) => {
  const [titleValue, setTitleValue] = useState('');

  function handleChange(event) {
    setTitleValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!titleValue) return;
    const newTask = {
      id: v4(),
      title: titleValue,
      date: new Date(),
      isCompleted: false,
      isEditing: false,
    };
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
  addTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
