import React from 'react';
import styled from 'styled-components';

const Stripe = styled.span`
  position: absolute;
  width: 1000px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.touch};
  top: 35%;
  z-index: 1;
  transform-origin: 0% 0%;
  transform: rotate(60deg);
  left: ${({ shift }) => shift};

  @media ${({ theme: { media } }) => media.mobile} {
    top: 40%;
    width: 2000px;
  }

`;

const Stripes = () => (
  <>
    <Stripe shift="0" />
    <Stripe shift="-50px" />
    <Stripe shift="-100px" />
  </>
);
export default Stripes;
