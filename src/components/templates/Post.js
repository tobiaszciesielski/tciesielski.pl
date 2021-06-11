import React from 'react';
import propTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Footer from '../molecules/Footer';
import Layout from './Layout';
import SEO from './SEO';
import Section from '../organisms/Section';

const StyledSection = styled(Section)`
  margin-top: 150px;
`;

const IndexPage = ({ data: { markdownRemark } }) => {
  const {
    html,
    frontmatter: { slug, title, tags },
  } = markdownRemark;

  console.log(html);
  return (
    <>
      <SEO />
      <Layout>
        <StyledSection>
          <h1>{title}</h1>
          <p>{slug}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledSection>
        <Footer />
      </Layout>
    </>
  );
};

export const query = graphql`
  query Post($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
        slug
        date
      }
      html
    }
  }
`;

IndexPage.propTypes = {
  data: propTypes.shape({
    markdownRemark: propTypes.shape({
      frontmatter: propTypes.shape({
        title: propTypes.string,
        tags: propTypes.string,
        slug: propTypes.string,
        date: propTypes.string,
      }).isRequired,
      html: propTypes.string,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;
