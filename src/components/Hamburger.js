import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Hamburger = styled.span`
  width: 32px;
  height: 3px;
  background-color: white;
  z-index: 10;


  &::before {
    content: '';
    position: absolute;
    width: 32px;
    height: 3px;
    background-color: white;
    transition: transform 0.3s ease;
    transform: ${({ expanded }) =>
      expanded ? 'translateY(0)' : 'translateY(-10px)'};
  }

  &::after {
    content: '';
    position: absolute;
    width: 32px;
    height: 3px;
    background-color: white;
    transition: transform 0.3s ease;
    transform: ${({ expanded }) =>
      expanded ? 'translateY(0)' : 'translateY(10px)'};
  }
`;

const HamburgerBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 25px;
  z-index: 20;
`;

const HamburgerMenu = ({ setExpanded, expanded }) => (
  <HamburgerBox onClick={() => setExpanded(!expanded)}>
    <Hamburger expanded={expanded} />
  </HamburgerBox>
);

HamburgerMenu.propTypes = {
  setExpanded: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};

export default HamburgerMenu;
