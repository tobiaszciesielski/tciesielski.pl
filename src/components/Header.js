import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import SubTitle from './SubTitle';
import Stripes from './Stripes';

const StyledHeader = styled.header`
  height: 100vh;
  position: relative;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.darker} 0%,
    ${({ theme }) => theme.colors.dark} 100%
  );
`;

const TextBox = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  @media ${({ theme: { media } }) => media.mobile} {
    top: 30%;
  }
`;

const Header = () => (
  <StyledHeader>
    <Stripes />
    <TextBox>
      <Title />
      <SubTitle />
    </TextBox>
  </StyledHeader>
);
export default Header;
