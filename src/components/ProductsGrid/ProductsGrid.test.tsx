import { render, screen } from "@testing-library/react";
import { ProductsGrid } from "./ProductsGrid";

describe("ProductsGrid", () => {
  it("renders welcome message", () => {
    render(<ProductsGrid>ProductsGrid</ProductsGrid>);
    expect(screen.getByText("ProductsGrid")).toBeInTheDocument();
  });
});
