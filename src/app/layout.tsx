import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EireneOps - Operational Intelligence & Autonomous Systems",
  description:
    "EireneOps builds intelligent operational systems for executives, law firms, and high-trust organizations requiring reliable, secure, and professional technology.",
  keywords: [
    "executive operations",
    "legal intelligence",
    "agentic engineering",
    "secure AI systems",
    "autonomous workflows",
    "Nypzim Holdings",
  ],
  authors: [{ name: "Nypzim Holdings LLC" }],
  openGraph: {
    title: "EireneOps - Operational Intelligence & Autonomous Systems",
    description:
      "Intelligent systems for the people who keep organizations moving. Combining software, automation, and controlled agentic workflows into secure platforms.",
    type: "website",
    locale: "en_US",
    siteName: "EireneOps",
  },
  twitter: {
    card: "summary_large_image",
    title: "EireneOps - Operational Intelligence & Autonomous Systems",
    description:
      "Intelligent operational systems for executives, law firms, and high-trust organizations.",
  },
  alternates: {
    canonical: "https://eireneops.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0D0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EireneOps",
    url: "https://eireneops.com",
    foundingDate: "2026",
    parentOrganization: {
      "@type": "Organization",
      name: "Nypzim Holdings LLC",
    },
    description:
      "EireneOps builds intelligent operational systems, legal intelligence platforms, and agentic workflows for executives and enterprises.",
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} bg-brand-bg text-brand-text font-sans antialiased min-h-screen selection:bg-brand-accent selection:text-brand-bg`}
      >
        {children}
      </body>
    </html>
  );
}
