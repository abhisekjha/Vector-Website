import React from "react";
import Head from "next/head";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service — Vector</title>
        <meta name="description" content="Vector Terms of Service - Legal terms and conditions for using our AI-powered trade automation platform." />
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
                  LEGAL
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Terms of
                <br />
                <span className="text-blue-600">Service</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto">
                Last updated: January 2025
              </p>
            </div>
          </Container>
        </section>

        {/* Terms Content */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">1. Acceptance of Terms</h2>
                <p className="playfair-display-400 text-black/70 mb-6">
                  By accessing and using Vector's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">2. Use License</h2>
                <p className="playfair-display-400 text-black/70 mb-4">
                  Permission is granted to temporarily download one copy of Vector's materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="playfair-display-400 text-black/70">modify or copy the materials</li>
                  <li className="playfair-display-400 text-black/70">use the materials for any commercial purpose or for any public display</li>
                  <li className="playfair-display-400 text-black/70">attempt to reverse engineer any software contained on Vector's website</li>
                  <li className="playfair-display-400 text-black/70">remove any copyright or other proprietary notations from the materials</li>
                </ul>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">3. Disclaimer</h2>
                <p className="playfair-display-400 text-black/70 mb-6">
                  The materials on Vector's website are provided on an 'as is' basis. Vector makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">4. Limitations</h2>
                <p className="playfair-display-400 text-black/70 mb-6">
                  In no event shall Vector or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vector's website, even if Vector or a Vector authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">5. Accuracy of Materials</h2>
                <p className="playfair-display-400 text-black/70 mb-6">
                  The materials appearing on Vector's website could include technical, typographical, or photographic errors. Vector does not warrant that any of the materials on its website are accurate, complete, or current. Vector may make changes to the materials contained on its website at any time without notice. However, Vector does not make any commitment to update the materials.
                </p>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">6. Links</h2>
                <p className="playfair-display-400 text-black/70 mb-6">
                  Vector has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Vector of the site. Use of any such linked website is at the user's own risk.
                </p>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">7. Modifications</h2>
                <p className="playfair-display-400 text-black/70 mb-6">
                  Vector may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">8. Governing Law</h2>
                <p className="playfair-display-400 text-black/70 mb-6">
                  These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">9. Contact Information</h2>
                <p className="playfair-display-400 text-black/70 mb-6">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="playfair-display-400 text-black/70">
                    Email: legal@vector.ai<br />
                    Address: Vector Technologies, Inc.<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        <Footer />
      </div>
    </>
  );
}
