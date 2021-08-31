import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { css } from 'styled-components';
import typo from '../../styles/typography';

const TextWrapper = styled.div`
  padding: 0 10px;

  @media ${({ theme: { media } }) => media.tablet} {
    padding: 0 20px;
  }
`;

const Code = styled.p`
  margin-bottom: 28px;
  letter-spacing: 0.03em;
  font-family: ${typo.code};
  line-height: 30px;
  ::before,
  ::after,
  span::before,
  span::after {
    letter-spacing: 0;
  }
  color: ${({ theme }) => theme.colors.sourceCode};
`;

const Hello = styled(Code)`
  ${({ theme: { colors } }) => css`
    color: ${colors.touch};

    ::before {
      content: '# ';
      color: ${colors.codeComment};
    }
  `}
`;

const Comment = styled(Code)`
  color: ${({ theme }) => theme.colors.codeComment};
  ::before {
    content: '// ';
  }
`;

const Conclusion = styled(Code)`
  ${({ theme: { colors } }) => css`
    ::before {
      color: ${colors.codeSigns};
      content: '() => "';
    }
    ::after {
      color: ${colors.codeSigns};
      content: '"';
    }
  `}
`;

const Tag = styled.span`
  ${({ theme: { colors }, closing }) => css`
    color: ${colors.touch};
    ::before {
      content: '<';
      color: ${colors.codeSigns};
    }
    ::after {
      content: ${closing ? '"/>"' : '">"'};
      color: ${colors.codeSigns};
    }
  `}
`;
const CodeLikeText = () => {
  const {
    data: { firstSentence, secondSentence, thirdSentence, fourthSentence },
  } = useStaticQuery(graphql`
    {
      data: datoCmsHomePageContent {
        firstSentence
        secondSentence
        thirdSentence
        fourthSentence
      }
    }
  `);

  return (
    <TextWrapper>
      <Hello>Cześć!</Hello>
      <Code>
        <Tag>p</Tag>
        {firstSentence}
        <Tag closing>br</Tag>
        <br />
        {secondSentence}
        <Tag closing>p</Tag>
      </Code>
      <Comment>{thirdSentence}</Comment>
      <Conclusion>{fourthSentence}</Conclusion>
    </TextWrapper>
  );
};

export default CodeLikeText;
