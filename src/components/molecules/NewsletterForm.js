import React from 'react';
import propTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '../atoms/Button';
import FormWrapper from './FormWrapper';
import FormHeader from '../atoms/FormHeader';
import ErrorMessage from '../atoms/ErrorMessage.styled';
import Input from '../atoms/Input.styled';

const StyledForm = styled(FormWrapper)`
  margin-bottom: 50px;

  @media ${({ theme: { media } }) => media.tablet} {
    max-width: 400px;
  }
`;

const StyledFormHeader = styled(FormHeader)`
  margin-bottom: 18px;
`;

const FormDescription = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
  text-align: center;
  padding: 0 10px;

  @media ${({ theme: { media } }) => media.tablet} {
    padding: 0px;
  }
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
      <StyledFormHeader text="NEWSLETTER" />
      <FormDescription>
        Zapisz się, żeby dostawać powiadomienia o nowych wpisach na blogu!
      </FormDescription>
      <Input
        {...register('firstName', { required: true, minLength: 3 })}
        placeholder="imię"
      />
      <Input
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
