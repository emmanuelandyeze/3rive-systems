"use client";

import { FlaskConical, ExternalLink, ShoppingCart, Database, Command, ArrowRight, Microchip } from "lucide-react";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function VenturesPage() {
  return (
    <div className="min-h-screen bg-navy-900 selection:bg-teal-400/30">
      {/* Navbar */}
      <header className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <Link href="/" className="text-xl font-bold text-white tracking-tight">
          3rive Systems
        </Link>
         <nav className="flex gap-6">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Home</Link>
            <Link href="/work" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Work</Link>
            <Link href="/process" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Process</Link>
            <Link href="/ventures" className="text-teal-400 text-sm font-medium border-b border-teal-400">Ventures</Link>
            <Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Contact</Link>
         </nav>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 border-b border-white/5 bg-gradient-to-b from-navy-900 to-slate-900/50 overflow-hidden relative">
        {/* Background Animation (Abstract Circuit) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
                <FlaskConical className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-mono text-slate-300 tracking-wide">INTERNAL R&D</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              The 3rive Lab
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Our internal R&D facility. We don't just build scalable systems for clients; 
              we build them for ourselves to test new technologies and solve our own problems.
            </p>
        </div>
      </section>

      {/* Philosophy Block */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Dogfooding Our Process.</h2>
            <p className="text-slate-400 leading-relaxed">
                Every product in the Lab is built using the standard 3rive Methodology. 
                Optimizations discovered in Yunimall or our internal tools are directly applied to client projects.
                If it breaks for us, we fix it before it breaks for you.
            </p>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Venture 1: Yunimall */}
            <div className="group rounded-2xl bg-slate-800/20 border border-slate-700 hover:border-green-500/50 transition-all duration-300 flex flex-col overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-slate-700 relative">
                     <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#00C853 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                     <ShoppingCart className="w-16 h-16 text-green-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-white">Yunimall</h3>
                        <span className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-xs font-mono font-medium border border-green-500/20">
                            BETA LIVE
                        </span>
                    </div>
                    <p className="text-sm font-mono text-slate-500 mb-4">The student-first marketplace.</p>
                    <p className="text-slate-400 mb-6 flex-1">
                        A multi-vendor e-commerce platform designed specifically for university ecosystems. 
                        Handles complex split-payments and inventory syncing.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {["Next.js 14", "Stripe Connect", "Real-time Inventory"].map(t => (
                            <span key={t} className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-700">{t}</span>
                        ))}
                    </div>
                    <button className="w-full py-3 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 group-hover:bg-green-600 group-hover:text-white">
                        Visit Marketplace <ExternalLink className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Venture 2: Royalty Data Engine */}
            <div className="group rounded-2xl bg-slate-800/20 border border-slate-700 hover:border-teal-400/50 transition-all duration-300 flex flex-col overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-slate-700 relative">
                     <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#00E5FF 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                     <Database className="w-16 h-16 text-teal-400" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-white">Royalty Engine</h3>
                        <span className="px-2 py-1 rounded bg-teal-400/10 text-teal-400 text-xs font-mono font-medium border border-teal-400/20">
                            IN DEV
                        </span>
                    </div>
                    <p className="text-sm font-mono text-slate-500 mb-4">Automated ingestion for labels.</p>
                    <p className="text-slate-400 mb-6 flex-1">
                        A complex data pipeline system that normalizes unstructured royalty statements 
                        into actionable financial data and visualization.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {["Python", "Supabase", "Data Queues"].map(t => (
                             <span key={t} className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-700">{t}</span>
                        ))}
                    </div>
                    <button className="w-full py-3 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 group-hover:bg-teal-500 group-hover:text-navy-900">
                        Join Waitlist <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Venture 3: Productivity Extensions */}
            <div className="group rounded-2xl bg-slate-800/20 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 flex flex-col overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-slate-700 relative">
                     <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#A855F7 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                     <Command className="w-16 h-16 text-purple-400" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-white max-w-[150px]">3rive Extensions</h3>
                        <span className="px-2 py-1 rounded bg-purple-400/10 text-purple-400 text-xs font-mono font-medium border border-purple-400/20">
                            LIVE
                        </span>
                    </div>
                    <p className="text-sm font-mono text-slate-500 mb-4">AI-powered workflow enhancers.</p>
                    <p className="text-slate-400 mb-6 flex-1">
                        A suite of lightweight Chrome extensions leveraging Gemini API to automate 
                        repetitive browser tasks and summarization.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {["Chrome API", "Gemini 1.5", "React"].map(t => (
                             <span key={t} className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-700">{t}</span>
                        ))}
                    </div>
                    <button className="w-full py-3 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 group-hover:bg-purple-500 group-hover:text-white">
                        View in Store <ExternalLink className="w-4 h-4" />
                    </button>
                </div>
            </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
