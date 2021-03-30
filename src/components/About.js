import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import SectionHeader from './SectionHeader';
import CodeWindow from './CodeWindow';
import Technologies from './Technologies';

const StyledSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AboutHeading = styled(SectionHeader)`
  align-self: start;
  margin: 125px 0px 70px 15px;
`;

const About = () => (
  <StyledSection odd>
    <AboutHeading text="O MNIE" />
    <CodeWindow />
    <SectionHeader text="TECHNOLOGIE" light />
    <Technologies />
  </StyledSection>
);

export default About;
