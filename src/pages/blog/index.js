import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../../components/templates/Layout';
import SEO from '../../components/templates/SEO';
// import Section from '../components/organisms/Section';

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

// const StyledSection = styled(Section)`
//   display: flex;
//   justify-content: center;
//   margin-top: 62px;
//   @media ${({ theme: { media } }) => media.laptop} {
//     margin-top: 0px;
//     padding-top: 113px;
//   }
// `;

const Blog = ({ data }) => {
  console.log(data);
  return (
    <>
      <SEO />
      <Beta>BETA</Beta>
      <Layout>
        <h1>BLOG</h1>
      </Layout>
    </>
  );
};
export const query = graphql`
  {
    allDatoCmsPost {
      nodes {
        summary
        slug
        title
        heroImage {
          gatsbyImageData
        }
      }
    }
  }
`;

export default Blog;
