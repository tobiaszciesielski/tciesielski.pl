import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
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

const LowerTitle = styled.div`
  padding-left: 40px;
`;

const Title = () => (
  <StyledTitle>
    Tobiasz <br />
    <LowerTitle>Ciesielski</LowerTitle>
  </StyledTitle>
);
export default Title;
