import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { getService } from "@/lib/services";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "ro");
  return { title: dict.contact.title };
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ service?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { service: serviceSlug } = await searchParams;
  const dict = getDictionary(locale);
  const c = dict.contact;

  const selected = serviceSlug ? getService(serviceSlug) : undefined;
  const defaultService = selected ? selected.title[locale] : undefined;

  const infoItems = [
    { label: c.emailLabel, value: site.email, href: `mailto:${site.email}` },
    { label: c.phoneLabel, value: site.phone, href: `tel:${site.phoneHref}` },
    { label: c.hoursLabel, value: c.hoursValue },
    { label: c.addressLabel, value: c.addressValue },
  ];

  return (
    <>
      <section className="bg-navy-700 text-white">
        <div className="container max-w-3xl pb-16 pt-36 lg:pb-20 lg:pt-44">
          <p className="eyebrow animate-fade-in">{c.eyebrow}</p>
          <h1
            className="mt-3 animate-fade-in text-3xl font-bold sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            {c.title}
          </h1>
          <p
            className="mt-4 animate-fade-in text-lg text-navy-100"
            style={{ animationDelay: "240ms" }}
          >
            {c.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Info */}
          <Reveal variant="reveal-left">
            <h2 className="text-xl font-bold text-navy-600">{c.infoTitle}</h2>
            <ul className="mt-6 space-y-5">
              {infoItems.map((item) => (
                <li key={item.label}>
                  <div className="text-xs font-bold uppercase tracking-wide text-navy-300">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block text-lg font-semibold text-navy-600 transition-colors hover:text-orange-500"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="mt-1 text-lg font-semibold text-navy-600">{item.value}</div>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal variant="reveal-right" className="rounded-2xl border border-navy-100 bg-white p-7 shadow-sm sm:p-9">
            <ContactForm locale={locale} dict={dict} defaultService={defaultService} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
