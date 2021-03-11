import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;  
    padding: 0;
    min-height: 100%;
    background-color: #222;
  }
`

const Layout = ({ children }) => <React.Fragment>
      <GlobalStyle/>
      {children}
  </React.Fragment>
}

export default Layout;
