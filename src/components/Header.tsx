"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { services } from "@/lib/services";

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export default function Header({ locale, dict }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "";
  const base = `/${locale}`;

  const links = [
    { href: base, label: dict.nav.home },
    { href: `${base}/services`, label: dict.nav.services },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/contact`, label: dict.nav.contact },
  ];

  function isActive(href: string) {
    if (href === base) return pathname === base;
    return pathname.startsWith(href);
  }

  // solid dark bar once scrolled past the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when the overlay menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-white/10 bg-navy-900/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container flex h-20 items-center justify-between gap-4">
          <Link href={base} className="relative z-10 shrink-0" aria-label="WeLoad">
            <Logo variant="light" className="h-9 w-auto" />
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href={`${base}/contact`}
              className="hidden rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600 sm:inline-flex"
            >
              {dict.nav.getQuote}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? dict.nav.close : dict.nav.menu}
              aria-expanded={open}
              className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-navy-900 transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container flex h-full flex-col justify-center pt-20">
          <nav className="flex flex-col gap-2">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
                className={`w-fit text-4xl font-extrabold tracking-tight transition-all duration-500 sm:text-6xl ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } ${
                  isActive(link.href)
                    ? "text-orange-500"
                    : "text-white hover:text-orange-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div
            className={`mt-12 flex flex-wrap items-center gap-6 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "440ms" : "0ms" }}
          >
            <Link
              href={`${base}/contact`}
              onClick={() => setOpen(false)}
              className="rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              {dict.nav.getQuote}
            </Link>
            <LanguageSwitcher locale={locale} tone="light" />
          </div>

          {/* quick service links */}
          <div
            className={`mt-12 border-t border-white/10 pt-8 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "520ms" : "0ms" }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              {dict.nav.services}
            </span>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`${base}/services/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-white/70 transition-colors hover:text-orange-400"
                >
                  {s.title[locale]}
                </Link>
              ))}
            </div>
            <p className="mt-8 text-sm text-white/40">{dict.nav.menuTagline}</p>
          </div>
        </div>
      </div>
    </>
  );
}
