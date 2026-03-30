import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
};

type SchemaListItem = {
  name: string;
  path?: string;
  description?: string;
};

export function createMetadata({
  title,
  description,
  path,
}: MetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: ["/og-image.svg"],
    },
  };
}

export function createBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

function buildItemListEntity(items: SchemaListItem[]) {
  return {
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
      ...(item.path ? { item: `${siteConfig.url}${item.path}` } : {}),
    })),
  };
}

export function createItemListSchema(options: {
  name: string;
  items: SchemaListItem[];
  path?: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    ...buildItemListEntity(options.items),
    name: options.name,
    ...(options.description ? { description: options.description } : {}),
    ...(options.path ? { url: `${siteConfig.url}${options.path}` } : {}),
  };
}

export function createCollectionPageSchema(options: {
  name: string;
  description: string;
  path: string;
  items: SchemaListItem[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: options.name,
    description: options.description,
    url: `${siteConfig.url}${options.path}`,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    mainEntity: buildItemListEntity(options.items),
  };
}

export function createFaqSchema(
  items: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createPlaceSchema(options: {
  city: string;
  county: string;
  description: string;
  path: string;
  latitude: number;
  longitude: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${options.city}, South Carolina`,
    description: options.description,
    url: `${siteConfig.url}${options.path}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: options.city,
      addressRegion: "SC",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: options.latitude,
      longitude: options.longitude,
    },
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: options.county,
      containedInPlace: {
        "@type": "State",
        name: "South Carolina",
      },
    },
  };
}

export function createServiceSchema(options: {
  name: string;
  description: string;
  path: string;
  areaServed: string[];
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    serviceType: options.serviceType,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
    areaServed: options.areaServed.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: "South Carolina",
      },
    })),
    url: `${siteConfig.url}${options.path}`,
  };
}
