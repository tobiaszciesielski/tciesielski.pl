import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import propTypes from 'prop-types';

const SmoothScrollAnchor = ({ targetId, onClick, children }) => (
  <a
    href={`#${targetId}`}
    onClick={(event) => {
      event.preventDefault();
      scrollTo(`#${targetId}`);
      onClick();
    }}
  >
    {children}
  </a>
);

SmoothScrollAnchor.propTypes = {
  targetId: propTypes.string.isRequired,
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf(propTypes.node),
  ]).isRequired,
  onClick: propTypes.func,
};

SmoothScrollAnchor.defaultProps = {
  onClick: () => null,
};

export default SmoothScrollAnchor;
