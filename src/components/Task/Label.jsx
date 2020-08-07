import React from "react";
import PropTypes from "prop-types";

const Label = ({ title, date }) => {
    return (
        <label>
            <span className="description">{title}</span>
            <span className="created">{date}</span>
        </label>
    );
};

Label.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}

export default Label;