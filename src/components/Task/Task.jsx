import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CompleteButton from "./CompleteButton";

const Task = (props) => {
  const { task, deleteTask, editTaskTitle, toggleEdit, toggleComplete } = props;

  const [className, setClassName] = useState('');

  React.useEffect(() => {
    setClassName(`${task.isCompleted ? 'completed' : ''}${task.isEditing ? 'editing' : ''}`);
  }, [task.isCompleted, task.isEditing]);

  const EditButton = () => {
    return <button id={task.id} type="button" className="icon icon-edit" name="isEditing" onClick={toggleEdit} />;
  };
  const DeleteButton = () => {
    return <button id={task.id} className="icon icon-destroy" onClick={deleteTask} />;
  };
  const EditTaskForm = () => {
    const [taskValue, setTaskValue] = useState(task.title);

    function handleChange(event) {
      setTaskValue(event.target.value);
    }

    function handleSubmit(event) {
      editTaskTitle(event, taskValue);
      toggleEdit(event);
      event.preventDefault();
    }

    return (
      <form id={task.id} onSubmit={handleSubmit}>
        <input type="text" className="edit" value={taskValue} onChange={handleChange} />
      </form>
    );
  };
  const Label = () => {
    return (
      <label>
        <span className="description">{task.title}</span>
        <span className="created">{task.date}</span>
      </label>
    );
  };

  return (
    <li key={task.id} className={className}>
      <div className="view">
        <CompleteButton
            id={task.id}
            isCompleted={task.isCompleted}
            toggleComplete={toggleComplete}
        />
        <Label />
        <EditButton />
        <DeleteButton />
      </div>
      {className === 'editing' && <EditTaskForm />}
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    isCompleted: PropTypes.bool,
    isEditing: PropTypes.bool,
  }).isRequired,
  deleteTask: PropTypes.func,
  toggleChange: PropTypes.func,
  toggleComplete: PropTypes.func,
  editTaskTitle: PropTypes.func,
};

export default Task;