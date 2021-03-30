import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import ProjectSpecButton from './ProjectSpecButton';

const StyledCard = styled.div`
  width: 280px;
  height: 460px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.dark};
  filter: drop-shadow(0px 4px 18px rgba(0, 0, 0, 0.25));
  position: relative;

  @media ${({ theme }) => theme.media.mobile} {
    width: 300px;
    height: 480px;
  }
`;

const imageStyles = {
  height: '50%',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
  marginBottom: '10px',
};

const Description = styled.div`
  text-align: center;
  padding: 15px;
`;

const Title = styled.h4`
  margin-bottom: 20px;
`;

const ProjectAbstract = styled.p`
  font-size: 0.78em;
  line-height: 140%;
  letter-spacing: 0.05em;
`;

const CardButton = styled(ProjectSpecButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
    <StyledCard>
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
    </StyledCard>
  );
};

export default ProjectCard;
