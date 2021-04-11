import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Section from './Section';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
import CardsSlider from './CardsSlider';
import withSlider from './hoc/withSlider';

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
  const { personalWebsite, cmms, hackaton, drums } = useStaticQuery(graphql`
    {
      personalWebsite: file(relativePath: { eq: "personalWebsite.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            tracedSVGOptions: { color: "#fff", background: "#00ffa3" }
          )
        }
      }
      cmms: file(relativePath: { eq: "cmms.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            tracedSVGOptions: { color: "#fff", background: "#00ffa3" }
          )
        }
      }
      hackaton: file(relativePath: { eq: "hackaton.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            tracedSVGOptions: { color: "#fff", background: "#00ffa3" }
          )
        }
      }
      drums: file(relativePath: { eq: "drums.png" }) {
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
      title: 'tciesielski.pl',
      description: 'Wizytówka, blog, portfolio. Moje miejsce w sieci.',
      image: personalWebsite,
      techStack: ['react', 'gatsby', 'styled-components'],
      link: 'https://tciesielski.pl',
      github: 'https://github.com/tobiaszciesielski/tciesielski.pl',
    },
    {
      title: 'CMMS System',
      description:
        'System do zarządzania częściami w magazynie z trzema poziomami uprawnień. Aplikację można personalizować pod kątem przechowywanych częśći.',
      image: cmms,
      techStack: [
        'bootstrap',
        'nodejs',
        'sequelize',
        'react',
        'mssql',
        'express',
      ],
      link: 'https://youtu.be/810LfOG52M0',
      github: 'https://github.com/tobiaszciesielski/CMMS-System',
    },
    {
      title: 'Water Save Quarter',
      description:
        'Popraw swoje nawyki, dbaj o środowisko, oszczędzaj pieniądze. Aplikacja webowa, która doprowadziła nas do finału hackatonu HackYeah.',
      image: hackaton,
      techStack: ['next', 'nodejs', 'react', 'django'],
      link: 'https://blog.akai.org.pl/posts/hackyeah2020/',
      github: 'https://github.com/akai-org/hackyeah_2020_water_frontend',
    },
    {
      title: 'Drums',
      description:
        'Strona internetowa umożliwiająca granie na wirtualnej perkusji.',
      image: drums,
      techStack: ['html', 'css', 'javascript'],
      link: 'https://clever-mestorf-592398.netlify.app/',
      github: 'https://github.com/tobiaszciesielski/drum-website',
    },
  ];

  const ProjectCardWithSlider = withSlider(ProjectCard);

  return (
    <StyledSection odd>
      <StyledHeader text="PORTFOLIO" />
      <CardsSlider navigation>
        {staticQueryTemplate.map((data) => (
          <ProjectCardWithSlider key={data.title} data={data} />
        ))}
      </CardsSlider>
    </StyledSection>
  );
};

export default Portfolio;
