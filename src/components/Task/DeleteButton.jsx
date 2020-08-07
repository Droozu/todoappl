import React from "react";
import PropTypes from 'prop-types';

const DeleteButton = ({ id, deleteTask }) => {
    return (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
            id={id}
            type="button"
            className="icon icon-destroy"
            onClick={deleteTask}
        />
    )
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    deleteTask: PropTypes.func.isRequired,
}

export default DeleteButton;
