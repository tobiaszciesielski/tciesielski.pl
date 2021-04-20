import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Swiper, { Pagination, Navigation } from 'swiper';

import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

const SwiperWrapper = styled.div`
  width: calc(100% + 36px);
  margin-left: -18px;
  margin-right: -18px;

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    background-color: ${({ theme }) => theme.colors.touch};

    @media ${({ theme: { media } }) => media.laptop} {
      display: none;
    }
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

const CardsSlider = ({ children, className, pagination, navigation }) => {
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

    centeredSlides: true,
    allowTouchMove: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 50,
        centeredSlides: true,
        allowTouchMove: true,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: false,
        allowTouchMove: !pagination,
      },
      1439: {
        slidesPerView: 3,
        spaceBetween: pagination ? -270 : -150,
        centeredSlides: false,
        allowTouchMove: !pagination,
      },
    },
  };

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, params);
    return () => swiper.destroy();
  }, []);

  return (
    <SwiperWrapper ref={swiperRef} className={`swiper-container ${className}`}>
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
  className: propTypes.string,
  pagination: propTypes.bool,
  navigation: propTypes.bool,
};

CardsSlider.defaultProps = {
  className: '',
  pagination: false,
  navigation: false,
};

export default CardsSlider;
