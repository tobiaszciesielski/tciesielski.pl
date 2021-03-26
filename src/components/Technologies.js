import React from 'react';
import styled from 'styled-components';
import TechCard from './TechCard';

const PositionedTechCard = styled(TechCard)`
  margin-bottom: 50px;
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  :nth-child(1) {
    padding: 100px;
  }
`;

const Technologies = () => (
  <Cards>
    <PositionedTechCard />
    <PositionedTechCard />
    <PositionedTechCard />
  </Cards>
);

export default Technologies;
