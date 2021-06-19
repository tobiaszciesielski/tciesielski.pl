import React from 'react';
import propTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import GlobalStyle from '../../styles/global';
import Navbar from '../molecules/Navbar';
import Footer from '../molecules/Footer';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default Layout;
