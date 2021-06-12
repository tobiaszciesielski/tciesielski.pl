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
`;

const IndexPage = ({ data }) => {
  const {
    title,
    summary,
    slug,
    heroImage: { gatsbyImageData },
    articleNode: { childMarkdownRemark },
    tags,
  } = data.datoCmsPost;

  return (
    <>
      <SEO />
      <Layout>
        <StyledSection>
          <h1>{title}</h1>
          <p>{summary}</p>
          <GatsbyImage
            backgroundColor="rgba(0, 0, 0, 0)"
            image={getImage(gatsbyImageData)}
          />
          <div dangerouslySetInnerHTML={{ __html: childMarkdownRemark.html }} />
          {tags.map(({ tag }) => (
            <h3 key={tag}>{tag}</h3>
          ))}
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
// IndexPage.propTypes = {
//   data: propTypes.shape({
//     markdownRemark: propTypes.shape({
//       frontmatter: propTypes.shape({
//         title: propTypes.string,
//         tags: propTypes.arrayOf(propTypes.string),
//         slug: propTypes.string,
//         date: propTypes.string,
//       }).isRequired,
//       html: propTypes.string,
//     }).isRequired,
//   }).isRequired,
// };

export default IndexPage;
