import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Color change boxes", () => {
  test("should render the grid properly", () => {
    render(<App />);
    expect(screen.getByText(1)).toBeInTheDocument();
    expect(screen.getByText(9)).toBeInTheDocument();
  });
});
