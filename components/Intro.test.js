import { render, screen } from "@testing-library/react";
import Intro from "./Intro";

describe("Intro", () => {
  it("renders the Intro component", () => {
    render(<Intro />);

    expect(screen.getByText("Rothesa Marie Sombrea")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/rothesamariesombrea/"
    );
  });
});
