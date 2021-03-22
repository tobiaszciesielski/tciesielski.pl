import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { graphql, useStaticQuery } from 'gatsby';

const StyledSubTitle = styled.div`
  text-align: left;
  font-size: 18px;
  margin-top: 15px;

  .Typewriter__cursor {
    color: ${({ theme }) => theme.colors.touch};
    font-size: 22px;
  }

  margin-left: 40px;
`;

const SubTitle = () => {
  const data = useStaticQuery(graphql`
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
          strings: data.site.siteMetadata.subTitle,
          autoStart: true,
          loop: true,
        }}
      />
    </StyledSubTitle>
  );
};

export default SubTitle;
