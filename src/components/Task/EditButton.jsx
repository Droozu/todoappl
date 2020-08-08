import React from 'react';
import PropTypes from 'prop-types';

const EditButton = ({ id, toggleEdit, isCompleted }) => {
  function handleClick(event) {
    if (isCompleted) return;
    toggleEdit(event);
  }
  return (
    <button id={id} type="button" className="icon icon-edit" aria-label="Edit" name="isEditing" onClick={handleClick} />
  );
};

EditButton.propTypes = {
  id: PropTypes.string.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default EditButton;
