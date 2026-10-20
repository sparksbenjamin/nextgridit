import type { MetadataRoute } from "next";
import { getAllGuides } from "@/lib/guides";
import { getAllPolicies } from "@/lib/policies";
import { industries, locations, services, siteConfig, technologyCatalog } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const guides = getAllGuides();
  const policies = getAllPolicies();

  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/labs/`, priority: 0.96 },
    { url: `${base}/services/`, priority: 0.95 },
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}/`,
      priority: 0.9,
    })),
    { url: `${base}/industries/`, priority: 0.82 },
    ...industries.map((industry) => ({
      url: `${base}/industries/${industry.slug}/`,
      priority: 0.8,
    })),
    { url: `${base}/service-areas/`, priority: 0.82 },
    ...locations.map((location) => ({
      url: `${base}/service-areas/${location.slug}/`,
      priority: 0.8,
    })),
    { url: `${base}/technologies/`, priority: 0.78 },
    ...technologyCatalog.map((technology) => ({
      url: `${base}/technologies/${technology.slug}/`,
      priority: 0.74,
    })),
    { url: `${base}/faq/`, priority: 0.84 },
    { url: `${base}/process/`, priority: 0.7 },
    { url: `${base}/case-studies/`, priority: 0.76 },
    { url: `${base}/company-facts/`, priority: 0.72 },
    { url: `${base}/compliance/`, priority: 0.85 },
    { url: `${base}/guides/`, priority: 0.8 },
    ...guides.map((guide) => ({
      url: `${base}/guides/${guide.slug}/`,
      priority: 0.76,
      lastModified: new Date(guide.updatedAt ?? guide.publishedAt),
    })),
    { url: `${base}/resources/policy-starter-kit/`, priority: 0.78 },
    ...policies.map((policy) => ({
      url: `${base}/resources/policy-starter-kit/${policy.slug}/`,
      priority: 0.74,
      lastModified: new Date(policy.updatedAt ?? policy.publishedAt),
    })),
    { url: `${base}/project-fit/`, priority: 0.84 },
    { url: `${base}/local-first/`, priority: 0.83 },
    { url: `${base}/about/`, priority: 0.8 },
    { url: `${base}/contact/`, priority: 0.9 },
    { url: `${base}/privacy/`, priority: 0.4 },
  ];
}
