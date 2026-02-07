"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "#portfolio", label: "Work" },
  { href: "#philosophy", label: "How" },
  { href: "#services", label: "Services" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-[clamp(1.25rem,5vw,3rem)]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <Logo className="h-9 w-9 text-accent" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
            Modus
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="nav-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#contact" className="btn-primary btn-sm">
            Get in touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 text-foreground transition-colors hover:border-accent hover:text-accent md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-border/40 bg-background transition-all duration-300 md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-[clamp(1.25rem,5vw,3rem)] py-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground-muted transition-colors hover:bg-accent/5 hover:text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary btn-sm w-full text-center"
            >
              Get in touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
