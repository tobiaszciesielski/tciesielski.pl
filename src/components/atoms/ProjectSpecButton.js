import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaCog } from '@react-icons/all-files/fa/FaCog';
import propTypes from 'prop-types';
import icons from '../../utils/iconsProvider';

const Wrapper = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  border-radius: 50%;
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
  z-index: 100;

  ${({ expanded }) =>
    expanded &&
    css`
      transform: rotate(30deg);
    `}

  :hover {
    ${({ expanded }) =>
      expanded
        ? css`
            transform: scale(1.05) rotate(30deg);
          `
        : css`
            transform: scale(1.05);
          `}
  }

  transition: transform 200ms ease;
`;

const Child = styled(Node)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 99;
  width: 100%;
  height: 100%;

  ${({ expanded, translation: { x, y }, distance }) =>
    expanded
      ? css`
          transform: translate(${x * distance}px, ${y * distance}px);
          opacity: 1;
        `
      : css`
          opacity: 0;
        `};

  transition: transform 200ms ease, opacity 300ms ease;

  & > svg {
    width: 45px;
    height: 45px;
  }
`;

const ProjectSpecButton = ({ className, technologies }) => {
  const itemsCount = technologies.length;
  const [expanded, setExpanded] = useState(false);

  return (
    <Wrapper className={className}>
      <Root expanded={expanded} onClick={() => setExpanded(!expanded)}>
        <FaCog />
      </Root>
      {technologies.map(({ technology }, i) => {
        const rotation =
          (2 * Math.PI * i - (itemsCount + 1) * Math.PI) / itemsCount;
        const x = Math.sin(rotation);
        const y = Math.cos(rotation);
        const Icon = icons.get(technology);
        return (
          <Child
            key={`${technology}`}
            translation={{ x, y }}
            distance={70}
            expanded={expanded}
          >
            <Icon />
          </Child>
        );
      })}
    </Wrapper>
  );
};

ProjectSpecButton.propTypes = {
  className: propTypes.string,
  technologies: propTypes.arrayOf(
    propTypes.shape({ technology: propTypes.string })
  ).isRequired,
};

ProjectSpecButton.defaultProps = {
  className: '',
};

export default ProjectSpecButton;
