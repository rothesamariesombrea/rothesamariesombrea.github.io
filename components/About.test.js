import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About", () => {
  it("renders the About component", () => {
    render(<About />);

    expect(screen.getByRole("heading")).toHaveTextContent("About Me");
    expect(screen.getByText(/Rothesa/)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/rothesamariesombrea/"
    );
  });
});
