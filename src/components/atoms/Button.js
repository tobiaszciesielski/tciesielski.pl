import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';

const StyledButton = styled.button`
  padding: 8px 22px;
  border-radius: 25px;
  letter-spacing: 0.12em;
  cursor: pointer;
  color: #fff;
  outline: none;

  ${({ theme: { colors }, dark }) =>
    dark
      ? css`
          background: ${colors.dark};
          color: ${colors.primary};
          border: 1px solid ${colors.touch};
        `
      : css`
          background: ${colors.touch};
          color: ${colors.darkest};
          border: none;
        `}
`;

const Button = ({ className, text, dark, type }) => (
  <StyledButton className={className} dark={dark} type={type}>
    {text}
  </StyledButton>
);

Button.propTypes = {
  className: propTypes.string,
  text: propTypes.string.isRequired,
  dark: propTypes.bool,
  type: propTypes.string,
};

Button.defaultProps = {
  className: '',
  dark: false,
  type: 'button',
};

export default Button;
