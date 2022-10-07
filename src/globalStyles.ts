import { createGlobalStyle } from "styled-components";
import { tokens } from "./tokens";

export const GlobalStyle = createGlobalStyle`
  @import url(tokens.fontLibraryImportUrlLato);

  body {
    font-family: ${tokens.fontFamily};
    font-size: ${tokens.defaultFontSizePx};
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
  }
`;
