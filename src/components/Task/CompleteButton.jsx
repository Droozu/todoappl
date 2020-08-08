import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CompleteButton = ({ id, isCompleted, toggleComplete }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);

  function handleChange(event) {
    setIsChecked(!isChecked);
    toggleComplete(event);
  }

  return (
    <input id={id} className="toggle" checked={isChecked} type="checkbox" name="isCompleted" onChange={handleChange} />
  );
};

CompleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default CompleteButton;
