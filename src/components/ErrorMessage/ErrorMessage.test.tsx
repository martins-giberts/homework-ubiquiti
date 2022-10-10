import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("renders component", () => {
    render(<ErrorMessage>ErrorMessage</ErrorMessage>);
    expect(screen.getByText("ErrorMessage")).toBeInTheDocument();
  });
});
