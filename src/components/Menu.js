import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledMenu = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.darker};

  transform: translateX(-100%);

  li {
    font-size: 1.2em;
    list-style: none;
    padding: 50px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`;

const Menu = () => (
  <StyledMenu>
    <Link to="/">
      <li>O MNIE</li>
    </Link>
    <Link to="/">
      <li>BLOG</li>
    </Link>
    <Link to="/">
      <li>PORTFOLIO</li>
    </Link>
    <Link to="/">
      <li>KONTAKT</li>
    </Link>
  </StyledMenu>
);

export default Menu;
