import { expect, test } from "@playwright/test";
const repository = "https://github.com/nextgridit-team/Aegis-WAF";
test.beforeEach(async ({ page }) => {
  await page.route("**/fw-cdn.com/**", (route) => route.abort());
});

test("Aegis screenshot explorer supports keyboard selection and real image destinations", async ({
  page,
}) => {
  await page.goto("/aegis/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Protect the apps",
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

test("Aegis quickstart copies exact commands and recovers from an unavailable clipboard", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/aegis/#get-started");
  await page.getByRole("button", { name: "Copy commands" }).click();
  await expect(page.getByRole("status")).toHaveText(
    "Commands copied to clipboard.",
  );
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    `git clone ${repository}.git\ncd Aegis-WAF\npython3 scripts/bootstrap-secrets.py\ndocker compose up -d --wait`,
  );
  await page.evaluate(() =>
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async () => {
          throw new Error("Unavailable");
        },
      },
    }),
  );
  await page.getByRole("button", { name: "Copied", exact: true }).click();
  await expect(page.getByRole("status")).toContainText(
    "Select and copy the commands above.",
  );
  await expect(
    page.getByRole("button", { name: "Copy commands" }),
  ).toBeEnabled();
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
  await page.goto(`${baseURL}/aegis/`);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("tabpanel").getByRole("img")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Follow the complete quickstart" }),
  ).toHaveAttribute("href", `${repository}#quickstart`);
  await page.getByText("Is Aegis free to use?", { exact: true }).click();
  await expect(page.locator("details[open]")).toContainText("MIT license");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await context.close();
});
