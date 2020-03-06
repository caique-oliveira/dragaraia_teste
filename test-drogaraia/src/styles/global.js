import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *, *::after, *::before {
    box-sizing: border-box;
  }
  html, body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
  body {
    background: #ededed;
    color: #EFFFFA;
    display: flex;
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    /* this defines what 1rem is (1/10) */
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color:#444;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
