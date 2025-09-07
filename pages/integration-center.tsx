import React from "react";
import Head from "next/head";
import { ArrowRight, Server, AlertTriangle, CheckCircle2, Clock, Database, RefreshCw, Eye, Settings } from "lucide-react";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function IntegrationCenter() {
  return (
    <>
      <Head>
        <title>Integration Command Center — Vector</title>
        <meta name="description" content="Monitor feed SLAs, detect schema changes, and manage data quality with Vector's Integration Command Center." />
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
                  INTEGRATION COMMAND CENTER
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Integration Command Center
                <br />
                <span className="text-blue-600">SLA & Backfill Management</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                Monitor feed freshness, detect schema changes, and manage data quality with self-healing connectors and automated backfill operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/demo" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  See Integration Center
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="/platform" 
                  className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:bg-blue-50 transition-all duration-200"
                >
                  View Platform
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Integration Monitoring & Management</h2>
              <p className="text-xl playfair-display-400 text-black/70 max-w-3xl mx-auto">
                Keep your data feeds healthy with real-time monitoring, automated backfills, and self-healing connectors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">SLA Monitoring</h3>
                <p className="playfair-display-400 text-black/70 mb-4">
                  Real-time monitoring of feed freshness, completeness, and error rates with automated alerts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Freshness SLA tracking
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Completeness monitoring
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Automated alerts
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <RefreshCw className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Self-Healing Connectors</h3>
                <p className="playfair-display-400 text-black/70 mb-4">
                  Automatically detect and resolve integration issues with idempotent retries and safe backfill operations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Idempotent retries
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Safe backfill operations
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Schema drift detection
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold playfair-display-600 mb-4">Data Lineage</h3>
                <p className="playfair-display-400 text-black/70 mb-4">
                  Track data flow from source to decision with complete lineage and audit trails for compliance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    End-to-end lineage
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    Audit trail compliance
                  </li>
                  <li className="flex items-center gap-2 text-sm playfair-display-400 text-black/70">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    Impact analysis
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Feed Status Dashboard */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Feed Status Dashboard</h2>
              <p className="text-xl playfair-display-400 text-black/70 max-w-3xl mx-auto">
                Real-time monitoring of all your data feeds with health status, SLA compliance, and automated remediation.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
              <div className="grid gap-6">
                {/* Feed Status Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-800">SAP ERP</span>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">HEALTHY</span>
                    </div>
                    <div className="text-sm text-green-700">
                      <div>Last update: 2 hours ago</div>
                      <div>Completeness: 99.8%</div>
                      <div>SLA: Within target</div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-yellow-600" />
                        <span className="font-semibold text-yellow-800">NIQ POS</span>
                      </div>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">LATE</span>
                    </div>
                    <div className="text-sm text-yellow-700">
                      <div>Last update: 2 days ago</div>
                      <div>Completeness: 95.2%</div>
                      <div>SLA: 2 days overdue</div>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                        <span className="font-semibold text-red-800">EDI 812</span>
                      </div>
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">ERROR</span>
                    </div>
                    <div className="text-sm text-red-700">
                      <div>Last update: 5 days ago</div>
                      <div>Completeness: 87.1%</div>
                      <div>SLA: Schema mismatch</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                    <RefreshCw className="h-4 w-4" />
                    Run Backfill
                  </button>
                  <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                    <CheckCircle2 className="h-4 w-4" />
                    Test Connection
                  </button>
                  <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors">
                    <Eye className="h-4 w-4" />
                    View Lineage
                  </button>
                  <button className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-colors">
                    <Settings className="h-4 w-4" />
                    Configure
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Workflow Example */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Example: Repair Late POS Feed</h2>
              <p className="text-xl playfair-display-400 text-black/70 max-w-3xl mx-auto">
                See how the Integration Agent automatically detects and resolves a late POS feed issue.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-black/10 p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold playfair-display-600 mb-6">NIQ POS Feed Issue</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                        <span className="font-semibold text-red-800">SLA Breach Detected</span>
                      </div>
                      <p className="text-sm text-red-700">NIQ POS shows LATE (2d) - beyond 24h SLA</p>
                    </div>
                    
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <RefreshCw className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-blue-800">Self-Heal Initiated</span>
                      </div>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Agent runs Test connection</li>
                        <li>• Launches Backfill (idempotent)</li>
                        <li>• Updates lineage tracking</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-800">Resolution Complete</span>
                      </div>
                      <p className="text-sm text-green-700">Health returns to OK; stakeholders notified</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold playfair-display-600 mb-6">Integration Timeline</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold">SLA Breach Detected</div>
                        <div className="text-sm text-gray-600">NIQ POS feed 2 days late</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <RefreshCw className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Test & Backfill</div>
                        <div className="text-sm text-gray-600">Idempotent replay of missing data</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <Database className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Lineage Updated</div>
                        <div className="text-sm text-gray-600">Sources/versions tracked in ledger</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Health Restored</div>
                        <div className="text-sm text-gray-600">SLA compliance achieved</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-gray-50 rounded-xl p-4">
                    <div className="text-sm font-semibold mb-2">Outcome</div>
                    <div className="text-sm text-gray-600">
                      Avoids stale decisions; saves 1-2 hours of ad-hoc operations
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center">
              <h2 className="text-4xl font-bold playfair-display-600 mb-4">Ready to Monitor Your Integrations?</h2>
              <p className="text-xl playfair-display-400 text-black/70 max-w-3xl mx-auto mb-8">
                See how the Integration Command Center can help you maintain healthy data feeds and resolve issues automatically.
              </p>
              <a 
                href="/demo" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold playfair-display-600 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Schedule a Demo
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
}
