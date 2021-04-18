import React from 'react';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import styled, { css } from 'styled-components';
import Logo from '../../assets/icons/logo.svg';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  margin-bottom: 25px;
  background: linear-gradient(
    180deg,
    ${({ theme: { colors } }) => css`
      ${colors.dark} 0%,
      ${colors.darker} 35%
    `}
  );

  @media ${({ theme: { media } }) => media.laptop} {
    flex-direction: row;
  }
`;

const StyledLogo = styled(Logo)`
  width: 30px;
  margin-bottom: 12px;

  @media ${({ theme: { media } }) => media.laptop} {
    order: 1;
    margin: 0 50px;
    width: 50px;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;

  @media ${({ theme: { media } }) => media.laptop} {
    order: 0;
    margin-bottom: 0px;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a > svg {
    color: ${({ theme }) => theme.colors.primary};
    width: 32px;
    height: 32px;
    margin: 0 10px;

    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media ${({ theme: { media } }) => media.laptop} {
    order: 2;
    a > svg {
      width: 28px;
      height: 28px;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledLogo />
    <Copyright>
      &#169; Tobiasz Ciesielski {new Date().getFullYear().toString()}
    </Copyright>
    <Socials>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="http://www.github.com/tobiaszciesielski"
      >
        <FaGithub />
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.linkedin.com/in/tobiaszciesielski"
      >
        <FaLinkedin />
      </a>
    </Socials>
  </StyledFooter>
);

export default Footer;
