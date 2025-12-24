import { ArrowUpRight, FlaskConical } from "lucide-react";

const ventures = [
    {
        title: "Yunimall",
        category: "E-Commerce Infrastructure",
        description: "Next-gen headless commerce engine designed for high-volume marketplaces with complex inventory requirements.",
        status: "LIVE"
    },
    {
        title: "Royalty Management System",
        category: "FinTech",
        description: "Automated ledger for tracking intellectual property rights and distributing royalties in real-time.",
        status: "BETA"
    }
];

export default function Lab() {
    return (
        <section id="ventures" className="py-24 bg-navy-900 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <FlaskConical className="w-6 h-6 text-teal-400" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white">3rive Lab</h2>
                        </div>
                        <p className="text-slate-400 max-w-xl">
                            We don't just build for clients; we build for ourselves.
                            Our internal ventures playground.
                        </p>
                    </div>

                    <div className="text-right hidden md:block">
                        <div className="text-sm font-mono text-slate-500">
                            STATUS: <span className="text-green-500">OPERATIONAL</span>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {ventures.map((venture, index) => (
                        <div key={index} className="group relative p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-400/50 transition-all duration-300">
                            <div className="absolute top-8 right-8">
                                <ArrowUpRight className="w-6 h-6 text-slate-600 group-hover:text-teal-400 transition-colors" />
                            </div>

                            <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-teal-400 mb-6">
                                {venture.status}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{venture.title}</h3>
                            <p className="text-sm font-mono text-slate-500 mb-4">{venture.category}</p>
                            <p className="text-slate-400 leading-relaxed">
                                {venture.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
