import React from 'react';
import styled from 'styled-components';
import BlogPostCard from './BlogPostCard';
import Section from './Section';
import SectionHeader from './SectionHeader';

const StyledHeader = styled(SectionHeader)`
  margin: 20px 0 80px 100px;
  ::after {
    border-right: 60px solid ${({ theme }) => theme.colors.dark};
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
`;

const Blog = () => (
  <Section>
    <StyledHeader text="BLOG" />

    <Cards>
      <BlogPostCard />
    </Cards>
  </Section>
);

export default Blog;
