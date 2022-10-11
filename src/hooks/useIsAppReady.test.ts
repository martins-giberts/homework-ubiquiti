import { renderHook } from "@testing-library/react";
import { useIsAppReady } from "./useIsAppReady";

import { useGetProductsQuery } from "../services/api";

jest.mock("../services/api", () => ({
  useGetProductsQuery: jest.fn(),
}));

const mockedUseGetProductsQuery = useGetProductsQuery as jest.MockedFunction<
  typeof useGetProductsQuery
>;

describe("useIsAppReady", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should return true", () => {
    mockedUseGetProductsQuery.mockReturnValueOnce({
      data: {},
      refetch: () => null,
    });

    const { result } = renderHook(useIsAppReady);
    expect(result.current).toBe(true);
  });

  it("should return false when loading", () => {
    mockedUseGetProductsQuery.mockReturnValueOnce({
      isLoading: true,
      refetch: () => null,
    });

    const { result } = renderHook(useIsAppReady);
    expect(result.current).toBe(false);
  });

  it("should return false when error", () => {
    mockedUseGetProductsQuery.mockReturnValueOnce({
      error: {},
      refetch: () => null,
    });

    const { result } = renderHook(useIsAppReady);
    expect(result.current).toBe(false);
  });
});
