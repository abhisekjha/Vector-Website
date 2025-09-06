"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { Container, CTAButton } from "@/components/ui";

export function Navbar() {
  const [openProducts, setOpenProducts] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [openMobileItems, setOpenMobileItems] = useState<{[key: string]: boolean}>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside (for mobile/accessibility)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenProducts(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const productCategories = [
    {
      title: "PLAN & EXECUTE",
      items: [
        { 
          title: "Planning & Funds", 
          description: "Budget allocation, accrual schedules", 
          href: "/planning",
          icon: "📊"
        },
        { 
          title: "Live Promotion Health", 
          description: "Real-time drivers and drift detection", 
          href: "/health",
          icon: "📈"
        },
        { 
          title: "Scenario Studio", 
          description: "Constraint optimization and what-ifs", 
          href: "/scenarios",
          icon: "🎯"
        }
      ]
    },
    {
      title: "SETTLE & RECOVER",
      items: [
        { 
          title: "Accruals & Claims", 
          description: "Live balances and settlement workflow", 
          href: "/accruals",
          icon: "💰"
        },
        { 
          title: "Evidence Packs", 
          description: "Automated deduction recovery", 
          href: "/evidence",
          icon: "📋"
        },
        { 
          title: "Finance Agent", 
          description: "Always-live liability management", 
          href: "/finance",
          icon: "🤖"
        }
      ]
    },
    {
      title: "GOVERN & INTEGRATE",
      items: [
        { 
          title: "Vector Ledger", 
          description: "Audit-grade event sourcing", 
          href: "/ledger",
          icon: "📚"
        },
        { 
          title: "Policy Engine", 
          description: "Machine-enforced guardrails", 
          href: "/policies",
          icon: "⚖️"
        },
        { 
          title: "Integration Center", 
          description: "Observable data feeds and SLAs", 
          href: "/integrations",
          icon: "🔗"
        }
      ]
    }
  ];

  const navItems = [
    {
      key: "platform",
      title: "Platform",
      href: "/platform",
      description: "Complete agentic commercial OS for trade",
      features: ["Six AI Agents", "Audit-grade Ledger", "Policy Engine", "Integration Center"],
      subItems: []
    },
    {
      key: "resources",
      title: "Resources",
      href: "/resources", 
      description: "Documentation, guides, and support",
      features: ["API Docs", "Integration Guides", "Best Practices", "Support Center"],
      subItems: [
        { title: "Documentation", href: "/docs", description: "Complete API and integration guides" },
        { title: "Developer Hub", href: "/developers", description: "SDKs, tools, and developer resources" },
        { title: "Blog", href: "/blog", description: "Latest insights and product updates" },
        { title: "Webinars", href: "/webinars", description: "Live sessions and product demos" },
        { title: "Help Center", href: "/help", description: "FAQs, tutorials, and troubleshooting" },
        { title: "Community", href: "/community", description: "User forums and discussions" }
      ]
    },
    {
      key: "about",
      title: "About",
      href: "/about",
      description: "Learn about Vector's mission and team",
      features: ["Our Story", "Leadership", "Careers", "Contact"],
      subItems: [
        { title: "Our Story", href: "/about/story", description: "How Vector is transforming trade" },
        { title: "Leadership", href: "/about/leadership", description: "Meet our executive team" },
        { title: "Careers", href: "/careers", description: "Join our mission to revolutionize trade" },
        { title: "Press", href: "/press", description: "News, announcements, and media" },
        { title: "Contact", href: "/contact", description: "Get in touch with our team" },
        { title: "Partners", href: "/partners", description: "Strategic partnerships and alliances" }
      ]
    },
    {
      key: "enterprise",
      title: "Enterprise",
      href: "/enterprise",
      description: "Enterprise-grade solutions and support",
      features: ["Custom Deployments", "Dedicated Support", "SLA Guarantees", "Security"],
      subItems: [
        { title: "Enterprise Solutions", href: "/enterprise/solutions", description: "Tailored solutions for large organizations" },
        { title: "Security & Compliance", href: "/enterprise/security", description: "SOC2, ISO27001, and enterprise security" },
        { title: "Professional Services", href: "/enterprise/services", description: "Implementation and consulting services" },
        { title: "Support Plans", href: "/enterprise/support", description: "24/7 dedicated support options" },
        { title: "Pricing", href: "/pricing", description: "Enterprise pricing and packages" },
        { title: "Request Demo", href: "/demo", description: "Schedule a personalized demo" }
      ]
    },
    {
      key: "customers",
      title: "Customers",
      href: "/customers",
      description: "Success stories and case studies",
      features: ["Case Studies", "ROI Reports", "Testimonials", "Partners"],
      subItems: [
        { title: "Case Studies", href: "/customers/case-studies", description: "Real customer success stories" },
        { title: "ROI Calculator", href: "/roi-calculator", description: "Calculate your potential savings" },
        { title: "Testimonials", href: "/customers/testimonials", description: "What our customers say" },
        { title: "Industry Solutions", href: "/industries", description: "Solutions by industry vertical" },
        { title: "Customer Portal", href: "/portal", description: "Access your Vector workspace" },
        { title: "Success Metrics", href: "/success-metrics", description: "Proven results and benchmarks" }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 focus-ring rounded-lg">
          <Image src="/vector-logo.svg" alt="Vector" width={40} height={40} className="h-10 w-10" />
          <span className="text-xl font-semibold font-playfair">Vector</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm md:flex" role="navigation" aria-label="Main navigation">
          <div className="relative" ref={dropdownRef}>
            <div
              onMouseEnter={() => setOpenProducts(true)}
              onMouseLeave={() => setOpenProducts(false)}
              className="relative"
            >
              <button 
                className="inline-flex items-center gap-1 text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1"
                aria-label="Products menu"
              >
                Products <ChevronDown className={`h-4 w-4 transition-transform ${openProducts ? 'rotate-180' : ''}`} />
              </button>
              {openProducts && (
                <div 
                  className="absolute left-0 top-9 w-[800px] rounded-2xl border border-black/10 bg-white p-6 shadow-2xl"
                  aria-label="Products submenu"
                >
                  <div className="grid grid-cols-3 gap-8">
                    {productCategories.map((category) => (
                      <div key={category.title} className="space-y-4">
                        <h3 className="text-xs font-semibold text-black/60 uppercase tracking-wider">
                          {category.title}
                        </h3>
                        <div className="space-y-3">
                          {category.items.map((item) => (
                            <Link 
                              key={item.title} 
                              href={item.href} 
                              className="group block rounded-xl p-3 hover:bg-black/5 focus-ring transition-colors"
                            >
                              <div className="flex items-start gap-3">
                                <span className="text-lg group-hover:scale-110 transition-transform">
                                  {item.icon}
                                </span>
                                <div>
                                  <div className="text-sm font-semibold text-black group-hover:text-black/80">
                                    {item.title}
                                  </div>
                                  <div className="text-xs text-black/60 mt-1">
                                    {item.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {navItems.map((item) => (
            <div key={item.key} className="relative">
              {item.subItems.length > 0 ? (
                <div
                  onMouseEnter={() => setHoveredItem(item.key)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative"
                >
                  <button className="inline-flex items-center gap-1 text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1">
                    {item.title} <ChevronDown className={`h-4 w-4 transition-transform ${hoveredItem === item.key ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              ) : (
                <Link 
                  href={item.href} 
                  className="text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1"
                >
                  {item.title}
                </Link>
              )}
              {hoveredItem === item.key && (
                <div className="absolute left-0 top-9 w-96 rounded-2xl border border-black/10 bg-white p-4 shadow-2xl z-50">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-black">{item.title}</h3>
                      <p className="text-xs text-black/60 mt-1">{item.description}</p>
                    </div>
                    
                    {item.subItems.length > 0 ? (
                      <div className="space-y-3">
                        <h4 className="text-xs font-semibold text-black/60 uppercase tracking-wider">Quick Links</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {item.subItems.map((subItem) => (
                            <Link 
                              key={subItem.title}
                              href={subItem.href}
                              className="group block rounded-lg p-2 hover:bg-black/5 transition-colors"
                            >
                              <div className="text-xs font-semibold text-black group-hover:text-black/80">
                                {subItem.title}
                              </div>
                              <div className="text-xs text-black/60 mt-1">
                                {subItem.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-black/60 uppercase tracking-wider">Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {item.features.map((feature) => (
                            <div key={feature} className="text-xs text-black/80 flex items-center gap-2">
                              <div className="w-1 h-1 bg-black/40 rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <CTAButton href="#demo">Let&apos;s chat</CTAButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg focus-ring"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/10 bg-white/95 backdrop-blur">
          <Container className="py-4">
            <nav className="space-y-4" role="navigation" aria-label="Mobile navigation">
              <div>
                <button 
                  onClick={() => setOpenProducts(!openProducts)}
                  className="flex items-center gap-2 text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1 w-full text-left"
                >
                  Products <ChevronDown className={`h-4 w-4 transition-transform ${openProducts ? 'rotate-180' : ''}`} />
                </button>
                {openProducts && (
                  <div className="mt-2 ml-4 space-y-4">
                    {productCategories.map((category) => (
                      <div key={category.title} className="space-y-2">
                        <h4 className="text-xs font-semibold text-black/60 uppercase tracking-wider">
                          {category.title}
                        </h4>
                        <div className="space-y-2">
                          {category.items.map((item) => (
                            <Link 
                              key={item.title} 
                              href={item.href} 
                              className="flex items-start gap-2 rounded-lg p-2 hover:bg-black/5 focus-ring"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span className="text-sm">{item.icon}</span>
                              <div>
                                <div className="text-sm font-semibold">{item.title}</div>
                                <div className="text-xs text-black/60">{item.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {navItems.map((item) => (
                <div key={item.key} className="space-y-2">
                  {item.subItems.length > 0 ? (
                    <div>
                      <button 
                        onClick={() => setOpenMobileItems(prev => ({...prev, [item.key]: !prev[item.key]}))}
                        className="flex items-center gap-2 text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1 w-full text-left"
                      >
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-xs text-black/60 mt-1">{item.description}</div>
                        </div>
                        <ChevronDown className={`h-4 w-4 transition-transform ${openMobileItems[item.key] ? 'rotate-180' : ''}`} />
                      </button>
                      {openMobileItems[item.key] && (
                        <div className="ml-4 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link 
                              key={subItem.title}
                              href={subItem.href}
                              className="block text-xs text-black/60 hover:text-black/80 focus-ring rounded px-2 py-1"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={item.href} 
                      className="block text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-black/60 mt-1">{item.description}</div>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <CTAButton href="#demo" className="w-full justify-center">
                  Let&apos;s chat
                </CTAButton>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Navbar;
