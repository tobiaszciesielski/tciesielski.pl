import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Title from '../atoms/Title';
import Writer from '../atoms/Writer';
import Stripes from '../atoms/Stripes';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  z-index: 0;
  height: 100vh;
  position: relative;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.darker} 0%,
    ${({ theme }) => theme.colors.dark} 100%
  );

  .gatsby-image-wrapper {
    display: none !important;

    @media ${({ theme: { media } }) => media.laptop} {
      display: block !important;
      position: absolute !important;
      z-index: 2;
      width: 65%;
      bottom: 0%;
      right: -10%;
    }

    @media ${({ theme: { media } }) => media.desktop} {
      width: 52%;
      right: 0%;
    }

    @media ${({ theme: { media } }) => media.bigDesktop} {
      right: 10%;
    }
  }
`;

const TextBox = styled.div`
  position: relative;
  grid-column: 1/13;
  z-index: 2;
  align-self: center;
  justify-self: center;

  @media ${({ theme: { media } }) => media.laptop} {
    grid-column: 2/9;
  }

  @media ${({ theme: { media } }) => media.desktop} {
    grid-column: 1/8;
  }
`;

const Gradient = styled.div`
  @media ${({ theme: { media } }) => media.laptop} {
    z-index: 0;
    position: absolute;
    width: 1300px;
    height: 1600px;
    right: -650px;
    top: -250px;
    opacity: 0.5;
    overflow: hidden;

    background: ${({ theme }) => theme.colors.dark};
    transform: rotate(15deg);
  }

  @media ${({ theme: { media } }) => media.desktop} {
    right: -600px;
    opacity: 1;

    background: ${({ theme }) => theme.colors.dark};
    transform: rotate(20deg);
  }
`;

const Header = () => {
  const { headerImg } = useStaticQuery(graphql`
    {
      headerImg: file(relativePath: { eq: "header.png" }) {
        childImageSharp {
          gatsbyImageData(formats: WEBP, placeholder: NONE)
        }
      }
    }
  `);

  return (
    <StyledHeader>
      <Stripes />
      <TextBox>
        <Title />
        <Writer />
      </TextBox>
      <GatsbyImage
        backgroundColor="rgba(0, 0, 0, 0)"
        className="image-header"
        alt="header-image"
        image={getImage(headerImg)}
      />
      <Gradient />
    </StyledHeader>
  );
};
export default Header;
