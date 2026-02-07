import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      className="border-t border-border/60 bg-background"
    >
      <div className="mx-auto max-w-[90rem] px-[clamp(1.25rem,5vw,3rem)]">
        <div className="flex flex-col items-center justify-between gap-8 py-12 md:flex-row md:py-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8 text-accent" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              Modus Dev Inspire
            </span>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-8">
            <Link
              href="#portfolio"
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              Work
            </Link>
            <Link
              href="#philosophy"
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              How
            </Link>
            <Link
              href="#services"
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
          </nav>

          {/* Back to top */}
          <a
            href="#main-content"
            className="group flex items-center gap-2 text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
          >
            Back to top
            <span className="inline-block transition-transform group-hover:-translate-y-1">↑</span>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 py-6 text-center">
          <p className="text-xs text-foreground-muted">
            © {new Date().getFullYear()} Modus Dev Inspire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
