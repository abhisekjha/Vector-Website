import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, Tag, Share2, Bookmark, ArrowLeft, DollarSign, CheckCircle2, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function FutureOfAccrualManagement() {
  return (
    <>
      <Head>
        <title>The Future of Accrual Management: From Manual to Intelligent — Vector Blog</title>
        <meta name="description" content="Explore how AI-powered accrual management is eliminating manual errors, improving accuracy by 95%, and providing real-time visibility into trade liabilities." />
        <meta name="keywords" content="accrual management, AI, finance automation, trade liabilities, accuracy" />
        <meta property="og:title" content="The Future of Accrual Management: From Manual to Intelligent" />
        <meta property="og:description" content="Explore how AI-powered accrual management is eliminating manual errors and improving accuracy by 95%." />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Future of Accrual Management: From Manual to Intelligent" />
        <meta name="twitter:description" content="Explore how AI-powered accrual management is eliminating manual errors and improving accuracy by 95%." />
      </Head>
      
      <div className="min-h-screen bg-[#FAFAFA] text-black">
        <Navbar />
        
        {/* Article Header */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 playfair-display-500 mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold playfair-display-600 rounded-full">
                  Finance
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold playfair-display-600 mb-6 leading-tight">
                The Future of Accrual Management: From Manual to Intelligent
              </h1>
              
              <p className="text-xl playfair-display-400 text-black/70 mb-8">
                Explore how AI-powered accrual management is eliminating manual errors, improving accuracy by 95%, and providing real-time visibility into trade liabilities through intelligent automation and predictive analytics.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-black/60 mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Jennifer Liu</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>January 10, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>7 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  <span>Finance Director</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Bookmark className="h-4 w-4" />
                  Save
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-12">
                  <h2 className="text-2xl font-semibold playfair-display-600 mb-4">Executive Summary</h2>
                  <p className="text-lg playfair-display-400 text-black/80">
                    Traditional accrual management is being revolutionized by artificial intelligence, delivering unprecedented accuracy, real-time visibility, and automated decision-making. Companies implementing AI-powered accrual systems are seeing 95% accuracy improvements, 80% reduction in manual processing time, and complete real-time visibility into trade liabilities. This transformation is reshaping how finance teams manage one of their most critical processes.
                  </p>
                </div>

                <h2 className="text-3xl font-semibold playfair-display-600 mb-6">The Current State of Accrual Management</h2>
                
                <p className="text-lg playfair-display-400 text-black/80 mb-6">
                  Traditional accrual management has long been characterized by manual processes, delayed adjustments, and limited visibility. Finance teams typically face these challenges:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold playfair-display-600 mb-3 text-red-800">Manual Processing Challenges</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                        <span>Manual data entry and calculation errors</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                        <span>Delayed accrual adjustments and settlements</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                        <span>Limited real-time visibility into liabilities</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                        <span>Time-consuming reconciliation processes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold playfair-display-600 mb-3 text-orange-800">Business Impact</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                        <span>Inaccurate financial reporting and forecasting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                        <span>Increased audit risks and compliance issues</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                        <span>Poor cash flow management and planning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                        <span>Resource-intensive manual processes</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-semibold playfair-display-600 mb-6">How AI is Transforming Accrual Management</h2>
                
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">1. Intelligent Data Processing and Validation</h3>
                <p className="text-lg playfair-display-400 text-black/80 mb-6">
                  AI-powered systems can automatically process and validate accrual data from multiple sources:
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold playfair-display-600 mb-2">Automated Data Extraction</h4>
                      <p className="playfair-display-400 text-black/80">
                        AI systems can extract accrual data from contracts, invoices, POS systems, and other sources automatically, eliminating manual data entry and reducing errors by 95%.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-blue-600">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold playfair-display-600 mb-2">Real-Time Validation</h4>
                      <p className="playfair-display-400 text-black/80">
                        Machine learning algorithms validate accrual calculations against business rules, historical patterns, and market conditions in real-time, flagging anomalies and ensuring accuracy.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-blue-600">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold playfair-display-600 mb-2">Intelligent Exception Handling</h4>
                      <p className="playfair-display-400 text-black/80">
                        AI systems can automatically resolve common exceptions and route only complex issues to human reviewers, reducing manual intervention by 80%.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">2. Predictive Accrual Management</h3>
                <p className="text-lg playfair-display-400 text-black/80 mb-6">
                  Advanced AI models can predict accrual requirements and optimize cash flow management:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                      <h4 className="text-lg font-semibold playfair-display-600">Predictive Modeling</h4>
                    </div>
                    <p className="playfair-display-400 text-black/80 text-sm">
                      Machine learning models analyze historical data, market trends, and promotion performance to predict future accrual requirements with 90%+ accuracy.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <DollarSign className="h-6 w-6 text-blue-600" />
                      <h4 className="text-lg font-semibold playfair-display-600">Cash Flow Optimization</h4>
                    </div>
                    <p className="playfair-display-400 text-black/80 text-sm">
                      AI systems optimize accrual timing and amounts to improve cash flow management and reduce working capital requirements.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">3. Real-Time Visibility and Monitoring</h3>
                <p className="text-lg playfair-display-400 text-black/80 mb-6">
                  AI-powered dashboards provide comprehensive real-time visibility into accrual status and performance:
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-semibold playfair-display-600 mb-3">Real-World Example</h4>
                  <p className="playfair-display-400 text-black/80">
                    A leading CPG company implemented AI-powered accrual management and achieved 95% accuracy in accrual calculations while reducing processing time from 5 days to 2 hours. The system provides real-time visibility into $500M+ in trade liabilities across 200+ retail partners.
                  </p>
                </div>

                <h2 className="text-3xl font-semibold playfair-display-600 mb-6">Key Benefits of AI-Powered Accrual Management</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <div className="bg-green-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold playfair-display-600 mb-3 text-green-800">Operational Excellence</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                          <span>95% improvement in accuracy</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                          <span>80% reduction in manual processing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                          <span>Real-time visibility and monitoring</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                          <span>Automated exception handling</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold playfair-display-600 mb-3 text-blue-800">Financial Impact</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          <span>Improved cash flow management</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          <span>Reduced working capital requirements</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          <span>Better financial forecasting accuracy</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          <span>Lower operational costs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-purple-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold playfair-display-600 mb-3 text-purple-800">Compliance & Risk</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                          <span>Audit-grade documentation and trails</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                          <span>Reduced compliance risks</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                          <span>Automated regulatory reporting</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                          <span>Enhanced data security and privacy</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold playfair-display-600 mb-3 text-orange-800">Strategic Benefits</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                          <span>Faster decision-making capabilities</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                          <span>Improved resource allocation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                          <span>Enhanced competitive positioning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                          <span>Scalable and future-ready processes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-semibold playfair-display-600 mb-6">Implementation Best Practices</h2>
                
                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">1. Start with Data Quality</h3>
                <p className="text-lg playfair-display-400 text-black/80 mb-6">
                  The foundation of successful AI-powered accrual management is high-quality data:
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0" />
                    <span className="playfair-display-400 text-black/80">Audit and clean existing accrual data to ensure accuracy and completeness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0" />
                    <span className="playfair-display-400 text-black/80">Establish data governance policies and procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0" />
                    <span className="playfair-display-400 text-black/80">Implement automated data validation and quality monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0" />
                    <span className="playfair-display-400 text-black/80">Create comprehensive data lineage and audit trails</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold playfair-display-600 mb-4">2. Phased Implementation Approach</h3>
                <p className="text-lg playfair-display-400 text-black/80 mb-6">
                  Implement AI-powered accrual management in phases to minimize risk and ensure success:
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold playfair-display-600 mb-2">Phase 1: Foundation (Months 1-2)</h4>
                      <p className="playfair-display-400 text-black/80">
                        Focus on data quality, system integration, and basic automation for high-volume, low-complexity accruals.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-blue-600">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold playfair-display-600 mb-2">Phase 2: Expansion (Months 3-4)</h4>
                      <p className="playfair-display-400 text-black/80">
                        Extend automation to more complex accruals and implement predictive analytics capabilities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-blue-600">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold playfair-display-600 mb-2">Phase 3: Optimization (Months 5-6)</h4>
                      <p className="playfair-display-400 text-black/80">
                        Implement advanced AI features, optimize performance, and establish continuous improvement processes.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-semibold playfair-display-600 mb-6">The Future of Accrual Management</h2>
                
                <p className="text-lg playfair-display-400 text-black/80 mb-6">
                  The future of accrual management will be characterized by even greater automation, intelligence, and integration:
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-semibold playfair-display-600 mb-2">Fully Autonomous Accrual Management</h4>
                    <p className="playfair-display-400 text-black/80">
                      AI systems that can automatically manage the entire accrual lifecycle from creation to settlement, with minimal human intervention while maintaining full audit trails and compliance.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-600 pl-6">
                    <h4 className="text-lg font-semibold playfair-display-600 mb-2">Predictive Financial Planning</h4>
                    <p className="playfair-display-400 text-black/80">
                      Advanced AI models that can predict future accrual requirements, optimize cash flow, and provide strategic financial planning insights based on market conditions and business performance.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h4 className="text-lg font-semibold playfair-display-600 mb-2">Real-Time Financial Intelligence</h4>
                    <p className="playfair-display-400 text-black/80">
                      Continuous monitoring and analysis of accrual performance with real-time alerts, recommendations, and automated adjustments to optimize financial outcomes.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-semibold playfair-display-600 mb-4">Key Takeaways</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0" />
                      <span className="playfair-display-400">AI-powered accrual management delivers 95% accuracy improvements and 80% reduction in manual processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0" />
                      <span className="playfair-display-400">Real-time visibility and predictive analytics transform financial planning and cash flow management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0" />
                      <span className="playfair-display-400">Successful implementation requires strong data foundations and phased approach</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0" />
                      <span className="playfair-display-400">The future will see fully autonomous accrual management with predictive financial intelligence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Author Bio */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold playfair-display-600 mb-2">About the Author</h3>
                    <h4 className="text-lg font-semibold playfair-display-600 mb-2">Jennifer Liu</h4>
                    <p className="text-blue-600 playfair-display-500 mb-4">Finance Director</p>
                    <p className="playfair-display-400 text-black/80">
                      Jennifer has over 15 years of experience in CPG finance and has led multiple digital transformation initiatives. She specializes in accrual management, financial automation, and AI implementation in finance operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-semibold playfair-display-600 mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/ai-revolution-trade-management" className="group">
                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                    <h4 className="text-lg font-semibold playfair-display-600 mb-2 group-hover:text-blue-600">
                      The AI Revolution in Trade Management: What CPG Leaders Need to Know
                    </h4>
                    <p className="text-sm playfair-display-400 text-black/70">
                      How artificial intelligence is transforming trade promotion management and decision-making processes.
                    </p>
                  </div>
                </Link>
                
                <Link href="/blog/automation-roi-case-study" className="group">
                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                    <h4 className="text-lg font-semibold playfair-display-600 mb-2 group-hover:text-blue-600">
                      Case Study: How a Fortune 500 CPG Company Achieved 40% Cost Reduction
                    </h4>
                    <p className="text-sm playfair-display-400 text-black/70">
                      An in-depth look at how a major consumer goods company implemented AI-powered trade automation.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold playfair-display-600 mb-4">
                Ready to Transform Your Accrual Management?
              </h2>
              <p className="text-xl playfair-display-400 text-black/80 mb-8">
                See how Vector's AI-powered platform can revolutionize your accrual processes and deliver 95% accuracy improvements.
              </p>
              
              <Link 
                href="/demo" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Schedule a Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </Container>
        </section>
        
        <Footer />
      </div>
    </>
  );
}
