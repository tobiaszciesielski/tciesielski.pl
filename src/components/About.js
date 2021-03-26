import React from 'react';
import SectionHeader from './SectionHeader';
import Section from './Section';
import CodeWindow from './CodeWindow';

const About = () => (
  <Section odd>
    <SectionHeader text="O MNIE" />
    <CodeWindow />
  </Section>
);

export default About;
