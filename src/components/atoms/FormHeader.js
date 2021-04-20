import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const FormTitle = styled.h3`
  text-align: center;
  ::first-letter {
    color: ${({ theme }) => theme.colors.touch};
  }
  letter-spacing: 0.04em;
`;

const FormHeader = ({ className, text }) => (
  <FormTitle className={className}>{text}</FormTitle>
);

FormHeader.propTypes = {
  className: propTypes.string,
  text: propTypes.string.isRequired,
};

FormHeader.defaultProps = {
  className: '',
};

export default FormHeader;
