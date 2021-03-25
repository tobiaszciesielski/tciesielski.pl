import React from 'react';
import styled from 'styled-components';
import typo from '../styles/typography';
import SectionHeader from './SectionHeader';

const Section = styled.section`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.dark} 0%,
    ${({ theme }) => theme.colors.darker} 100%
  );
  padding: 18px;
`;

const CodeBox = styled.div`
  position: relative;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.dark};
  z-index: 30;
`;

const Controls = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 15px;
  margin-bottom: 20px;
`;

const Circle = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: 5px;
`;

const Code = styled.p`
  margin-bottom: 16px;
  letter-spacing: 0.02em;
  font-family: ${typo.code};
  ::before,
  ::after,
  span::before,
  span::after {
    letter-spacing: 0;
  }
`;

const Hello = styled(Code)`
  color: ${({ theme }) => theme.colors.touch};

  ::before {
    content: '# ';
    color: #a9a9a9;
  }
`;

const Introduction = styled(Code)`
  color: #ececec;
`;

const Expansion = styled(Code)`
  color: #a9a9a9;
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
    <SectionHeader text="O MNIE" />
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
