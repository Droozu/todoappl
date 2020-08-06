import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ activeCount, clearAllCompleted, children }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{activeCount} items left</span>
      {children}
      <button type="button" className="clear-completed" onClick={clearAllCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.element,
  activeCount: PropTypes.number,
  clearAllCompleted: PropTypes.func,
};
Footer.defaultProps = {
  children: [],
  activeCount: 0,
  clearAllCompleted: () => {},
};

export default Footer;
