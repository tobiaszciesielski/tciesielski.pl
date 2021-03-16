import React, { useState } from 'react';
import styled from 'styled-components';
import LogoSVG from './LogoSVG';
import HamburgerMenu from './Hamburger';
import Menu from './Menu';

const Nav = styled.nav`
  position: fixed;
  position: -webkit-fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.darker};
  z-index: 9000;
`;

const Navbar = () => {
  const [expanded, setExpanded] = useState('false')
  console.log(expanded)
  return (
    <Nav>
      <Menu expanded={expanded}/>
      <LogoSVG />
      <HamburgerMenu setExpanded={setExpanded} expanded={expanded}/>
    </Nav>
  );
};

export default Navbar;
