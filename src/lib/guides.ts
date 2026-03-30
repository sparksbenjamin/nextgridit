import { cache } from "react";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const guidesDirectory = path.join(process.cwd(), "content", "guides");
const supportedExtensions = new Set([".md", ".mdx"]);

type GuideFrontmatter = {
  title?: string;
  summary?: string;
  publishedAt?: string | Date;
  updatedAt?: string | Date;
  tags?: string[];
  slug?: string;
  eyebrow?: string;
};

export type GuideHeading = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type GuideSummary = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  eyebrow?: string;
  readingTimeMinutes: number;
};

export type Guide = GuideSummary & {
  content: string;
  headings: GuideHeading[];
};

function isGuideFile(fileName: string) {
  const extension = path.extname(fileName).toLowerCase();
  const baseName = path.basename(fileName).toLowerCase();

  return (
    supportedExtensions.has(extension) &&
    baseName !== "readme.md" &&
    baseName !== "readme.mdx" &&
    !baseName.startsWith("_")
  );
}

function getGuideFileNames() {
  if (!existsSync(guidesDirectory)) {
    return [];
  }

  return readdirSync(guidesDirectory).filter(isGuideFile);
}

function validateFrontmatter(
  fileName: string,
  data: GuideFrontmatter,
): Required<Pick<GuideSummary, "title" | "summary" | "publishedAt">> {
  if (!data.title || !data.summary || !data.publishedAt) {
    throw new Error(
      `Guide "${fileName}" is missing required frontmatter. Expected title, summary, and publishedAt.`,
    );
  }

  return {
    title: data.title,
    summary: data.summary,
    publishedAt: normalizeDateValue(data.publishedAt, fileName, "publishedAt"),
  };
}

function normalizeDateValue(
  value: string | Date | undefined,
  fileName: string,
  fieldName: "publishedAt" | "updatedAt",
) {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    const parsed = new Date(trimmed);

    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString().slice(0, 10);
    }
  }

  throw new Error(`Guide "${fileName}" has an invalid ${fieldName} value.`);
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function estimateReadingTime(content: string) {
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / 220));
}

function extractGuideHeadings(content: string) {
  const headings: GuideHeading[] = [];
  const lines = content.split(/\r?\n/);
  let inCodeFence = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      inCodeFence = !inCodeFence;
      continue;
    }

    if (inCodeFence) {
      continue;
    }

    const match = /^(##|###)\s+(.+)$/.exec(trimmed);

    if (!match) {
      continue;
    }

    const level = match[1].length as 2 | 3;
    const text = match[2]
      .replace(/\[(.*?)\]\(.*?\)/g, "$1")
      .replace(/[*_`~]/g, "")
      .trim();

    headings.push({
      level,
      text,
      id: slugify(text),
    });
  }

  return headings;
}

function parseGuideFile(fileName: string): Guide {
  const filePath = path.join(guidesDirectory, fileName);
  const source = readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  const frontmatter = validateFrontmatter(fileName, data as GuideFrontmatter);
  const slug =
    typeof data.slug === "string" && data.slug.trim().length > 0
      ? slugify(data.slug)
      : slugify(path.basename(fileName, path.extname(fileName)));

  return {
    slug,
    title: frontmatter.title,
    summary: frontmatter.summary,
    publishedAt: frontmatter.publishedAt,
    updatedAt: data.updatedAt
      ? normalizeDateValue(data.updatedAt, fileName, "updatedAt")
      : undefined,
    tags: Array.isArray(data.tags)
      ? data.tags.filter((tag): tag is string => typeof tag === "string")
      : [],
    eyebrow: typeof data.eyebrow === "string" ? data.eyebrow : undefined,
    readingTimeMinutes: estimateReadingTime(content),
    headings: extractGuideHeadings(content),
    content,
  };
}

export const getAllGuides = cache((): GuideSummary[] => {
  return getGuideFileNames()
    .map(parseGuideFile)
    .sort(
      (left, right) =>
        new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
    )
    .map((guide) => ({
      slug: guide.slug,
      title: guide.title,
      summary: guide.summary,
      publishedAt: guide.publishedAt,
      updatedAt: guide.updatedAt,
      tags: guide.tags,
      eyebrow: guide.eyebrow,
      readingTimeMinutes: guide.readingTimeMinutes,
    }));
});

export const getGuideBySlug = cache((slug: string): Guide | undefined => {
  const guideFileName = getGuideFileNames().find((fileName) => {
    const source = readFileSync(path.join(guidesDirectory, fileName), "utf8");
    const { data } = matter(source);
    const fileSlug =
      typeof data.slug === "string" && data.slug.trim().length > 0
        ? slugify(data.slug)
        : slugify(path.basename(fileName, path.extname(fileName)));

    return fileSlug === slug;
  });

  return guideFileName ? parseGuideFile(guideFileName) : undefined;
});

export function getRelatedGuides(currentSlug: string, limit = 3) {
  const currentGuide = getGuideBySlug(currentSlug);
  const allGuides = getAllGuides().filter((guide) => guide.slug !== currentSlug);

  if (!currentGuide) {
    return allGuides.slice(0, limit);
  }

  const currentTags = new Set(currentGuide.tags);

  return allGuides
    .map((guide) => ({
      guide,
      score: guide.tags.filter((tag) => currentTags.has(tag)).length,
    }))
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return (
        new Date(right.guide.publishedAt).getTime() -
        new Date(left.guide.publishedAt).getTime()
      );
    })
    .slice(0, limit)
    .map(({ guide }) => guide);
}

export function formatGuideDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}
