import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';
import Blog from '../components/Blog';
import Portfolio from '../components/Portfolio';

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Blog />
    <Portfolio />
  </Layout>
);

export default IndexPage;
