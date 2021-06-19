import React from 'react';
import propTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from './SEO';
import Footer from '../molecules/Footer';
import Layout from './Layout';
import Section from '../organisms/Section';
import customPrismTheme from '../../styles/custom-prism-theme';

const StyledSection = styled(Section)`
  display: flex;
  justify-content: center;
`;

const StyledArticle = styled.article`
  ${customPrismTheme};
  max-width: 800px;

  & p > img {
    width: 100%;
    max-height: 400px;
    object-fit: contain;
  }
`;

const IndexPage = ({ data }) => {
  const {
    title,
    summary,
    heroImage: { gatsbyImageData },
    articleNode: { childMarkdownRemark },
    tags,
  } = data.datoCmsPost;

  return (
    <>
      <SEO />
      <Layout>
        <StyledSection>
          <StyledArticle>
            <h1>{title}</h1>
            <p>{summary}</p>
            <GatsbyImage
              backgroundColor="rgba(0, 0, 0, 0)"
              image={getImage(gatsbyImageData)}
            />
            <div
              dangerouslySetInnerHTML={{ __html: childMarkdownRemark.html }}
            />
            {tags.map(({ tag }) => (
              <h3 key={tag}>{tag}</h3>
            ))}
          </StyledArticle>
        </StyledSection>
        <Footer />
      </Layout>
    </>
  );
};

export const query = graphql`
  query MyQuery($slug: String) {
    datoCmsPost(slug: { eq: $slug }) {
      title
      summary
      slug
      heroImage {
        gatsbyImageData
      }
      articleNode {
        childMarkdownRemark {
          html
        }
      }
      tags {
        tag
      }
    }
  }
`;

IndexPage.propTypes = {
  data: propTypes.shape({
    datoCmsPost: propTypes.shape({
      title: propTypes.string,
      summary: propTypes.string,
      heroImage: propTypes.shape({ gatsbyImageData: propTypes.shape({}) }),
      tags: propTypes.arrayOf(propTypes.string),
      articleNode: propTypes.shape({
        childMarkdownRemark: propTypes.shape({
          html: propTypes.string,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;

/*

*/
