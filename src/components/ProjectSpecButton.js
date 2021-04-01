import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaCog } from '@react-icons/all-files/fa/FaCog';
import { FaCss3 } from '@react-icons/all-files/fa/FaCss3';
import { FaHtml5 } from '@react-icons/all-files/fa/FaHtml5';
import { FaBootstrap } from '@react-icons/all-files/fa/FaBootstrap';
import propTypes from 'prop-types';

const Wrapper = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  border-radius: 50%;
  z-index: 1;
`;

const Node = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const Root = styled(Node)`
  background-color: ${({ theme }) => theme.colors.touch};
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  font-size: 34px;
  :hover {
    transform: rotate(30deg);
  }
  transition: transform 200ms ease;
`;

const Child = styled(Node)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  z-index: -1;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  font-size: 30px;

  ${({ expanded, translation: { x, y }, distance }) =>
    expanded
      ? css`
          transform: translate(5px, 5px)
            translate(${x * distance}px, ${y * distance}px);
          opacity: 1;
        `
      : css`
          transform: translate(5px, 5px);
          opacity: 0;
        `};

  transition: transform 200ms ease, opacity 300ms ease;
`;

const childNodes = [
  {
    icon: <FaCss3 />,
  },
  {
    icon: <FaHtml5 />,
  },
  {
    icon: <FaBootstrap />,
  },
];

const ProjectSpecButton = ({ className }) => {
  const itemsCount = childNodes.length;
  const [expanded, setExpanded] = useState(false);

  return (
    <Wrapper className={className}>
      <Root onClick={() => setExpanded(!expanded)}>
        <FaCog />
      </Root>
      {childNodes.map(({ icon }, i) => {
        const rotation =
          (2 * Math.PI * i - (itemsCount + 1) * Math.PI) / itemsCount;
        const x = Math.sin(rotation);
        const y = Math.cos(rotation);
        return (
          <Child
            key={`child-node-${i}`}
            translation={{ x, y }}
            distance={70}
            expanded={expanded}
          >
            {icon}
          </Child>
        );
      })}
    </Wrapper>
  );
};

ProjectSpecButton.propTypes = {
  className: propTypes.string,
};

ProjectSpecButton.defaultProps = {
  className: '',
};

export default ProjectSpecButton;
