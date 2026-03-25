import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nextgridit.com"),
  title: {
    default: "NextGridIT | Network Infrastructure, Security, and IT Support",
    template: "%s | NextGridIT",
  },
  description:
    "Network infrastructure, security, and IT support for businesses in Seneca, Clemson, Anderson, Easley, and Greenville, South Carolina.",
  keywords: [
    "IT support Upstate South Carolina",
    "network infrastructure Greenville SC",
    "cybersecurity Seneca SC",
    "managed IT Clemson SC",
    "compliance support Anderson SC",
    "Ubiquiti support Easley SC",
    "NextGridIT",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NextGridIT | Network Infrastructure, Security, and IT Support",
    description:
      "Network infrastructure, security, and IT support for businesses in Upstate South Carolina.",
    url: "https://www.nextgridit.com",
    siteName: "NextGridIT",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "NextGridIT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGridIT | Network Infrastructure, Security, and IT Support",
    description:
      "Local IT infrastructure, security, and support for Upstate South Carolina businesses.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "NextGridIT",
  url: "https://www.nextgridit.com",
  telephone: "+1-864-780-0202",
  email: "contact@nextgridit.com",
  areaServed: [
    "Seneca, South Carolina",
    "Clemson, South Carolina",
    "Anderson, South Carolina",
    "Easley, South Carolina",
    "Greenville, South Carolina",
  ],
  description:
    "Network infrastructure, security, and IT support for businesses across Upstate South Carolina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased cyber-grid min-h-screen selection:bg-[var(--color-brand-green)] selection:text-black`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[#39ff14] focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main id="main-content" className="flex-grow pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
