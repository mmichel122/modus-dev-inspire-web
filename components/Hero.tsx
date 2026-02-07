import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center overflow-hidden px-[clamp(1.25rem,5vw,3rem)] py-24"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-accent/5 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Headline + CTA */}
        <div className="text-center lg:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Engineering Excellence
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-hero font-normal leading-[1.05] tracking-tight text-foreground"
          >
            Architecting
            <br />
            <span className="text-accent">Digital Inspiration</span>
          </h1>
          <p className="mt-8 max-w-xl text-body-lg leading-relaxed text-foreground-muted lg:pr-8">
            Bespoke digital products powered by multi-cloud infrastructure,
            enterprise AI, and workflow automation—delivered with SRE-grade
            reliability. From discovery to scale.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Link href="#portfolio" className="btn-primary">
              Start my project
            </Link>
            <Link href="#philosophy" className="btn-secondary">
              Learn how we work
            </Link>
          </div>
        </div>

        {/* Right: Feature Card */}
        <div className="relative">
          <div className="relative min-h-[480px] overflow-hidden rounded-3xl bg-section-dark lg:min-h-[560px]">
            <Image
              src="/images/hero-panel.png"
              alt=""
              fill
              className="object-cover opacity-80"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-section-dark via-section-dark/60 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <h2 className="font-serif text-3xl font-normal tracking-tight text-white lg:text-4xl">
                Digital systems that
                <br />
                <span className="text-accent">inspire growth</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
                From strategy to scale—we build the systems that power your vision.
              </p>
              <div className="mt-8">
                <Link href="#contact" className="btn-ghost text-white after:bg-white">
                  Get started →
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative accent */}
          <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl bg-accent/10" />
        </div>
      </div>
    </section>
  );
}
