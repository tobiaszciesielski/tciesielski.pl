import { createGlobalStyle } from 'styled-components';
import typo from './typography';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;  
    padding: 0;
    background-color: ${({ theme }) => theme.colors.darker};
    position: relative;
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${typo.ralewayBold}, 'Arial Narrow';
    color: ${({ theme }) => theme.colors.primary}
  }
  
  p, .Typewriter__wrapper {
    font-family: ${typo.robotoRegular}, 'Arial Narrow';
    color: ${({ theme }) => theme.colors.secondary}
  }

  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
