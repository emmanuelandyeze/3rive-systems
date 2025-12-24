"use client";

import { useState } from "react";
import { ArrowRight, Code2, Database, Globe, ShoppingCart, Terminal, Activity, ChevronDown, ChevronUp } from "lucide-react";
import Footer from "@/components/Footer";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  category: "Fintech" | "E-Commerce" | "Internal Tools" | "AI Systems";
  description: string;
  challenge: string;
  tech: string[];
  impact: string;
  details: {
    problem: string;
    architecture: string;
    codeSnippet?: string;
  };
};

const projects: Project[] = [
  {
    id: "royalty-engine",
    title: "Royalty Data Engine",
    category: "Fintech",
    description: "Automated ledger for tracking intellectual property rights and distributing royalties.",
    challenge: "Real-time Data",
    tech: ["Python", "PostgreSQL", "Supabase"],
    impact: "Processed 50k transactions/sec with zero latency.",
    details: {
      problem: "The client was managing royalty splits manually in spreadsheets, leading to a 3-month backlog and 15% error rate in payouts.",
      architecture: "We built an event-driven architecture using PostgreSQL triggers and Supabase Edge Functions. A precise ledger system ensures atomic transactions for every stream/sale event.",
      codeSnippet: `def handle_royalty_event(event):
    with db.transaction():
        rate = get_contract_rate(event.user_id)
        payout = calculate_share(event.amount, rate)
        ledger.append({
            "user_id": event.user_id,
            "amount": payout,
            "timestamp": now()
        })
    return "PROCESSED"`
    }
  },
  {
    id: "yunimall",
    title: "Yunimall Marketplace",
    category: "E-Commerce",
    description: "Next-gen headless commerce engine for high-volume marketplaces.",
    challenge: "High Concurrency",
    tech: ["Next.js", "Node.js", "Stripe Connect"],
    impact: "Scaled to 1M+ active users during flash sales.",
    details: {
      problem: "Existing monolithic platforms crashed during peak traffic events (Black Friday). The vendor onboarding process was also slow and manual.",
      architecture: "We migrated to a headless Next.js frontend with a Node.js microservices backend. Stripe Connect automates vendor payouts, and Redis caches inventory states."
    }
  },
  {
    id: "chrome-ai",
    title: "Chrome AI Assistant",
    category: "AI Systems",
    description: "Browser extension that sums up articles and automates form filling.",
    challenge: "Context integration",
    tech: ["JavaScript", "Gemini API", "Chrome Extension API"],
    impact: "Reduced research time by 40% for internal analysts.",
    details: {
      problem: "Analysts were spending hours manually summarizing news feeds and entering data into CRMs.",
      architecture: "A Chrome Extension injects a sidebar that grabs page content, sends it to the Gemini 1.5 Pro API for summarization, and auto-populates internal dashboard forms."
    }
  }
];

const categories = ["All", "Fintech", "E-Commerce", "Internal Tools", "AI Systems"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-navy-900 selection:bg-teal-400/30">
      {/* Navbar Placeholder (Consistent with Home) */}
      <header className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <Link href="/" className="text-xl font-bold text-white tracking-tight">
          3rive Systems
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Home</Link>
          <Link href="/work" className="text-teal-400 text-sm font-medium border-b border-teal-400">Work</Link>
          <Link href="/process" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Process</Link>
          <Link href="/ventures" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Ventures</Link>
          <Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Contact</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 border-b border-white/5 bg-gradient-to-b from-navy-900 to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
            <Activity className="w-4 h-4 text-teal-400" />
            <span className="text-sm font-mono text-slate-300 tracking-wide">PORTFOLIO ONLINE</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Engineering Showcase
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            A selection of mission-critical systems and scalable applications we've engineered.
            We solve the hard problems so you don't have to.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto min-h-screen">

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === cat
                ? "bg-teal-400 text-navy-900"
                : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-all duration-300 ${expandedProject === project.id ? "ring-1 ring-teal-400/50" : "hover:border-slate-700"
                }`}
            >
              <div
                className="p-8 cursor-pointer flex flex-col md:flex-row md:items-start justify-between gap-6"
                onClick={() => toggleExpand(project.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20 text-xs font-mono uppercase tracking-wider">
                      {project.challenge}
                    </div>
                  </div>
                  <p className="text-slate-400 text-lg mb-6 max-w-3xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded bg-slate-800 text-slate-400 text-xs font-mono border border-slate-700 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-6 text-right min-w-[200px]">
                  <div className="text-green-500 text-sm font-mono font-bold flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    IMPACT
                  </div>
                  <div className="text-slate-300 font-medium">
                    {project.impact}
                  </div>
                  <div className={`mt-auto transition-transform duration-300 ${expandedProject === project.id ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-slate-500 group-hover:text-teal-400" />
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${expandedProject === project.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="p-8 border-t border-slate-800 bg-navy-900/50 grid md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-red-500 rounded-full" /> The Problem
                      </h4>
                      <p className="text-slate-400 leading-relaxed mb-8">
                        {project.details.problem}
                      </p>

                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-teal-400 rounded-full" /> The Architecture
                      </h4>
                      <p className="text-slate-400 leading-relaxed">
                        {project.details.architecture}
                      </p>
                    </div>

                    {project.details.codeSnippet && (
                      <div className="relative group/code">
                        <div className="absolute -top-3 right-4 px-2 py-1 bg-slate-800 text-xs text-slate-400 font-mono rounded border border-slate-700">
                          core_logic.py
                        </div>
                        <pre className="p-6 rounded-xl bg-black/50 border border-slate-800 font-mono text-sm text-slate-300 overflow-x-auto">
                          <code>{project.details.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
