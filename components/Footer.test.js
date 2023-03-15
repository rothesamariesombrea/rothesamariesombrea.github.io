import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the Footer component", () => {
    render(<Footer />);

    expect(screen.getByRole("heading")).toHaveTextContent("Get In Touch");
    expect(screen.getByText("jeffreyrampineda@gmail.com")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/jeffreyrampineda/"
    );
    expect(screen.getByRole("link", { name: "Github" })).toHaveAttribute(
      "href",
      "https://github.com/jeffreyrampineda/"
    );
    expect(
      screen.getByRole("link", { name: "Stack Overflow" })
    ).toHaveAttribute(
      "href",
      "https://stackoverflow.com/users/8550657/jeffrey-ram/"
    );
  });
});
