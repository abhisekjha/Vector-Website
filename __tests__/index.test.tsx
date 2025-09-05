import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Landing page", () => {
  it("renders the hero claim", () => {
    render(<Home />);
    expect(
      screen.getByText(/\$1M annual savings & 2,000 extra hours a month await/i)
    ).toBeInTheDocument();
  });

  it("shows the primary CTA", () => {
    render(<Home />);
    const cta = screen.getAllByRole("link", { name: /let's chat/i })[0];
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute("href", "#demo");
  });
});
