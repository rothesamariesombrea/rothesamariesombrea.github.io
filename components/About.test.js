import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About", () => {
  it("renders the About component", () => {
    render(<About />);

    expect(screen.getByRole("heading")).toHaveTextContent("About Me");
    expect(screen.getByText(/Jeffrey/)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/jeffreyrampineda/"
    );
    expect(screen.getByRole("link", { name: "Github" })).toHaveAttribute(
      "href",
      "https://github.com/jeffreyrampineda/"
    );
    expect(screen.getByRole("link", { name: "LeetCode" })).toHaveAttribute(
      "href",
      "https://leetcode.com/jeffreyrampineda/"
    );
    expect(
      screen.getByRole("link", { name: "Stack Overflow" })
    ).toHaveAttribute(
      "href",
      "https://stackoverflow.com/users/8550657/jeffrey-ram/"
    );
  });
});
