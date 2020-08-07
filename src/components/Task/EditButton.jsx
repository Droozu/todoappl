import React from "react";
import PropTypes from "prop-types";

const EditButton = ({ id, toggleEdit }) => {
    return (
        <button
            id={id}
            type="button"
            className="icon icon-edit"
            aria-label="Edit"
            name="isEditing"
            onClick={toggleEdit}
        />
        )
}


EditButton.propTypes = {
    id: PropTypes.string.isRequired,
    toggleEdit: PropTypes.func.isRequired,
}

export default EditButton;