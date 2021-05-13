import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Button from '../atoms/Button';
import SectionHeader from '../atoms/SectionHeader';
import BlogPostCard from '../molecules/BlogPostCard';
import CardsSlider from './CardsSlider';
import Section from './Section';
import withSlider from '../../hoc/withSlider';

const StyledSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const StyledCardsSlider = styled(CardsSlider)`
  margin-bottom: 50px;
  padding-bottom: 50px;
`;

const Blog = () => {
  const { postImage } = useStaticQuery(graphql`
    {
      postImage: file(relativePath: { eq: "flutter.png" }) {
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

  const CardsData = [
    {
      title: 'SQLite i flutter - z czym to się je.',
      description:
        'W tym poradniku przedstawiam, jak napisać prostą aplikację do dodawania i usuwania studentów za pomocą interfejsu użytkownika w bazie danych.',
      image: postImage,
      link: 'https://blog.akai.org.pl/posts/sqlite-flutter/',
    },
    {
      title: 'SQLite i flutter - z czym to się je..',
      description:
        'W tym poradniku przedstawiam, jak napisać prostą aplikację do dodawania i usuwania studentów za pomocą interfejsu użytkownika w bazie danych.',
      image: postImage,
      link: 'https://blog.akai.org.pl/posts/sqlite-flutter/',
    },
    {
      title: 'SQLite i flutter - z czym to się je...',
      description:
        'W tym poradniku przedstawiam, jak napisać prostą aplikację do dodawania i usuwania studentów za pomocą interfejsu użytkownika w bazie danych.',
      image: postImage,
      link: 'https://blog.akai.org.pl/posts/sqlite-flutter/',
    },
  ];

  const BlogPostCardWithSlider = withSlider(BlogPostCard);

  return (
    <StyledSection id="blog">
      <StyledHeader text="BLOG" />
      <StyledCardsSlider pagination>
        {CardsData.map((data) => (
          <BlogPostCardWithSlider key={data.title} data={data} />
        ))}
      </StyledCardsSlider>
      <Button dark text="ZOBACZ WSZYSTKIE WPISY" />
    </StyledSection>
  );
};

export default Blog;
