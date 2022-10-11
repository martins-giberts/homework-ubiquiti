import { PropsWithChildren } from "react";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loading } from "./components/Loading";
import { Wrapper, WrapperTypes } from "./components/Wrapper";
import { useIsAppReady } from "./hooks/useIsAppReady";
import { useGetProductsQuery } from "./services/api";

export const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const { error, isLoading } = useGetProductsQuery();
  const isAppReady = useIsAppReady();

  // @Todo: move to hooks so we can expand the logic on when app is loading or when app has error
  const isAppLoading = !error && isLoading;

  return (
    <Wrapper wrapperType={!isAppReady ? WrapperTypes.FullScreen : undefined}>
      {isAppLoading && <Loading />}
      {error && <ErrorMessage error={error} />}
      {isAppReady && children}
    </Wrapper>
  );
};
