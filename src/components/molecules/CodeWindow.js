import React from 'react';
import styled from 'styled-components';
import WindowControls from '../atoms/WindowControls';
import CodeLikeText from '../atoms/CodeLikeText';

const StyledWindow = styled.div`
  grid-column: 1/13;
  justify-self: center;
  position: relative;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.dark};
  z-index: 30;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
  max-width: 800px;
  margin: 0 10px;

  @media ${({ theme: { media } }) => media.desktop} {
    grid-column: 2/9;
    justify-self: center;
    grid-row: 1;
  }
`;

const CodeWindow = () => (
  <StyledWindow>
    <WindowControls />
    <CodeLikeText />
  </StyledWindow>
);

export default CodeWindow;
