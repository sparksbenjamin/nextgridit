import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { locations, services, siteConfig, technologyCatalog } from "@/lib/site-data";

const themeInitScript = `
  (() => {
    try {
      const storageKey = "nextgridit-theme";
      const hackerKey = "nextgridit-hacker-unlocked";
      const savedTheme = window.localStorage.getItem(storageKey);
      const hackerUnlocked = window.localStorage.getItem(hackerKey) === "true";
      const nextTheme =
        savedTheme === "dark" || savedTheme === "light" || (savedTheme === "hacker" && hackerUnlocked)
          ? savedTheme
          : "dark";
      document.documentElement.dataset.theme = nextTheme;
      document.documentElement.style.colorScheme = nextTheme === "light" ? "light" : "dark";
    } catch (error) {
      document.documentElement.dataset.theme = "dark";
      document.documentElement.style.colorScheme = "dark";
    }
  })();
`;

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NextGridIT | Your IT. Under Your Control.",
    template: "%s | NextGridIT",
  },
  description: siteConfig.tagline,
  keywords: [
    "IT support Seneca SC",
    "MSP transition consultant Upstate SC",
    "vendor lockout recovery South Carolina",
    "HIPAA security assessment Greenville SC",
    "vulnerability assessment Anderson SC",
    "network infrastructure Clemson SC",
    "Microsoft 365 migration South Carolina",
    "infrastructure hardening",
    "penetration testing Upstate SC",
    "compliance-aware IT support",
    "local AI consulting",
    "NextGridIT",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NextGridIT | Your IT. Under Your Control.",
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "NextGridIT - IT Support and Security for Upstate South Carolina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGridIT | Your IT. Under Your Control.",
    description: siteConfig.tagline,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "technology",
};

const knowledgeAreas = Array.from(
  new Set([
    ...services.map((service) => service.title),
    ...technologyCatalog.map((technology) => technology.name),
    "MSP transition and vendor independence",
    "Vendor lockout recovery",
    "HIPAA security assessment",
    "Vulnerability assessment and remediation",
    "Infrastructure hardening",
    "Microsoft 365 administration",
    "Network infrastructure and Wi-Fi",
    "Penetration testing",
    "Camera systems and surveillance",
    "Private AI consulting",
    "HIPAA-aware support",
    "PCI DSS-informed support",
    "NIST 800-53 compliance",
    "MARS-E compliance",
    "Public Wi-Fi",
    "Local-first camera systems",
  ]),
);

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#professionalservice`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  areaServed: locations.map((location) => ({
    "@type": "City",
    name: location.city,
    url: `${siteConfig.url}/service-areas/${location.slug}/`,
    containedInPlace: {
      "@type": "State",
      name: "South Carolina",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates[1],
      longitude: location.coordinates[0],
    },
  })),
  description: siteConfig.tagline,
  sameAs: siteConfig.sameAs,
  knowsAbout: knowledgeAreas,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: "US-SC",
      availableLanguage: ["English"],
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "NextGridIT Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        url: `${siteConfig.url}/services/${service.slug}/`,
      },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.tagline,
  inLanguage: "en-US",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  sameAs: siteConfig.sameAs,
  foundingDate: siteConfig.founded,
  knowsAbout: knowledgeAreas,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} cyber-grid min-h-screen antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:px-4 focus:py-2 focus:text-[var(--selection-text)]"
          style={{ backgroundColor: "var(--selection-bg)" }}
        >
          Skip to content
        </a>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
        <script
          id="freshsales-tracking"
          src="https://fw-cdn.com/16007206/7027400.js"
          async
          chat="false"
        ></script>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main id="main-content" className="flex-grow pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
