import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = ({ id, deleteTask }) => {
  return <button id={id} type="button" aria-label="Delete" className="icon icon-destroy" onClick={deleteTask} />;
};

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default DeleteButton;
