"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioProjects } from "@/lib/portfolio";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-[90rem] px-[clamp(1.25rem,5vw,3rem)]">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Portfolio
          </p>
          <h2
            id="portfolio-heading"
            className="font-serif text-display font-normal tracking-tight text-foreground"
          >
            Our work
          </h2>
          <p className="mt-4 text-body-lg leading-relaxed text-foreground-muted">
            A curated selection of applications we&apos;ve architected and built.
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          className="columns-1 gap-6 sm:columns-2 lg:columns-3"
          style={{ columnGap: "1.5rem" }}
        >
          {portfolioProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="mb-6 break-inside-avoid"
            >
              <div
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                data-cursor-hover
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMTIwMCIgdmlld0JveD0iMCAwIDgwMCAxMjAwIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IiNlNWU1ZTUiLz48L3N2Zz4="
                    unoptimized={project.image.endsWith(".svg")}
                  />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-section-dark via-section-dark/50 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t.name}
                        className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="mt-4 font-sans text-lg font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-foreground-muted">
                {project.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
