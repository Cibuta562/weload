"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HeroMap from "./HeroMap";

export interface StoryStep {
  tag: string;
  title: string;
  desc: string;
}

interface Props {
  eyebrow: string;
  heading: string;
  steps: StoryStep[];
  /** image filenames in /images, one per step */
  images: string[];
  /** tighter spacing for a shorter "mini" variant */
  compact?: boolean;
}

// Tive-style pinned scroll section: the visual stays fixed while the text
// steps scroll past; the active step drives which visual is shown.
export default function ScrollStory({
  eyebrow,
  heading,
  steps,
  images,
  compact = false,
}: Props) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(i)) setActive(i);
          }
        });
      },
      // fire when a step crosses the vertical centre of the viewport
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`bg-navy-900 text-white ${compact ? "py-16 lg:py-20" : "py-20 lg:py-28"}`}>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-orange-400">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{heading}</h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Sticky visual */}
          <div className="hidden lg:block">
            <div className="sticky top-0 flex h-screen items-center">
              <div
                className={`relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl ${
                  compact ? "aspect-[4/3]" : "aspect-[4/5]"
                }`}
              >
                {images.map((img, i) => (
                  <Image
                    key={img}
                    src={`/images/${img}`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className={`object-cover transition-all duration-700 ease-out ${
                      i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
                <HeroMap className="absolute inset-0 h-full w-full opacity-40" />

                {/* overlay caption */}
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
                    {steps[active]?.tag}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold">{steps[active]?.title}</h3>
                  {/* progress dots */}
                  <div className="mt-5 flex gap-2">
                    {steps.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          i === active ? "w-10 bg-orange-500" : "w-4 bg-white/25"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text steps */}
          <div>
            {steps.map((step, i) => (
              <div
                key={i}
                data-index={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className={`flex flex-col justify-center py-10 ${
                  compact ? "min-h-[48vh] lg:min-h-[60vh]" : "min-h-[60vh] lg:min-h-[80vh]"
                }`}
              >
                {/* mobile visual */}
                <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 lg:hidden">
                  <Image
                    src={`/images/${images[i]}`}
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                </div>

                <span
                  className={`text-5xl font-extrabold tabular-nums transition-colors duration-500 ${
                    i === active ? "text-orange-500" : "text-white/15"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
                  {step.tag}
                </span>
                <h3
                  className={`mt-2 text-2xl font-bold transition-colors duration-500 sm:text-3xl ${
                    i === active ? "text-white" : "text-white/35"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-4 max-w-md text-base leading-relaxed transition-colors duration-500 ${
                    i === active ? "text-navy-200" : "text-white/25"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
