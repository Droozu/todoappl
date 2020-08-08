import React from 'react';
import PropTypes from 'prop-types';
import CompleteButton from './CompleteButton';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import Label from './Label';
import EditTaskForm from './EditTaskForm';

const Task = (props) => {
  const { task, deleteTask, editTaskTitle, toggleEdit, toggleComplete } = props;

  const { id, title, date, isCompleted, isEditing } = task;

  let className = '';
  if (isCompleted) className = 'completed';
  if (isEditing) className = 'editing';

  return (
    <li key={id} className={className}>
      <div className="view">
        <CompleteButton id={id} isCompleted={isCompleted} toggleComplete={toggleComplete} />
        <Label date={date} title={title} />
        <EditButton id={id} toggleEdit={toggleEdit} isCompleted={isCompleted} />
        <DeleteButton id={id} deleteTask={deleteTask} />
      </div>
      {className === 'editing' && (
        <EditTaskForm id={id} title={title} editTaskTitle={editTaskTitle} toggleEdit={toggleEdit} />
      )}
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.number, PropTypes.objectOf(Date)]).isRequired,
    isCompleted: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  editTaskTitle: PropTypes.func.isRequired,
};

export default Task;
