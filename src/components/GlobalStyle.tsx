import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Helvetica', 'Arial', sans-serif;
    background-color: #fefefe;
  }
`;

export default GlobalStyle;