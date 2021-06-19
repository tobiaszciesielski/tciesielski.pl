import React from 'react';
import propTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from './SEO';
import Layout from './Layout';
import Section from '../organisms/Section';
import customPrismTheme from '../../styles/custom-prism-theme';
import typo from '../../styles/typography';

const StyledSection = styled(Section)`
  display: flex;
  justify-content: center;
  margin-top: 62px;
  @media ${({ theme: { media } }) => media.laptop} {
    margin-top: 0px;
    padding-top: 113px;
  }
`;

const StyledArticle = styled.article`
  .gatsby-image-wrapper {
    margin-bottom: 20px;
    background-color: #000;
    margin-left: -50px;
    margin-right: -50px;
  }

  ${customPrismTheme};
  width: 100%;
  max-width: 800px;
  font-size: 18px;

  & p > img {
    width: 100%;
    max-height: 400px;
    object-fit: contain;
  }

  ul,
  ol {
    margin-left: 20px;
    font-weight: 400;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin-bottom: 0;
  }

  hr {
    margin: 60px 80px;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 30px 0;
  }

  ul,
  ol,
  p {
    margin-bottom: 15px;
  }

  li,
  p {
    font-family: ${typo.robotoLight};
  }
`;

const Title = styled.h1`
  text-align: center;
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
            <Title>{title}</Title>
            <GatsbyImage image={getImage(gatsbyImageData)} />
            <p>{summary}</p>
            <hr />
            <div
              dangerouslySetInnerHTML={{ __html: childMarkdownRemark.html }}
            />
            {tags.map(({ tag }) => (
              <h3 key={tag}>{tag}</h3>
            ))}
          </StyledArticle>
        </StyledSection>
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
