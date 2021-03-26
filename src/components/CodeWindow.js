import React from 'react';
import styled from 'styled-components';

import CodeLikeText from './CodeLikeText';
import WindowControls from './WindowControls';

const StyledWindow = styled.div`
  position: relative;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.dark};
  z-index: 30;
`;

const CodeWindow = () => (
  <StyledWindow>
    <WindowControls />
    <CodeLikeText />
  </StyledWindow>
);

export default CodeWindow;
