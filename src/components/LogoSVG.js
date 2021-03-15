import React from 'react';
import PropTypes from 'prop-types';

const LogoSVG = ({ color }) => (
  <svg
    width="33"
    viewBox="0 0 575 550"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="230" y="0.000245094" width="115" height="550" fill={color} />
    <path
      d="M230 110L230 0.000236511L575 0.00023669L470 110L230 110Z"
      fill={color}
    />
    <path
      d="M105 110L-4.80825e-06 9.17939e-06L210 7.62939e-06L210 110L105 110Z"
      fill="#00FFA3"
    />
    <path d="M470 440L575 550L365 550L365 440L470 440Z" fill={color} />
  </svg>
);

LogoSVG.propTypes = {
  color: PropTypes.string.isRequired,
};

export default LogoSVG;
