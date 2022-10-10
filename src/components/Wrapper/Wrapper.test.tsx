import { render, screen } from "@testing-library/react";
import { Wrapper, WrapperTypes } from "./Wrapper";

describe("Wrapper", () => {
  it("renders component", () => {
    render(<Wrapper>Wrapper</Wrapper>);
    expect(screen.getByText("Wrapper")).toBeInTheDocument();
  });

  it("renders with type", () => {
    render(<Wrapper type={"type-fullscreen" as WrapperTypes}>Wrapper</Wrapper>);

    expect(screen.getByText("Wrapper")).toBeInTheDocument();
    expect(screen.getByText("Wrapper")).toHaveClass("type-fullscreen");
  });
});
