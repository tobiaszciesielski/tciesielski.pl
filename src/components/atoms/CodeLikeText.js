import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { css } from 'styled-components';
import typo from '../../styles/typography';

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
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          about {
            introduction
            expansion
            conclusion
          }
        }
      }
    }
  `);

  const { introduction, expansion, conclusion } = site.siteMetadata.about;

  return (
    <div>
      <Hello>Cześć!</Hello>
      <Code>
        <Tag>p</Tag>
        {introduction[0]}
        <Tag closing>br</Tag>
        <br />
        {introduction[1]}
        <Tag closing>p</Tag>
      </Code>
      <Comment>{expansion}</Comment>
      <Conclusion>{conclusion}</Conclusion>
    </div>
  );
};

export default CodeLikeText;
