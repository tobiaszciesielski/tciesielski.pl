import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import styled from 'styled-components';
import IconWWW from '../assets/icons/www.svg';
import ProjectSpecButton from './ProjectSpecButton';
import Card from './Card';

const imageStyles = {
  height: '50%',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
  marginBottom: '24px',
};

const Description = styled.div`
  padding: 15px;
`;

const Title = styled.h4`
  margin-bottom: 15px;
  text-align: center;
`;

const ProjectAbstract = styled.p`
  font-size: 0.78em;
  line-height: 140%;
  letter-spacing: 0.05em;
  padding: 0 8px;
`;

const CardButton = styled(ProjectSpecButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Links = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15px;
  a > svg {
    color: ${({ theme }) => theme.colors.touch};
    width: 34px;
    height: 34px;
    margin: 0 10px;
  }
`;

const childNodes = ['next', 'gatsby', 'flutter', 'react', 'express', 'mssql'];

const ProjectCard = () => {
  const { postImage } = useStaticQuery(graphql`
    {
      postImage: file(relativePath: { eq: "project-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            tracedSVGOptions: { color: "#fff", background: "#00ffa3" }
            layout: CONSTRAINED
          )
        }
      }
    }
  `);

  return (
    <Card>
      <GatsbyImage
        image={getImage(postImage)}
        style={imageStyles}
        alt="Gatsby Project"
      />
      <CardButton techStack={childNodes} />
      <Description>
        <Title>Blog w Gatsby.js</Title>
        <ProjectAbstract>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odio
          cupiditate similique quam deserunt quod amet corporis recusandae.
        </ProjectAbstract>
      </Description>
      <Links>
        <a target="_blank" rel="noreferrer" href="http://www.github.com">
          <FaGithub />
        </a>
        <a target="_blank" rel="noreferrer" href="http://www.github.com">
          <IconWWW />
        </a>
      </Links>
    </Card>
  );
};

export default ProjectCard;
