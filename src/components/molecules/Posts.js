/* eslint import/no-unresolved: */ // swiper

import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import BlogPostCard from './BlogPostCard';

const StyledPosts = styled.div`
  margin-bottom: 30px;

  @media ${({ theme: { media } }) => media.laptop} {
    margin-bottom: 60px;
  }

  .swiper {
    display: block;
    width: 100vw;
    padding: 50px 0;

    @media ${({ theme: { media } }) => media.laptop} {
      display: none;
    }
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: ${({ theme }) => theme.colors.touch};
  }
`;

const StaticPosts = styled.div`
  display: none;

  @media ${({ theme: { media } }) => media.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
    column-gap: 10vw;
    place-items: center;
  }

  @media ${({ theme: { media } }) => media.desktop} {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 80px;
  }
`;

const Posts = ({ posts }) => {
  const slides = [];

  for (let i = 0; i < posts.length; i += 1) {
    slides.push(
      <SwiperSlide key={`Slide-${i}`}>
        <BlogPostCard data={posts[i].node} />
      </SwiperSlide>
    );
  }

  return (
    <StyledPosts>
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
        breakpoints={{ 700: { slidesPerView: 2 } }}
      >
        {slides}
      </Swiper>
    </StyledPosts>
  );
};

Posts.propTypes = {
  posts: propTypes.arrayOf(
    propTypes.shape({
      node: propTypes.shape({
        title: propTypes.string,
        summary: propTypes.string,
        slug: propTypes.string,
        heroImage: propTypes.shape({
          gatsbyImageData: propTypes.shape({}),
        }),
        publishedDate: propTypes.string,
      }),
    })
  ).isRequired,
};

export default Posts;
