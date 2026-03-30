import type { MetadataRoute } from "next";
import { getAllGuides } from "@/lib/guides";
import { industries, locations, services, technologyCatalog } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nextgridit.com";
  const lastModified = new Date();
  const guides = getAllGuides();

  return [
    { url: `${base}/`, priority: 1, lastModified },
    { url: `${base}/services/`, priority: 0.95, lastModified },
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}/`,
      priority: 0.9,
      lastModified,
    })),
    { url: `${base}/industries/`, priority: 0.82, lastModified },
    ...industries.map((industry) => ({
      url: `${base}/industries/${industry.slug}/`,
      priority: 0.8,
      lastModified,
    })),
    { url: `${base}/service-areas/`, priority: 0.82, lastModified },
    ...locations.map((location) => ({
      url: `${base}/service-areas/${location.slug}/`,
      priority: 0.8,
      lastModified,
    })),
    { url: `${base}/technologies/`, priority: 0.78, lastModified },
    ...technologyCatalog.map((technology) => ({
      url: `${base}/technologies/${technology.slug}/`,
      priority: 0.74,
      lastModified,
    })),
    { url: `${base}/faq/`, priority: 0.84, lastModified },
    { url: `${base}/process/`, priority: 0.7, lastModified },
    { url: `${base}/case-studies/`, priority: 0.76, lastModified },
    { url: `${base}/company-facts/`, priority: 0.72, lastModified },
    { url: `${base}/compliance/`, priority: 0.85, lastModified },
    { url: `${base}/guides/`, priority: 0.8, lastModified },
    ...guides.map((guide) => ({
      url: `${base}/guides/${guide.slug}/`,
      priority: 0.76,
      lastModified: new Date(guide.updatedAt ?? guide.publishedAt),
    })),
    { url: `${base}/project-fit/`, priority: 0.84, lastModified },
    { url: `${base}/local-first/`, priority: 0.83, lastModified },
    { url: `${base}/about/`, priority: 0.8, lastModified },
    { url: `${base}/contact/`, priority: 0.9, lastModified },
    { url: `${base}/privacy/`, priority: 0.4, lastModified },
  ];
}
