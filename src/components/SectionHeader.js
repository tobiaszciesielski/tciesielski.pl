import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const SectionHeading = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  z-index: 20;
  position: relative;
  width: fit-content;
  margin-top: 100px;
  margin-bottom: 70px;

  ::after {
    position: absolute;
    top: -5px;
    right: 0;
    content: '';
    width: 0;
    height: 0;
    border-top: 1.15em solid transparent;
    border-right: 1.65em solid
      ${({ theme: { colors }, light }) => (light ? colors.dark : colors.darker)};
    border-bottom: 1.1em solid transparent;
    z-index: -1;
  }
  ::before {
    content: '#';
    color: ${({ theme }) => theme.colors.touch};
  }
`;

const SectionHeader = ({ className, text, light }) => (
  <SectionHeading className={className} light={light}>
    {text}
  </SectionHeading>
);

SectionHeader.propTypes = {
  className: propTypes.string,
  text: propTypes.string.isRequired,
  light: propTypes.bool,
};

SectionHeader.defaultProps = {
  light: false,
  className: '',
};

export default SectionHeader;
