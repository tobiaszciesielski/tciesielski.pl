import React from 'react';
import Layout from '../components/templates/Layout';
import Header from '../components/molecules/Header';
import About from '../components/organisms/About';
import Blog from '../components/organisms/Blog';
import Portfolio from '../components/organisms/Portfolio';
import Contact from '../components/organisms/Contact';
import SEO from '../components/templates/SEO';

const IndexPage = () => (
  <>
    <SEO />
    <Layout>
      <Header />
      <About />
      <Blog />
      <Portfolio />
      <Contact />
    </Layout>
  </>
);

export default IndexPage;
