import { Database, Cpu, TrendingUp } from "lucide-react";

const pillars = [
    {
        title: "Architect",
        subtitle: "Discovery & Strategy",
        description: "We design robust, scalable data structures and system architectures before writing a single line of code.",
        icon: Database,
        color: "text-blue-400"
    },
    {
        title: "Construct",
        subtitle: "High-fidelity Engineering",
        description: "Production-grade code written with TypeScript, comprehensive testing, and modern best practices.",
        icon: Cpu,
        color: "text-teal-400"
    },
    {
        title: "Scale",
        subtitle: "Deployment & Growth",
        description: "Automated CI/CD pipelines, edge deployment, and infrastructure that grows with your user base.",
        icon: TrendingUp,
        color: "text-green-500"
    }
];

export default function Methodology() {
    return (
        <section className="py-24 bg-navy-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Methodology</h2>
                    <div className="w-20 h-1 bg-teal-400 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="group p-8 rounded-2xl bg-slate-800/30 border border-slate-800 hover:border-teal-400/50 transition-all duration-300">
                            <div className={`w-12 h-12 rounded-lg bg-navy-900 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${pillar.color}`}>
                                <pillar.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                            <p className="text-sm font-mono text-teal-400 mb-4">{pillar.subtitle}</p>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
