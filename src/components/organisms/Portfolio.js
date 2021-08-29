/* eslint import/no-unresolved: */ // swiper

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import styled from 'styled-components';
import Section from './Section';
import ProjectCard from '../molecules/ProjectCard';
import SectionHeader from '../atoms/SectionHeader';

const StyledSection = styled(Section)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  .swiper {
    width: 100vw;
    padding-top: 50px;
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

const StyledHeader = styled(SectionHeader)`
  /* margin-top: 100px; */
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

  const slides = [];

  for (let i = 0; i < projects.length; i += 1) {
    slides.push(
      <SwiperSlide key={`Slide-${i}`}>
        <ProjectCard project={projects[i]} />
      </SwiperSlide>
    );
  }

  return (
    <StyledSection odd id="portfolio">
      <StyledHeader text="PORTFOLIO" />

      <div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          centeredSlides
          breakpoints={{
            700: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
            1500: { slidesPerView: 4, spaceBetween: 100 },
          }}
          navigation
        >
          {slides}
        </Swiper>
      </div>
    </StyledSection>
  );
};

export default Portfolio;
