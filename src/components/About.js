import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import SectionHeader from './SectionHeader';
import CodeWindow from './CodeWindow';
import Technologies from './Technologies';

const AboutHeading = styled(SectionHeader)`
  margin: 125px 0px 70px 15px;

  @media ${({ theme }) => theme.mediaHeight.small} {
    margin: 80px 0px 70px 30px;
  }
`;

const TechHeading = styled(SectionHeader)`
  text-align: right;
  margin: 100px 0 70px 15px;
`;

const About = () => (
  <Section odd>
    <AboutHeading text="O MNIE" light/>
    <CodeWindow />
    <TechHeading text="TECHNOLOGIE" light/>
    <Technologies />
  </Section>
);

export default About;
