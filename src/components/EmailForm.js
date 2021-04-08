import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const StyledForm = styled.form`
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

const FormTitle = styled.h3`
  text-align: center;
  ::first-letter {
    color: ${({ theme }) => theme.colors.touch};
  }
  margin-bottom: 18px;
  letter-spacing: 0.04em;
`;

const FormInput = styled.input`
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  outline-style: none;
  outline-color: ${({ theme }) => theme.colors.touch};
  border-radius: 10px;
  margin-bottom: 22px;
  padding: 0 10px;
  height: 40px;
  width: 100%;
  max-width: 230px;
`;

const FormTextArea = styled.textarea`
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 10px;
  margin-bottom: 22px;
  padding: 10px;
  height: 350px;
  width: 100%;
  max-width: 230px;
  outline-style: none;
`;

const EmailForm = ({ className }) => (
  <StyledForm className={className}>
    <FormTitle>NAPISZ DO MNIE</FormTitle>
    <FormInput placeholder="mail" type="text" />
    <FormTextArea placeholder={'Cześć,\n\nMam pytanie...'} type="text" />
    <Button text="WYŚLIJ" />
  </StyledForm>
);

EmailForm.propTypes = {
  className: propTypes.string,
};

EmailForm.defaultProps = {
  className: '',
};

export default EmailForm;
