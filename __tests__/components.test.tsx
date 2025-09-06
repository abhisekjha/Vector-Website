import { render, screen, fireEvent } from "@testing-library/react";
import { Button, Container, Card, SectionTitle } from "@/components/ui";

describe("UI Components", () => {
  describe("Button", () => {
    it("renders as a button by default", () => {
      render(<Button>Test Button</Button>);
      const button = screen.getByRole("button", { name: /test button/i });
      expect(button).toBeInTheDocument();
    });

    it("renders as a link when as='a'", () => {
      render(<Button as="a" href="/test">Test Link</Button>);
      const link = screen.getByRole("link", { name: /test link/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/test");
    });

    it("applies correct variant classes", () => {
      render(<Button variant="primary">Primary</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-black", "text-white");
    });

    it("shows logo when showLogo is true", () => {
      render(<Button showLogo>With Logo</Button>);
      const logo = screen.getByAltText("Vector");
      expect(logo).toBeInTheDocument();
    });
  });

  describe("Container", () => {
    it("renders children correctly", () => {
      render(
        <Container>
          <div>Test Content</div>
        </Container>
      );
      expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("applies correct size classes", () => {
      const { container } = render(<Container size="sm">Small</Container>);
      const containerElement = container.firstChild as HTMLElement;
      expect(containerElement).toHaveClass("max-w-3xl", "mx-auto", "w-full");
    });
  });

  describe("Card", () => {
    it("renders with default variant", () => {
      const { container } = render(<Card>Card Content</Card>);
      const cardElement = container.firstChild as HTMLElement;
      expect(cardElement).toHaveClass("bg-white", "border", "border-black/10", "rounded-3xl", "p-6");
    });

    it("applies correct padding", () => {
      const { container } = render(<Card padding="lg">Large Padding</Card>);
      const cardElement = container.firstChild as HTMLElement;
      expect(cardElement).toHaveClass("p-8", "bg-white", "border", "border-black/10", "rounded-3xl");
    });
  });

  describe("SectionTitle", () => {
    it("renders title correctly", () => {
      render(<SectionTitle title="Test Title" />);
      expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    it("renders subtitle when provided", () => {
      render(
        <SectionTitle 
          title="Test Title" 
          subtitle="Test Subtitle" 
        />
      );
      expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    });

    it("renders eyebrow when provided", () => {
      render(
        <SectionTitle 
          title="Test Title" 
          eyebrow="Test Eyebrow" 
        />
      );
      expect(screen.getByText("Test Eyebrow")).toBeInTheDocument();
    });

    it("applies center alignment", () => {
      render(
        <SectionTitle 
          title="Test Title" 
          align="center" 
        />
      );
      const container = screen.getByText("Test Title").closest("div");
      expect(container).toHaveClass("text-center");
    });
  });
});
