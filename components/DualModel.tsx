"use client";

import { motion } from "framer-motion";
import { Handshake, FlaskConical } from "lucide-react";

export default function DualModel() {
    return (
        <section className="py-24 bg-deep-slate border-y border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Card 1: 3rive Partners */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative p-8 md:p-12 rounded-2xl bg-lighter-slate border border-slate-border hover:border-electric-teal/50 transition-colors overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-electric-teal/5 rounded-full blur-3xl group-hover:bg-electric-teal/10 transition-colors" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-xl bg-deep-slate border border-slate-700 flex items-center justify-center mb-8">
                                <Handshake className="w-8 h-8 text-electric-teal" />
                            </div>

                            <h3 className="text-3xl font-bold font-heading text-white mb-4">
                                3rive Partners
                            </h3>
                            <p className="text-sm font-mono text-electric-teal mb-6">
                // The Service Arm
                            </p>

                            <p className="text-slate-400 text-lg leading-relaxed">
                                For Non-Technical Founders. We become your fractional CTO.
                                No jargon, just shipped software. We turn your vision into
                                production-ready code.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: 3rive Labs */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative p-8 md:p-12 rounded-2xl bg-lighter-slate border border-slate-border hover:border-copper-clay/50 transition-colors overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-copper-clay/5 rounded-full blur-3xl group-hover:bg-copper-clay/10 transition-colors" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-xl bg-deep-slate border border-slate-700 flex items-center justify-center mb-8">
                                <FlaskConical className="w-8 h-8 text-copper-clay" />
                            </div>

                            <h3 className="text-3xl font-bold font-heading text-white mb-4">
                                3rive Labs
                            </h3>
                            <p className="text-sm font-mono text-copper-clay mb-6">
                // The Product Arm
                            </p>

                            <p className="text-slate-400 text-lg leading-relaxed">
                                Our Internal R&D. We build, launch, and scale our own products
                                like <span className="text-white font-medium">Tradeet</span> and
                                <span className="text-white font-medium"> Yunimall</span>.
                                We eat our own dog food.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
