"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "MVP Build (4-6 Weeks)",
        description: "Get your idea to market fast. Core features only. Ready for users.",
        features: ["iOS & Android App", "Admin Dashboard", "Payment Integration"],
        cta: "Start Building"
    },
    {
        title: "Product Rescue",
        description: "Developer ghosted you? App crashing? We audit, fix, and stabilize your code.",
        features: ["Code Audit", "Performance Fixes", "Security Patching"],
        cta: "Fix My App"
    },
    {
        title: "Fractional CTO",
        description: "We manage your roadmap, hiring, and tech strategy so you can focus on sales.",
        features: ["Tech Strategy", "Vendor Management", "Hiring Support"],
        cta: "Hire Leadership"
    }
];

export default function Services() {
    return (
        <section className="py-24 bg-muted border-t border-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
                        Simple Engagement Models
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        We don't bill by the hour. We bill by the outcome.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.title} className="bg-card p-8 rounded-2xl border border-border flex flex-col hover:border-primary/30 transition-colors">
                            <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                            <p className="text-muted-foreground mb-8 border-b border-border pb-8 flex-1">
                                {service.description}
                            </p>

                            <ul className="mb-8 space-y-3">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-muted-foreground text-sm">
                                        <Check className="w-4 h-4 text-electric-teal" /> {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/services" className="w-full py-3 bg-secondary text-secondary-foreground rounded font-bold text-center hover:bg-primary hover:text-white transition-colors">
                                {service.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
