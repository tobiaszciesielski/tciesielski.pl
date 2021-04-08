import React from 'react';
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
  margin-bottom: 22px;
  padding: 0 10px;
  height: 40px;
  width: 100%;
  max-width: 230px;
`;

const NewsletterForm = () => (
  <StyledForm>
    <FormTitle>NEWSLETTER</FormTitle>
    <FormDescription>
      Zapisz się, żeby dostawać powiadomienia o nowych wpisach na blogu!
    </FormDescription>
    <FormInput placeholder="imię" type="text" />
    <FormInput placeholder="nazwisko" type="text" />
    <Button text="ZAPISZ" />
  </StyledForm>
);

export default NewsletterForm;
