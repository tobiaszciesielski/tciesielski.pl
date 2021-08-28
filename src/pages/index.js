import React from 'react';
import styled from 'styled-components';
import Layout from '../components/templates/Layout';
import Header from '../components/molecules/Header';
import About from '../components/organisms/About';
import Blog from '../components/organisms/Blog';
// import Portfolio from '../components/organisms/Portfolio';
import Contact from '../components/organisms/Contact';
import SEO from '../components/templates/SEO';

const Beta = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 30px;
  bottom: 20px;
  right: -110px;
  transform: rotate(-45deg);
  z-index: 10000;
  background-color: #00ffa3;
  color: #000;
  font-family: 'Raleway Bold';
  font-size: 16px;
  letter-spacing: 2px;
`;

const IndexPage = () => (
  <>
    <SEO />
    <Beta>BETA</Beta>
    <Layout>
      <Header />
      <About />
      <Blog />
      {/* <Portfolio /> */}
      <Contact />
    </Layout>
  </>
);

export default IndexPage;
