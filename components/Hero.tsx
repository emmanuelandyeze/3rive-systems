"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
            {/* Creative Background - Grid & Mesh */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-30" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] opacity-40" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        <Zap className="w-4 h-4" />
                        <span>Engineering for Growth</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading text-foreground leading-[1.1] mb-6 tracking-tight">
                        We don't just write code. We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Ship Products.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                        The venture-ready technical partner for founders.
                        We transform "napkin sketches" into globally scalable software.
                        <span className="block mt-4 font-medium text-foreground">Zero jargon. 100% Execution.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                        >
                            Start Building
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <button
                            className="px-8 py-4 bg-card border border-border text-foreground font-bold rounded-full hover:bg-muted transition-colors flex items-center justify-center gap-2 text-lg"
                        >
                            View Our Work
                        </button>
                    </div>
                </motion.div>

                {/* Visual Content - Napkin to App Transition */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[500px] w-full hidden lg:block"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Napkin Sketch */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-80 bg-[#fdfdfd] text-neutral-800 p-6 rounded shadow-xl -rotate-6 z-10 border border-neutral-200">
                            <div className="font-handwriting text-2xl font-bold mb-4">My App Idea</div>
                            <div className="w-full h-2 bg-neutral-200 mb-2 rounded" />
                            <div className="w-3/4 h-2 bg-neutral-200 mb-6 rounded" />
                            <div className="grid grid-cols-2 gap-2">
                                <div className="h-16 bg-neutral-100 border border-neutral-300 border-dashed rounded" />
                                <div className="h-16 bg-neutral-100 border border-neutral-300 border-dashed rounded" />
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="absolute z-20 bg-primary p-2 rounded-full border border-primary-foreground/20 shadow-lg">
                            <ArrowRight className="text-primary-foreground w-6 h-6" />
                        </div>

                        {/* High Fidelity UI */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-[400px] bg-card border-4 border-border rounded-3xl p-1 shadow-2xl rotate-6 z-10 overflow-hidden">
                            <div className="bg-card h-full w-full rounded-2xl overflow-hidden relative">
                                {/* App Header */}
                                <div className="h-12 bg-sidebar border-b border-border flex items-center justify-between px-4">
                                    <div className="w-4 h-4 bg-primary rounded-full" />
                                    <div className="w-20 h-2 bg-muted rounded" />
                                </div>
                                {/* App Body */}
                                <div className="p-4 space-y-3">
                                    <div className="w-full h-32 bg-primary/10 rounded-xl" />
                                    <div className="w-full h-10 bg-muted rounded-lg" />
                                    <div className="flex gap-2">
                                        <div className="w-1/2 h-24 bg-muted rounded-lg" />
                                        <div className="w-1/2 h-24 bg-muted rounded-lg" />
                                    </div>
                                </div>
                                {/* Floating Success Notification */}
                                <div className="absolute bottom-4 left-4 right-4 bg-primary text-primary-foreground text-xs font-bold p-3 rounded-lg text-center shadow-lg animate-bounce">
                                    Build Completed!
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
