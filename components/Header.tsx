"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/designs", label: "Designs" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Amayra" },
  { href: "/contact", label: "Book" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Heena by Amayra — home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="20" cy="20" r="12.5" stroke="currentColor" strokeWidth="1" strokeDasharray="2.5 2.5" />
              <circle cx="20" cy="20" r="4" fill="currentColor" />
              <circle cx="20" cy="8.5" r="1.6" fill="currentColor" />
              <circle cx="20" cy="31.5" r="1.6" fill="currentColor" />
              <circle cx="8.5" cy="20" r="1.6" fill="currentColor" />
              <circle cx="31.5" cy="20" r="1.6" fill="currentColor" />
            </svg>
          </span>
          <span className="brand-text">
            <span className="brand-name">Heena by Amayra</span>
            <span className="brand-sub">Bridal &amp; Festival Mehndi · Diyodar</span>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      <div className="container">
        <nav className={open ? "mobile-nav open" : "mobile-nav"} aria-label="Mobile navigation">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
