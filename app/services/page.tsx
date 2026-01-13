"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Rocket, ShieldAlert, Users } from "lucide-react";

const services = [
    {
        name: "MVP Build",
        price: "Starts at ₦3.5M",
        timeline: "4-6 Weeks",
        icon: Rocket,
        description: "We turn your idea into a functional, market-ready product. We focus on the core value proposition and cut out the fluff.",
        deliverables: [
            "High-Fidelity UI/UX Design",
            "Mobile App (iOS & Android) or Web App",
            "Admin Dashboard for Management",
            "Payment Architecture Setup",
            "Server Deployment & Domain Setup"
        ],
        cta: "Plan Your MVP",
        highlight: true
    },
    {
        name: "Product Rescue",
        price: "Audit Fee: ₦250k",
        timeline: "2-3 Weeks",
        icon: ShieldAlert,
        description: "Did your previous developer ghost you? Is your app constantly crashing? We audit your codebase, fix security holes, and stabilize the system.",
        deliverables: [
            "Comprehensive Code Audit Report",
            "Performance Optimization",
            "Bug Fixes & Refactoring",
            "Security Patching",
            "Architecture Documentation"
        ],
        cta: "Rescue My Project",
        highlight: false
    },
    {
        name: "Fractional CTO",
        price: "Retainer Model",
        timeline: "Ongoing",
        icon: Users,
        description: "For founders who need technical leadership but aren't ready for a full-time CTO salary. We become your strategic partner.",
        deliverables: [
            "Technical Roadmap Strategy",
            "Vendor & Third-Party Management",
            "Developer Hiring & Interviewing",
            "Code Review & Quality Assurance",
            "Investor Technical Due Diligence"
        ],
        cta: "Hire Leadership",
        highlight: false
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-foreground">
                        Our Services
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Simple, outcome-based engagement models. We don't sell hours; we sell shipped software.
                    </p>
                </div>

                <div id="pricing" className="grid lg:grid-cols-3 gap-8 mb-24">
                    {services.map((service) => (
                        <div
                            key={service.name}
                            className={`relative p-8 rounded-2xl border flex flex-col ${service.highlight
                                ? "bg-card border-primary ring-1 ring-primary/20 shadow-xl shadow-primary/5"
                                : "bg-card border-border hover:border-primary/50 transition-colors"
                                }`}
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                                <service.icon className="text-primary w-6 h-6" />
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-foreground mb-2">{service.name}</h3>
                                <div className="flex flex-col gap-1 mb-4">
                                    <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded w-fit">{service.timeline}</span>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                            </div>

                            <div className="flex-1 mb-8">
                                <h4 className="text-foreground text-sm font-bold mb-4 uppercase tracking-wider">What you get:</h4>
                                <ul className="space-y-4">
                                    {service.deliverables.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href="/contact"
                                className={`w-full py-3 rounded-md font-bold text-sm transition-colors text-center ${service.highlight
                                    ? "bg-primary text-primary-foreground hover:opacity-90"
                                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                                    }`}
                            >
                                {service.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
