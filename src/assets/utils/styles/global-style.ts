import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'), url('../fonts/OpenSans-Regular.ttf') format('truetype');
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.background};
    color: ${theme.colors.textMuted};
    font-family: 'Open Sans', sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
