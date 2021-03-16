import React from 'react';
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
`;

const Navbar = () => {
  const clickHandler = () => console.log('Clicked');

  return (
    <Nav>
      <Menu />
      <LogoSVG />
      <HamburgerMenu onClick={clickHandler} />
    </Nav>
  );
};

export default Navbar;
