import styled from "styled-components";
import { LoadingText } from "./LoadingText";

export const Loading: React.FC = () => (
  <Container>
    <LoadingText>Loading...</LoadingText>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  align-self: center;
`;
