import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
`

const SpecButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.touch};
  position: relative;
  z-index: -1;
`;

const Node = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
`;

const ProjectSpecButton = ({ className }) => (
  <Wrapper>
    <SpecButton className={className}>
      <Node />
      <Node />
      <Node />
    </SpecButton>
  </Wrapper>
);

ProjectSpecButton.propTypes = {
  className: propTypes.string,
};

ProjectSpecButton.defaultProps = {
  className: '',
};

export default ProjectSpecButton;
