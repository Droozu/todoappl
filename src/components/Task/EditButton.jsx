import React from "react";
import PropTypes from "prop-types";

const EditButton = ({ id, toggleEdit }) => {
    return (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
            id={id}
            type="button"
            className="icon icon-edit"
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