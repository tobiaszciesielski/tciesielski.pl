import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';
import Blog from '../components/Blog';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Blog />
    <Portfolio />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
