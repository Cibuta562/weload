"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Extra reveal variant classes, e.g. "reveal-left" | "reveal-right" | "reveal-scale" */
  variant?: string;
  /** Stagger delay in milliseconds */
  delay?: number;
  /** Render element tag (default div) */
  as?: ElementType;
  className?: string;
}

export default function Reveal({
  children,
  variant = "",
  delay = 0,
  as,
  className = "",
}: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Anything already in view — or scrolled past (e.g. on reload with
    // restored scroll position) — must show immediately, otherwise it would
    // stay hidden forever since the observer never fires for it.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);

    // Safety net: if anything goes wrong, reveal after a short delay
    const fallback = window.setTimeout(() => setVisible(true), 1200);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
