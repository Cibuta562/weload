import type { LegalDoc } from "@/lib/legal";

interface Props {
  doc: LegalDoc;
  lastUpdatedLabel: string;
}

export default function LegalDocView({ doc, lastUpdatedLabel }: Props) {
  return (
    <>
      <section className="bg-navy-700 text-white">
        <div className="container max-w-3xl pb-16 pt-36 lg:pb-20 lg:pt-44">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{doc.title}</h1>
          <p className="mt-4 text-sm text-navy-200">
            {lastUpdatedLabel}: {doc.updated}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container max-w-3xl">
          <p className="text-lg leading-relaxed text-navy-500">{doc.intro}</p>
          <div className="mt-10 space-y-10">
            {doc.sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-navy-600">{s.h}</h2>
                <div className="mt-3 space-y-3">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-sm leading-relaxed text-navy-500">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
