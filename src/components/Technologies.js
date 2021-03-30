import React from 'react';
import { FaPencilRuler } from '@react-icons/all-files/fa/FaPencilRuler';
import { FaServer } from '@react-icons/all-files/fa/FaServer';
import { FaCode } from '@react-icons/all-files/fa/FaCode';
import styled from 'styled-components';
import TechCard from './TechCard';

const StyledTechCard = styled(TechCard)`
  margin-bottom: 50px;
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  ::after {
    position: absolute;
    top: 57%;
    right: 0;
    content: '';
    width: 0;
    height: 0;
    border-bottom: 100px solid ${({ theme }) => theme.colors.darker};
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    z-index: -1;
    transform: translateX(30%);
  }
  div:last-child {
    margin-bottom: 0;
  }
`;

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
  <Cards>
    <StyledTechCard
      title="FRONT-END"
      icon={<FaPencilRuler />}
      techStack={techStack}
    />
    <StyledTechCard
      title="BACK-END"
      icon={<FaServer />}
      techStack={techStack}
    />
    <StyledTechCard title="INNE" icon={<FaCode />} techStack={techStack} />
  </Cards>
);

export default Technologies;
