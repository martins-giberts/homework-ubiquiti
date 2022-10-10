import styled from "styled-components";
import { tokens } from "../../tokens";

export const LoadingText = styled.span`
  text-align: center;

  animation-duration: 1.8s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: ${tokens.colorUiLightGrey};
  background: linear-gradient(
    to right,
    ${tokens.colorUiGrey} 8%,
    ${tokens.colorUiLightGrey} 38%,
    ${tokens.colorUiGrey} 54%
  );
  background-size: 1000px;

  position: relative;

  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
  background-clip: text;
  display: inline-block;
  font-size: 1.5em;

  @keyframes placeHolderShimmer {
    0% {
      background-position: -500px 0;
    }
    100% {
      background-position: 500px 0;
    }
  }
`;
