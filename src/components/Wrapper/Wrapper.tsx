import { PropsWithChildren } from "react";
import styled from "styled-components";
import { tokens } from "../../tokens";

export const Wrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <Container>{children}</Container>
);

const Container = styled.div`
  height: 100%;
  min-width: ${tokens.mobileWidthPx};
  max-width: ${tokens.desktopLargeWidthPx};
  min-height: 100vw;
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
