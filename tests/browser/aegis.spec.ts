import { expect, test } from "@playwright/test";
const repository = "https://github.com/nextgridit-team/Aegis-WAF";
test.beforeEach(async ({ page }) => {
  await page.route("**/fw-cdn.com/**", (route) => route.abort());
});

test("Aegis screenshot explorer supports keyboard selection and real image destinations", async ({
  page,
}) => {
  await page.goto("/aegis/WAF/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Aegis WAF",
  );
  const tabs = page.getByRole("tablist", { name: "Product screenshots" });
  await tabs.getByRole("tab", { name: "Traffic visibility" }).focus();
  await page.keyboard.press("ArrowRight");
  await expect(tabs.getByRole("tab", { name: "Policy control" })).toBeFocused();
  await expect(page.getByRole("tabpanel").getByRole("img")).toHaveAttribute(
    "src",
    "/aegis/curated-set-builder.webp",
  );
  await page.keyboard.press("End");
  await expect(
    tabs.getByRole("tab", { name: "TLS certificates" }),
  ).toHaveAttribute("aria-selected", "true");
  await expect(
    page.getByRole("link", { name: "Open full-size screenshot" }),
  ).toHaveAttribute(
    "href",
    `${repository}/blob/main/docs/screenshots/certificates-current.png`,
  );
  await page.keyboard.press("Home");
  await expect(
    tabs.getByRole("tab", { name: "Traffic visibility" }),
  ).toHaveAttribute("aria-selected", "true");
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator(".mobile-contact-bar")).toHaveCount(0);
  await tabs.getByRole("tab", { name: "Policy control" }).click();
  await expect(page.getByRole("tabpanel").getByRole("img")).toBeVisible();
  await expect
    .poll(() =>
      page
        .getByRole("tabpanel")
        .getByRole("img")
        .evaluate((image) => (image as HTMLImageElement).naturalWidth),
    )
    .toBeGreaterThan(0);
  await expect(
    page.getByRole("link", { name: "Explore on GitHub" }).first(),
  ).toHaveAttribute("href", repository);
});

test("Aegis WAF has one canonical landing page with product-specific metadata", async ({
  page,
  request,
}) => {
  for (const path of ["/aegis/", "/aegis", "/aegis/index.html", "/aegis/waf/", "/aegis/WAF", "/aegis/WAF/index.html"]) {
    const response = await request.get(`${path}?ref=github`, { maxRedirects: 0 });
    expect(response.status(), path).toBe(308);
    expect(new URL(response.headers().location).pathname).toBe("/aegis/WAF/");
    expect(new URL(response.headers().location).search).toBe("?ref=github");
  }
  await page.goto("/aegis/WAF/");
  await expect(page).toHaveTitle("Aegis WAF — Open-Source Web Application Firewall | NextGridIT");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://www.nextgridit.com/aegis/WAF/");
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", "https://www.nextgridit.com/aegis/WAF/");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /Aegis WAF.*open-source.*self-hosted/);
  const schema = JSON.parse(await page.locator("#aegis-software-schema").innerText());
  expect(schema.name).toBe("Aegis WAF");
  expect(schema.url).toBe("https://www.nextgridit.com/aegis/WAF/");
  expect(schema.sameAs).toBe(repository);
  await expect(page.locator("#use-cases")).toContainText("HTTP APIs and streaming services");
  await expect(page.locator("#get-started")).toContainText("Start with one application.");
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toContain("<loc>https://www.nextgridit.com/aegis/WAF/</loc>");
  expect(sitemap).not.toContain("<loc>https://www.nextgridit.com/aegis/</loc>");
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Explore Aegis WAF", exact: true })).toHaveAttribute("href", "/aegis/WAF/");
});

test("Aegis stays discoverable, readable and useful without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto(`${baseURL}/aegis/WAF/`);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("tabpanel").getByRole("img")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Install Aegis WAF" }),
  ).toHaveAttribute("href", `${repository}#quickstart`);
  await page.getByText("Is Aegis WAF free to use?", { exact: true }).click();
  await expect(page.locator("details[open]")).toContainText("MIT license");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await context.close();
});
