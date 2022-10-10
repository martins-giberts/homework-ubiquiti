import styled from "styled-components";
import { LoadingText } from "./LoadingText";
import { Text, TextTypes } from "../Text";

export const Loading: React.FC = () => (
  <Container>
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
