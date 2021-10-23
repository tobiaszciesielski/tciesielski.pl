import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/templates/Layout';
import SEO from '../../components/templates/SEO';
import Section from '../../components/organisms/Section';
import Input from '../../components/atoms/Input.styled';

const Beta = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 30px;
  bottom: 20px;
  right: -110px;
  transform: rotate(-45deg);
  z-index: 10000;
  background-color: #00ffa3;
  color: #000;
  font-family: 'Raleway Bold';
  font-size: 16px;
  letter-spacing: 2px;
`;

const StyledSection = styled(Section)`
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
  margin-bottom: 10px;
  font-size: 32px;
  @media ${({ theme: { media } }) => media.laptop} {
    font-size: 42px;
    margin-bottom: 20px;
  }
`;

const StyledInput = styled(Input)`
  max-width: 400px;
`;

const Blog = () => {
  // console.log(data);

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <SEO />
      <Beta>BETA</Beta>
      <Layout>
        <StyledSection>
          <StyledHeading>WPISY</StyledHeading>
          <StyledInput onChange={handleChange} placeholder="Wyszukaj wpis" />
        </StyledSection>
      </Layout>
    </>
  );
};

// export const query = graphql`
//   {
//     allDatoCmsPost {
//       nodes {
//         summary
//         slug
//         title
//         heroImage {
//           gatsbyImageData
//         }
//       }
//     }
//   }
// `;

export default Blog;
