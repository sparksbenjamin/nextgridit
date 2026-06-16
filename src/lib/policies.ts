import { cache } from "react";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { slugify } from "@/lib/guides";

const policiesDirectory = path.join(process.cwd(), "content", "policies");
const supportedExtensions = new Set([".md", ".mdx"]);

type PolicyFrontmatter = {
  title?: string;
  summary?: string;
  publishedAt?: string | Date;
  updatedAt?: string | Date;
  tags?: string[];
  slug?: string;
  eyebrow?: string;
  pdf?: string;
};

export type PolicyHeading = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type PolicySummary = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  eyebrow?: string;
  pdf?: string;
  readingTimeMinutes: number;
};

export type Policy = PolicySummary & {
  content: string;
  headings: PolicyHeading[];
};

function isPolicyFile(fileName: string) {
  const extension = path.extname(fileName).toLowerCase();
  const baseName = path.basename(fileName).toLowerCase();

  return (
    supportedExtensions.has(extension) &&
    baseName !== "readme.md" &&
    baseName !== "readme.mdx" &&
    !baseName.startsWith("_")
  );
}

function getPolicyFileNames() {
  if (!existsSync(policiesDirectory)) {
    return [];
  }

  return readdirSync(policiesDirectory).filter(isPolicyFile);
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

  throw new Error(`Policy "${fileName}" has an invalid ${fieldName} value.`);
}

function validateFrontmatter(
  fileName: string,
  data: PolicyFrontmatter,
): Required<Pick<PolicySummary, "title" | "summary" | "publishedAt">> {
  if (!data.title || !data.summary || !data.publishedAt) {
    throw new Error(
      `Policy "${fileName}" is missing required frontmatter. Expected title, summary, and publishedAt.`,
    );
  }

  return {
    title: data.title,
    summary: data.summary,
    publishedAt: normalizeDateValue(data.publishedAt, fileName, "publishedAt"),
  };
}

function estimateReadingTime(content: string) {
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / 220));
}

function extractPolicyHeadings(content: string) {
  const headings: PolicyHeading[] = [];
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

function parsePolicyFile(fileName: string): Policy {
  const filePath = path.join(policiesDirectory, fileName);
  const source = readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  const frontmatter = validateFrontmatter(fileName, data as PolicyFrontmatter);
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
    pdf: typeof data.pdf === "string" ? data.pdf : undefined,
    readingTimeMinutes: estimateReadingTime(content),
    headings: extractPolicyHeadings(content),
    content,
  };
}

export const getAllPolicies = cache((): PolicySummary[] => {
  return getPolicyFileNames()
    .map(parsePolicyFile)
    .sort((left, right) => left.title.localeCompare(right.title))
    .map((policy) => ({
      slug: policy.slug,
      title: policy.title,
      summary: policy.summary,
      publishedAt: policy.publishedAt,
      updatedAt: policy.updatedAt,
      tags: policy.tags,
      eyebrow: policy.eyebrow,
      pdf: policy.pdf,
      readingTimeMinutes: policy.readingTimeMinutes,
    }));
});

export const getPolicyBySlug = cache((slug: string): Policy | undefined => {
  const policyFileName = getPolicyFileNames().find((fileName) => {
    const source = readFileSync(path.join(policiesDirectory, fileName), "utf8");
    const { data } = matter(source);
    const fileSlug =
      typeof data.slug === "string" && data.slug.trim().length > 0
        ? slugify(data.slug)
        : slugify(path.basename(fileName, path.extname(fileName)));

    return fileSlug === slug;
  });

  return policyFileName ? parsePolicyFile(policyFileName) : undefined;
});

export function formatPolicyDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}
