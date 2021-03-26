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
    top: 0;
    right: 0;
    content: '';
    width: 0;
    height: 0;
    border-top: 40px solid transparent;
    border-right: 60px solid ${({ theme }) => theme.colors.darker};
    border-bottom: 40px solid transparent;
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
