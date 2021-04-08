import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HamburgerMenu from './Hamburger';
import Menu from './Menu';
import Logo from '../assets/icons/logo.svg';

const StyledLogo = styled(Logo)`
  width: 31px;
  height: 31px;
`;

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
  z-index: 9000;
  background-color: ${({ theme }) => theme.colors.darker};

  transform: ${({ visible }) =>
    visible ? 'translateY(0%)' : 'translateY(-100%)'};

  transition: transform 0.3s ease-in-out;
`;

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currScrollPosition = window.scrollY;

    const scrollingDown = currScrollPosition > prevScrollPos;
    const lowerThan = currScrollPosition > 40;

    if (scrollingDown && lowerThan && !expanded) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currScrollPosition);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, visible, prevScrollPos]);

  return (
    <Nav visible={visible}>
      <Menu expanded={expanded} />
      <StyledLogo />
      <HamburgerMenu setExpanded={setExpanded} expanded={expanded} />
    </Nav>
  );
};

export default Navbar;
