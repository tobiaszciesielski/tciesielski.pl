import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import SectionHeader from './SectionHeader';
import CodeWindow from './CodeWindow';
import Technologies from './Technologies';

const StyledSection = styled(Section)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
`;

const AboutHeading = styled(SectionHeader)`
  grid-column: 1/13;
  justify-self: start;
  margin: 125px 0px 70px 15px;

  @media ${({ theme: { media } }) => media.tablet} {
    grid-column: 8/12;
    justify-self: center;
  }
  @media ${({ theme: { media } }) => media.laptop} {
    grid-column: 6/12;
  }
  @media ${({ theme: { media } }) => media.desktop} {
    grid-column: 9/12;
    align-self: center;
    margin: 0;
  }
`;

const TechHeading = styled(SectionHeader)`
  grid-column: 1/13;
  justify-self: center;
`;

const About = () => (
  <StyledSection odd>
    <AboutHeading text="O MNIE" />
    <CodeWindow />
    <TechHeading text="TECHNOLOGIE" light />
    <Technologies />
  </StyledSection>
);

export default About;
