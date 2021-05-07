import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HamburgerMenu from '../atoms/Hamburger';
import Menu from '../atoms/Menu';
import Logo from '../../assets/icons/logo.svg';
import SmoothScrollAnchor from '../atoms/SmoothScrollAnchor';

const StyledLogo = styled(Logo)`
  width: 30px;
  cursor: pointer;

  @media ${({ theme: { media } }) => media.tablet} {
    width: 35px;
  }

  @media ${({ theme: { media } }) => media.laptop} {
    width: 50px;
  }
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
  align-items: center;
  z-index: 9000;
  background-color: ${({ theme }) => theme.colors.darker};

  transform: ${({ visible }) =>
    visible ? 'translateY(0%)' : 'translateY(-100%)'};

  transition: transform 0.3s ease-in-out;

  @media ${({ theme: { media } }) => media.tablet} {
    padding: 15px 20px;
  }

  @media ${({ theme: { media } }) => media.laptop} {
    transform: translateY(0%);
    padding: 30px;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    align-items: flex-start;
  }

  @media ${({ theme: { media } }) => media.desktop} {
    padding: 30px 40px;
  }
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
      <SmoothScrollAnchor targetId="header">
        <StyledLogo />
      </SmoothScrollAnchor>
      <Menu expanded={expanded} />
      <HamburgerMenu setExpanded={setExpanded} expanded={expanded} />
    </Nav>
  );
};

export default Navbar;
