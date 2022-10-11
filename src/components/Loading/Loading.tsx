import styled from "styled-components";
import { LoadingText } from "./LoadingText";
import { Text, TextTypes } from "../Text";
import { tokens } from "../../tokens";

export const Loading: React.FC = () => (
  <Container>
    <Img src="/ui-logo.png" alt="ui logo" />
    <LoadingText>
      <Text textType={TextTypes.Title}>Loading...</Text>
    </LoadingText>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  align-self: center;
`;

const Img = styled.img`
  margin-right: ${tokens.spacingMediumPx};
  box-shadow: 0 2px 2px 0 ${tokens.colorUiGrey};
`;
