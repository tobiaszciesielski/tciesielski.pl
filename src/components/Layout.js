import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Navbar from './Navbar';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;  
    padding: 0;
    min-height: 100%;
    background-color: #222;
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navbar />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
