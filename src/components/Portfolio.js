import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

const StyledSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledHeader = styled(SectionHeader)`
  margin-top: 100px;
  margin-bottom: 80px;
`;

const ProjectCardsSlider = styled.div`
  margin-bottom: 100px;
`;

const Portfolio = () => (
  <StyledSection odd>
    <StyledHeader text="PORTFOLIO" />
    <ProjectCardsSlider>
      <ProjectCard />
    </ProjectCardsSlider>
  </StyledSection>
);

export default Portfolio;
