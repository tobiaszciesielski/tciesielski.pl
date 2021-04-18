import React from 'react';
import styled from 'styled-components';

const Controls = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 15px;
  margin-bottom: 20px;
`;

const Circle = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: 5px;
`;

const WindowControls = () => (
  <Controls>
    <Circle color="#FF5F56" />
    <Circle color="#FFBD2E" />
    <Circle color="#27C93F" />
  </Controls>
);

export default WindowControls;
