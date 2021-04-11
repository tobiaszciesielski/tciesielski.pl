import React from 'react';
import { SwiperSlide } from 'swiper/react';

const slideStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const withSlider = (WprappedComponent) => {
  const ComponentWithSlider = (props) => (
    <SwiperSlide style={slideStyles}>
      <WprappedComponent {...props} />
    </SwiperSlide>
  );
  return ComponentWithSlider;
};

export default withSlider;
