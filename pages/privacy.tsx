import React from "react";
import Head from "next/head";
import { Container } from "@/components/ui/SharedComponents";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Vector</title>
        <meta name="description" content="Vector Privacy Policy - How we collect, use, and protect your personal information and data." />
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
                  PRIVACY
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold playfair-display-600 mb-6 leading-tight">
                Privacy
                <br />
                <span className="text-blue-600">Policy</span>
              </h1>
              
              <p className="text-lg playfair-display-400 text-black/70 max-w-3xl mx-auto">
                Last updated: January 2025
              </p>
            </div>
          </Container>
        </section>

        {/* Privacy Content */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">1. Information We Collect</h2>
                <p className="playfair-display-400 text-black/70 mb-4">
                  We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="playfair-display-400 text-black/70">Name, email address, and contact information</li>
                  <li className="playfair-display-400 text-black/70">Company information and job title</li>
                  <li className="playfair-display-400 text-black/70">Trade and financial data you choose to upload</li>
                  <li className="playfair-display-400 text-black/70">Communication preferences and support requests</li>
                </ul>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">2. How We Use Your Information</h2>
                <p className="playfair-display-400 text-black/70 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="playfair-display-400 text-black/70">Provide, maintain, and improve our services</li>
                  <li className="playfair-display-400 text-black/70">Process transactions and send related information</li>
                  <li className="playfair-display-400 text-black/70">Send technical notices and support messages</li>
                  <li className="playfair-display-400 text-black/70">Respond to your comments and questions</li>
                  <li className="playfair-display-400 text-black/70">Develop new products and services</li>
                </ul>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">3. Information Sharing</h2>
                <p className="playfair-display-400 text-black/70 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="playfair-display-400 text-black/70">With your explicit consent</li>
                  <li className="playfair-display-400 text-black/70">To comply with legal obligations</li>
                  <li className="playfair-display-400 text-black/70">To protect our rights and prevent fraud</li>
                  <li className="playfair-display-400 text-black/70">With service providers who assist in our operations</li>
                </ul>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">4. Data Security</h2>
                <p className="playfair-display-400 text-black/70 mb-6">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security audits.
                </p>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">5. Data Retention</h2>
                <p className="playfair-display-400 text-black/70 mb-6">
                  We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                </p>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">6. Your Rights</h2>
                <p className="playfair-display-400 text-black/70 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="playfair-display-400 text-black/70">Access to your personal information</li>
                  <li className="playfair-display-400 text-black/70">Correction of inaccurate information</li>
                  <li className="playfair-display-400 text-black/70">Deletion of your personal information</li>
                  <li className="playfair-display-400 text-black/70">Portability of your data</li>
                  <li className="playfair-display-400 text-black/70">Objection to processing</li>
                </ul>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">7. Cookies and Tracking</h2>
                <p className="playfair-display-400 text-black/70 mb-6">
                  We use cookies and similar tracking technologies to enhance your experience on our website and to analyze usage patterns. You can control cookie settings through your browser preferences.
                </p>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">8. International Transfers</h2>
                <p className="playfair-display-400 text-black/70 mb-6">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this policy.
                </p>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">9. Changes to This Policy</h2>
                <p className="playfair-display-400 text-black/70 mb-6">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-semibold playfair-display-600 mb-4">10. Contact Us</h2>
                <p className="playfair-display-400 text-black/70 mb-6">
                  If you have any questions about this privacy policy or our data practices, please contact us at:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="playfair-display-400 text-black/70">
                    Email: privacy@vector.ai<br />
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
