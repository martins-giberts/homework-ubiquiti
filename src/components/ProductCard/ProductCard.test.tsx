import { render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard";

describe("ProductCard", () => {
  it("renders welcome message", () => {
    render(<ProductCard />);
    expect(screen.getByText("ProductCard")).toBeInTheDocument();
  });
});
