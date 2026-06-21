import Link from "next/link";
import Image from "next/image";
import ServiceIcon from "./ServiceIcon";
import type { Service } from "@/lib/services";
import type { Locale } from "@/lib/i18n";

interface Props {
  service: Service;
  locale: Locale;
  learnMore: string;
}

export default function ServiceCard({ service, locale, learnMore }: Props) {
  return (
    <Link
      href={`/${locale}/services/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={`/images/${service.slug}.webp`}
          alt={service.title[locale]}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/55 via-navy-900/5 to-transparent" />
        <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-navy-600 shadow-sm backdrop-blur transition-colors group-hover:bg-orange-500 group-hover:text-white">
          <ServiceIcon icon={service.icon} className="h-7 w-7" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-bold text-navy-600">{service.title[locale]}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-400">
          {service.short[locale]}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500">
          {learnMore}
          <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
