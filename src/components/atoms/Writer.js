import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { graphql, useStaticQuery } from 'gatsby';

const StyledWriter = styled.div`
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

const Writer = () => {
  const {
    data: { typingWords },
  } = useStaticQuery(graphql`
    {
      data: datoCmsHomePageContent {
        typingWords {
          word
        }
      }
    }
  `);

  const words = typingWords.map(({ word }) => word);

  return (
    <StyledWriter>
      <Typewriter
        options={{
          strings: words,
          autoStart: true,
          loop: true,
        }}
      />
    </StyledWriter>
  );
};

export default Writer;
