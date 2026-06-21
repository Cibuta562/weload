"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

interface Props {
  locale: Locale;
  /** "dark" text for light backgrounds (default), "light" for dark backgrounds */
  tone?: "dark" | "light";
}

/** Swaps the locale prefix in the current path, keeping the user on the same page. */
export default function LanguageSwitcher({ locale, tone = "dark" }: Props) {
  const pathname = usePathname() || `/${locale}`;
  const inactive =
    tone === "light"
      ? "text-white/60 transition-colors hover:text-white"
      : "text-navy-400 transition-colors hover:text-navy-600";
  const sep = tone === "light" ? "text-white/40" : "text-navy-200";

  function pathForLocale(target: Locale): string {
    const segments = pathname.split("/");
    // segments[0] is "" (leading slash), segments[1] is the current locale
    if (segments.length > 1 && (locales as readonly string[]).includes(segments[1])) {
      segments[1] = target;
    } else {
      return `/${target}`;
    }
    return segments.join("/") || `/${target}`;
  }

  return (
    <div className="flex items-center gap-1 text-sm font-semibold">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className={`mx-1 ${sep}`}>/</span>}
          <Link
            href={pathForLocale(l)}
            aria-current={l === locale ? "true" : undefined}
            className={l === locale ? "text-orange-500" : inactive}
          >
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
