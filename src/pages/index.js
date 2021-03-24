import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Stripes from '../components/Stripes';
import About from '../components/About';

const IndexPage = () => (
  <Layout>
    <Stripes />
    <Header />
    <About />
  </Layout>
);

export default IndexPage;
