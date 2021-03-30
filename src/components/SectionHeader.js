import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const SectionHeading = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  z-index: 20;
  position: relative;
  width: fit-content;

  ::after {
    position: absolute;
    top: -5px;
    right: 0;
    content: '';
    width: 0;
    height: 0;
    border-top: 1.15em solid transparent;
    border-right: 1.65em solid ${({ theme }) => theme.colors.darker};
    border-bottom: 1.1em solid transparent;
    z-index: -1;
  }
  ::before {
    content: '#';
    color: ${({ theme }) => theme.colors.touch};
  }
`;

const SectionHeader = ({ className, text }) => (
  <SectionHeading className={className}>{text}</SectionHeading>
);

SectionHeader.propTypes = {
  text: propTypes.string.isRequired,
  className: propTypes.string,
};

SectionHeader.defaultProps = {
  className: '',
};

export default SectionHeader;
