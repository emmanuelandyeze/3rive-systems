"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-slate overflow-hidden">
      <Navbar />
      <Hero />
      <WhyUs />
      <Work />
      <Services />
      <Footer />
    </main>
  );
}
