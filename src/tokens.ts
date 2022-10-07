const typography = {
  fontLibraryImportUrlLato:
    "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap",
  defaultFontSizePx: "16px",
  fontFamily: `'Lato', sans-serif`,
};

const mediaTokens = {
  mobileWidth: 320,
  tabletWidth: 768,
  desktop: 1024,
};

const mediaTokensPx = {
  mobileWidthPx: `${mediaTokens.mobileWidth}px`,
  tabletWidthPx: `${mediaTokens.tabletWidth}px`,
  desktopPx: `${mediaTokens.desktop}px`,
};

const mediaDevice = {
  mediaMobile: `(min-width: ${mediaTokensPx.mobileWidthPx})`,
  mediaTablet: `(min-width: ${mediaTokensPx.tabletWidthPx})`,
  mediaDesktop: `(min-width: ${mediaTokensPx.desktopPx})`,
};

const colors = {
  colorUiLightBlue: "#00a0df",
  colorUiDarkBlue: "#003656",
  colorUiGrey: "#7f7f7f",
  colorWhite: "#fff",
  colorBlack: "#000",
};

export const tokens = {
  ...typography,
  ...mediaTokens,
  ...mediaTokensPx,
  ...mediaDevice,
  ...colors,
};
