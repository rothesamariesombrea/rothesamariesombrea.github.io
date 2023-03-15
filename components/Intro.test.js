import { render, screen } from "@testing-library/react";
import Intro from "./Intro";

describe("Intro", () => {
  it("renders the Intro component", () => {
    render(<Intro />);

    expect(screen.getByText("Jeffrey Ram Pineda")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "#projects"
    );
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
