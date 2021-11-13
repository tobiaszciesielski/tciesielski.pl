import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import { graphql } from 'gatsby';
import Layout from '../../components/templates/Layout';
import SEO from '../../components/templates/SEO';
import Section from '../../components/organisms/Section';
import Input from '../../components/atoms/Input.styled';
import BlogPostCard from '../../components/molecules/BlogPostCard';

const StyledSection = styled(Section)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 65px;
  padding: 0 10px;
  @media ${({ theme: { media } }) => media.laptop} {
    padding: 0 20px;
    margin-top: 0px;
    padding-top: 113px;
  }
`;

const StyledHeading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 32px;
  @media ${({ theme: { media } }) => media.laptop} {
    font-size: 42px;
    margin-bottom: 40px;
  }
`;

const StyledInput = styled(Input)`
  max-width: 600px;
  margin-bottom: 100px;
`;

const StyledPostsList = styled.div`
  padding: 0 50px;
  display: flex;
  flex-direction: row;
  gap: 100px;
  flex-wrap: wrap;
  max-width: 1600px;
  justify-content: center;
`;

let postsToSearchIn = [];

const Blog = ({ data }) => {
  const [posts, setPosts] = useState([]);

  const handleChange = (event) => {
    const rawSearchPhrase = event.target.value.toLowerCase();

    const searchResult = postsToSearchIn.filter(
      ({ title, summary, article }) =>
        title.toLowerCase().includes(rawSearchPhrase) ||
        summary.toLowerCase().includes(rawSearchPhrase) ||
        article.includes(rawSearchPhrase)
    );

    setPosts(searchResult);
  };

  const makePostsCleanString = (postsToModify) =>
    postsToModify.map(({ article, ...post }) => {
      const rawArticle = article.replace(/[^A-Za-z0-9_. ]/g, '');

      return {
        article: rawArticle.toLowerCase(),
        ...post,
      };
    });

  useEffect(() => {
    postsToSearchIn = makePostsCleanString(data.allDatoCmsPost.allPosts);
    setPosts(data.allDatoCmsPost.allPosts);
  }, []);

  return (
    <>
      <SEO />
      <Layout>
        <StyledSection>
          <StyledHeading>WPISY</StyledHeading>
          <StyledInput onChange={handleChange} placeholder="Wyszukaj wpis" />
          <StyledPostsList>
            {posts.map((post) => (
              <BlogPostCard key={post.id} data={post} />
            ))}
          </StyledPostsList>
        </StyledSection>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allDatoCmsPost {
      allPosts: nodes {
        summary
        title
        id
        slug
        publishedDate
        article
        tags {
          id
          tag
        }
        heroImage {
          gatsbyImageData
        }
      }
    }
  }
`;

Blog.propTypes = {
  data: propTypes.shape({
    allDatoCmsPost: propTypes.shape({
      allPosts: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string,
          title: propTypes.string,
          summary: propTypes.string,
          heroImage: propTypes.shape({ gatsbyImageData: propTypes.shape({}) }),
          slug: propTypes.string,
          publishedDate: propTypes.string,
          tags: propTypes.arrayOf(
            propTypes.shape({
              tag: propTypes.string,
              id: propTypes.string,
            })
          ),
        })
      ),
    }),
  }),
};

Blog.defaultProps = {
  data: {},
};

export default Blog;
