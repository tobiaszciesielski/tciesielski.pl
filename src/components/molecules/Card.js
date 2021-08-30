import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledCard = styled.div`
  width: 280px;
  height: 500px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.dark};
  filter: drop-shadow(0px 4px 18px rgba(0, 0, 0, 0.25));
  position: relative;

  @media ${({ theme }) => theme.media.mobile} {
    width: 300px;
    height: 520px;
  }
`;

const Card = ({ children, className }) => (
  <StyledCard className={className}>{children}</StyledCard>
);

Card.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  className: propTypes.string,
};

Card.defaultProps = {
  className: '',
};

export default Card;
