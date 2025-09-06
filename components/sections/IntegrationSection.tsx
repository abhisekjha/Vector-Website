import React from "react";
import { CheckCircle2, Clock, AlertTriangle, Play } from "lucide-react";
import { Container, SectionTitle, Button, ConnectorLogo } from "../ui/SharedComponents";

export const IntegrationSection: React.FC = () => {
  return (
    <>
      {/* Integration Command Center */}
      <section className="py-16">
        <Container>
          <SectionTitle 
            title="Integration Command Center" 
            subtitle="Monitor, manage, and maintain all your data connections with confidence"
            align="center"
          />
          <div className="rounded-3xl border border-black/10 bg-white p-8">
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-black/10 bg-green-50 p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-semibold playfair-display-600">Feed Health</span>
                </div>
                <div className="mt-2 text-sm text-black/70">95% within SLA</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-blue-50 p-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold playfair-display-600">Freshness</span>
                </div>
                <div className="mt-2 text-sm text-black/70">Avg 2.3 hours</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-orange-50 p-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold playfair-display-600">Issues</span>
                </div>
                <div className="mt-2 text-sm text-black/70">3 active alerts</div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="mb-4 font-semibold playfair-display-600">Feed Status</h4>
              <div className="space-y-2">
                {[
                  { name: "SAP GL Feed", status: "Healthy", lastUpdate: "2 hours ago", completeness: "98%" },
                  { name: "NIQ POS Data", status: "Healthy", lastUpdate: "1 hour ago", completeness: "100%" },
                  { name: "EDI 852 Invoices", status: "Warning", lastUpdate: "6 hours ago", completeness: "87%" },
                  { name: "Salesforce CRM", status: "Healthy", lastUpdate: "30 minutes ago", completeness: "99%" }
                ].map((feed, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border border-black/10 p-3">
                    <div className="flex items-center gap-3">
                      <div className={`h-2 w-2 rounded-full ${feed.status === 'Healthy' ? 'bg-green-500' : 'bg-orange-500'}`} />
                      <span className="font-medium">{feed.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-black/70">
                      <span>{feed.lastUpdate}</span>
                      <span>{feed.completeness}</span>
                      <Button variant="ghost" className="text-xs">
                        <Play className="h-3 w-3" />
                        Replay
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-xl bg-black/5 p-4">
              <h5 className="mb-2 font-semibold playfair-display-600">Safety Features</h5>
              <div className="grid grid-cols-1 gap-2 text-sm text-black/70 md:grid-cols-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Idempotent operations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Sandbox → prod promotion</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Approval workflows</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Connectors */}
      <section className="border-t border-black/10 bg-white py-16">
        <Container>
          <SectionTitle 
            title="Pre-built Connectors" 
            subtitle="Connect to your existing systems with confidence"
            align="center"
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <ConnectorLogo name="SAP" category="ERP" />
            <ConnectorLogo name="Oracle" category="ERP" />
            <ConnectorLogo name="Salesforce" category="CRM" />
            <ConnectorLogo name="NIQ" category="POS" />
            <ConnectorLogo name="Circana" category="POS" />
            <ConnectorLogo name="EDI 852" category="EDI" />
            <ConnectorLogo name="EDI 810" category="EDI" />
            <ConnectorLogo name="EDI 812" category="EDI" />
            <ConnectorLogo name="S3" category="Storage" />
            <ConnectorLogo name="BigQuery" category="Analytics" />
            <ConnectorLogo name="Snowflake" category="Analytics" />
            <ConnectorLogo name="Azure" category="Cloud" />
          </div>
        </Container>
      </section>
    </>
  );
};
