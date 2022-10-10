import { PropsWithChildren } from "react";
import styled from "styled-components";

export type ErrorMessageProps = {
  error?: unknown;
};

export const ErrorMessage: React.FC<PropsWithChildren<ErrorMessageProps>> = ({
  children,
}) => <Container>{children}</Container>;

const Container = styled.div`
  padding: 20px;
  border: 1px dashed red;
`;
