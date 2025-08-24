// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, h1, h2, h3, h4, h5, p, h6, a, ul, li, ul li, div, section, header, nav, button, a, span {
    font-family: 'Montserrat', sans-serif;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #f9fafb;
    color: #1f2937;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
