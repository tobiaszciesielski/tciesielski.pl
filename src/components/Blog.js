import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import CardsSlider from './CardsSlider';
import Section from './Section';
import SectionHeader from './SectionHeader';

const StyledSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;

  z-index: 1;
  ::after {
    position: absolute;
    top: 26%;
    left: 0;
    content: '';
    width: 0;
    height: 0;
    border-bottom: 50px solid ${({ theme }) => theme.colors.touch};
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    z-index: -1;

    @media ${({ theme }) => theme.media.mobile} {
      left: 4%;
    }
  }
`;

const StyledHeader = styled(SectionHeader)`
  ::after {
    border-right: 60px solid ${({ theme }) => theme.colors.dark};
  }
`;

const Blog = () => (
  <StyledSection>
    <StyledHeader text="BLOG" />
    <CardsSlider />
    <Button dark text="ZOBACZ WSZYSTKIE WPISY" />
  </StyledSection>
);

export default Blog;
