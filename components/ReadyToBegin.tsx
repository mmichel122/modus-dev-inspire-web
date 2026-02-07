"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Discover",
    description:
      "Strategy and research to define your vision. We map the roadmap from concept to delivery.",
    image: "/images/cta-discover.png",
    imageAlt: "Discovery and strategy visualization",
    href: "#contact",
    cta: "Start my project",
    accent: "from-accent/20",
  },
  {
    title: "Build",
    description:
      "Expert engineering for applications, infrastructure, and AI. Production-grade systems with clean architecture.",
    image: "/images/cta-build.png",
    imageAlt: "Engineering and development visualization",
    href: "#services",
    cta: "See our work",
    accent: "from-purple-500/20",
  },
  {
    title: "Scale",
    description:
      "SRE practices for growth. Observability, automation, and resilience built into every system.",
    image: "/images/cta-scale.png",
    imageAlt: "Scaling and reliability visualization",
    href: "#contact",
    cta: "Get in touch",
    accent: "from-blue-500/20",
  },
];

export default function ReadyToBegin() {
  return (
    <section
      className="py-24 lg:py-32"
      aria-labelledby="ready-heading"
    >
      <div className="mx-auto max-w-[90rem] px-[clamp(1.25rem,5vw,3rem)]">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Let&apos;s Work Together
          </p>
          <h2
            id="ready-heading"
            className="font-serif text-display font-normal tracking-tight text-foreground"
          >
            Your Journey
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card group flex flex-col overflow-hidden"
              data-cursor-hover
            >
              <div className={`relative flex min-h-[220px] items-center justify-center bg-gradient-to-br ${card.accent} to-transparent p-8`}>
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  width={200}
                  height={200}
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-sans text-xl font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-foreground-muted">
                  {card.description}
                </p>
                <div className="mt-6">
                  <Link href={card.href} className="btn-primary btn-sm">
                    {card.cta}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
