import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import propTypes from 'prop-types';
import styled from 'styled-components';
import IconWWW from '../../assets/icons/www.svg';
import ProjectSpecButton from '../atoms/ProjectSpecButton';
import Card from './Card';

const StyledCard = styled(Card)`
  height: 480px;

  @media ${({ theme }) => theme.media.mobile} {
    height: 500px;
  }
`;

const ImageWrapper = styled.div`
  height: 50%;
  margin-bottom: 24px;
  position: relative;

  &,
  .projet-image {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    z-index: 1;
  }

  .projet-image {
    height: 100%;
  }
`;

const Description = styled.div`
  padding: 15px;
`;

const Title = styled.h4`
  margin-bottom: 10px;
  text-align: center;
`;

const ProjectAbstract = styled.p`
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.05em;
  padding: 0 8px;
  text-align: center;
`;

const CardButton = styled(ProjectSpecButton)`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 100;
  -webkit-transform: translate3d(0,0,0);
`;

const Links = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  a > svg {
    color: ${({ theme }) => theme.colors.touch};
    width: 34px;
    height: 34px;
    margin: 0 10px;
  }
`;

const ProjectCard = ({ project }) => {
  const { name, image, description, technologies, githubRepo, link } = project;

  return (
    <StyledCard>
      <ImageWrapper>
        <CardButton technologies={technologies} />
        <GatsbyImage
          imgClassName="projet-image"
          image={getImage(image)}
          style={{ height: '100%' }}
          alt="Gatsby Project"
        />
      </ImageWrapper>
      <Description>
        <Title>{name}</Title>
        <ProjectAbstract>{description}</ProjectAbstract>
      </Description>
      <Links>
        <a target="_blank" rel="noreferrer noopener" href={githubRepo}>
          <FaGithub />
        </a>
        <a target="_blank" rel="noreferrer noopener" href={link}>
          <IconWWW />
        </a>
      </Links>
    </StyledCard>
  );
};

ProjectCard.propTypes = {
  project: propTypes.shape({
    name: propTypes.string,
    description: propTypes.string,
    image: propTypes.shape({ childImageSharp: propTypes.shape({}) }),
    technologies: propTypes.arrayOf(
      propTypes.shape({ technology: propTypes.string })
    ),
    link: propTypes.string,
    githubRepo: propTypes.string,
  }).isRequired,
};

export default ProjectCard;
