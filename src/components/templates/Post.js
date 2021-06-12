import React from 'react';
import propTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Footer from '../molecules/Footer';
import Layout from './Layout';
import SEO from './SEO';
import Section from '../organisms/Section';

const StyledSection = styled(Section)`
  margin-top: 150px;
  display: flex;
  justify-content: center;
`;

const StyledArticle = styled.article`
  max-width: 800px;

  & p > img {
    width: 100%;
    max-height: 400px;
    object-fit: contain;
  }

  .gatsby-highlight pre[class*='language-'].line-numbers {
    font-size: 18px;
    line-height: 30px;
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }

  .gatsby-highlight {
    background-color: #222;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 0 1em;
    overflow: auto;
    margin-bottom: 20px;
  }

  .line-numbers-rows {
    border-right: none;
    & > span::before {
      color: #555;
    }
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
