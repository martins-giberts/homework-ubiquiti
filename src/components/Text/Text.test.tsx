import { render, screen } from "@testing-library/react";
import { Text, TextStyles, TextTypes } from "./Text";

describe("Text", () => {
  it("renders component", () => {
    render(<Text>Text</Text>);
    expect(screen.getByText("Text")).toBeInTheDocument();
  });

  it("renders with type", () => {
    render(<Text textType={"type-title" as TextTypes}>Text</Text>);

    expect(screen.getByText("Text")).toBeInTheDocument();
    expect(screen.getByText("Text")).toHaveClass("type-title");
  });

  it("renders with style", () => {
    render(<Text textStyle={"type-secondary" as TextStyles}>Text</Text>);

    expect(screen.getByText("Text")).toBeInTheDocument();
    expect(screen.getByText("Text")).toHaveClass("type-secondary");
  });
});
