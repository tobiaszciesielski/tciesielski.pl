import React from 'react';
import { FaPencilRuler } from '@react-icons/all-files/fa/FaPencilRuler';
import { FaServer } from '@react-icons/all-files/fa/FaServer';
import { FaCode } from '@react-icons/all-files/fa/FaCode';
import styled from 'styled-components';
import TechCard from './TechCard';

const Cards = styled.div`
  grid-column: 1/13;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
  width: 100%;
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

  & div:last-child {
    margin-bottom: 0;
  }

  @media ${({ theme: { media } }) => media.tablet} {
    & div:nth-child(1) {
      grid-column: 1/7;
      margin-bottom: 50px;
    }

    & div:nth-child(2) {
      grid-column: 7/13;
      margin-bottom: 50px;
    }

    & div:nth-child(3) {
      grid-column: 1/13;
      margin-bottom: 0px;
    }
  }

  @media ${({ theme: { media } }) => media.laptop} {
    & div:nth-child(2) {
      margin-top: 40px;
    }
    & div:nth-child(n) {
      grid-column: span 4;
      margin-bottom: 0px;
    }
    & div:nth-child(n) {
      grid-column: span 4;
      margin-bottom: 0px;
    }
  }

  @media ${({ theme: { media } }) => media.desktop} {
    grid-column: 5/13;
    & div:nth-child(2) {
      margin-top: 0px;
    }
  }
`;

const StyledTechCard = styled(TechCard)`
  margin-bottom: 50px;
  grid-column: 1/13;
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
