"use client";

import { useEffect, useState } from "react";

interface Props {
  text: string;
  policy: string;
  policyHref: string;
  preferences: string;
  deny: string;
  accept: string;
}

const STORAGE_KEY = "weload-cookie-consent";

export default function CookieBanner({ text, policy, policyHref, preferences, deny, accept }: Props) {
  const [visible, setVisible] = useState(false);
  const [shown, setShown] = useState(false); // controls slide-in animation

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
        // next tick to trigger the transition
        const t = setTimeout(() => setShown(true), 60);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
      setShown(true);
    }
  }, []);

  function decide(choice: "accepted" | "denied" | "preferences") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setShown(false);
    setTimeout(() => setVisible(false), 300);
  }

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-center p-4">
      <div
        className={`pointer-events-auto flex w-full max-w-3xl flex-col gap-4 rounded-2xl border border-white/10 bg-navy-800/95 p-5 shadow-2xl shadow-navy-900/50 backdrop-blur-md transition-all duration-300 sm:flex-row sm:items-center sm:gap-6 ${
          shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
        role="dialog"
        aria-label="Cookies"
      >
        <p className="flex-1 text-sm leading-relaxed text-navy-100">
          {text}{" "}
          <a
            href={policyHref}
            className="font-semibold text-orange-300 underline underline-offset-2 hover:text-orange-200"
          >
            {policy}
          </a>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => decide("preferences")}
            className="rounded-full px-4 py-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            {preferences}
          </button>
          <button
            type="button"
            onClick={() => decide("denied")}
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {deny}
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            {accept}
          </button>
        </div>
      </div>
    </div>
  );
}
