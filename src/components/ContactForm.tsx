"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { services } from "@/lib/services";

interface Props {
  locale: Locale;
  dict: Dictionary;
  defaultService?: string;
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({ locale, dict, defaultService }: Props) {
  const f = dict.contact.form;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-navy-700 outline-none transition-colors placeholder:text-navy-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100";
  const labelClass = "mb-1.5 block text-sm font-semibold text-navy-600";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {f.name} *
          </label>
          <input id="name" name="name" required className={inputClass} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {f.email} *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            {f.phone}
          </label>
          <input id="phone" name="phone" className={inputClass} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            {f.company}
          </label>
          <input id="company" name="company" className={inputClass} autoComplete="organization" />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          {f.service}
        </label>
        <select id="service" name="service" defaultValue={defaultService ?? ""} className={inputClass}>
          <option value="">{f.servicePlaceholder}</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title[locale]}>
              {s.title[locale]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {f.message} *
        </label>
        <textarea id="message" name="message" required rows={5} className={inputClass} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? f.sending : f.submit}
      </button>

      {status === "success" && (
        <p className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
          {f.success}
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          {f.error}
        </p>
      )}
    </form>
  );
}
