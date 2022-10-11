import { PropsWithChildren } from "react";
import styled from "styled-components";
import { tokens } from "../../tokens";

export const ProductsGrid: React.FC<PropsWithChildren> = ({ children }) => (
  <Container>{children}</Container>
);

const Container = styled.div`
  display: grid;
  column-gap: ${tokens.spacingSmallPx};
  row-gap: ${tokens.spacingSmallPx};

  @media ${tokens.mediaTablet} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${tokens.spacingMediumPx};
    row-gap: ${tokens.spacingMediumPx};
  }

  @media ${tokens.mediaDesktop} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: ${tokens.spacingLargePx};
    row-gap: ${tokens.spacingLargePx};
  }

  @media ${tokens.mediaDesktopLarge} {
    grid-template-columns: repeat(4, 1fr);
    column-gap: ${tokens.spacingExtraLargePx};
    row-gap: ${tokens.spacingExtraLargePx};
  }
`;
