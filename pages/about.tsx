import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black">
      <Navbar />
      <main className="p-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold font-playfair">About Vector</h1>
          <p className="mt-2 text-black/70">Direction. Magnitude. ROI.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
