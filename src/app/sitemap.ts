import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nextgridit.com";

  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/services/`, priority: 0.9 },
    { url: `${base}/compliance/`, priority: 0.85 },
    { url: `${base}/about/`, priority: 0.8 },
    { url: `${base}/contact/`, priority: 0.9 },
    { url: `${base}/privacy/`, priority: 0.4 },
  ];
}
