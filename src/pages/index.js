import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Title = styled.h1`
  color: #fff;
  text-align: center;
  &::first-letter {
    color: #00ffa3;
  }
`;

const IndexPage = () => (
  <Layout>
    <Title>Tobiasz Ciesielski</Title>
  </Layout>
);

export default IndexPage;
