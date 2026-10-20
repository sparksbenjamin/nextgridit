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
for (const file of pages) {
  if (file === path.join(output, "404.html") || file.includes(`${path.sep}_not-found${path.sep}`)) continue;
  const html = readFileSync(file, "utf8");
  const relative = path.relative(output, file).replaceAll(path.sep, "/").replace(/index\.html$/, "");
  const pageUrl = new URL(`/${relative}`, origin);
  const headings = [...html.matchAll(/<h1(?:\s|>)/g)].length;
  if (headings !== 1) errors.push(`${relative}: expected one h1, found ${headings}`);
  // These patterns inspect the quoted attributes produced by the Next.js HTML export.
  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)) {
    const url = new URL(match[1].replaceAll("&amp;", "&"), pageUrl);
    if (url.origin !== origin) continue;
    links += 1;
    const target = resolvePage(url);
    if (!existsSync(target)) errors.push(`${relative}: missing target ${url.pathname}`);
    else if (url.hash && anchors.has(target) && !anchors.get(target).has(decodeURIComponent(url.hash.slice(1)))) {
      errors.push(`${relative}: missing anchor ${url.pathname}${url.hash}`);
    }
  }
}
const sitemap = readFileSync(path.join(output, "sitemap.xml"), "utf8");
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)];
for (const [, location] of locations) {
  if (!existsSync(resolvePage(new URL(location)))) errors.push(`Sitemap: missing page ${location}`);
}
assert.deepEqual(errors, [], errors.join("\n"));
console.log(`Export check passed: ${pages.length} HTML files, ${links} internal links, ${locations.length} sitemap URLs.`);
