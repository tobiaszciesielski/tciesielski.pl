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
    font-size: 18px;
    overflow-y: hidden;
  }

  h1, h2, h3, h4, h5, h6, a {
    font-family: ${typo.ralewayBold}, 'Arial Narrow';
    color: ${({ theme: { colors } }) => colors.primary}
  }

  h1 {
    font-size: 2.7em;
  }

  h2 {
    font-size: 2em;
  }

  p {
    font-size: 1em;
  }
  
  p, .Typewriter {
    font-family: ${typo.robotoRegular}, 'Arial Narrow';
    color: ${({ theme: { colors } }) => colors.secondary}
  }

  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
