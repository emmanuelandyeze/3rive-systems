"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ventures = [
    {
        name: "Tradeet Business",
        tag: "SaaS / Fintech",
        headline: "The Operating System for Nigerian SMEs.",
        spec: "WhatsApp-to-Bank Sync, Paystack Virtual Accounts, Offline-First Architecture.",
        description: "Automating inventory and payments for thousands of merchants.",
        colSpan: "md:col-span-2",
        bgGradient: "from-electric-teal/5 to-transparent",
        borderColor: "hover:border-electric-teal/50",
        textColor: "text-electric-teal"
    },
    {
        name: "Yunimall",
        tag: "E-Commerce",
        headline: "Student-First Marketplace.",
        spec: "Custom Next.js Engine",
        description: "Connecting campus buyers and sellers.",
        colSpan: "md:col-span-1",
        bgGradient: "from-purple-500/5 to-transparent",
        borderColor: "hover:border-purple-500/50",
        textColor: "text-purple-400"
    },
    {
        name: "Diagknos",
        tag: "Healthtech",
        headline: "Real-time Medical Booking.",
        spec: "Direct integration with labs",
        description: "Instant test scheduling for patients.",
        colSpan: "md:col-span-3",
        bgGradient: "from-copper-clay/5 to-transparent",
        borderColor: "hover:border-copper-clay/50",
        textColor: "text-copper-clay"
    },
];

export default function Ventures() {
    return (
        <section id="ventures" className="py-24 bg-deep-slate text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        Selected Ventures
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        We don't just write code; we build businesses. Here are a few of our internal
                        startups and partner projects.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {ventures.map((venture, index) => (
                        <motion.div
                            key={venture.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-8 rounded-2xl bg-lighter-slate border border-slate-border ${venture.borderColor} transition-colors overflow-hidden ${venture.colSpan} flex flex-col justify-between h-96`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${venture.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`text-xs font-mono px-2 py-1 rounded border border-white/10 ${venture.textColor} bg-white/5 uppercase tracking-wider`}>
                                        {venture.tag}
                                    </span>
                                    <ArrowUpRight className="text-slate-500 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2">
                                    {venture.name}
                                </h3>
                                <p className="text-lg font-medium text-slate-200 mb-4">
                                    {venture.headline}
                                </p>
                            </div>

                            <div className="relative z-10 mt-auto">
                                <p className="text-sm font-mono text-slate-500 mb-2 border-l-2 border-slate-700 pl-3">
                                    {venture.spec}
                                </p>
                                <p className="text-slate-400 text-sm">
                                    {venture.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
