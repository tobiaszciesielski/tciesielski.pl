import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  transform: ${({ expanded }) =>
    expanded ? 'translateY(-100%)' : 'translateY(0)'};

  transition: transform 0.3s ease-in-out;

  li {
    font-size: 20px;
    list-style: none;
    padding: 50px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`;

const Menu = ({ expanded }) => (
  <StyledMenu expanded={expanded}>
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

Menu.propTypes = {
  expanded: PropTypes.bool.isRequired,
};

export default Menu;
