import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, User, Tag, Search, Filter } from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Blog post data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: "ai-revolution-trade-management",
    title: "The AI Revolution in Trade Management: What CPG Leaders Need to Know",
    excerpt: "How artificial intelligence is transforming trade promotion management, from predictive analytics to automated decision-making. Discover the key trends and opportunities.",
    author: "Sarah Chen",
    authorRole: "VP of Product Strategy",
    authorImage: "/blog/authors/sarah-chen.jpg",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Automation",
    tags: ["AI", "Trade Management", "CPG", "Automation"],
    featured: true,
    image: "/blog/ai-revolution-trade.jpg"
  },
  {
    id: "trade-promotion-roi-optimization",
    title: "Maximizing Trade Promotion ROI: A Data-Driven Approach",
    excerpt: "Learn how leading CPG companies are using advanced analytics and machine learning to optimize their trade promotion investments and achieve 25%+ ROI improvements.",
    author: "Michael Rodriguez",
    authorRole: "Head of Analytics",
    authorImage: "/blog/authors/michael-rodriguez.jpg",
    publishDate: "2024-01-12",
    readTime: "6 min read",
    category: "Analytics",
    tags: ["ROI", "Analytics", "Trade Promotions", "Optimization"],
    featured: true,
    image: "/blog/trade-promotion-roi.jpg"
  },
  {
    id: "future-of-accrual-management",
    title: "The Future of Accrual Management: From Manual to Intelligent",
    excerpt: "Explore how AI-powered accrual management is eliminating manual errors, improving accuracy by 95%, and providing real-time visibility into trade liabilities.",
    author: "Jennifer Liu",
    authorRole: "Finance Director",
    authorImage: "/blog/authors/jennifer-liu.jpg",
    publishDate: "2024-01-10",
    readTime: "7 min read",
    category: "Finance",
    tags: ["Accruals", "Finance", "Automation", "Accuracy"],
    featured: false,
    image: "/blog/accrual-management.jpg"
  },
  {
    id: "cpg-industry-trends-2024",
    title: "CPG Industry Trends 2024: The Digital Transformation Imperative",
    excerpt: "A comprehensive analysis of the key trends shaping the Consumer Packaged Goods industry, from sustainability to digital transformation and AI adoption.",
    author: "David Thompson",
    authorRole: "Industry Analyst",
    authorImage: "/blog/authors/david-thompson.jpg",
    publishDate: "2024-01-08",
    readTime: "10 min read",
    category: "Industry Insights",
    tags: ["CPG", "Trends", "Digital Transformation", "2024"],
    featured: false,
    image: "/blog/cpg-trends-2024.jpg"
  },
  {
    id: "data-quality-trade-operations",
    title: "Data Quality in Trade Operations: The Foundation of Success",
    excerpt: "Why data quality is critical for trade operations success and how to implement robust data governance practices that ensure accuracy and compliance.",
    author: "Amanda Foster",
    authorRole: "Data Governance Lead",
    authorImage: "/blog/authors/amanda-foster.jpg",
    publishDate: "2024-01-05",
    readTime: "9 min read",
    category: "Data Management",
    tags: ["Data Quality", "Governance", "Compliance", "Best Practices"],
    featured: false,
    image: "/blog/data-quality.jpg"
  },
  {
    id: "automation-roi-case-study",
    title: "Case Study: How a Fortune 500 CPG Company Achieved 40% Cost Reduction",
    excerpt: "An in-depth look at how a major consumer goods company implemented AI-powered trade automation and achieved remarkable results in just 6 months.",
    author: "Robert Kim",
    authorRole: "Customer Success Manager",
    authorImage: "/blog/authors/robert-kim.jpg",
    publishDate: "2024-01-03",
    readTime: "12 min read",
    category: "Case Studies",
    tags: ["Case Study", "ROI", "Automation", "Success Story"],
    featured: true,
    image: "/blog/automation-case-study.jpg"
  },
  {
    id: "integration-best-practices",
    title: "ERP Integration Best Practices for Trade Management Systems",
    excerpt: "Learn the essential strategies for successfully integrating trade management systems with existing ERP platforms, including common pitfalls to avoid.",
    author: "Lisa Wang",
    authorRole: "Integration Architect",
    authorImage: "/blog/authors/lisa-wang.jpg",
    publishDate: "2024-01-01",
    readTime: "8 min read",
    category: "Technology",
    tags: ["ERP", "Integration", "Best Practices", "Technology"],
    featured: false,
    image: "/blog/erp-integration.jpg"
  },
  {
    id: "compliance-audit-readiness",
    title: "Audit Readiness in the Digital Age: Building Compliant Trade Operations",
    excerpt: "How to ensure your trade operations meet the highest compliance standards with automated audit trails, real-time monitoring, and comprehensive reporting.",
    author: "James Patterson",
    authorRole: "Compliance Director",
    authorImage: "/blog/authors/james-patterson.jpg",
    publishDate: "2023-12-28",
    readTime: "11 min read",
    category: "Compliance",
    tags: ["Compliance", "Audit", "Regulations", "Best Practices"],
    featured: false,
    image: "/blog/audit-compliance.jpg"
  },
  {
    id: "machine-learning-trade-optimization",
    title: "Machine Learning for Trade Optimization: Beyond Traditional Analytics",
    excerpt: "Discover how advanced machine learning algorithms are revolutionizing trade optimization, from predictive modeling to real-time decision support.",
    author: "Dr. Maria Santos",
    authorRole: "Chief Data Scientist",
    authorImage: "/blog/authors/maria-santos.jpg",
    publishDate: "2023-12-25",
    readTime: "13 min read",
    category: "AI & Automation",
    tags: ["Machine Learning", "Optimization", "Predictive Analytics", "AI"],
    featured: false,
    image: "/blog/ml-optimization.jpg"
  },
  {
    id: "supply-chain-resilience",
    title: "Building Supply Chain Resilience Through Intelligent Trade Management",
    excerpt: "How intelligent trade management systems are helping companies build more resilient supply chains and respond to market disruptions.",
    author: "Kevin O'Brien",
    authorRole: "Supply Chain Director",
    authorImage: "/blog/authors/kevin-obrien.jpg",
    publishDate: "2023-12-22",
    readTime: "9 min read",
    category: "Supply Chain",
    tags: ["Supply Chain", "Resilience", "Risk Management", "Strategy"],
    featured: false,
    image: "/blog/supply-chain-resilience.jpg"
  },
  {
    id: "real-time-analytics-dashboard",
    title: "Building Real-Time Analytics Dashboards for Trade Operations",
    excerpt: "A technical deep-dive into creating effective real-time analytics dashboards that provide actionable insights for trade operations teams.",
    author: "Alex Chen",
    authorRole: "Senior Data Engineer",
    authorImage: "/blog/authors/alex-chen.jpg",
    publishDate: "2023-12-20",
    readTime: "10 min read",
    category: "Technology",
    tags: ["Analytics", "Dashboards", "Real-time", "Data Visualization"],
    featured: false,
    image: "/blog/analytics-dashboard.jpg"
  },
  {
    id: "change-management-digital-transformation",
    title: "Change Management in Digital Transformation: Lessons from Trade Automation",
    excerpt: "Key strategies for successfully managing organizational change during digital transformation initiatives, with insights from trade automation projects.",
    author: "Rachel Green",
    authorRole: "Change Management Consultant",
    authorImage: "/blog/authors/rachel-green.jpg",
    publishDate: "2023-12-18",
    readTime: "7 min read",
    category: "Change Management",
    tags: ["Change Management", "Digital Transformation", "Leadership", "Strategy"],
    featured: false,
    image: "/blog/change-management.jpg"
  },
  {
    id: "sustainability-trade-operations",
    title: "Sustainability in Trade Operations: The ESG Imperative",
    excerpt: "How trade operations can contribute to sustainability goals and ESG initiatives while maintaining profitability and operational efficiency.",
    author: "Emma Wilson",
    authorRole: "Sustainability Director",
    authorImage: "/blog/authors/emma-wilson.jpg",
    publishDate: "2023-12-15",
    readTime: "8 min read",
    category: "Sustainability",
    tags: ["Sustainability", "ESG", "Environmental", "Responsibility"],
    featured: false,
    image: "/blog/sustainability-trade.jpg"
  },
  {
    id: "predictive-analytics-trade-spend",
    title: "Predictive Analytics for Trade Spend: Forecasting the Future",
    excerpt: "How predictive analytics is revolutionizing trade spend forecasting, enabling companies to make more informed decisions and optimize their investments.",
    author: "Dr. Ahmed Hassan",
    authorRole: "Predictive Analytics Lead",
    authorImage: "/blog/authors/ahmed-hassan.jpg",
    publishDate: "2023-12-12",
    readTime: "11 min read",
    category: "Analytics",
    tags: ["Predictive Analytics", "Forecasting", "Trade Spend", "AI"],
    featured: false,
    image: "/blog/predictive-analytics.jpg"
  },
  {
    id: "security-privacy-trade-data",
    title: "Security and Privacy in Trade Data: Protecting Your Most Valuable Asset",
    excerpt: "Essential security and privacy considerations for trade data management, including compliance requirements and best practices for data protection.",
    author: "Tom Anderson",
    authorRole: "Chief Security Officer",
    authorImage: "/blog/authors/tom-anderson.jpg",
    publishDate: "2023-12-10",
    readTime: "9 min read",
    category: "Security",
    tags: ["Security", "Privacy", "Data Protection", "Compliance"],
    featured: false,
    image: "/blog/security-privacy.jpg"
  }
];

