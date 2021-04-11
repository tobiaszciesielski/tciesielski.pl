import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';
import Blog from '../components/Blog';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
    <Beta>BETA</Beta>
    <Layout>
      <Header />
      <About />
      <Blog />
      <Portfolio />
      <Contact />
      <Footer />
    </Layout>
  </>
);

export default IndexPage;
