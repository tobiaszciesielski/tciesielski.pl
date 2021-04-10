import { createGlobalStyle } from 'styled-components';
import typo from './typography';

const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: ${({ theme }) => theme.colors.darker};
    position: relative;
  }

  html {
    overflow-x: hidden;
  }

  body { 
    overflow-y: hidden;
    overflow-x: hidden;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, a {
    font-family: ${typo.ralewayBold}, 'Arial Narrow';
    color: ${({ theme: { colors } }) => colors.primary}
  }

  p, .Typewriter {
    font-family: ${typo.robotoRegular}, 'Arial Narrow';
    color: ${({ theme: { colors } }) => colors.secondary}
  }

  button {
    font-family: ${typo.robotoBold}, 'Arial Narrow';
  }

  form > p, input, textarea {
    font-family: ${typo.ralewayRegular}, 'Arial Narrow';
  }

  footer > p {
    font-family: ${typo.ralewayMedium}, 'Arial Narrow';
    font-size: 0.78em;
  }

  h1 {
    font-size: 2.7em;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.35em;
  }

  h4, p {
    font-size: 1em;
  }

  button {
    font-size: 0.83em;
  }
  
  input, textarea {
    font-size: 0.88em;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  @media ${({ theme: { media } }) => media.mobile} {
    body {
      font-size: 18px;
    }
  }

  @media ${({ theme: { media } }) => media.tablet} {
    body {
      font-size: 20px;
    }
  }

  @media ${({ theme: { media } }) => media.laptop} {
    nav > ul > li > a {
      font-family: ${typo.ralewayRegular}, 'Arial Narrow';
      font-size: 18px;
    }
  }

`;

export default GlobalStyle;
