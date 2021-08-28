import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Section from './Section';
import ProjectCard from '../molecules/ProjectCard';
import SectionHeader from '../atoms/SectionHeader';
import CardsSlider from './CardsSlider';
// import withSlider from '../../hoc/withSlider';

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

const Portfolio = () => {
  const {
    allDatoCmsProject: { projects },
  } = useStaticQuery(graphql`
    {
      allDatoCmsProject(sort: { fields: position }) {
        projects: nodes {
          id
          name
          image {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
          description
          githubRepo
          link
          technologies {
            technology
          }
        }
      }
    }
  `);

  const ProjectCardWithSlider = withSlider(ProjectCard);

  return (
    <StyledSection odd id="portfolio">
      <StyledHeader text="PORTFOLIO" />
      <CardsSlider navigation>
        {projects.map((project) => (
          <ProjectCardWithSlider key={project.id} project={project} />
        ))}
      </CardsSlider>
    </StyledSection>
  );
};

export default Portfolio;
