import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import MarqueeStrip from "@/components/MarqueeStrip";
import ScrollStory from "@/components/ScrollStory";
import Reveal from "@/components/Reveal";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { services } from "@/lib/services";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const h = dict.home;
  const base = `/${locale}`;

  return (
    <>
      {/* Hero — full-bleed background video (Tranzport-style) */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy-900 text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.webp"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* legibility overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/55 to-navy-900/40" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/25 to-transparent" />

        {/* floating service chips — clickable */}
        <div className="absolute right-6 top-28 z-10 hidden w-72 flex-col gap-3 lg:flex">
          {[services[0], services[4], services[1]].map((s, i) => (
            <Link
              key={s.slug}
              href={`${base}/services/${s.slug}`}
              className="group animate-fade-in flex items-center gap-4 rounded-2xl border border-white/15 bg-navy-900/55 p-2.5 pr-4 backdrop-blur-md transition-all hover:-translate-x-1 hover:border-orange-400/50 hover:bg-navy-900/75"
              style={{ animationDelay: `${600 + i * 160}ms` }}
            >
              <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={`/images/${s.slug}.webp`}
                  alt={s.title[locale]}
                  fill
                  quality={90}
                  sizes="64px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </span>
              <span className="flex-1 text-sm font-semibold text-white">{s.title[locale]}</span>
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-white/40 transition-all group-hover:translate-x-0.5 group-hover:text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          ))}
        </div>

        <div className="container relative pb-16 pt-36 lg:pb-24 lg:pt-44">
          <p className="flex animate-fade-in items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            <span className="h-px w-10 bg-orange-500" />
            {h.heroEyebrow}
          </p>
          <h1
            className="mt-6 max-w-4xl animate-fade-in text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-8xl"
            style={{ animationDelay: "120ms" }}
          >
            {h.heroTitle}
          </h1>
          <p
            className="mt-6 max-w-xl animate-fade-in text-lg leading-relaxed text-navy-100"
            style={{ animationDelay: "240ms" }}
          >
            {h.heroSubtitle}
          </p>
          <div
            className="mt-9 flex animate-fade-in flex-wrap gap-4"
            style={{ animationDelay: "360ms" }}
          >
            <Link
              href={`${base}/contact`}
              className="rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
            >
              {h.heroCtaPrimary}
            </Link>
            <Link
              href={`${base}/services`}
              className="rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              {h.heroCtaSecondary}
            </Link>
          </div>

          {/* inline stat strip */}
          <div
            className="mt-14 flex animate-fade-in flex-wrap items-center gap-x-10 gap-y-5 border-t border-white/15 pt-8"
            style={{ animationDelay: "480ms" }}
          >
            {h.stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-white sm:text-3xl">{s.value}</div>
                <div className="mt-0.5 text-xs text-navy-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / markets marquee */}
      <MarqueeStrip label={h.trustLabel} items={h.markets} />

      {/* Pinned scroll story (Tive-style) */}
      <ScrollStory
        eyebrow={h.storyEyebrow}
        heading={h.storyHeading}
        steps={h.story}
        images={["about.webp", "multimodal.webp", "sea.webp", "road.webp"]}
      />

      {/* Services */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">{h.servicesEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-navy-600 sm:text-4xl">
              {h.servicesTitle}
            </h2>
            <p className="mt-4 text-navy-400">{h.servicesSubtitle}</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} variant="reveal-scale" delay={i * 90}>
                <ServiceCard
                  service={service}
                  locale={locale}
                  learnMore={h.learnMore}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us — alternating feature band with image */}
      <section className="overflow-hidden bg-navy-50 py-20 lg:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal variant="reveal-left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/about.webp"
                  alt={h.whyTitle}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 to-transparent" />
              </div>
            </Reveal>
            <Reveal variant="reveal-right">
              <p className="eyebrow">{h.whyEyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold text-navy-600 sm:text-4xl">
                {h.whyTitle}
              </h2>
              <p className="mt-4 text-navy-400">{h.whySubtitle}</p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {h.why.map((item, i) => (
              <Reveal
                key={i}
                delay={i * 80}
                className="group rounded-2xl bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-500 text-base font-bold text-white transition-transform group-hover:scale-110">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-600">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={h.ctaTitle}
        subtitle={h.ctaSubtitle}
        buttonLabel={h.ctaButton}
        href={`${base}/contact`}
      />
    </>
  );
}
