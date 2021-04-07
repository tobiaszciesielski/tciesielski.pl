import React from 'react';

import { SwiperSlide } from 'swiper/react';

const slideStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const withSlider = (WprappedComponent) => (props) => (
  <SwiperSlide style={slideStyles}>
    <WprappedComponent {...props} />
  </SwiperSlide>
);

export default withSlider;
