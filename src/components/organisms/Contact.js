import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import SectionHeader from '../atoms/SectionHeader';
import NewsletterForm from '../molecules/NewsletterForm';
import EmailForm from '../molecules/EmailForm';

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

const StyledNewsletterForm = styled(NewsletterForm)`
  margin-bottom: 50px;
`;

const Forms = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
  align-items: center;
  padding: 0 20px;

  form {
    grid-column: 1/13;
  }

  @media ${({ theme: { media } }) => media.tablet} {
    form:nth-child(1) {
      grid-column: 8/12;
    }
    form:nth-child(2) {
      grid-column: 2/7;
      grid-row: 1;
    }
  }

  @media ${({ theme: { media } }) => media.laptop} {
    form:nth-child(1) {
      grid-column: 9/12;
    }
    form:nth-child(2) {
      grid-column: 2/8;
    }
  }
`;

const Contact = () => (
  <StyledSection id="contact">
    <StyledHeader text="KONTAKT" />
    <Forms>
      <StyledNewsletterForm />
      <EmailForm />
    </Forms>
  </StyledSection>
);

export default Contact;
