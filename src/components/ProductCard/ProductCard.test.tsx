import { render, screen } from "@testing-library/react";
import { Device } from "../../services/api";
import { ProductCard } from "./ProductCard";

describe("ProductCard", () => {
  it("renders welcome message", () => {
    const testDevice: Partial<Device> = {
      icon: {
        id: "0da32da2-b540-4b03-92c0-4ee5e25da040",
        resolutions: [],
      },
      product: {
        abbrev: "Product name",
        name: "Product name",
      },
      line: {
        id: "Product line",
        name: "Product line",
      },
    };

    render(<ProductCard device={testDevice as Device} />);
    expect(screen.getByText("Product name")).toBeInTheDocument();
  });
});
