import { PropsWithChildren } from "react";
import styled from "styled-components";
import { tokens } from "../../tokens";

export enum TextStyles {
  Primary = "style-primary",
  Secondary = "style-secondary",
}

export enum TextTypes {
  Normal = "type-normal",
  Title = "type-title",
}

export type TextProps = {
  textType?: TextTypes;
  textStyle?: TextStyles;
};

const { Primary, Secondary } = TextStyles;
const { Normal, Title } = TextTypes;

export const Text: React.FC<PropsWithChildren<TextProps>> = ({
  children,
  textType = Normal,
  textStyle = Primary,
}) => (
  <TextSpan
    className={[textType, textStyle].join(" ")}
    textType={textType}
    textStyle={textStyle}
  >
    {children}
  </TextSpan>
);

const TextSpan = styled.span<TextProps>`
  font-family: ${tokens.fontFamily};
  font-size: ${({ textType }) => {
    switch (textType) {
      case Title:
        return tokens.fontSizeTitleEm;
      default:
        return tokens.fontSizeNormalEm;
    }
  }};

  font-weight: ${({ textType, textStyle }) => {
    switch (textType) {
      case Title:
        return textStyle === Primary ? "bold" : "normal";
      default:
        return "normal";
    }
  }};

  color: ${({ textStyle }) => {
    switch (textStyle) {
      case Secondary:
        return tokens.colorUiGrey;
      default:
        return "inherit";
    }
  }};

  line-height: ${tokens.lineHeightEm};
`;
