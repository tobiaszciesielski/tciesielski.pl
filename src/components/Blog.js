import React from 'react';
import styled from 'styled-components';
import BlogPostCard from './BlogPostCard';
import Button from './Button';
import Section from './Section';
import SectionHeader from './SectionHeader';

const StyledSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  ::after {
    position: absolute;
    top: 22%;
    left: 0;
    content: '';
    width: 0;
    height: 0;
    border-bottom: 50px solid ${({ theme }) => theme.colors.touch};
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    z-index: -1;
    
    @media ${({theme})=>theme.media.mobile} {
      left: 5%;
    }
  }
`;

const StyledHeader = styled(SectionHeader)`
  margin-top: 40px;
  margin-bottom: 80px;
  ::after {
    border-right: 60px solid ${({ theme }) => theme.colors.dark};
  }
`;

const AllPostsButton = styled(Button)`
  margin: auto 0;
`;

const CardsWrapper = styled.div`

`;

const Blog = () => (
  <StyledSection>
    <StyledHeader text="BLOG" />
    <CardsWrapper>
      <BlogPostCard />
    </CardsWrapper>
    <AllPostsButton dark text="ZOBACZ WSZYSTKIE WPISY" />
  </StyledSection>
);

export default Blog;
