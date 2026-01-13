"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <Link href="/" className="text-2xl font-bold font-heading text-foreground tracking-tight mb-4 inline-block">
                            3rive Systems
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            We build the future for founders and ourselves.
                            Venture Studio & Technical Partner based in Lagos.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/work" className="text-muted-foreground hover:text-primary transition-colors">Work</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-4">Socials</h4>
                        <div className="flex gap-4">
                            <Link href="https://twitter.com" target="_blank" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground">
                                <Twitter size={20} />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="https://github.com" target="_blank" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground">
                                <Github size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
                    <p className="text-muted-foreground text-sm">
                        &copy; {new Date().getFullYear()} 3rive Systems. All rights reserved.
                    </p>
                    <p className="text-muted-foreground text-sm flex items-center gap-2 mt-4 md:mt-0">
                        Built in Lagos. Shipping Globally. 🇳🇬 🌍
                    </p>
                </div>
            </div>
        </footer>
    );
}