const categories = [
  "All",
  "AI & Automation",
  "Analytics",
  "Finance",
  "Industry Insights",
  "Data Management",
  "Case Studies",
  "Technology",
  "Compliance",
  "Supply Chain",
  "Change Management",
  "Sustainability",
  "Security"
];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Head>
        <title>Blog — Vector</title>
        <meta name="description" content="Insights, trends, and best practices in AI-powered trade automation. Stay updated with the latest in trade management technology." />
      </Head>
      
      <div className="min-h-screen bg-[#FAFAFA] text-black">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50" />
          <Container className="relative py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold playfair-display-600 rounded-full">
                  BLOG
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Insights & Trends in
                <br />
                <span className="text-blue-600">Trade Automation</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Stay ahead of the curve with expert insights, industry trends, and best practices in AI-powered trade management and automation.
              </p>
            </div>
          </Container>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Featured Articles</h2>
              <p className="text-xl playfair-display-400 text-black/70">
                Our most popular and impactful content
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl border border-black/10 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">📊</div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold playfair-display-600 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-black/60 mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold playfair-display-600 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-black/70 playfair-display-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold playfair-display-600">{post.author}</div>
                        <div className="text-xs text-black/60">{post.authorRole}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="inline-block px-2 py-1 bg-gray-100 text-xs text-black/70 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 playfair-display-500 font-semibold"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <Container>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-semibold playfair-display-600 transition-colors duration-200 ${
                    category === "All" 
                      ? "bg-blue-600 text-white" 
                      : "bg-white text-black/70 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* All Posts */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">All Articles</h2>
              <p className="text-xl playfair-display-400 text-black/70">
                Explore our complete library of insights and best practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl border border-black/10 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl opacity-20">📈</div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2 py-1 bg-white/90 text-black text-xs font-semibold playfair-display-600 rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-black/60 mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold playfair-display-600 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-black/70 playfair-display-400 mb-4 line-clamp-2 text-sm">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold playfair-display-600">{post.author}</div>
                        <div className="text-xs text-black/60">{post.authorRole}</div>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 playfair-display-500 font-semibold text-sm"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold playfair-display-600 mb-4">
                Stay Updated
              </h2>
              <p className="text-xl playfair-display-400 text-black/80 mb-8">
                Get the latest insights and trends in trade automation delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent playfair-display-400"
                />
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Container>
        </section>
        
        <Footer />
      </div>
    </>
  );
}
