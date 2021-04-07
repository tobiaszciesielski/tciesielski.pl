import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination, Navigation]);

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

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.touch};
    height: 0;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 40px;
    font-weight: 800;
  }
`;

const CardsSlider = ({ children, pagination, ...rest }) => {
  const params = {
    spaceBetween: 0,
    pagination: pagination && { clickable: true },
    ...rest,
  };

  console.log(children);

  return children && <SwiperWrapper {...params}>{children}</SwiperWrapper>;
};

CardsSlider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf(propTypes.node),
  ]).isRequired,
  pagination: propTypes.bool,
  navigation: propTypes.bool,
  freeMode: propTypes.bool,
  loop: propTypes.bool,
};

CardsSlider.defaultProps = {
  pagination: false,
  navigation: false,
  freeMode: false,
  loop: false,
};

export default CardsSlider;
