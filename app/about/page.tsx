import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-mono tracking-widest text-sm uppercase mb-4 block">About Us</span>
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-foreground">
                        We are your Technical Partner.
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        3rive Systems was built to solve one specific problem: <span className="text-foreground font-semibold">Non-technical founders getting ghosted by freelancers or overcharged by big agencies.</span>
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Built in Lagos. Shipping Globally.</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            We are a registered software development agency based in Lagos, Nigeria. We understand the local market context—payment gateways, mobile-first users, data constraints—and we build software that thrives in this environment.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our team consists of senior engineers, product designers, and technical strategists who have shipped products for YC startups, local banks, and SMEs. We don't outsource your work. We build it right here.
                        </p>
                    </div>
                    <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-colors shadow-lg shadow-black/5">
                        <h3 className="text-xl font-bold text-foreground mb-6">The 3rive Promise</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary flex items-center justify-center shrink-0 text-primary font-bold text-xs">1</div>
                                <p className="text-muted-foreground"><strong>Transparent Pricing:</strong> No hidden "maintenance" fees. You know what you pay upfront.</p>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary flex items-center justify-center shrink-0 text-primary font-bold text-xs">2</div>
                                <p className="text-muted-foreground"><strong>Code Ownership:</strong> You own the IP. We transfer the GitHub repo to you upon completion.</p>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary flex items-center justify-center shrink-0 text-primary font-bold text-xs">3</div>
                                <p className="text-muted-foreground"><strong>Post-Launch Support:</strong> We don't disappear. We offer 30 days of free bug support after launch.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center bg-muted p-12 rounded-2xl border border-border">
                    <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Ready to execute?</h2>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold rounded-md hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                    >
                        Book Strategy Session
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
