import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import CodeLikeText from './CodeLikeText';

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

const About = () => (
  <Section>
    <SectionHeader text="O MNIE" />
    <CodeBox>
      <Controls>
        <Circle color="#FF5F56" />
        <Circle color="#FFBD2E" />
        <Circle color="#27C93F" />
      </Controls>
      <CodeLikeText />
    </CodeBox>
  </Section>
);

export default About;
