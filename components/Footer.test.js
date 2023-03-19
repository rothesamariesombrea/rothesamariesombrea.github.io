import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the Footer component", () => {
    render(<Footer />);

    expect(screen.getByRole("heading")).toHaveTextContent("Get In Touch");
    expect(screen.getByText("rothesasombrea@gmail.com")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/rothesamariesombrea/"
    );
  });
});
