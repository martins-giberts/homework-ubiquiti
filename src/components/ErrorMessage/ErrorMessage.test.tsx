import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("renders component", () => {
    render(
      <ErrorMessage
        error={{ status: "FETCH_ERROR", error: "TypeError: Failed to fetch" }}
      ></ErrorMessage>
    );
    expect(screen.getByText("ErrorMessage")).toBeInTheDocument();
  });
});
