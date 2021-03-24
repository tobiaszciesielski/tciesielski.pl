import React from 'react';
import styled from 'styled-components';
import typo from '../styles/typography';

const Section = styled.section`
  background: linear-gradient(180deg, #333 0%, #222 100%);
  padding: 18px;
  z-index: 20;
`;

const SectionHeading = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  z-index: 20;
  position: relative;
  text-align: left;
  width: fit-content;

  margin: 70px 0px 70px 40px;

  ::after {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    width: 0;
    height: 0;
    border-top: 40px solid transparent;
    border-right: 60px solid ${({ theme }) => theme.colors.darker};
    border-bottom: 40px solid transparent;
    z-index: -1;
  }

  ::before {
    content: '#';
    color: ${({ theme }) => theme.colors.touch};
  }
`;

const CodeBox = styled.div`
  position: relative;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.dark};
  z-index: 30;
`;

const Controls = styled.div`
  width: 100px;
  height: 15px;
  margin-bottom: 20px;
`;

const Circle = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  display: inline-block;
  margin-right: 5px;
`;

const Code = styled.p`
  margin-bottom: 16px;
  /* line-height: 24px; */
  letter-spacing: 0.02em;
  font-size: 18px;
  font-family: ${typo.code};
`;

const Hello = styled(Code)`
  color: ${({ theme }) => theme.colors.touch};

  ::before {
    content: '# ';
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Introduction = styled(Code)`
  color: #ececec;
`;

const Expansion = styled(Code)`
  color: ${({ theme }) => theme.colors.secondary};
  ::before {
    content: '// ';
  }
`;

const Conclusion = styled(Code)`
  color: #ececec;

  ::before {
    color: #56b6c2;
    content: '() => "';
  }
  ::after {
    color: #56b6c2;
    content: '"';
  }
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.colors.touch};
  ::before {
    content: '<';
    color: #56b6c2;
  }
  ::after {
    content: ${(props) => (props.closing ? '"/>"' : '">"')};
    color: #56b6c2;
  }
`;

const About = () => (
  <Section>
    <SectionHeading>O MNIE</SectionHeading>
    <CodeBox>
      <Controls>
        <Circle color="#FF5F56" />
        <Circle color="#FFBD2E" />
        <Circle color="#27C93F" />
      </Controls>
      <div>
        <Hello>Cześć!</Hello>
        <Introduction>
          <Tag>p</Tag>Jestem web-developerem. Aktualnie skupiam się na
          frontendzie.<Tag closing>br</Tag>
          <br />
          Nie są mi jednak obce technologie backendowe.<Tag closing>p</Tag>
        </Introduction>
        <Expansion>
          W swojej karierze zahaczyłem też o machine learning oraz
          mobile-development.
        </Expansion>

        <Conclusion>
          Swoją podróż dokumentuję na blogu, do którego serdecznie Cię
          zapraszam.
        </Conclusion>
      </div>
    </CodeBox>
  </Section>
);

export default About;

// # Cześć!
// &lt;p&gt;Jestem web-developerem.
// Aktualnie skupiam się na
// frontendzie.&lt;br&gt;
// <br>
// Nie są mi jednak obce
// technologie backendowe.&lt;p/&gt;
// <br>
// W swojej karierze
// zahaczyłem też o machine
// learning oraz
// mobile-development.
// <br>
// () =&gt; "Swoją podróż
// dokumentuję na blogu,
// do którego serdecznie Cię
// zapraszam."
