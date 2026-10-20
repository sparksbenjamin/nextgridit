import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const output = path.resolve("out");
const origin = "https://www.nextgridit.com";
function filesIn(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? filesIn(file) : [file];
  });
}
const pages = filesIn(output).filter((file) => file.endsWith(".html"));
const anchors = new Map(pages.map((file) => [file, new Set(
  [...readFileSync(file, "utf8").matchAll(/\bid="([^"]*)"/g)].map((match) => match[1]),
)]));
function resolvePage(url) {
  const target = path.join(output, decodeURIComponent(url.pathname));
  return path.extname(target) ? target : path.join(target, "index.html");
}
const errors = [];
let links = 0;
let schemas = 0;
const indexable = new Map();
const incoming = new Set();
const titles = new Map();
const descriptions = new Map();
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key.toLowerCase(), value]));
}
for (const file of pages) {
  if (file === path.join(output, "404.html") || file === path.join(output, "404", "index.html") || file.includes(`${path.sep}_not-found${path.sep}`)) continue;
  const html = readFileSync(file, "utf8");
  const relative = path.relative(output, file).replaceAll(path.sep, "/").replace(/index\.html$/, "");
  const pageUrl = new URL(`/${relative}`, origin);
  indexable.set(pageUrl.href, file);
  const title = [...html.matchAll(/<title>([\s\S]*?)<\/title>/g)];
  if (title.length !== 1 || !title[0][1].trim()) errors.push(`${relative}: missing or duplicated title`);
  else {
    const value = title[0][1];
    if (titles.has(value)) errors.push(`${relative}: duplicate title with ${titles.get(value)}`);
    titles.set(value, relative);
  }
  const meta = [...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag));
  const description = meta.filter((tag) => tag.name === "description");
  if (description.length !== 1 || !description[0].content?.trim()) errors.push(`${relative}: missing or duplicated description`);
  else {
    const value = description[0].content;
    if (descriptions.has(value)) errors.push(`${relative}: duplicate description with ${descriptions.get(value)}`);
    descriptions.set(value, relative);
  }
  if (meta.some((tag) => /^(robots|googlebot)$/i.test(tag.name ?? "") && /noindex/i.test(tag.content ?? ""))) errors.push(`${relative}: unexpected noindex`);
  const canonical = [...html.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag)).filter((tag) => tag.rel === "canonical");
  if (canonical.length !== 1 || canonical[0].href !== pageUrl.href) errors.push(`${relative}: expected self-canonical ${pageUrl.href}`);
  const ogUrl = meta.find((tag) => tag.property === "og:url");
  if (ogUrl?.content !== pageUrl.href) errors.push(`${relative}: Open Graph URL disagrees with canonical`);
  const structuredData = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (!structuredData.length) errors.push(`${relative}: no structured data in initial HTML`);
  for (const [, json] of structuredData) {
    try {
      const schema = JSON.parse(json);
      if (!schema["@context"] || !schema["@type"]) errors.push(`${relative}: incomplete schema`);
      schemas += 1;
    } catch { errors.push(`${relative}: invalid JSON-LD`); }
  }
  for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
    if (!("alt" in attributes(tag))) errors.push(`${relative}: image missing alternative text`);
  }
  const headings = [...html.matchAll(/<h1(?:\s|>)/g)].length;
  if (headings !== 1) errors.push(`${relative}: expected one h1, found ${headings}`);
  // These patterns inspect the quoted attributes produced by the Next.js HTML export.
  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)) {
    const url = new URL(match[1].replaceAll("&amp;", "&"), pageUrl);
    if (url.origin !== origin) continue;
    links += 1;
    if (url.pathname !== pageUrl.pathname) incoming.add(new URL(url.pathname, origin).href);
    const target = resolvePage(url);
    if (anchors.has(target) && !url.pathname.endsWith("/")) errors.push(`${relative}: noncanonical internal page link ${url.pathname}`);
    if (!existsSync(target)) errors.push(`${relative}: missing target ${url.pathname}`);
    else if (url.hash && anchors.has(target) && !anchors.get(target).has(decodeURIComponent(url.hash.slice(1)))) {
      errors.push(`${relative}: missing anchor ${url.pathname}${url.hash}`);
    }
  }
}
const sitemap = readFileSync(path.join(output, "sitemap.xml"), "utf8");
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)];
const sitemapUrls = new Set(locations.map(([, url]) => url));
if (sitemapUrls.size !== locations.length) errors.push("Sitemap: duplicate URLs");
for (const location of sitemapUrls) {
  if (!indexable.has(location)) errors.push(`Sitemap: not a canonical indexable page ${location}`);
}
for (const url of indexable.keys()) {
  if (!sitemapUrls.has(url)) errors.push(`Sitemap: missing canonical page ${url}`);
  if (url !== `${origin}/` && !incoming.has(url)) errors.push(`Orphan page: ${url}`);
}
const robots = readFileSync(path.join(output, "robots.txt"), "utf8");
if (!robots.includes(`Sitemap: ${origin}/sitemap.xml`)) errors.push("Robots: incorrect sitemap URL");
for (const name of ["llms.txt", "llms-full.txt"]) {
  const content = readFileSync(path.join(output, name), "utf8");
  for (const [url] of content.matchAll(/https:\/\/www\.nextgridit\.com\/[^\s)<>]*/g)) {
    if (!indexable.has(url)) errors.push(`${name}: stale page URL ${url}`);
  }
}
assert.deepEqual(errors, [], errors.join("\n"));
console.log(`Export check passed: ${pages.length} HTML files, ${links} internal links, ${locations.length} sitemap URLs, ${schemas} JSON-LD blocks.`);
