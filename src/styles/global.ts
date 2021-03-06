import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: 226, 14, 141;
    --background: 3, 5, 24;
    --white: 238, 238, 238;
    --black: 0, 8, 38;
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
    background: rgb(var(--background));
    color: rgb(var(--white));
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  p,
  a {
    font-size: 2rem;
    line-height: var(--medium);
  }
  a {
    color: rgb(var(--highlight));
  }
`

export default GlobalStyles
