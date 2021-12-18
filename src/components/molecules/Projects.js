/* eslint import/no-unresolved: */ // swiper

import React from 'react';
import propTypes, { arrayOf } from 'prop-types';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import ProjectCard from './ProjectCard';

const StyledProjects = styled.div`
  .swiper {
    width: 100vw;
    padding: 50px 0;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.touch};
    height: 0;
  }

  .swiper-button-prev {
    @media ${({ theme: { media } }) => media.laptop} {
      left: 20px;
    }
    @media ${({ theme: { media } }) => media.desktop} {
      left: 40px;
    }
  }
  .swiper-button-next {
    @media ${({ theme: { media } }) => media.laptop} {
      right: 20px;
    }
    @media ${({ theme: { media } }) => media.desktop} {
      right: 40px;
    }
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 2.5em;
    font-weight: 800;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
  }
`;

const Projects = ({ projects }) => {
  const slides = [];

  for (let i = 0; i < projects.length; i += 1) {
    slides.push(
      <SwiperSlide key={projects[i].id}>
        <ProjectCard project={projects[i]} />
      </SwiperSlide>
    );
  }

  return (
    <StyledProjects>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        centeredSlides
        breakpoints={{
          700: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
          1500: { slidesPerView: 4, spaceBetween: 100, initialSlide: 1 },
        }}
        navigation
      >
        {slides}
      </Swiper>
    </StyledProjects>
  );
};

Projects.propTypes = {
  projects: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      name: propTypes.string,
      image: propTypes.shape({
        gatsbyImageData: propTypes.shape({}),
      }),
      description: propTypes.string,
      githubRepo: propTypes.string,
      link: propTypes.string,
      technologies: arrayOf(
        propTypes.shape({
          technology: propTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default Projects;
