"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";
import Link from "next/link";

const projectTypes = ["Web Application", "Mobile App", "Internal Tool", "Technical Audit"];
const projectStages = ["Idea Phase", "MVP Ready", "Scaling/Rewrite"];
const budgetRanges = ["<$5k", "$5k - $15k", "$15k - $50k", "$50k+"];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
        type: "",
        stage: "",
        budget: "",
        description: "",
        stack: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleSelect = (category: string, value: string) => {
        setFormData(prev => ({ ...prev, [category]: value }));
    };

    return (
        <div className="min-h-screen bg-navy-900 selection:bg-teal-400/30">
            {/* Navbar */}
            <header className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
                <Link href="/" className="text-xl font-bold text-white tracking-tight">
                    3rive Systems
                </Link>
                <nav className="flex gap-6">
                    <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Home</Link>
                    <Link href="/work" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Work</Link>
                    <Link href="/process" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Process</Link>
                    <Link href="/ventures" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Ventures</Link>
                    <span className="text-teal-400 text-sm font-medium border-b border-teal-400">Contact</span>
                </nav>
            </header>

            <div className="flex flex-col lg:flex-row min-h-screen pt-24">

                {/* Left Side - Context */}
                <div className="w-full lg:w-5/12 p-6 lg:p-20 flex flex-col justify-center bg-gradient-to-b from-navy-900 to-slate-900 border-b lg:border-b-0 lg:border-r border-white/5">
                    <div className="max-w-md mx-auto lg:mx-0">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-8">
                            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                            <span className="text-sm font-mono text-slate-300 tracking-wide">INTAKE OPEN</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Initialize Your Project.
                        </h1>
                        <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                            We are selective with our partners. Tell us what you are building,
                            and we will tell you how to engineer it.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
                                    <Mail className="w-5 h-5 text-teal-400" />
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-slate-500 uppercase">Email Us</div>
                                    <div className="font-medium">engineering@3rive.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
                                    <MapPin className="w-5 h-5 text-teal-400" />
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-slate-500 uppercase">HQ</div>
                                    <div className="font-medium">San Francisco, CA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-7/12 p-6 lg:p-20 bg-navy-900">
                    <div className="max-w-2xl mx-auto">
                        {isSuccess ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in-up">
                                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                                    <CheckCircle className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Brief Received.</h3>
                                <p className="text-slate-400 max-w-md">
                                    Your project specs have been securely transmitted to our engineering lead.
                                    Expect a technical feasibility assessment within 24 hours.
                                </p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-8 text-teal-400 hover:text-teal-300 font-medium text-sm"
                                >
                                    Submit another project
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-12">

                                {/* Identity */}
                                <section className="space-y-6">
                                    <h3 className="text-sm font-mono text-slate-500 uppercase tracking-wider border-b border-white/10 pb-2">01. Identity</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all placeholder:text-slate-600"
                                                placeholder="Jane Doe"
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">Work Email</label>
                                            <input
                                                required
                                                type="email"
                                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all placeholder:text-slate-600"
                                                placeholder="jane@company.com"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-slate-300 mb-2">Company Website <span className="text-slate-500 text-xs font-normal">(Optional)</span></label>
                                            <input
                                                type="text"
                                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all placeholder:text-slate-600"
                                                placeholder="https://..."
                                                value={formData.website}
                                                onChange={e => setFormData({ ...formData, website: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </section>

                                {/* Parameters */}
                                <section className="space-y-6">
                                    <h3 className="text-sm font-mono text-slate-500 uppercase tracking-wider border-b border-white/10 pb-2">02. Parameters</h3>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-3">Project Type</label>
                                        <div className="flex flex-wrap gap-3">
                                            {projectTypes.map(t => (
                                                <button
                                                    key={t}
                                                    type="button"
                                                    onClick={() => handleSelect('type', t)}
                                                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${formData.type === t
                                                            ? "bg-teal-400/10 border-teal-400 text-teal-400"
                                                            : "bg-slate-800/30 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300"
                                                        }`}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-3">Current Stage</label>
                                        <div className="flex flex-wrap gap-3">
                                            {projectStages.map(s => (
                                                <button
                                                    key={s}
                                                    type="button"
                                                    onClick={() => handleSelect('stage', s)}
                                                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${formData.stage === s
                                                            ? "bg-teal-400/10 border-teal-400 text-teal-400"
                                                            : "bg-slate-800/30 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300"
                                                        }`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-3">Budget Range</label>
                                        <div className="flex flex-wrap gap-3">
                                            {budgetRanges.map(b => (
                                                <button
                                                    key={b}
                                                    type="button"
                                                    onClick={() => handleSelect('budget', b)}
                                                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${formData.budget === b
                                                            ? "bg-teal-400/10 border-teal-400 text-teal-400"
                                                            : "bg-slate-800/30 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300"
                                                        }`}
                                                >
                                                    {b}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                {/* Details */}
                                <section className="space-y-6">
                                    <h3 className="text-sm font-mono text-slate-500 uppercase tracking-wider border-b border-white/10 pb-2">03. Details</h3>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Project Description</label>
                                        <textarea
                                            required
                                            rows={6}
                                            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all placeholder:text-slate-600 resize-none"
                                            placeholder="Describe the core problem, desired outcome, and any specific technical constraints..."
                                            value={formData.description}
                                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Preferred Stack <span className="text-slate-500 text-xs font-normal">(Optional)</span></label>
                                        <input
                                            type="text"
                                            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all placeholder:text-slate-600"
                                            placeholder="e.g. Next.js, Supabase, Vercel"
                                            value={formData.stack}
                                            onChange={e => setFormData({ ...formData, stack: e.target.value })}
                                        />
                                    </div>
                                </section>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-teal-400 hover:bg-teal-300 text-navy-900 font-bold rounded-lg transition-all active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <span className="w-4 h-4 border-2 border-navy-900 border-t-transparent rounded-full animate-spin"></span>
                                                Transmitting...
                                            </span>
                                        ) : (
                                            "Submit Project Brief"
                                        )}
                                    </button>
                                    <p className="text-center text-slate-500 text-xs mt-4">
                                        We typically respond with a technical feasibility assessment within 24 hours.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
