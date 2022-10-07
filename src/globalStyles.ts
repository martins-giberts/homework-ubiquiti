import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

  body {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
  }
`;
