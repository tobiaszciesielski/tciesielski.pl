import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import styled from 'styled-components';
import Section from './Section';
import SectionHeader from '../atoms/SectionHeader';
import Projects from '../molecules/Projects';

const StyledSection = styled(Section)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const StyledHeader = styled(SectionHeader)`
  margin-bottom: 80px;
`;

const Portfolio = () => {
  const {
    allDatoCmsProject: { nodes: projects },
  } = useStaticQuery(graphql`
    {
      allDatoCmsProject(sort: { fields: position }) {
        nodes {
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

  return (
    <StyledSection odd id="portfolio">
      <StyledHeader text="PORTFOLIO" />
      <Projects projects={projects} />
    </StyledSection>
  );
};

export default Portfolio;
