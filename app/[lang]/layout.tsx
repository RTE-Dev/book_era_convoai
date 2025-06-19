import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Translations } from "fumadocs-ui/i18n";

const inter = Inter({
  subsets: ["latin"],
});

// translations
const cn: Partial<Translations> = {
  search: "搜索",
};

const locales = [
  {
    name: "English",
    locale: "en",
  },
  {
    name: "Chinese",
    locale: "cn",
  },
];

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const lang = (await params).lang;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={{
            locale: lang,
            locales,
            translations: { cn }[lang],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
