import "./globals.css";

import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import { Footer, NavHeader, WhatsappButton } from "@/components";
import { fontSans } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://zunocablepark.com.br"),
  title: "Zuno Cable Park - Wakeboard & Wakeskate em Curitiba",
  description:
    "Experimente a emoção do wakeboard e wakeskate no Zuno Cable Park, localizado perto de Curitiba. Reserve sua sessão agora!",
  openGraph: {
    title: "Zuno Cable Park",
    description:
      "Experimente a emoção do wakeboard e wakeskate no Zuno Cable Park, localizado perto de Curitiba. Reserve sua sessão agora!",
    url: "https://zunocablepark.com.br",
    siteName: "Zuno Cable Park",
    images: [
      {
        url: "/images/hero.jpeg", // Local image path
        // url: 'https://nextjs.org/og-alt.png',  // Must be an absolute URL
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
      "Experimente a emoção do wakeboard e wakeskate no Zuno Cable Park, localizado perto de Curitiba. Reserve sua sessão agora!",
    images: ["/images/hero.jpeg"], // Local image path
    // images: ['https://nextjs.org/og.png'], // Must be an absolute URL
  },
  generator: "Next.js",
  applicationName: "Zuno Cable Park",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Wakeboard",
    "Wakeskate",
    "Curitiba",
    "Esportes Aquáticos",
    "Zuno Cable Park",
  ],
  authors: [
    { name: "Diego Feder" },
    { name: "Pedro Zucki", url: "https://zunocablepark.com.br" },
  ],
  creator: "Pedro Zucki",
  publisher: "Zuno Cable Park",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
