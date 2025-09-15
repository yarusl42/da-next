"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-section">
        <h1 className="text-4xl md:text-5xl font-antonio font-bold mb-6">About Us</h1>
        <p className="text-base">
          This is a placeholder About page. We can migrate the full content next.
        </p>
      </main>
      <Footer />
    </div>
  );
}
