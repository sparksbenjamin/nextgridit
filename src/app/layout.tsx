import { JsonLd } from "@/components/content/JsonLd";
import type { Metadata, Viewport } from "next";
import {
  IBM_Plex_Mono,
  Instrument_Serif,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import "./studio.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer2026 } from "@/components/layout/Footer2026";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { SiteMotion } from "@/components/layout/SiteMotion";
import {
  locations,
  services,
  siteConfig,
  technologyCatalog,
} from "@/lib/site-data";

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
          : "light";
      document.documentElement.dataset.theme = nextTheme;
      document.documentElement.style.colorScheme = nextTheme === "light" ? "light" : "dark";
    } catch (error) {
      document.documentElement.dataset.theme = "light";
      document.documentElement.style.colorScheme = "light";
    }
  })();
`;

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const editorial = Instrument_Serif({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#f7f8f5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "IT Support & Security in Seneca & Upstate SC | NextGridIT",
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
    "hybrid cloud infrastructure",
    "on-prem infrastructure",
    "managed cloud workloads",
    "infrastructure hardening",
    "penetration testing Upstate SC",
    "compliance-aware IT support",
    "local AI consulting",
    "NextGridIT",
  ],
  openGraph: {
    title: "IT Support & Security in Seneca & Upstate SC | NextGridIT",
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NextGridIT - IT Support and Security for Upstate South Carolina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Support & Security in Seneca & Upstate SC | NextGridIT",
    description: siteConfig.tagline,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  category: "technology",
  robots: {
    googleBot: { "max-image-preview": "large" },
  },
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
  logo: `${siteConfig.url}/og-image.png`,
  image: `${siteConfig.url}/og-image.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Seneca",
    addressRegion: "SC",
    addressCountry: "US",
  },
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
  founder: {
    "@type": "Person",
    name: "Benjamin Sparks",
    jobTitle: "Senior Security Analyst and IT Consultant",
    knowsAbout: [
      "HIPAA compliance",
      "NIST 800-53",
      "MARS-E",
      "Vulnerability assessment",
      "Microsoft 365 administration",
      "Network infrastructure",
      "Vendor lockout recovery",
      "MSP transition",
      "Penetration testing",
      "Security research",
    ],
  },
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
        areaServed: locations.map((l) => l.city),
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
  logo: `${siteConfig.url}/og-image.png`,
  sameAs: siteConfig.sameAs,
  foundingDate: siteConfig.founded,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Seneca",
    addressRegion: "SC",
    addressCountry: "US",
  },
  knowsAbout: knowledgeAreas,
  founder: {
    "@type": "Person",
    name: "Benjamin Sparks",
    jobTitle: "Senior Security Analyst and IT Consultant",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${editorial.variable} min-h-screen antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:px-4 focus:py-2 focus:text-[var(--selection-text)]"
          style={{ backgroundColor: "var(--selection-bg)" }}
        >
          Skip to content
        </a>
        <JsonLd id="website-schema" data={websiteSchema} />
        <JsonLd id="organization-schema" data={organizationSchema} />
        <JsonLd id="local-business-schema" data={professionalServiceSchema} />
        <script
          id="freshsales-tracking"
          src="https://fw-cdn.com/16007206/7027400.js"
          async
          chat="false"
        ></script>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <SiteMotion />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer2026 />
          <MobileStickyBar />
        </div>
      </body>
    </html>
  );
}
