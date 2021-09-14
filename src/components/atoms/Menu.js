import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import SmoothScrollAnchor from './SmoothScrollAnchor';

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
    letter-spacing: 3px;
    color: ${({ theme }) => theme.colors.primary};
    list-style: none;
    margin-bottom: 100px;
  }

  a {
    text-decoration: none;
  }

  @media ${({ theme: { media } }) => media.tablet} {
    li {
      :last-child {
        margin-bottom: 0;
      }
    }
  }

  @media ${({ theme: { media } }) => media.laptop} {
    position: static;
    transform: translateY(0%);
    background-color: rgba(0, 0, 0, 0);
    width: auto;
    height: auto;
    flex-direction: row;
    transition: none;

    li {
      margin-bottom: 0px;
      margin-left: 40px;
      letter-spacing: 1px;
    }

    a {
      :hover {
        opacity: 0.9;
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
      }
    }
  }
  @media ${({ theme: { media } }) => media.desktop} {
    li {
      margin-left: 50px;
    }
  }
`;

const Menu = ({ setExpanded, expanded }) => {
  const collapseMenu = () => setExpanded(false);
  const { pathname } = useLocation();

  const menu = [
    { id: 'about', name: 'O MNIE' },
    { id: 'blog', name: 'BLOG' },
    { id: 'portfolio', name: 'PORTFOLIO' },
    { id: 'contact', name: 'KONTAKT' },
  ];

  const renderSmoothScrollAnchors = () =>
    menu.map(({ id, name }) => (
      <li key={id}>
        <SmoothScrollAnchor onClick={collapseMenu} targetId={id}>
          {name}
        </SmoothScrollAnchor>
      </li>
    ));

  const renderDefaultLinks = () =>
    menu.map(({ id, name }) => (
      <li key={id}>
        <Link to={`/${id}`}>{name}</Link>
      </li>
    ));

  return (
    <StyledMenu expanded={expanded}>
      {pathname === '/' ? renderSmoothScrollAnchors() : renderDefaultLinks()}
    </StyledMenu>
  );
};

Menu.propTypes = {
  setExpanded: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};

export default Menu;
