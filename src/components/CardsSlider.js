import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Swiper, { Pagination, Navigation } from 'swiper';

import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

const SwiperWrapper = styled.div`
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

const CardsSlider = ({ children, pagination, navigation }) => {
  const swiperRef = useRef(null);

  const params = {
    pagination: pagination && {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: navigation && {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, params);
    return () => swiper.destroy();
  }, []);

  return (
    <SwiperWrapper ref={swiperRef} className="swiper-container">
      <div className="swiper-wrapper">{children}</div>
      <div className="swiper-pagination" />
      {navigation && (
        <>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </>
      )}
    </SwiperWrapper>
  );
};

CardsSlider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf(propTypes.node),
  ]).isRequired,
  pagination: propTypes.bool,
  navigation: propTypes.bool,
};

CardsSlider.defaultProps = {
  pagination: false,
  navigation: false,
};

export default CardsSlider;
