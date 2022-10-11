import { fireEvent, render, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

const mockedOnClearSearch = jest.fn();
const mockedOnSearch = jest.fn();

jest.mock("../../hooks/useDeviceSearch", () => ({
  useDeviceSearch: () => ({
    searchQueryInput: "Default input value",
    onClearSearch: mockedOnClearSearch,
    onSearch: mockedOnSearch,
  }),
}));

describe("SearchBar", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders component", () => {
    render(<SearchBar />);

    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
  });

  it("should call onSearch when input is changed", () => {
    render(<SearchBar />);
    const input = screen.getByTestId<HTMLInputElement>("search-bar-input");

    expect(input.value).toBe("Default input value");

    fireEvent.change(input, { target: { value: "test search" } });

    expect(mockedOnSearch).toBeCalledTimes(1);
    expect(mockedOnSearch).toHaveBeenCalledWith("test search");
  });

  it("should call onClearSearch when clicked", () => {
    render(<SearchBar />);
    const button = screen.getByTestId<HTMLButtonElement>(
      "search-bar-clear-button"
    );

    fireEvent.click(button);

    expect(mockedOnClearSearch).toBeCalledTimes(1);
  });
});
