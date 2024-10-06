import "./globals.css";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Footer, NavHeader, WhatsappButton } from "@/components";
import { BASE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { fontSans } from "./fonts";

const metadataBase = new URL(BASE_URL)

export const metadata: Metadata = {
  metadataBase: metadataBase,
  title: "Zuno Cable Park - Wakeboard & Wakeskate em Curitiba",
  description:
    "Experimente a emoção do wakeboard e wakeskate no Zuno Cable Park, localizado perto de Curitiba. Reserve sua sessão agora! Perfeito para iniciantes e profissionais.",
  openGraph: {
    title: "Zuno Cable Park",
    description:
      "Experimente a emoção do wakeboard e wakeskate no Zuno Cable Park, localizado perto de Curitiba. Reserve sua sessão agora!",
    url: BASE_URL,
    siteName: "Zuno Cable Park",
    images: [
      {
        url: `${BASE_URL}/images/hero.jpeg`,
        width: 1280,
        height: 720,
        alt: "Zuno Cable Park",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuno Cable Park - Wakeboard & Wakeskate em Curitiba",
    description:
      "Experimente a emoção do wakeboard e wakeskate no Zuno Cable Park, a melhor experiência de wake perto de Curitiba.",
    images: [`${BASE_URL}/images/hero.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Wakeboard",
    "Wakeskate",
    "Curitiba",
    "Esportes Aquáticos",
    "Zuno Cable Park",
  ],
  generator: "Next.js",
  applicationName: "Zuno Cable Park",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Diego Feder" }, { name: "Pedro Zucki", url: BASE_URL }],
  creator: "Pedro Zucki",
  publisher: "Zuno Cable Park",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <WhatsappButton />
        <NavHeader />
        <main className="flex flex-col items-center justify-between min-h-screen bg-black">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
