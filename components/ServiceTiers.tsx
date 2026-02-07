"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const tiers = [
  {
    title: "Discovery & Strategy",
    points: [
      "Product vision and technical feasibility",
      "Architecture and stack recommendations",
      "Roadmap and delivery milestones",
    ],
    cta: "Learn more",
  },
  {
    title: "High-Performance Engineering",
    points: [
      "Custom applications and digital platforms",
      "DevOps pipelines and cloud infrastructure",
      "AI integration and automation workflows",
    ],
    cta: "Learn more",
  },
  {
    title: "Scale & Reliability (SRE)",
    points: [
      "Observability and incident response",
      "Auto-scaling and cost optimization",
      "Disaster recovery and compliance",
    ],
    cta: "Learn more",
  },
];

export default function ServiceTiers() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[90rem] px-[clamp(1.25rem,5vw,3rem)]">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            What We Offer
          </p>
          <h2
            id="services-heading"
            className="font-serif text-display font-normal tracking-tight text-foreground"
          >
            Service tiers
          </h2>
          <p className="mt-4 text-body-lg leading-relaxed text-foreground-muted">
            From idea to scale—refined offerings, no clutter.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map(({ title, points, cta }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card group flex flex-col p-8"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 font-serif text-xl font-medium text-accent">
                {i + 1}
              </div>
              <h3 className="font-sans text-xl font-semibold text-foreground">
                {title}
              </h3>
              <ul className="mt-5 flex-1 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex gap-3 text-base text-foreground-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border/60">
                <Link href="#contact" className="btn-ghost">
                  {cta} →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
