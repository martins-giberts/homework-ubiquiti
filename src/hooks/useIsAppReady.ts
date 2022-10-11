import { useGetProductsQuery } from "../services/api";

export const useIsAppReady = () => {
  const { error, isLoading, data } = useGetProductsQuery();

  return !error && !isLoading && !!data;
};
