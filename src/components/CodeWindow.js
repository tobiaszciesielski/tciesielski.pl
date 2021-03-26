import React from 'react';
import styled from 'styled-components';
import WindowControls from './WindowControls';
import CodeLikeText from './CodeLikeText';

const StyledWindow = styled.div`
  position: relative;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.dark};
  z-index: 30;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
`;

const CodeWindow = () => (
  <StyledWindow>
    <WindowControls />
    <CodeLikeText />
  </StyledWindow>
);

export default CodeWindow;
