import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Button from './Button';
import CardsSlider from './CardsSlider';
import Section from './Section';
import SectionHeader from './SectionHeader';
import BlogPostCard from './BlogPostCard';

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

const Blog = () => {
  const { postImage } = useStaticQuery(graphql`
    {
      postImage: file(relativePath: { eq: "blog-post-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            tracedSVGOptions: { color: "#fff", background: "#00ffa3" }
            layout: CONSTRAINED
          )
        }
      }
    }
  `);

  const staticQueryTemplate = [
    {
      title: 'Post1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis in reiciendis sit facere enim modi, libero placeat consectetur eaque?',
      image: postImage,
    },
    {
      title: 'Post2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis in reiciendis sit facere enim modi, libero placeat consectetur eaque?',
      image: postImage,
    },
    {
      title: 'Post3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis in reiciendis sit facere enim modi, libero placeat consectetur eaque?',
      image: postImage,
    },
  ];

  return (
    <StyledSection>
      <StyledHeader text="BLOG" />

      <CardsSlider pagination>
        {staticQueryTemplate.map((data) => (
          <BlogPostCard key={data.title} data={data} />
        ))}
      </CardsSlider>
      <Button dark text="ZOBACZ WSZYSTKIE WPISY" />
    </StyledSection>
  );
};

export default Blog;
