import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import ScrollStory from "@/components/ScrollStory";
import Reveal from "@/components/Reveal";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { services } from "@/lib/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "ro");
  return { title: dict.servicesPage.title };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const s = dict.servicesPage;

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-100 bg-navy-700 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/multimodal.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="animate-ken-burns object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/85 to-navy-700/55" />
        </div>
        <div className="container relative max-w-3xl pb-20 pt-36 lg:pb-28 lg:pt-44">
          <p className="eyebrow animate-fade-in text-orange-400">{s.eyebrow}</p>
          <h1
            className="mt-3 animate-fade-in text-3xl font-bold sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            {s.title}
          </h1>
          <p
            className="mt-4 animate-fade-in text-lg text-navy-100"
            style={{ animationDelay: "240ms" }}
          >
            {s.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} variant="reveal-scale" delay={i * 90}>
                <ServiceCard
                  service={service}
                  locale={locale}
                  learnMore={dict.home.learnMore}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mini pinned scroll-story of the transport modes */}
      <ScrollStory
        compact
        eyebrow={s.modesEyebrow}
        heading={s.modesHeading}
        steps={services.map((service) => ({
          tag: s.modeTag,
          title: service.title[locale],
          desc: service.tagline[locale],
        }))}
        images={services.map((service) => `${service.slug}.webp`)}
      />

      <CtaBand
        title={dict.home.ctaTitle}
        subtitle={dict.home.ctaSubtitle}
        buttonLabel={dict.home.ctaButton}
        href={`/${locale}/contact`}
      />
    </>
  );
}
