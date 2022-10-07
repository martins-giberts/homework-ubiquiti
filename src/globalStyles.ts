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
`;
