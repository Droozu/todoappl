import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CompleteButton from "./CompleteButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import Label from "./Label";
import EditTaskForm from "./EditTaskForm";

const Task = (props) => {
  const { task, deleteTask, editTaskTitle, toggleEdit, toggleComplete } = props;

  const [className, setClassName] = useState('');

  React.useEffect(() => {
    setClassName(`${task.isCompleted ? 'completed' : ''}${task.isEditing ? 'editing' : ''}`);
  }, [task.isCompleted, task.isEditing]);

  return (
    <li key={task.id} className={className}>
      <div className="view">
        <CompleteButton
            id={task.id}
            isCompleted={task.isCompleted}
            toggleComplete={toggleComplete}
        />
        <Label
            date={task.date}
            title={task.title}

        />
        <EditButton
            id={task.id}
            toggleEdit={toggleEdit}
        />
        <DeleteButton
            id={task.id}
            deleteTask={deleteTask}
        />
      </div>
      {className === 'editing' &&
      <EditTaskForm
          id={task.id}
          title={task.title}
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
  editTaskTitle: PropTypes.func.isRequired,
};

export default Task;
