"use client";

import { motion } from "framer-motion";
import { Cloud, GitBranch, Cpu, Shield } from "lucide-react";

const items = [
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description:
      "Systems designed for the cloud from day one—scalable, resilient, and cost-efficient.",
  },
  {
    icon: GitBranch,
    title: "DevOps Automation",
    description:
      "CI/CD pipelines and infrastructure-as-code so you ship faster without sacrificing quality.",
  },
  {
    icon: Cpu,
    title: "AI Agents",
    description:
      "Intelligent automation with AI agents that reason, adapt, and execute complex workflows autonomously.",
  },
  {
    icon: Shield,
    title: "Security by Design",
    description:
      "Security and compliance built into architecture, not bolted on later.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden py-24 lg:py-32"
      aria-labelledby="philosophy-heading"
    >
      {/* Dark background with gradient accent */}
      <div className="absolute inset-0 bg-section-dark" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[90rem] px-[clamp(1.25rem,5vw,3rem)]">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Our Approach
          </p>
          <h2
            id="philosophy-heading"
            className="font-serif text-display font-normal tracking-tight text-white"
          >
            The Modus philosophy
          </h2>
          <p className="mt-4 text-body-lg leading-relaxed text-white/70">
            How we build: clean foundations, automation, and scale without
            compromise.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.ul
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {items.map(({ icon: Icon, title, description }) => (
            <motion.li
              key={title}
              variants={item}
              className="card-dark group p-8"
              data-cursor-hover
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent transition-colors group-hover:bg-accent/30">
                <Icon className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="font-sans text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/60">
                {description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
