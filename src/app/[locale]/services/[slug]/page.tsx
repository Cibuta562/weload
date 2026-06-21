import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { getService, services } from "@/lib/services";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!service || !isLocale(locale)) return {};
  return {
    title: service.title[locale],
    description: service.intro[locale],
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const service = getService(slug);
  if (!service) notFound();

  const dict = getDictionary(locale);
  const sv = dict.service;
  const base = `/${locale}`;
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-700 text-white">
        <div className="absolute inset-0">
          <Image
            src={`/images/${service.slug}.webp`}
            alt=""
            fill
            priority
            sizes="100vw"
            className="animate-ken-burns object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/85 to-navy-700/50" />
        </div>
        <div className="container relative pb-20 pt-36 lg:pb-28 lg:pt-44">
          <Link
            href={`${base}/services`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-200 transition-colors hover:text-orange-400"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            {sv.backToServices}
          </Link>
          <div className="mt-6 flex animate-fade-in flex-col gap-6 md:flex-row md:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/30">
              <ServiceIcon icon={service.icon} className="h-9 w-9" />
            </div>
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{service.title[locale]}</h1>
              <p className="mt-2 max-w-2xl text-navy-100">{service.tagline[locale]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + highlights */}
      <section className="py-16 lg:py-20">
        <div className="container grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal variant="reveal-left" className="prose-body">
            <p className="text-lg leading-relaxed text-navy-500">{service.intro[locale]}</p>
          </Reveal>
          <Reveal as="ul" variant="reveal-right" className="space-y-3 rounded-2xl border border-navy-100 bg-navy-50 p-7">
            {service.highlights[locale].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 6" />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed text-navy-600">{item}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="bg-navy-50 py-16 lg:py-20">
        <div className="container">
          <Reveal as="h2" className="text-2xl font-bold text-navy-600 sm:text-3xl">{sv.whatWeOffer}</Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {service.features.map((feature, i) => (
              <Reveal
                key={i}
                delay={i * 90}
                className="rounded-2xl bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-navy-600">{feature.title[locale]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">
                  {feature.desc[locale]}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="container max-w-3xl">
          <Reveal as="h2" className="text-2xl font-bold text-navy-600 sm:text-3xl">{sv.faqTitle}</Reveal>
          <div className="mt-8 divide-y divide-navy-100 border-y border-navy-100">
            {service.faqs.map((faq, i) => (
              <Reveal key={i} as="details" delay={i * 70} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-navy-600 marker:content-none">
                  {faq.q[locale]}
                  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-orange-500 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-navy-400">{faq.a[locale]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-navy-50 py-16 lg:py-20">
        <div className="container">
          <Reveal as="h2" className="text-2xl font-bold text-navy-600 sm:text-3xl">{sv.otherServices}</Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} as="span" variant="reveal-scale" delay={i * 70} className="inline-flex">
                <Link
                  href={`${base}/services/${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-600 transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-500"
                >
                  <ServiceIcon icon={s.icon} className="h-5 w-5" />
                  {s.title[locale]}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-600">
        <div className="container flex flex-col items-center gap-6 py-16 text-center md:flex-row md:justify-between md:text-left">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{sv.ctaTitle}</h2>
          <Link
            href={`${base}/contact?service=${service.slug}`}
            className="shrink-0 rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
          >
            {sv.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
