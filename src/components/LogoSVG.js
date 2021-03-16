import React from 'react';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

// it is possible to use context if needed in future
// https://styled-components.com/docs/advanced#via-usecontext-react-hook

const LogoSVG = ({ width }) => {
  const { touch, primary } = theme.colors;

  return (
    <svg
      width={width}
      viewBox="0 0 575 550"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ zIndex: 9000 }}
    >
      <rect x="230" y="0.000245094" width="115" height="550" fill={primary} />
      <path
        d="M230 110L230 0.000236511L575 0.00023669L470 110L230 110Z"
        fill={primary}
      />
      <path
        d="M105 110L-4.80825e-06 9.17939e-06L210 7.62939e-06L210 110L105 110Z"
        fill={touch}
      />
      <path d="M470 440L575 550L365 550L365 440L470 440Z" fill={primary} />
    </svg>
  );
};

LogoSVG.propTypes = {
  width: PropTypes.number,
};

LogoSVG.defaultProps = {
  width: 33,
};

export default LogoSVG;