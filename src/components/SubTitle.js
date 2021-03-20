import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const StyledSubTitle = styled.div`
  text-align: left;
  font-size: 18px;
  margin-top: 15px;
  margin-left: 60px;

  .Typewriter__cursor {
    color: ${({ theme }) => theme.colors.touch};
    font-size: 22px;
  }
`;

const SubTitle = () => (
  <StyledSubTitle>
    <Typewriter
      options={{
        strings: ['front-end developer', 'blogger', 'designer'],
        autoStart: true,
        loop: true,
      }}
    />
  </StyledSubTitle>
);

export default SubTitle;
