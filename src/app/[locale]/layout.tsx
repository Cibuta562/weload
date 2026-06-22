import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CookieBanner from "@/components/CookieBanner";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "ro");
  return {
    title: {
      default: `${site.name} — ${dict.brandTagline}`,
      template: `%s | ${site.name}`,
    },
    description: dict.home.heroSubtitle,
    metadataBase: new URL("https://weload.ro"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale: Locale = locale;
  const dict = getDictionary(typedLocale);

  return (
    <html lang={typedLocale} className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <SmoothScroll />
        <noscript>
          {/* Without JS the IntersectionObserver never runs — keep all reveal content visible */}
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Header locale={typedLocale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={typedLocale} dict={dict} />
        <CookieBanner
          text={dict.cookie.text}
          policy={dict.cookie.policy}
          policyHref={`/${typedLocale}/cookies`}
          preferences={dict.cookie.preferences}
          deny={dict.cookie.deny}
          accept={dict.cookie.accept}
        />
      </body>
    </html>
  );
}
