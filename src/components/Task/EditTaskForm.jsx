import React, {useState} from "react";
import PropTypes from "prop-types";

const EditTaskForm = ({ id, title, editTaskTitle, toggleEdit }) => {
    const [taskValue, setTaskValue] = useState(title);

    function handleChange(event) {
        setTaskValue(event.target.value);
    }

    function handleSubmit(event) {
        editTaskTitle(event, taskValue);
        toggleEdit(event);
        event.preventDefault();
    }

    return (
        <form id={id} onSubmit={handleSubmit}>
            <input
                type="text"
                className="edit"
                value={taskValue}
                onChange={handleChange}
            />
        </form>
    );
};

EditTaskForm.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    editTaskTitle: PropTypes.bool.isRequired,
    toggleEdit: PropTypes.func.isRequired,
}


export default EditTaskForm;