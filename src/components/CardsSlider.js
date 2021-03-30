import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import BlogPostCard from './BlogPostCard';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination]);

const SwiperWrapper = styled(Swiper)`
  margin-left: -18px;
  margin-right: -18px;
  margin-bottom: 50px;
  padding-bottom: 50px;

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    background-color: ${({ theme }) => theme.colors.touch};
  }
`;

const centeredSlide = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const CardsSlider = () => {
  const slides = [];

  for (let i = 0; i < 3; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} style={centeredSlide}>
        <BlogPostCard />
      </SwiperSlide>
    );
  }

  return (
    <SwiperWrapper pagination={{ clickable: true }} spaceBetween={0}>
      {slides}
    </SwiperWrapper>
  );
};

export default CardsSlider;
