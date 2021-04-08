import React from 'react';
import propTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from './Button';

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

const FormTitle = styled.h3`
  text-align: center;
  ::first-letter {
    color: ${({ theme }) => theme.colors.touch};
  }
  margin-bottom: 18px;
  letter-spacing: 0.04em;
`;

const FormDescription = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
  text-align: center;
  padding: 0 10px;
`;

const FormInput = styled.input`
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  outline-style: none;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 0 10px;
  height: 40px;
  width: 100%;
  max-width: 230px;
`;

const ErrorMessage = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 65px;
  font-size: 0.83em;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  margin-left: -15px;
  margin-right: -15px;
`;

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const NewsletterForm = ({ className }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} className={className}>
      <FormTitle>NEWSLETTER</FormTitle>
      <FormDescription>
        Zapisz się, żeby dostawać powiadomienia o nowych wpisach na blogu!
      </FormDescription>
      <FormInput
        {...register('firstName', { required: true, minLength: 3 })}
        placeholder="imię"
      />
      <FormInput
        {...register('email', { required: true, pattern: emailPattern })}
        placeholder="email"
      />

      <ErrorMessage>
        {errors.firstName && 'Podaj swoje imię! '}
        {errors.email && 'Podaj poprawny adres! '}
      </ErrorMessage>

      <StyledButton text="ZAPISZ" />
    </StyledForm>
  );
};

NewsletterForm.propTypes = {
  className: propTypes.string,
};

NewsletterForm.defaultProps = {
  className: '',
};

export default NewsletterForm;
