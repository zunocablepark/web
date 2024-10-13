import "./globals.css";

import type { Metadata } from "next";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Footer, NavHeader, WhatsappButton } from "@/components";
import { ADDRESS_LOCALITY, ADDRESS_STREET, BASE_URL, INSTAGRAM_URL, PHONE_DASHED, POSTAL_CODE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { fontSans } from "./fonts";

const metadataBase = new URL(BASE_URL)

export const metadata: Metadata = {
  metadataBase: metadataBase,
  title: "Zuno Cable Park - Wakeboard e Wakeskate em Curitiba | Reserve Agora",
  description:
    "Experimente a emoção do wakeboard e wakeskate no Zuno Cable Park, localizado perto de Curitiba. Reserve sua sessão agora!",
  openGraph: {
    title: "Zuno Cable Park",
    description:
      "Experimente a emoção do wakeboard e wakeskate no Zuno Cable Park, localizado perto de Curitiba. Instrutores especializados, equipamentos de ponta e cenário deslumbrante. Reserve sua aventura hoje!",
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
    videos: [
      {
        url: `${BASE_URL}/videos/hero-720.mp4`,
        width: 1280,
        height: 720,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuno Cable Park - Wakeboard e Wakeskate em Curitiba",
    description:
      "Descruba experiências emocionantes com wakeboard e wakeskate no Zuno Cable Park, a melhor experiência perto de Curitiba.",
    images: [`${BASE_URL}/images/hero.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Wakeboard",
    "Wakeboard Curitiba",
    "Wakeskate",
    "Wakeskate Curitiba",
    "Zuno Cable Park",
    "Cable Park Curitiba",
    "Wake Park Curitiba Paraná",
    "Parque de Wakeboard perto de Curitiba",
    "Melhor Cable Park do Brasil",
    "Aulas de Wakeboard em Curitiba",
    "Wakeboard para Iniciantes",
    "Esportes Aquáticos",
    "Esportes Radicais Curitiba - PR",
    "Parque de Esportes Radicais Curitiba",
  ],
  generator: "Next.js",
  applicationName: "Zuno Cable Park",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Diego Feder" }, { name: "Pedro Zucki"}],
  creator: "Pedro Zucki",
  publisher: "Zuno Cable Park",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Zuno Cable Park",
    "url": BASE_URL,
    "logo": `${BASE_URL}/images/logo.png`,
    "image": `${BASE_URL}/images/hero.jpeg`,
    "description": "Experimente a emoção do wakeboard e wakeskate no Zuno Cable Park, localizado perto de Curitiba. Reserve sua sessão agora!",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": ADDRESS_STREET,
      "addressLocality": ADDRESS_LOCALITY,
      "addressRegion": "PR",
      "postalCode": POSTAL_CODE,
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": PHONE_DASHED,
      "contactType": "Customer Service",
      "areaServed": "BR",
      "availableLanguage": ["Portuguese"]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      INSTAGRAM_URL
    ]
  };

  return (
    <html lang="pt-BR">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
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
