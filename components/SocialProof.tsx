"use client";

import { motion } from "framer-motion";

const clients = [
    "Olumo Rock Hotel",
    "Diagknos",
    "AuditMe",
    "Afrosoundtrack",
    "Tradeet",
    "Yunimall",
];

export default function SocialProof() {
    return (
        <section className="py-12 bg-deep-slate border-b border-slate-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <p className="text-center text-sm font-mono text-slate-500 uppercase tracking-widest">
                    Trusted By ambitious teams
                </p>
            </div>

            <div className="relative flex">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-deep-slate to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-deep-slate to-transparent z-10" />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex gap-16 whitespace-nowrap"
                >
                    {/* Duplicate list for seamless loop */}
                    {[...clients, ...clients].map((client, index) => (
                        <span
                            key={`${client}-${index}`}
                            className="text-2xl font-heading font-bold text-slate-600 hover:text-slate-400 transition-colors cursor-default"
                        >
                            {client}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
