import Link from "next/link";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { getLegal } from "@/lib/legal";

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export default function Footer({ locale, dict }: Props) {
  const base = `/${locale}`;
  const year = 2026;
  const legal = getLegal(locale);

  const company = [
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/services`, label: dict.nav.services },
    { href: `${base}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-navy-600 text-navy-100">
      <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo variant="light" className="h-9 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-200">
            {dict.footer.about}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            {dict.footer.servicesTitle}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`${base}/services/${s.slug}`}
                  className="text-navy-200 transition-colors hover:text-orange-400"
                >
                  {s.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            {dict.footer.companyTitle}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {company.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="text-navy-200 transition-colors hover:text-orange-400"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            {dict.footer.contactTitle}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="text-navy-200 hover:text-orange-400">
                {site.email}
              </a>
            </li>
            <li className="text-navy-200">{dict.contact.hoursValue}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-500">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-sm text-navy-300 sm:flex-row">
          <p>
            © {year} {site.name}. {dict.footer.rights}
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <Link href={`${base}/privacy`} className="transition-colors hover:text-orange-400">
              {legal.ui.footerPrivacy}
            </Link>
            <Link href={`${base}/cookies`} className="transition-colors hover:text-orange-400">
              {legal.ui.footerCookies}
            </Link>
            <LanguageSwitcher locale={locale} tone="light" />
          </div>
        </div>
      </div>
    </footer>
  );
}
