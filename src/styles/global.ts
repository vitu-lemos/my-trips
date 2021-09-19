import * as styled from 'styled-components'

const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }
  html,
  body,
  #__next {
    height: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`
export default GlobalStyle
