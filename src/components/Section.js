import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledSection = styled.section`
  background: linear-gradient(
    180deg,
    ${({ theme: { colors }, odd }) => css`
      ${odd ? colors.dark : colors.darker} 0%,
      ${odd ? colors.darker : colors.dark} 100%
    `}
  );
  padding: 18px;
`;

const Section = ({ children, odd }) => (
  <StyledSection odd={odd}>{children}</StyledSection>
);

Section.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  odd: propTypes.bool,
};

Section.defaultProps = {
  odd: false,
};

export default Section;
