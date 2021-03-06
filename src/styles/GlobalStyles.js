import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'JosefinSans';
  src: local('JosefinSans'), url(./assets/fonts/Josefin_Sans/static/JosefinSans-Thin.ttf) format('truetype');
}

  html {
    --main-text-color: #5b5b5b;
    --body-color: rgba(255,255,255,1);
    --secondary-color: #c9e9eb;
  }

  body {
    /* opacity: 1;
    -webkit-transition: opacity .25s ease;
    transition: opacity .25s ease; */
    background-color: var(--body-color);
    color: var(--main-text-color);
    font-family: Josefin Sans, sans-serif;
  }

  a {
    color: var(--main-text-color);
  }

  a:hover {
    color: var(--main-text-color);
    text-decoration: none;
  }
`
