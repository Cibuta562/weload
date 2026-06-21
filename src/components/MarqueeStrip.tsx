interface Props {
  label: string;
  items: string[];
}

export default function MarqueeStrip({ label, items }: Props) {
  // Duplicate the list so the -50% translate loops seamlessly
  const loop = [...items, ...items];

  return (
    <section className="border-y border-navy-100 bg-white py-10">
      <div className="container">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-navy-300">
          {label}
        </p>
      </div>
      <div className="marquee-mask mt-6 overflow-hidden">
        <div className="flex w-max animate-marquee gap-3 pr-3">
          {loop.map((item, i) => (
            <span
              key={i}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-navy-100 bg-navy-50 px-5 py-2 text-sm font-semibold text-navy-500"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
