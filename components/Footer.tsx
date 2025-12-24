
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-navy-900 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-white font-bold text-lg mb-1">3rive Systems</h3>
                    <p className="text-slate-500 text-sm font-mono">Engineering Integrity.</p>
                </div>

                <nav className="flex items-center gap-8">
                    <Link href="/" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Home</Link>
                    <Link href="/work" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Work</Link>
                    <Link href="/process" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Process</Link>
                    <Link href="/contact" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Contact</Link>
                </nav>

                <div className="text-slate-600 text-sm">
                    &copy; 2025 3rive Systems.
                </div>
            </div>
        </footer>
    );
}
