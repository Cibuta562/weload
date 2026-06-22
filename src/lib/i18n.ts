export const locales = ["ro", "en", "hu"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ro";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** A value that exists in both languages. */
export type Localized<T = string> = Record<Locale, T>;

export function t<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export const localeNames: Localized = {
  ro: "RO",
  en: "EN",
  hu: "HU",
};
