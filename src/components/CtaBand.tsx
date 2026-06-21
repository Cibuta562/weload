import Link from "next/link";

interface Props {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  href: string;
}

export default function CtaBand({ title, subtitle, buttonLabel, href }: Props) {
  return (
    <section className="bg-navy-600">
      <div className="container flex flex-col items-center gap-6 py-16 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-2 max-w-2xl text-navy-200">{subtitle}</p>}
        </div>
        <Link
          href={href}
          className="shrink-0 rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
