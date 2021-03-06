import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  z-index: 10;
  position: relative;

  ::before {
    position: absolute;
    top: -50%;
    left: 0;
    content: '';
    width: 0;
    height: 0;
    border-top: 1.25em solid transparent;
    border-left: 1.85em solid ${({ theme }) => theme.colors.dark};
    border-bottom: 1.25em solid transparent;
    z-index: -1;
  }
`;

const LowerTitle = styled.div`
  padding-left: 40px;
`;

const Title = () => {
  const {
    data: { upperTitle, lowerTitle },
  } = useStaticQuery(graphql`
    {
      data: datoCmsHomePageContent {
        lowerTitle
        upperTitle
      }
    }
  `);
  
  return (
    <StyledTitle>
      {upperTitle}
      <br />
      <LowerTitle>{lowerTitle}</LowerTitle>
    </StyledTitle>
  );
};
export default Title;
