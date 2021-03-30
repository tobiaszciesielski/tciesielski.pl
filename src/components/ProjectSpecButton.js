import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const CardButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.touch};
`;

const ProjectSpecButton = ({ className }) => (
  <CardButton className={className} />
);

ProjectSpecButton.propTypes = {
  className: propTypes.string,
};

ProjectSpecButton.defaultProps = {
  className: '',
};

export default ProjectSpecButton;
