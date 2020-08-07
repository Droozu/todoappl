import React from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";

const Label = ({ title, date }) => {
    return (
        <label>
            <span className="description">{title}</span>
            <span className="created">
                created {formatDistanceToNow(date, {includeSeconds:true, addSuffix: true})}
            </span>
        </label>
    );
};

Label.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
}

export default Label;