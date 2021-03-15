import React from 'react';
import styled from 'styled-components';

const Hamburger = styled.span`
  width: 32px;
  height: 3px;
  background-color: white;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 32px;
    height: 3px;
    background-color: white;
    transform: translateY(-10px);
  }

  &::after {
    content: '';
    position: absolute;
    width: 32px;
    height: 3px;
    background-color: white;
    transform: translateY(10px);
  }
`;

const HamburgerBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 25px;
`;

const HamburgerMenu = () => {
  const clickHandler = () => console.log('Clicked');

  return (
    <HamburgerBox onClick={clickHandler}>
      <Hamburger />
    </HamburgerBox>
  );
};

export default HamburgerMenu;
