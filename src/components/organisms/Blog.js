import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import styled from 'styled-components';
import Button from '../atoms/Button';
import SectionHeader from '../atoms/SectionHeader';
import BlogPostCard from '../molecules/BlogPostCard';
import Section from './Section';

import 'swiper/css';
import 'swiper/css/navigation';

const StyledSection = styled(Section)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .swiper {
    display: block;
    width: 100vw;
    padding: 50px 0;

    @media ${({ theme: { media } }) => media.tablet} {
      display: none;
    }
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledHeader = styled(SectionHeader)`
  ::after {
    border-right: 60px solid ${({ theme }) => theme.colors.dark};
  }
`;

const StaticPosts = styled.div`
  display: none;
  @media ${({ theme: { media } }) => media.tablet} {
    display: block;
  }
`;

const Blog = () => {
  const {
    allDatoCmsPost: { edges: posts },
  } = useStaticQuery(graphql`
    {
      allDatoCmsPost(sort: { order: DESC, fields: publishedDate }, limit: 3) {
        edges {
          node {
            title
            summary
            slug
            heroImage {
              gatsbyImageData
            }
            publishedDate
          }
        }
      }
    }
  `);
  const slides = [];

  for (let i = 0; i < posts.length; i += 1) {
    slides.push(
      <SwiperSlide style={{ margin: '0 auto' }} key={`Slide-${i}`}>
        <BlogPostCard data={posts[i].node} />
      </SwiperSlide>
    );
  }

  return (
    <StyledSection id="blog">
      <StyledHeader text="BLOG" />

      <StaticPosts>
        {posts.map(({ node: post }) => (
          <BlogPostCard data={post} key={post.title} />
        ))}
      </StaticPosts>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        centeredSlides
        pagination={{ clickable: true }}
      >
        {slides}
      </Swiper>

      <Button dark text="ZOBACZ WSZYSTKIE WPISY" />
    </StyledSection>
  );
};

export default Blog;
