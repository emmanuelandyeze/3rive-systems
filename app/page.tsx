import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import Services from "@/components/Services";
import Lab from "@/components/Lab";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-900 selection:bg-teal-400/30">
      <Hero />
      <Methodology />
      <Services />
      <Lab />
      <Footer />
    </main>
  );
}
