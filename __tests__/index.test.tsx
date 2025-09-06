import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

// Mock next/dynamic to prevent SSR issues in tests
jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => <div>Mocked Chart</div>;
  DynamicComponent.displayName = 'LoadableComponent';
  DynamicComponent.preload = jest.fn();
  return DynamicComponent;
});

describe("Landing page", () => {
  it("renders the hero claim", () => {
    render(<Home />);
    expect(
      screen.getByText(/\$1M annual savings & 2,000 extra hours a month await/i)
    ).toBeInTheDocument();
  });

  it("shows the primary CTA", () => {
    render(<Home />);
    const cta = screen.getAllByRole("button", { name: /let's chat/i })[0];
    expect(cta).toBeInTheDocument();
  });

  it("renders navigation with proper accessibility", () => {
    render(<Home />);
    
    // Check for main navigation
    const nav = screen.getByRole("navigation", { name: /main navigation/i });
    expect(nav).toBeInTheDocument();
    
    // Check for products dropdown
    const productsButton = screen.getByRole("button", { name: /products menu/i });
    expect(productsButton).toBeInTheDocument();
    expect(productsButton).toHaveAttribute("aria-haspopup", "true");
  });

  it("renders testimonials section", () => {
    render(<Home />);
    expect(
      screen.getByText(/transforming trade operations across industries/i)
    ).toBeInTheDocument();
  });

  it("renders integrations section", () => {
    render(<Home />);
    expect(
      screen.getByText(/engineered to integrate with your existing operations/i)
    ).toBeInTheDocument();
  });

  it("renders the main hero section", () => {
    render(<Home />);
    
    // Check for the main hero text
    expect(screen.getByText(/\$1M annual savings & 2,000 extra hours a month await/i)).toBeInTheDocument();
  });
});
