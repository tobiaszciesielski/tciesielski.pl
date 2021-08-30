import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Button from '../atoms/Button';
import SectionHeader from '../atoms/SectionHeader';
import Section from './Section';
import Posts from '../molecules/Posts';

const StyledSection = styled(Section)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeader = styled(SectionHeader)`
  ::after {
    border-right: 60px solid ${({ theme }) => theme.colors.dark};
  }
`;

const Blog = () => {
  const {
    allDatoCmsPost: { edges: posts },
  } = useStaticQuery(graphql`
    {
      allDatoCmsPost(sort: { order: DESC, fields: publishedDate }, limit: 4) {
        edges {
          node {
            title
            summary
            slug
            heroImage {
              gatsbyImageData
            }
            publishedDate(formatString: "DD-MM-YYYY")
            tags {
              tag
            }
          }
        }
      }
    }
  `);

  return (
    <StyledSection id="blog">
      <StyledHeader text="BLOG" />

      <Posts posts={posts} />

      <Link to="/blog">
        <Button dark text="ZOBACZ WSZYSTKIE WPISY" />
      </Link>
    </StyledSection>
  );
};

export default Blog;
