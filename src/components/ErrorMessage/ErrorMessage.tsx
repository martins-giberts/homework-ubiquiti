import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { tokens } from "../../tokens";
import { Text, TextStyles, TextTypes } from "../Text";

export type ErrorMessageProps = {
  error: SerializedError | FetchBaseQueryError;
};

export const ErrorMessage: React.FC<PropsWithChildren<ErrorMessageProps>> = ({
  error,
}) => {
  const errorMessage =
    getFetchQueryError(error as FetchBaseQueryError) ||
    (error as SerializedError).message;

  const message = errorMessage || "Unknown error";

  return (
    <Container>
      <div>
        <ErrorMessageContainer>
          <h1>
            <Text textType={TextTypes.Title}>Error :(</Text>
          </h1>
          <p>
            <Text>{message}</Text>
          </p>
        </ErrorMessageContainer>
        <StringifiedMessage>
          <Text textStyle={TextStyles.Secondary}>{JSON.stringify(error)}</Text>
        </StringifiedMessage>
        <p>
          <Text textStyle={TextStyles.Secondary}>
            We are sorry this occurred to you.
          </Text>
        </p>
        <p>
          <Text textStyle={TextStyles.Secondary}>
            We actively work on improving application, please try again later or
            if this keeps occurring,
          </Text>
        </p>
        <p>
          <Text textStyle={TextStyles.Secondary}>
            please contact us at 0118 999 881 999 119 725 ... 3
          </Text>
        </p>
        <p>
          <a href="//example.com">example.com</a>
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  align-self: center;
`;

const ErrorMessageContainer = styled.div`
  margin-bottom: ${tokens.spacingExtraLargePx};
`;

const StringifiedMessage = styled.p`
  display: block;
  border-radius: ${tokens.spacingBorderRadiusPx};
  padding: ${tokens.spacingExtraLargePx};
  background-color: ${tokens.colorUiLightGrey};
  margin-bottom: ${tokens.spacingExtraLargePx};
`;

const getFetchQueryError = (error: FetchBaseQueryError) => {
  if (
    error &&
    error.status &&
    (error.status === "CUSTOM_ERROR" ||
      error.status === "FETCH_ERROR" ||
      error.status === "PARSING_ERROR")
  ) {
    return error.error;
  }

  return undefined;
};
