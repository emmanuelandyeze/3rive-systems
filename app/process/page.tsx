"use client";

import { Compass, Hammer, Rocket, Slack, Github, Server, Shield, CheckCircle, Terminal, Database, MessageSquare } from "lucide-react";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ProcessPage() {
    return (
        <div className="min-h-screen bg-navy-900 selection:bg-teal-400/30">
            {/* Navbar (Consistent with Work Page) */}
            <header className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
                <Link href="/" className="text-xl font-bold text-white tracking-tight">
                    3rive Systems
                </Link>
                <nav className="flex gap-6">
                    <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Home</Link>
                    <Link href="/work" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Work</Link>
                    <Link href="/process" className="text-teal-400 text-sm font-medium border-b border-teal-400">Process</Link>
                    <Link href="/ventures" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Ventures</Link>
                    <Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Contact</Link>
                </nav>
            </header>

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 border-b border-white/5 bg-gradient-to-b from-navy-900 to-slate-900/50">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
                        <Compass className="w-4 h-4 text-teal-400" />
                        <span className="text-sm font-mono text-slate-300 tracking-wide">BLUEPRINT V1.0</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Our Engineering Standard
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Predictable outcomes require a rigorous process. Here is how we move from raw idea to deployed system.
                    </p>
                </div>
            </section>

            {/* 3-Step Framework */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="relative">
                    {/* Timeline Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>

                    {/* Phase 1 */}
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24 items-center">
                        <div className="md:text-right order-2 md:order-1">
                            <div className="text-teal-400 font-mono text-6xl font-bold opacity-20 mb-2">01</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Architect (The Blueprint)</h3>
                            <p className="text-slate-400 leading-relaxed">
                                We start with database schema design (ERD), API specification, and technical strategy.
                                No code is written until the logic is sound and the roadmap is clear.
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-start order-1 md:order-2">
                            <div className="relative w-24 h-24 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center group hover:border-teal-400 transition-colors">
                                <div className="absolute -left-6 md:-left-16 top-1/2 w-6 md:w-16 h-px bg-teal-400 hidden md:block"></div>
                                <Compass className="w-10 h-10 text-teal-400" />
                            </div>
                        </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24 items-center">
                        <div className="flex justify-center md:justify-end order-1">
                            <div className="relative w-24 h-24 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center group hover:border-teal-400 transition-colors">
                                <div className="absolute -right-6 md:-right-16 top-1/2 w-6 md:w-16 h-px bg-teal-400 hidden md:block"></div>
                                <Hammer className="w-10 h-10 text-teal-400" />
                            </div>
                        </div>
                        <div className="order-2">
                            <div className="text-teal-400 font-mono text-6xl font-bold opacity-20 mb-2">02</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Construct (The Build)</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Rapid development using type-safe languages (TypeScript). Weekly sprints,
                                rigorous code reviews, and continuous integration ensure a clean codebase.
                            </p>
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div className="md:text-right order-2 md:order-1">
                            <div className="text-teal-400 font-mono text-6xl font-bold opacity-20 mb-2">03</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Scale (The Launch)</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Stress testing, deployment to edge networks (Vercel/Cloudflare), and setting up
                                comprehensive monitoring and analytics.
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-start order-1 md:order-2">
                            <div className="relative w-24 h-24 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center group hover:border-teal-400 transition-colors">
                                <div className="absolute -left-6 md:-left-16 top-1/2 w-6 md:w-16 h-px bg-teal-400 hidden md:block"></div>
                                <Rocket className="w-10 h-10 text-teal-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tooling Stack */}
            <section className="py-24 bg-slate-900/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">The Engine Room</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {[
                            { name: "Slack", icon: MessageSquare, role: "Communication" },
                            { name: "Linear", icon: CheckCircle, role: "Project Management" },
                            { name: "GitHub", icon: Github, role: "Version Control" },
                            { name: "Supabase", icon: Database, role: "Infrastructure" },
                            { name: "Vercel", icon: Server, role: "Deployment" },
                        ].map((tool) => (
                            <div key={tool.name} className="p-6 rounded-xl bg-slate-800/50 border border-slate-800 hover:border-teal-400/30 transition-all text-center group">
                                <div className="inline-flex p-3 rounded-lg bg-slate-800 mb-4 group-hover:scale-110 transition-transform">
                                    <tool.icon className="w-6 h-6 text-slate-300 group-hover:text-white" />
                                </div>
                                <h4 className="text-white font-bold mb-1">{tool.name}</h4>
                                <p className="text-xs text-slate-500 font-mono uppercase">{tool.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* QA Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Zero-Compromise Quality.</h2>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        We don't ship broken code. Our quality assurance protocol is baked into every step
                        of the development lifecycle, not just tacked on at the end.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-teal-400 text-navy-900 font-bold rounded-lg hover:bg-teal-300 transition-colors">
                        Book a Technical Discovery
                    </Link>
                </div>
                <div className="space-y-6">
                    {[
                        { title: "Type-Safety First", desc: "100% TypeScript coverage to catch errors at compile time.", icon: Terminal },
                        { title: "Automated Testing", desc: "CI/CD pipelines run unit and integration tests on every commit.", icon: CheckCircle },
                        { title: "Security by Design", desc: "RLS policies, sanitized inputs, and industry-standard auth.", icon: Shield },
                    ].map((item) => (
                        <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <div className="shrink-0 w-12 h-12 rounded-lg bg-teal-400/10 flex items-center justify-center text-teal-400">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
