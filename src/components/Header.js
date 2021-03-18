import React from 'react';
import styled from 'styled-components';
import Typing from './Typing';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.8em;
  position: relative;
  z-index: 10;

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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
`;

const LowerTitle = styled.div`
  padding-left: 40px;
`;

const StyledHeader = styled.header`
  height: 100vh;
  padding-top: 200px;
  background: linear-gradient(180deg, #202020 0%, #303030 100%);
`;

const Header = () => (
  <StyledHeader>
    <TitleWrapper>
      <Title>
        Tobiasz <br />
        <LowerTitle>Ciesielski</LowerTitle>
      </Title>
    </TitleWrapper>
    <Typing />
  </StyledHeader>
);
export default Header;
