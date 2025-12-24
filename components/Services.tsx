import { Layers, Smartphone, Terminal, Sparkles } from "lucide-react";

export default function Services() {
    return (
        <section id="services" className="py-24 bg-navy-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-right">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Capabilities</h2>
                    <p className="text-slate-400 max-w-xl ml-auto">
                        We deliver end-to-end technical solutions. No bloat, just precision engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
                    {/* Main Large Card */}
                    <div className="md:col-span-2 md:row-span-2 p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-navy-900 border border-slate-700 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Layers className="w-40 h-40 text-teal-400" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center mb-6 text-teal-400">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Development</h3>
                            <p className="text-slate-400 mb-6">Next.js & Node.js Powerhouses</p>
                            <p className="text-slate-300 max-w-sm">
                                We build the heavy-lifting web applications that drive your business. SSR, Edge Runtime, and complex data mutations handled with ease.
                            </p>
                        </div>
                    </div>

                    {/* Side Card 1 */}
                    <div className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-teal-400/30 transition-colors group">
                        <Smartphone className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-white mb-2">Mobile Engineering</h3>
                        <p className="text-slate-400 text-sm">React Native for cross-platform dominance.</p>
                    </div>

                    {/* Side Card 2 */}
                    <div className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-teal-400/30 transition-colors group">
                        <Terminal className="w-8 h-8 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-white mb-2">Internal Tools</h3>
                        <p className="text-slate-400 text-sm">Custom dashboards and admin panels to optimize operations.</p>
                    </div>

                    {/* Wide Bottom Card */}
                    <div className="md:col-span-3 p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-green-500/30 transition-colors">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <Sparkles className="w-6 h-6 text-purple-400" />
                                <h3 className="text-xl font-bold text-white">AI Integration</h3>
                            </div>
                            <p className="text-slate-400">Gemini & OpenAI implementation. RAG pipelines and intelligent agents.</p>
                        </div>
                        <div className="px-6 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs">
                            MODEL: GEMINI-1.5-PRO
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
