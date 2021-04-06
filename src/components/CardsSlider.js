import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
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

const slideStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const CardsSlider = ({ children }) => {
  console.log(children);
  return children ? (
    <SwiperWrapper pagination={{ clickable: true }} spaceBetween={0}>
      {children.map((child, i) => (
        <SwiperSlide style={slideStyles} key={i}>
          {child}
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  ) : (
    'DUPA'
  );
};

CardsSlider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf(propTypes.node),
  ]).isRequired,
};

export default CardsSlider;
