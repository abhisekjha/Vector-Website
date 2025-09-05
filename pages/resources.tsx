import Navbar from "@/components/Navbar";

export default function Resources() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <main className="p-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold">Resources</h1>
          <p className="mt-2 text-black/70">Whitepapers, guides, and customer stories.</p>
        </div>
      </main>
    </div>
  );
}
