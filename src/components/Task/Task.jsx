import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CompleteButton from "./CompleteButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import Label from "./Label";
import EditTaskForm from "./EditTaskForm";

const Task = (props) => {
  const {
    task,
    deleteTask,
    editTaskTitle,
    toggleEdit,
    toggleComplete
  } = props;

  const {
    id,
    title,
    date,
    isCompleted,
    isEditing
  } = task;

  const [className, setClassName] = useState('');

  React.useEffect(() => {
    setClassName(`${isCompleted ? 'completed' : ''}${isEditing ? 'editing' : ''}`);
  }, [isCompleted, isEditing]);

  return (
    <li key={id} className={isCompleted ? 'completed' : ''}>
      <div className="view">
        <CompleteButton id={id} isCompleted={isCompleted} toggleComplete={toggleComplete} />
        <Label date={date} title={title} />
        <EditButton id={id} toggleEdit={toggleEdit} />
        <DeleteButton id={id} deleteTask={deleteTask} />
      </div>
      {className === 'editing' &&
      <EditTaskForm
          id={id}
          title={title}
          editTaskTitle={editTaskTitle}
          toggleEdit={toggleEdit}
      />}
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
  deleteTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  editTaskTitle: PropTypes.func.isRequired,
};

export default Task;
