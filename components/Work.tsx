"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BrowserWindow from "./BrowserWindow";

const projects = [
    {
        title: "Afrosoundtrack",
        category: "Fintech / Music Rights",
        description: "Royalty management engine tracking 1,600+ titles across 71+ global income sources.",
        url: "app.afrosoundtrack.com",
        imageColor: "bg-orange-500/10",
        tags: ["Next.js", "Fintech", "Analytics"],
        imageSrc: "/images/afro.png"
    },
    {
        title: "Pepcode Inc.",
        category: "SME Operating System",
        description: "Dual-layer financial suite (AuditMe & Owa) for Nigerian MSMEs.",
        url: "pepcodeinc.com",
        imageColor: "bg-blue-500/10",
        tags: ["PWA", "Offline-First", "B2B"],
        imageSrc: "/images/pepcode.png"
    },
    {
        title: "Yunimall",
        category: "E-Commerce",
        description: "Hyper-local marketplace for student entrepreneurs with geo-fenced logistics.",
        url: "yuni-mall.com",
        imageColor: "bg-purple-500/10",
        tags: ["Marketplace", "Logistics", "React"],
        imageSrc: "/images/yunimall.png"
    }
];

export default function Work() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
                            Selected Works
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Real-world problems. Industrial-strength solutions.
                        </p>
                    </div>
                    <Link href="/work" className="hidden md:flex items-center gap-2 text-primary font-bold hover:translate-x-1 transition-transform">
                        View All Case Studies <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.title} className="group cursor-pointer">
                            <div className="mb-6">
                                <BrowserWindow url={project.url} imageColor={project.imageColor} imageSrc={project.imageSrc} />
                            </div>

                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{project.category}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase font-bold px-2 py-1 bg-muted text-muted-foreground rounded-sm border border-border">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:hidden">
                    <Link href="/work" className="flex items-center gap-2 text-primary font-bold justify-center">
                        View All Projects <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
