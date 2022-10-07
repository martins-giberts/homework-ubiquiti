import { render, screen } from "@testing-library/react";
import { Wrapper } from "./Wrapper";

describe("Wrapper", () => {
  it("renders welcome message", () => {
    render(<Wrapper>"Wrapper"</Wrapper>);
    expect(screen.getByText("Wrapper")).toBeInTheDocument();
  });
});
