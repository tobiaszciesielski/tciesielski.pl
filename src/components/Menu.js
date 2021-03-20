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
    expanded ? 'translateY(0%)' : 'translateY(-100%)'};

  transition: transform 0.3s ease-in-out;

  li {
    font-size: 20px;
    list-style: none;
    margin-bottom: 100px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    letter-spacing: 2px;
  }
`;

const Menu = ({ expanded }) => (
  <StyledMenu expanded={expanded}>
    <li>
      <Link to="/">O MNIE</Link>
    </li>
    <li>
      <Link to="/">BLOG</Link>
    </li>
    <li>
      <Link to="/">PORTFOLIO</Link>
    </li>
    <li>
      <Link to="/">KONTAKT</Link>
    </li>
  </StyledMenu>
);

Menu.propTypes = {
  expanded: PropTypes.bool.isRequired,
};

export default Menu;
