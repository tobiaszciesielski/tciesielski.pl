import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import CodeLikeText from './CodeLikeText';
import WindowControls from './WindowControls';
import Section from './Section';

const CodeWindow = styled.div`
  position: relative;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.dark};
  z-index: 30;
`;

const About = () => (
  <Section odd>
    <SectionHeader text="O MNIE" />
    <CodeWindow>
      <WindowControls />
      <CodeLikeText />
    </CodeWindow>
  </Section>
);

export default About;
