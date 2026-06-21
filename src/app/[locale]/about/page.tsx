import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "ro");
  return { title: dict.about.title };
}

const stats = [
  { value: "5", labelRo: "moduri de transport", labelEn: "transport modes" },
  { value: "27+", labelRo: "țări acoperite", labelEn: "countries covered" },
  { value: "30 min", labelRo: "timp mediu de răspuns", labelEn: "average response time" },
  { value: "24/7", labelRo: "asistență transport", labelEn: "transport assistance" },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const a = dict.about;

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-100 bg-navy-700 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/about.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="animate-ken-burns object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/85 to-navy-700/55" />
        </div>
        <div className="container relative max-w-3xl pb-20 pt-36 lg:pb-28 lg:pt-44">
          <p className="eyebrow animate-fade-in text-orange-400">{a.eyebrow}</p>
          <h1
            className="mt-3 animate-fade-in text-3xl font-bold sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            {a.title}
          </h1>
          <p
            className="mt-5 animate-fade-in text-lg leading-relaxed text-navy-100"
            style={{ animationDelay: "240ms" }}
          >
            {a.lead}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal variant="reveal-left" className="space-y-5">
            {a.body.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-navy-500">
                {p}
              </p>
            ))}
          </Reveal>
          <div className="space-y-6">
            <Reveal variant="reveal-right" className="rounded-2xl border border-navy-100 bg-navy-50 p-7">
              <h2 className="text-lg font-bold text-orange-500">{a.missionTitle}</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">{a.mission}</p>
            </Reveal>
            <Reveal variant="reveal-right" delay={120} className="rounded-2xl border border-navy-100 bg-navy-50 p-7">
              <h2 className="text-lg font-bold text-orange-500">{a.visionTitle}</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">{a.vision}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-600 py-14">
        <div className="container">
          <h2 className="text-center text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
            {a.statsTitle}
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.value} variant="reveal-scale" delay={i * 100} className="text-center">
                <div className="text-4xl font-extrabold text-white">{s.value}</div>
                <div className="mt-1.5 text-sm text-navy-200">
                  {locale === "ro" ? s.labelRo : s.labelEn}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <Reveal as="h2" className="text-2xl font-bold text-navy-600 sm:text-3xl">{a.valuesTitle}</Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <Reveal
                key={i}
                variant="reveal-scale"
                delay={i * 90}
                className="group rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-1.5 w-10 rounded-full bg-orange-500 transition-all group-hover:w-16" />
                <h3 className="mt-4 text-lg font-bold text-navy-600">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={dict.home.ctaTitle}
        subtitle={dict.home.ctaSubtitle}
        buttonLabel={dict.home.ctaButton}
        href={`/${locale}/contact`}
      />
    </>
  );
}
