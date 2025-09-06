// Example usage of the Footer component
import React from "react";
import { Footer } from "./Footer";

// Simple page layout with footer
export const FooterExample: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Your page content goes here */}
      <main className="p-8">
        <h1 className="text-3xl font-semibold font-playfair">Your Page Content</h1>
        <p className="mt-2 text-black/70">This is where your main content would go.</p>
      </main>
      
      {/* Footer automatically added at the bottom */}
      <Footer />
    </div>
  );
};

export default FooterExample;
