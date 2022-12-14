const typography = {
  fontLibraryImportUrlLato:
    "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap",
  defaultFontSizePx: "16px",
  fontFamily: `'Lato', sans-serif`,
  fontSizeNormalEm: "1em",
  fontSizeTitleEm: "2em",
  lineHeightEm: "1.5em",
};

const mediaTokens = {
  mobileWidth: 320,
  tabletWidth: 768,
  desktopWidth: 1024,
  desktopLargeWidth: 1440,
  imageWidth: 257,
  imageHeight: 257,
};

const mediaTokensPx = {
  mobileWidthPx: `${mediaTokens.mobileWidth}px`,
  tabletWidthPx: `${mediaTokens.tabletWidth}px`,
  desktopWidthPx: `${mediaTokens.desktopWidth}px`,
  desktopLargeWidthPx: `${mediaTokens.desktopLargeWidth}px`,
};

const mediaDevice = {
  mediaMobile: `(min-width: ${mediaTokensPx.mobileWidthPx})`,
  mediaTablet: `(min-width: ${mediaTokensPx.tabletWidthPx})`,
  mediaDesktop: `(min-width: ${mediaTokensPx.desktopWidthPx})`,
  mediaDesktopLarge: `(min-width: ${mediaTokensPx.desktopLargeWidthPx})`,
};

const spacing = {
  spacingSmall: 8,
  spacingMedium: 16,
  spacingLarge: 24,
  spacingExtraLarge: 32,
  spacingBorderRadius: 10,
};

const spacingPx = {
  spacingSmallPx: `${spacing.spacingSmall}px`,
  spacingMediumPx: `${spacing.spacingMedium}px`,
  spacingLargePx: `${spacing.spacingLarge}px`,
  spacingExtraLargePx: `${spacing.spacingExtraLarge}px`,
  spacingBorderRadiusPx: `${spacing.spacingBorderRadius}px`,
};

const colors = {
  colorUiLightBlue: "#00a0df",
  colorUiDarkBlue: "#003656",
  colorUiLightGrey: "#f8f8f8",
  colorUiGrey: "#7f7f7f",
  colorWhite: "#fff",
  colorBlack: "#000",
};

export const tokens = {
  ...typography,
  ...mediaTokens,
  ...mediaTokensPx,
  ...mediaDevice,
  ...spacing,
  ...spacingPx,
  ...colors,
};
