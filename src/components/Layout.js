import React from 'react';
import { propTypes } from 'prop-types';
import { createGlobalStyle } from 'styled-components';

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
    {children}
  </>
);

Layout.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.shape(propTypes.node)]).isRequired,
};

export default Layout;
