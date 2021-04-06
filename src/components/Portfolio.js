import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Section from './Section';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
import CardsSlider from './CardsSlider';

const StyledSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledHeader = styled(SectionHeader)`
  margin-top: 100px;
  margin-bottom: 80px;
`;

// const ProjectCardsSlider = styled.div`
//   margin-bottom: 100px;
// `;

const Portfolio = () => {
  const { postImage } = useStaticQuery(graphql`
    {
      postImage: file(relativePath: { eq: "project-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            tracedSVGOptions: { color: "#fff", background: "#00ffa3" }
          )
        }
      }
    }
  `);

  const staticQueryTemplate = [
    {
      title: 'Project1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis in reiciendis sit facere enim modi, libero placeat consectetur eaque?',
      image: postImage,
      techStack: ['bootstrap', 'nodejs', 'sequelize', 'react', 'mssql'],
    },
    {
      title: 'Project2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis in reiciendis sit facere enim modi, libero placeat consectetur eaque?',
      image: postImage,
      techStack: ['gatsby', 'graphql', 'react'],
    },
    {
      title: 'Project3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis in reiciendis sit facere enim modi, libero placeat consectetur eaque?',
      image: postImage,
      techStack: ['next', 'nodejs', 'react'],
    },
  ];

  return (
    <StyledSection odd>
      <StyledHeader text="PORTFOLIO" />
      <CardsSlider>
        {staticQueryTemplate.map((data) => (
          <ProjectCard key={data.title} data={data} />
        ))}
      </CardsSlider>
    </StyledSection>
  );
};

export default Portfolio;
