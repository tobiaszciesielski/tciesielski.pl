import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledForm = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.darker};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 300px;
`;

const FormWrapper = ({ children, className, onSubmit }) => (
  <StyledForm onSubmit={onSubmit} className={className}>
    {children}
  </StyledForm>
);

FormWrapper.propTypes = {
  className: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  onSubmit: propTypes.func.isRequired,
};

FormWrapper.defaultProps = {
  className: '',
};

export default FormWrapper;
