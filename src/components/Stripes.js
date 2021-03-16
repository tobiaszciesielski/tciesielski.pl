import React from 'react';
import styled from 'styled-components';

const Stripe = styled.span`
  position: absolute;
  width: 800px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.touch};
  top: 250px;
  z-index: 1000;
  transform-origin: 0% 0%;
  transform: rotate(60deg);
  left: ${({ shift }) => shift};
`;

const Stripes = () => (
  <>
    <Stripe shift="0" />
    <Stripe shift="-50px" />
    <Stripe shift="-100px" />
  </>
);
export default Stripes;
