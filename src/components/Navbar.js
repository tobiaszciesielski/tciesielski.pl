import React from 'react';
import styled from 'styled-components';
import LogoSVG from './LogoSVG';
import HamburgerMenu from './Hamburger';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #212121;
`;

const Navbar = () => (
  <Nav>
    <LogoSVG />
    <HamburgerMenu />
  </Nav>
);

export default Navbar;
