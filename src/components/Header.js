import React from 'react';
import styled from 'styled-components';
import Typing from './Typing';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 48px;
  z-index: 10;
  position: relative;

  ::before {
    position: absolute;
    top: -50%;
    left: 0;
    content: '';
    width: 0;
    height: 0;
    border-top: 60px solid transparent;
    border-left: 90px solid ${({ theme }) => theme.colors.dark};
    border-bottom: 60px solid transparent;
    z-index: -1;
  }
`;

const TextBox = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`

const LowerTitle = styled.div`
  padding-left: 40px;
`;

const StyledHeader = styled.header`
  height: 100vh;
  position: relative;
  background: linear-gradient(180deg, #202020 0%, #303030 100%);
`;

const Header = () => (
  <StyledHeader>
    <TextBox>
      <Title>
        Tobiasz <br />
        <LowerTitle>Ciesielski</LowerTitle>
      </Title>
      <Typing />
    </TextBox>
  </StyledHeader>
);
export default Header;
