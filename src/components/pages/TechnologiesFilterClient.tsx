"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { getIndustry, getService, technologyCatalog } from "@/lib/site-data";

const categories = [
  "All",
  ...new Set(technologyCatalog.map((item) => item.category)),
];
const serviceOptions = [
  ...new Set(technologyCatalog.flatMap((item) => item.relatedServices)),
]
  .map(getService)
  .filter((item) => item !== undefined);
const industryOptions = [
  ...new Set(technologyCatalog.flatMap((item) => item.relatedIndustries)),
]
  .map(getIndustry)
  .filter((item) => item !== undefined);

export function TechnologiesFilterClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [service, setService] = useState("all");
  const [industry, setIndustry] = useState("all");
  const filtered = useMemo(
    () =>
      technologyCatalog.filter(
        (item) =>
          (category === "All" || item.category === category) &&
          (service === "all" || item.relatedServices.includes(service)) &&
          (industry === "all" || item.relatedIndustries.includes(industry)) &&
          `${item.name} ${item.summary}`
            .toLowerCase()
            .includes(query.trim().toLowerCase()),
      ),
    [query, category, service, industry],
  );
  return (
    <div>
      <section
        className="catalog-filters"
        aria-label="Filter technology expertise"
      >
        <div className="filter-fields">
          <div className="form-field">
            <label htmlFor="technology-filter">Search technologies</label>
            <input
              className="theme-input w-full"
              id="technology-filter"
              type="search"
              placeholder="Microsoft 365, firewalls, Wi-Fi…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="technology-service-filter">Related service</label>
            <select
              className="theme-input w-full"
              id="technology-service-filter"
              value={service}
              onChange={(event) => setService(event.target.value)}
            >
              <option value="all">All services</option>
              {serviceOptions.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.shortLabel}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="technology-industry-filter">Industry</label>
            <select
              className="theme-input w-full"
              id="technology-industry-filter"
              value={industry}
              onChange={(event) => setIndustry(event.target.value)}
            >
              <option value="all">All industries</option>
              {industryOptions.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="category-filters" aria-label="Technology categories">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="filter-status">
          <p role="status">
            Showing {filtered.length} of {technologyCatalog.length} technologies
          </p>
          <button
            type="button"
            className="text-link"
            onClick={() => {
              setQuery("");
              setCategory("All");
              setService("all");
              setIndustry("all");
            }}
          >
            Reset filters
          </button>
        </div>
      </section>
      <div className="resource-grid">
        {filtered.map((item) => (
          <article key={item.slug} className="resource-card">
            <p className="eyebrow">{item.category}</p>
            <h2>
              <Link href={`/technologies/${item.slug}/`}>{item.name}</Link>
            </h2>
            <p>{item.summary}</p>
            <Link
              className="text-link mt-3"
              href={`/technologies/${item.slug}/`}
            >
              Explore support
              <IconArrowRight size={17} aria-hidden="true" />
            </Link>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
              {item.relatedServices
                .map(getService)
                .filter((entry) => entry !== undefined)
                .slice(0, 2)
                .map((entry) => (
                  <Link
                    className="theme-soft text-xs underline"
                    key={entry.slug}
                    href={`/services/${entry.slug}/`}
                  >
                    {entry.shortLabel}
                  </Link>
                ))}
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="detail-section">
          <h2>No direct matches.</h2>
          <p className="theme-copy mt-3">
            Try a broader search or reset the filters. If you have a specialized
            platform in mind, we can help you assess whether it fits the
            project.
          </p>
          <Link className="text-link mt-3" href="/contact/">
            Discuss your project
            <IconArrowRight size={17} />
          </Link>
        </div>
      )}
    </div>
  );
}
