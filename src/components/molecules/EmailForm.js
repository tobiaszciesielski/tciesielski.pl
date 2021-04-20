import React from 'react';
import propTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '../atoms/Button';
import FormWrapper from './FormWrapper';
import FormHeader from '../atoms/FormHeader';
import Input from '../atoms/Input.styled';
import ErrorMessage from '../atoms/ErrorMessage.styled';
import {} from '@formspree/react';

const StyledForm = styled(FormWrapper)`
  @media ${({ theme: { media } }) => media.tablet} {
    max-width: 750px;
  }
`;

const StyledFormHeader = styled(FormHeader)`
  margin-bottom: 18px;
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
  resize: none;

  @media ${({ theme: { media } }) => media.tablet} {
    max-width: 600px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  margin-left: -15px;
  margin-right: -15px;
`;

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const EmailForm = ({ className }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} className={className}>
      <StyledFormHeader text="NAPISZ DO MNIE" />
      <Input
        {...register('email', { required: true, pattern: emailPattern })}
        placeholder="mail"
      />
      <FormTextArea
        {...register('message', { required: true, minLength: 3 })}
        placeholder="Cześć, mam pytanie..."
        type="text"
      />
      <ErrorMessage>
        {errors.email && 'Podaj poprawny email! '}
        {errors.message && 'Za krótka wiadomość! '}
      </ErrorMessage>

      <StyledButton text="WYŚLIJ" />
    </StyledForm>
  );
};

EmailForm.propTypes = {
  className: propTypes.string,
};

EmailForm.defaultProps = {
  className: '',
};

export default EmailForm;
