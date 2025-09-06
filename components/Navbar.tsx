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
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Helper function to handle hover with delay
  const handleHoverWithDelay = (itemKey: string | null, delay: number = 300) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(itemKey);
    }, delay);
  };

  // Close dropdown when clicking outside (for mobile/accessibility)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenProducts(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
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
      categories: []
    },
    {
      key: "resources",
      title: "Resources",
      href: "/resources", 
      description: "Documentation, guides, and support",
      features: ["API Docs", "Integration Guides", "Best Practices", "Support Center"],
      categories: [
        {
          title: "LEARN & DEVELOP",
          items: [
            { 
              title: "Survival Guide", 
              description: "Complete trade automation guide", 
              href: "/survival-guide",
              icon: "📖"
            },
            { 
              title: "Documentation", 
              description: "Complete API and integration guides", 
              href: "/docs",
              icon: "📚"
            },
            { 
              title: "Developer Hub", 
              description: "SDKs, tools, and developer resources", 
              href: "/developers",
              icon: "🛠️"
            },
            { 
              title: "API Reference", 
              description: "Detailed API documentation", 
              href: "/api",
              icon: "🔌"
            }
          ]
        },
        {
          title: "SUPPORT & COMMUNITY",
          items: [
            { 
              title: "Help Center", 
              description: "FAQs, tutorials, and troubleshooting", 
              href: "/help",
              icon: "❓"
            },
            { 
              title: "Community", 
              description: "User forums and discussions", 
              href: "/community",
              icon: "👥"
            },
            { 
              title: "Support", 
              description: "Get help from our team", 
              href: "/support",
              icon: "🎧"
            }
          ]
        },
        {
          title: "INSIGHTS & UPDATES",
          items: [
            { 
              title: "Blog", 
              description: "Latest insights and product updates", 
              href: "/blog",
              icon: "📝"
            },
            { 
              title: "Webinars", 
              description: "Live sessions and product demos", 
              href: "/webinars",
              icon: "🎥"
            },
            { 
              title: "Newsletter", 
              description: "Stay updated with Vector news", 
              href: "/newsletter",
              icon: "📧"
            }
          ]
        }
      ]
    },
    {
      key: "about",
      title: "About",
      href: "/about",
      description: "Learn about Vector's mission and team",
      features: ["Our Story", "Leadership", "Careers", "Contact"],
      categories: [
        {
          title: "OUR COMPANY",
          items: [
            { 
              title: "Our Story", 
              description: "How Vector is transforming trade", 
              href: "/about/story",
              icon: "📖"
            },
            { 
              title: "Leadership", 
              description: "Meet our executive team", 
              href: "/about/leadership",
              icon: "👔"
            },
            { 
              title: "Mission & Values", 
              description: "What drives us forward", 
              href: "/about/mission",
              icon: "🎯"
            }
          ]
        },
        {
          title: "JOIN US",
          items: [
            { 
              title: "Careers", 
              description: "Join our mission to revolutionize trade", 
              href: "/careers",
              icon: "💼"
            },
            { 
              title: "Open Positions", 
              description: "Current job opportunities", 
              href: "/careers/positions",
              icon: "🔍"
            },
            { 
              title: "Culture", 
              description: "Life at Vector", 
              href: "/about/culture",
              icon: "🌟"
            }
          ]
        },
        {
          title: "CONNECT",
          items: [
            { 
              title: "Press", 
              description: "News, announcements, and media", 
              href: "/press",
              icon: "📰"
            },
            { 
              title: "Contact", 
              description: "Get in touch with our team", 
              href: "/contact",
              icon: "📞"
            },
            { 
              title: "Partners", 
              description: "Strategic partnerships and alliances", 
              href: "/partners",
              icon: "🤝"
            }
          ]
        }
      ]
    },
    {
      key: "enterprise",
      title: "Enterprise",
      href: "/enterprise",
      description: "Enterprise-grade solutions and support",
      features: ["Custom Deployments", "Dedicated Support", "SLA Guarantees", "Security"],
      categories: [
        {
          title: "SOLUTIONS",
          items: [
            { 
              title: "Enterprise Solutions", 
              description: "Tailored solutions for large organizations", 
              href: "/enterprise/solutions",
              icon: "🏢"
            },
            { 
              title: "Custom Deployments", 
              description: "On-premise and hybrid options", 
              href: "/enterprise/deployments",
              icon: "⚙️"
            },
            { 
              title: "Industry Solutions", 
              description: "Vertical-specific implementations", 
              href: "/enterprise/industries",
              icon: "🏭"
            }
          ]
        },
        {
          title: "SECURITY & COMPLIANCE",
          items: [
            { 
              title: "Security & Compliance", 
              description: "SOC2, ISO27001, and enterprise security", 
              href: "/enterprise/security",
              icon: "🔒"
            },
            { 
              title: "Data Governance", 
              description: "Advanced data protection and privacy", 
              href: "/enterprise/governance",
              icon: "🛡️"
            },
            { 
              title: "Audit & Reporting", 
              description: "Comprehensive audit trails", 
              href: "/enterprise/audit",
              icon: "📊"
            }
          ]
        },
        {
          title: "SERVICES & SUPPORT",
          items: [
            { 
              title: "Professional Services", 
              description: "Implementation and consulting services", 
              href: "/enterprise/services",
              icon: "🎯"
            },
            { 
              title: "Support Plans", 
              description: "24/7 dedicated support options", 
              href: "/enterprise/support",
              icon: "🎧"
            },
            { 
              title: "Training & Onboarding", 
              description: "Comprehensive training programs", 
              href: "/enterprise/training",
              icon: "🎓"
            }
          ]
        }
      ]
    },
    {
      key: "customers",
      title: "Customers",
      href: "/customers",
      description: "Success stories and case studies",
      features: ["Case Studies", "ROI Reports", "Testimonials", "Partners"],
      categories: [
        {
          title: "SUCCESS STORIES",
          items: [
            { 
              title: "Case Studies", 
              description: "Real customer success stories", 
              href: "/customers/case-studies",
              icon: "📈"
            },
            { 
              title: "Customer Stories", 
              description: "In-depth customer journeys", 
              href: "/customers/stories",
              icon: "📖"
            },
            { 
              title: "ROI Reports", 
              description: "Proven return on investment", 
              href: "/customers/roi",
              icon: "💰"
            }
          ]
        },
        {
          title: "VALIDATION",
          items: [
            { 
              title: "Testimonials", 
              description: "What our customers say", 
              href: "/customers/testimonials",
              icon: "💬"
            },
            { 
              title: "Reviews", 
              description: "Customer feedback and ratings", 
              href: "/customers/reviews",
              icon: "⭐"
            },
            { 
              title: "Success Metrics", 
              description: "Proven results and benchmarks", 
              href: "/success-metrics",
              icon: "📊"
            }
          ]
        },
        {
          title: "TOOLS & RESOURCES",
          items: [
            { 
              title: "ROI Calculator", 
              description: "Calculate your potential savings", 
              href: "/roi-calculator",
              icon: "🧮"
            },
            { 
              title: "Customer Portal", 
              description: "Access your Vector workspace", 
              href: "/portal",
              icon: "🚪"
            },
            { 
              title: "Implementation Guide", 
              description: "Step-by-step implementation", 
              href: "/implementation",
              icon: "📋"
            }
          ]
        }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 focus-ring rounded-lg">
          <Image src="/vector-logo.svg" alt="Vector" width={40} height={40} className="h-10 w-10" />
          <span className="text-xl font-semibold playfair-display-600">Vector</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm md:flex" role="navigation" aria-label="Main navigation">
          <div className="relative" ref={dropdownRef}>
            <div
              onMouseEnter={() => {
                if (hoverTimeoutRef.current) {
                  clearTimeout(hoverTimeoutRef.current);
                }
                setHoveredItem(null); // Close other nav item dropdowns
                setOpenProducts(true);
              }}
              onMouseLeave={() => {
                if (hoverTimeoutRef.current) {
                  clearTimeout(hoverTimeoutRef.current);
                }
                hoverTimeoutRef.current = setTimeout(() => {
                  setOpenProducts(false);
                }, 500);
              }}
              className="relative"
            >
            <button 
              className="inline-flex items-center gap-1 text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1 playfair-display-500 hover:shadow-lg transition-all duration-200"
              aria-label="Products menu"
            >
              Products <ChevronDown className={`h-4 w-4 transition-transform ${openProducts ? 'rotate-180' : ''}`} />
            </button>
            {openProducts && (
              <div 
                  className="absolute left-1/2 transform -translate-x-1/2 top-8 w-[600px] rounded-2xl border border-black/10 bg-white/95 backdrop-blur-md p-6 shadow-2xl"
                aria-label="Products submenu"
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    setHoveredItem(null); // Close other nav item dropdowns
                    setOpenProducts(true);
                  }}
                  onMouseLeave={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    hoverTimeoutRef.current = setTimeout(() => {
                      setOpenProducts(false);
                    }, 500);
                  }}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {productCategories.map((category) => (
                      <div key={category.title} className="space-y-4">
                        <h3 className="text-xs font-semibold text-black/60 uppercase tracking-wider playfair-display-600">
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
                                  <div className="text-sm font-semibold text-black group-hover:text-black/80 playfair-display-600">
                                    {item.title}
                                  </div>
                                  <div className="text-xs text-black/60 mt-1 playfair-display-400">
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
              {item.categories.length > 0 ? (
                <div
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    setOpenProducts(false); // Close Products dropdown
                    setHoveredItem(item.key);
                  }}
                  onMouseLeave={() => handleHoverWithDelay(null, 500)}
                  className="relative"
                >
                  <button className="inline-flex items-center gap-1 text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1 playfair-display-500 hover:shadow-lg transition-all duration-200">
                    {item.title} <ChevronDown className={`h-4 w-4 transition-transform ${hoveredItem === item.key ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              ) : (
                <Link 
                  href={item.href} 
                  className="text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1 playfair-display-500 hover:shadow-lg transition-all duration-200"
                >
                  {item.title}
                </Link>
              )}
              {hoveredItem === item.key && item.categories.length > 0 && (
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 top-8 w-[600px] rounded-2xl border border-black/10 bg-white/95 backdrop-blur-md p-6 shadow-2xl z-50"
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    setOpenProducts(false); // Close Products dropdown
                    setHoveredItem(item.key);
                  }}
                  onMouseLeave={() => handleHoverWithDelay(null, 500)}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {item.categories.map((category) => (
                      <div key={category.title} className="space-y-4">
                        <h3 className="text-xs font-semibold text-black/60 uppercase tracking-wider playfair-display-600">
                          {category.title}
                        </h3>
                        <div className="space-y-3">
                          {category.items.map((categoryItem) => (
                            <Link 
                              key={categoryItem.title} 
                              href={categoryItem.href} 
                              className="group block rounded-xl p-3 hover:bg-black/5 focus-ring transition-colors"
                            >
                              <div className="flex items-start gap-3">
                                <span className="text-lg group-hover:scale-110 transition-transform">
                                  {categoryItem.icon}
                                </span>
                                <div>
                                  <div className="text-sm font-semibold text-black group-hover:text-black/80 playfair-display-600">
                                    {categoryItem.title}
                                  </div>
                                  <div className="text-xs text-black/60 mt-1 playfair-display-400">
                                    {categoryItem.description}
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
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <CTAButton href="#demo">Book a demo</CTAButton>
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
                  className="flex items-center gap-2 text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1 w-full text-left playfair-display-500"
                >
                  Products <ChevronDown className={`h-4 w-4 transition-transform ${openProducts ? 'rotate-180' : ''}`} />
                </button>
                {openProducts && (
                  <div className="mt-2 ml-4 space-y-4">
                    {productCategories.map((category) => (
                      <div key={category.title} className="space-y-2">
                        <h4 className="text-xs font-semibold text-black/60 uppercase tracking-wider playfair-display-600">
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
                                  <div className="text-sm font-semibold playfair-display-600">{item.title}</div>
                                  <div className="text-xs text-black/60 playfair-display-400">{item.description}</div>
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
                  {item.categories.length > 0 ? (
                    <div>
                      <button 
                        onClick={() => setOpenMobileItems(prev => ({...prev, [item.key]: !prev[item.key]}))}
                        className="flex items-center gap-2 text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1 w-full text-left playfair-display-500"
                      >
                        <div>
                          <div className="font-medium playfair-display-500">{item.title}</div>
                          <div className="text-xs text-black/60 mt-1 playfair-display-400">{item.description}</div>
                        </div>
                        <ChevronDown className={`h-4 w-4 transition-transform ${openMobileItems[item.key] ? 'rotate-180' : ''}`} />
                      </button>
                      {openMobileItems[item.key] && (
                        <div className="ml-4 space-y-4">
                          {item.categories.map((category) => (
                            <div key={category.title} className="space-y-2">
                              <h4 className="text-xs font-semibold text-black/60 uppercase tracking-wider playfair-display-600">
                                {category.title}
                              </h4>
                              <div className="space-y-2">
                                {category.items.map((categoryItem) => (
              <Link 
                                    key={categoryItem.title}
                                    href={categoryItem.href}
                                    className="flex items-start gap-2 rounded-lg p-2 hover:bg-black/5 focus-ring"
                onClick={() => setMobileMenuOpen(false)}
              >
                                    <span className="text-sm">{categoryItem.icon}</span>
                                    <div>
                                      <div className="text-xs font-semibold playfair-display-600">{categoryItem.title}</div>
                                      <div className="text-xs text-black/60 playfair-display-400">{categoryItem.description}</div>
                                    </div>
              </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
              <Link 
                      href={item.href} 
                      className="block text-black/80 hover:text-black focus-ring rounded-lg px-2 py-1 playfair-display-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                      <div>
                        <div className="font-medium playfair-display-500">{item.title}</div>
                        <div className="text-xs text-black/60 mt-1 playfair-display-400">{item.description}</div>
                      </div>
              </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <CTAButton href="#demo" className="w-full justify-center">
                  Book a demo
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
