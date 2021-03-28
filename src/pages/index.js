import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';
import Blog from '../components/Blog';

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Blog />
  </Layout>
);

export default IndexPage;
