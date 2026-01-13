"use client";

import { LineChart, Unlock, ShieldCheck } from "lucide-react";

const principles = [
    {
        icon: LineChart,
        title: "Business First, Tech Second",
        description: "We never build features just because they are 'cool.' If it doesn't solve a user problem or make you money, we cut it. We protect your budget like it's our own."
    },
    {
        icon: Unlock,
        title: "No Black Boxes (Radical Transparency)",
        description: "You own your IP from Day 1. No hostage situations. We give you the documentation, the keys, and the training so you are never dependent on us forever."
    },
    {
        icon: ShieldCheck,
        title: "The 'Anti-Ghosting' Guarantee",
        description: "We are a registered Nigerian company with a physical office in Lagos. We don't disappear when things get hard. We ship, we maintain, and we answer the phone."
    }
];

export default function WhyUs() {
    return (
        <section className="py-24 bg-background border-y border-border relative overflow-hidden">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
                        We Don't Just Write Code. <br className="hidden md:block" /> We Build Assets.
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        Most agencies celebrate lines of code. We celebrate your revenue. Here is the 3rive Standard:
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {principles.map((principle) => (
                        <div key={principle.title} className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group relative shadow-lg">
                            <div className="w-14 h-14 bg-deep-forest/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ring-1 ring-white/10">
                                <principle.icon className="w-7 h-7 text-electric-teal" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4 font-heading">{principle.title}</h3>
                            <p className="text-muted-foreground leading-relaxed font-body">
                                {principle.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
