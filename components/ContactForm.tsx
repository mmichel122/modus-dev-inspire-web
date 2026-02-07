"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setStatus("sent");
        setFormData({ name: "", email: "", company: "", message: "" });

        // Reset after 3 seconds
        setTimeout(() => setStatus("idle"), 3000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden py-24 lg:py-32"
            aria-labelledby="contact-heading"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-section-dark" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />

            <div className="relative mx-auto max-w-[90rem] px-[clamp(1.25rem,5vw,3rem)]">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left: Text */}
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                            Contact Us
                        </p>
                        <h2
                            id="contact-heading"
                            className="font-serif text-display font-normal tracking-tight text-white"
                        >
                            Let&apos;s build something
                            <br />
                            <span className="text-accent">extraordinary</span>
                        </h2>
                        <p className="mt-6 max-w-md text-body-lg leading-relaxed text-white/70">
                            Ready to transform your vision into reality? Tell us about your project
                            and we&apos;ll get back to you within 24 hours.
                        </p>
                        <div className="mt-10 space-y-4">
                            <div className="flex items-center gap-3 text-white/60">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span>hello@modusdevinspire.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <form onSubmit={handleSubmit} className="card-dark p-8 lg:p-10">
                            <div className="space-y-6">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-medium text-white"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-medium text-white"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="company"
                                        className="mb-2 block text-sm font-medium text-white"
                                    >
                                        Company <span className="text-white/40">(optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                        placeholder="Your company"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-medium text-white"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status !== "idle"}
                                    className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === "idle" && (
                                        <>
                                            Send message
                                            <Send className="h-4 w-4" />
                                        </>
                                    )}
                                    {status === "sending" && (
                                        <span className="flex items-center gap-2">
                                            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </span>
                                    )}
                                    {status === "sent" && (
                                        <>
                                            Message sent!
                                            <CheckCircle className="h-4 w-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
