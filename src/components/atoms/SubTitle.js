import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { graphql, useStaticQuery } from 'gatsby';

const StyledSubTitle = styled.div`
  text-align: left;
  font-size: 18px;
  bottom: -30%;
  left: 20%;
  position: absolute;

  .Typewriter__cursor {
    
    color: ${({ theme }) => theme.colors.touch};
    font-size: 22px;
  }
`;

const SubTitle = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          subTitle
        }
      }
    }
  `);

  return (
    <StyledSubTitle>
      <Typewriter
        options={{
          strings: site.siteMetadata.subTitle,
          autoStart: true,
          loop: true,
        }}
      />
    </StyledSubTitle>
  );
};

export default SubTitle;
