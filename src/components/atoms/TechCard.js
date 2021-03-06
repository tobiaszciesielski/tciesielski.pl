import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledCard = styled.div`
  position: relative;
  width: 220px;
  height: 350px;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));

  @media ${({ theme: { media } }) => media.mobile} {
    width: 250px;
  }

  @media ${({ theme: { media } }) => media.tablet} {
    width: 260px;
  }
`;

const Title = styled.h3`
  letter-spacing: 0.1em;
  margin-bottom: 10px;
  z-index: 1;
`;

const Stack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  & > p {
    font-size: 18px;
    letter-spacing: 0.1em;
  }
`;

const Decoration = styled.span`
  position: absolute;
  color: ${({ theme }) => theme.colors.touch};
  top: 0;
  left: 0;
  width: 75px;
  height: 75px;
  background-color: ${({ theme }) => theme.colors.dark};
  transform: translate(-32px, -8px);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const TechCard = ({ className, icon, title, techStack }) => (
  <StyledCard className={className}>
    <Title>{title}</Title>
    <Decoration>{icon}</Decoration>
    <Stack>
      {techStack.map((technology) => (
        <p key={technology}>{technology}</p>
      ))}
    </Stack>
  </StyledCard>
);

TechCard.propTypes = {
  icon: propTypes.element.isRequired,
  title: propTypes.string.isRequired,
  techStack: propTypes.arrayOf(propTypes.string).isRequired,
  className: propTypes.string,
};

TechCard.defaultProps = {
  className: '',
};

export default TechCard;
