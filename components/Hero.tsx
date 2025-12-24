import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900 border-b border-white/10">
            <header className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
                <Link href="/" className="text-xl font-bold text-white tracking-tight">
                    3rive Systems
                </Link>
                <nav className="flex gap-6">
                    <Link href="/" className="text-teal-400 text-sm font-medium border-b border-teal-400">Home</Link>
                    <Link href="/process" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Process</Link>
                    <Link href="/ventures" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Ventures</Link>
                    <Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Contact</Link>
                </nav>
            </header>

            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(#334155 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px)",
                    backgroundSize: "4rem 4rem"
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-8 animate-fade-in-up">
                    <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    <span className="text-sm font-mono text-slate-300 tracking-wide">SYSTEMS ONLINE</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                    3rive Systems: <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500">
                        Built to Scale.
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    We engineer the digital backbone for ambitious startups. From complex
                    architecture to reliable deployment.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/contact"
                        className="group relative px-8 py-3 bg-teal-400 text-navy-900 font-semibold rounded-lg overflow-hidden transition-all hover:bg-teal-300 active:scale-95">
                        <span className="relative z-10 flex items-center gap-2">
                            Start Your Project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                    </Link>

                    <Link href="/ventures"
                        className="group px-8 py-3 bg-transparent border border-slate-700 text-white font-medium rounded-lg hover:bg-slate-800/50 hover:border-slate-500 transition-all active:scale-95">
                        View Our Ventures
                    </Link>
                </div>
            </div>
        </section>
    );
}
