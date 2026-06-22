import Link from "next/link";
import { Inter } from "next/font/google";
import { defaultLocale } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export default function NotFound() {
  return (
    <html lang={defaultLocale} className={inter.variable}>
      <body className="font-sans">
        <div className="flex min-h-screen flex-col items-center justify-center bg-navy-600 px-6 text-center text-white">
          <p className="text-6xl font-extrabold text-orange-400">404</p>
          <h1 className="mt-4 text-2xl font-bold">Pagina nu a fost găsită / Page not found / Az oldal nem található</h1>
          <p className="mt-2 max-w-md text-navy-200">
            Ne pare rău, pagina căutată nu există. / Sorry, the page you are looking for doesn&apos;t exist. / Sajnáljuk, a keresett oldal nem létezik.
          </p>
          <Link
            href={`/${defaultLocale}`}
            className="mt-8 rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            WeLoad Acasă / Home
          </Link>
        </div>
      </body>
    </html>
  );
}
