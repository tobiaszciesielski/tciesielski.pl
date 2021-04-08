import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import SectionHeader from './SectionHeader';
import NewsletterForm from './NewsletterForm';
import EmailForm from './EmailForm';

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

const Contact = () => (
  <StyledSection>
    <StyledHeader text="KONTAKT" />
    <StyledNewsletterForm />
    <EmailForm />
  </StyledSection>
);

export default Contact;
