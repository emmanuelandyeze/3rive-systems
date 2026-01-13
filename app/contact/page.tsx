"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFormStatus("success");
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-center text-foreground">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-muted-foreground mb-16 text-center">
                        Have a project in mind? We'd love to hear about it.
                    </p>

                    <div className="grid md:grid-cols-3 gap-12 bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-bold text-foreground text-lg flex items-center gap-3 mb-2">
                                    <Mail className="text-primary" /> Email
                                </h3>
                                <p className="text-muted-foreground">hello@3rive.systems</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground text-lg flex items-center gap-3 mb-2">
                                    <Phone className="text-primary" /> WhatsApp
                                </h3>
                                <p className="text-muted-foreground">+234 814 189 8230</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground text-lg flex items-center gap-3 mb-2">
                                    <MapPin className="text-primary" /> Office
                                </h3>
                                <p className="text-muted-foreground">Lagos, Nigeria</p>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="md:col-span-2">
                            {formStatus === "success" ? (
                                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-muted/50 rounded-xl">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                                    <p className="text-muted-foreground mb-8">
                                        We've received your request and will get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setFormStatus("idle")}
                                        className="text-primary font-bold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Budget field removed as per request to remove money-related items */}

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Detail</label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            required
                                            className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder:text-muted-foreground/50"
                                            placeholder="Briefly describe what you want to build..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === "submitting"}
                                        className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
                                    >
                                        {formStatus === "submitting" ? (
                                            "Sending..."
                                        ) : (
                                            <>Send Request <Send className="w-4 h-4" /></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
