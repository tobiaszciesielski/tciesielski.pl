import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Button from './Button';

const StyledSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledHeader = styled(SectionHeader)`
  margin-top: 100px;
  margin-bottom: 80px;
`;

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

  margin-bottom: 50px;
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

const FormTextArea = styled.textarea`
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 10px;
  margin-bottom: 22px;
  padding: 10px;
  height: 250px;
  width: 100%;
  max-width: 230px;
  outline-style: none;
`;

const Contact = () => (
  <StyledSection>
    <StyledHeader text="KONTAKT" />
    <StyledForm>
      <FormTitle>NEWSLETTER</FormTitle>
      <FormDescription>
        Zapisz się, żeby dostawać powiadomienia o nowych wpisach na blogu!
      </FormDescription>
      <FormInput placeholder="imię" type="text" />
      <FormInput placeholder="nazwisko" type="text" />
      <Button text="ZAPISZ" />
    </StyledForm>

    <StyledForm>
      <FormTitle>NAPISZ DO MNIE</FormTitle>
      <FormInput placeholder="mail" type="text" />
      <FormTextArea placeholder={'Cześć,\n\nMam pytanie...'} type="text" />
      <Button text="WYŚLIJ" />
    </StyledForm>
  </StyledSection>
);

export default Contact;
