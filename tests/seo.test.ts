import assert from "node:assert/strict";
import { test } from "node:test";
import { createMetadata } from "../src/lib/seo";
import { siteConfig } from "../src/lib/site-data";

test("page titles include the business identity independently of layout inheritance", () => {
  for (const path of ["/", "/services/", "/services/msp-transition/"]) {
    const metadata = createMetadata({
      title: "A page",
      description: "A useful summary",
      path,
    });
    assert.deepEqual(metadata.title, {
      absolute: `A page | ${siteConfig.name}`,
    });
    assert.equal(metadata.alternates?.canonical, path);
    assert.equal(metadata.openGraph?.url, `${siteConfig.url}${path}`);
  }
});

test("article previews retain publication facts while service pages remain websites", () => {
  const article = {
    publishedTime: "2026-03-30",
    modifiedTime: "2026-06-07",
    tags: ["Networking"],
  };
  const metadata = createMetadata({
    title: "A guide",
    description: "Guide summary",
    path: "/guides/example/",
    article,
  });
  assert(
    metadata.openGraph &&
      "type" in metadata.openGraph &&
      metadata.openGraph.type === "article",
  );
  assert.equal(metadata.openGraph.publishedTime, article.publishedTime);
  assert.equal(metadata.openGraph.modifiedTime, article.modifiedTime);
  assert.deepEqual(metadata.openGraph.tags, article.tags);
  const service = createMetadata({
    title: "Service",
    description: "Service summary",
    path: "/services/example/",
  });
  assert(
    service.openGraph &&
      "type" in service.openGraph &&
      service.openGraph.type === "website",
  );
  assert.equal("publishedTime" in service.openGraph, false);
});
