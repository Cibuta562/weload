import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getLegal } from "@/lib/legal";
import LegalDocView from "@/components/LegalDocView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const legal = getLegal(isLocale(locale) ? locale : "ro");
  return { title: legal.privacy.title };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const legal = getLegal(locale);
  return <LegalDocView doc={legal.privacy} lastUpdatedLabel={legal.ui.lastUpdated} />;
}
