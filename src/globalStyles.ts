import { createGlobalStyle } from "styled-components";
import { tokens } from "./tokens";

export const GlobalStyle = createGlobalStyle`
  @import url(tokens.fontLibraryImportUrlLato);

  body, html {
    font-family: ${tokens.fontFamily};
    font-size: ${tokens.defaultFontSizePx};
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    padding: 0;
    margin-block: 0;
  }

  a {
    text-decoration: none;
    color: ${tokens.colorUiDarkBlue}
  }
`;
