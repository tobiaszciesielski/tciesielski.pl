import React from 'react';
import styled from 'styled-components';

const TechCard = styled.div``;

const techStack = [
  'html',
  'css',
  'javascript',
  'sass',
  'react',
  'gatsby',
  'next',
  'styled-components',
  'bootstrap',
  'redux',
];

const Technologies = () => (
  <>
    <TechCard>
      <h3>FRONT-END</h3>
      {techStack.map((item) => <p key={item}>{item}</p>)}
    </TechCard>

    <TechCard>
      <h3>BACK-END</h3>
      {techStack.map((item) => <p key={item}>{item}</p>)}
    </TechCard>

    <TechCard>
      <h3>INNE</h3>
      {techStack.map((item) => <p key={item}>{item}</p>)}
    </TechCard>

  </>
);

export default Technologies;
