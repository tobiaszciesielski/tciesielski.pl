import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import ProjectSpecButton from './ProjectSpecButton';
import Card from './Card';

const imageStyles = {
  height: '50%',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
  marginBottom: '15px',
};

const Description = styled.div`
  padding: 15px;
`;

const Title = styled.h4`
  margin-bottom: 10px;
  text-align: center;
`;

const ProjectAbstract = styled.p`
  font-size: 0.78em;
  line-height: 140%;
  letter-spacing: 0.05em;
  padding: 0 5px;
`;

const CardButton = styled(ProjectSpecButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

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
      <CardButton />
      <Description>
        <Title>Blog w Gatsby.js</Title>
        <ProjectAbstract>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odio
          cupiditate similique quam deserunt quod amet corporis recusandae.
        </ProjectAbstract>
      </Description>
    </Card>
  );
};

export default ProjectCard;
