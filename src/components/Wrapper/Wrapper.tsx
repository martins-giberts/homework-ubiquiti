import { PropsWithChildren } from "react";
import styled from "styled-components";
import { tokens } from "../../tokens";

export enum WrapperTypes {
  Default = "type-default",
  FullScreen = "type-fullscreen",
}

export type WrapperProps = {
  type?: WrapperTypes;
};

export const Wrapper: React.FC<PropsWithChildren<WrapperProps>> = ({
  children,
  type = WrapperTypes.Default,
}) => (
  <Container type={type} className={type}>
    {children}
  </Container>
);

const Container = styled.div<{ type?: WrapperTypes }>`
  height: ${({ type }) =>
    type === WrapperTypes.FullScreen ? "100vh" : "auto"};
  min-width: ${tokens.mobileWidthPx};
  max-width: ${tokens.desktopLargeWidthPx};
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 ${tokens.spacingSmallPx};

  @media ${tokens.mediaMobile} {
    /* */
  }

  @media ${tokens.mediaTablet} {
    padding: 0 ${tokens.spacingMediumPx};
  }

  @media ${tokens.mediaDesktop} {
    padding: 0 ${tokens.spacingLargePx};
  }
`;
