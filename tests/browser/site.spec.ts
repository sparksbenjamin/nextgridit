import { expect, test } from "@playwright/test";
import { siteConfig } from "../../src/lib/site-data";

const representativePages = [
  "/",
  "/services/",
  "/services/msp-transition/",
  "/about/",
  "/contact/",
  "/guides/",
  "/guides/why-local-dns-matters/",
  "/resources/policy-starter-kit/",
  "/resources/policy-starter-kit/password-and-mfa-policy/",
  "/industries/medical-offices/",
  "/service-areas/seneca-sc/",
  "/technologies/",
  "/technologies/microsoft-365/",
  "/labs/",
  "/faq/",
  "/services/network-wifi/",
  "/case-studies/",
  "/process/",
  "/compliance/",
  "/local-first/",
  "/company-facts/",
  "/project-fit/",
  "/privacy/",
];

test.beforeEach(async ({ page }) => {
  // Do not send local review activity to marketing integrations.
  await page.route("**/fw-cdn.com/**", (route) => route.abort());
});

for (const width of [320, 390, 768, 1024, 1440]) {
  test(`templates reflow and retain SEO signals at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    const exceptions: string[] = [];
    page.on("pageerror", (error) => exceptions.push(error.message));
    for (const path of representativePages) {
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(200);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator("h1"), path).toHaveCount(1);
      await expect(page.locator('link[rel="canonical"]'), path).toHaveAttribute(
        "href",
        `https://www.nextgridit.com${path}`,
      );
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${path}: page overflow at ${width}`,
      ).toBe(true);
      expect(
        await page.locator('script[type="application/ld+json"]').count(),
        path,
      ).toBeGreaterThan(2);
      const overlaps = await page.locator(".header-row").evaluate((header) => {
        const boxes = [...header.children]
          .map((element) => element.getBoundingClientRect())
          .filter((rect) => rect.width && rect.height);
        return boxes.some((rect, index) =>
          boxes
            .slice(index + 1)
            .some(
              (other) =>
                rect.right > other.left + 1 && rect.left < other.right - 1,
            ),
        );
      });
      expect(overlaps, `${path}: header collision at ${width}`).toBe(false);
    }
    expect(exceptions).toEqual([]);
  });
}

test("all sitemap destinations are served; missing routes and legacy redirects work", async ({
  request,
}) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => new URL(match[1]).pathname,
  );
  expect(paths.length).toBeGreaterThan(70);
  for (let index = 0; index < paths.length; index += 4) {
    await Promise.all(
      paths.slice(index, index + 4).map(async (path) => {
        const response = await request.get(path);
        expect(response.status(), path).toBe(200);
        expect(await response.text(), path).toContain(
          'type="application/ld+json"',
        );
      }),
    );
  }
  for (const path of [
    "/does-not-exist/",
    "/services/does-not-exist/",
    "/guides/does-not-exist/",
  ])
    expect((await request.get(path)).status()).toBe(404);
  for (const path of ["/about", "/about.html", "/about/index.html"]) {
    const response = await request.get(path, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe("/about/");
  }
  const legacy = await request.get("/services/security-hardening/", {
    maxRedirects: 0,
  });
  expect(legacy.status()).toBe(301);
  expect(legacy.headers().location).toBe("/services/infrastructure-hardening/");
});

test("mobile navigation supports disclosure, Escape, resize, and route changes", async ({
  page,
}) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open navigation menu" });
  await trigger.click();
  await expect(page.locator("#main-content")).toHaveAttribute("inert", "");
  await expect(page.locator("#mobile-navigation")).toBeVisible();
  await page
    .locator("#mobile-navigation summary")
    .filter({ hasText: "Services" })
    .click();
  await page
    .locator("#mobile-navigation")
    .getByRole("link", { name: "MSP transition", exact: true })
    .focus();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await expect(page.locator("#main-content")).not.toHaveAttribute("inert", "");
  await trigger.click();
  await page.setViewportSize({ width: 1440, height: 1000 });
  await expect(page.locator("#mobile-navigation")).toBeHidden();
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
    "hidden",
  );
  const services = page
    .locator(".desktop-nav")
    .getByRole("button", { name: "Services", exact: true });
  await services.click();
  await page
    .locator("#desktop-navigation")
    .getByRole("link", { name: "MSP transition", exact: true })
    .click();
  await expect(page).toHaveURL(/\/services\/msp-transition\/$/);
  await expect(page.locator("#desktop-navigation")).toBeHidden();
});

test("themes apply to all main surfaces, persist, and work without storage", async ({
  page,
}) => {
  await page.goto("/");
  const lightBackground = await page
    .locator("body")
    .evaluate((element) => getComputedStyle(element).backgroundColor);
  await page
    .locator("footer")
    .getByRole("button", { name: "Dark", exact: true })
    .click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  expect(
    await page
      .locator("body")
      .evaluate((element) => getComputedStyle(element).backgroundColor),
  ).not.toBe(lightBackground);
  await page.goto("/services/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.addInitScript(() =>
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new Error("Storage unavailable");
      },
    }),
  );
  await page.goto("/");
  await page
    .locator("footer")
    .getByRole("button", { name: "Dark", exact: true })
    .click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("consultation links hand off to Bookings and project details remain available", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  for (const path of ["/", "/services/msp-transition/", "/contact/"]) {
    await page.goto(path);
    await expect(page.locator(".header-cta")).toHaveAttribute(
      "href",
      siteConfig.bookingUrl,
    );
    const links = page.locator(`main a[href="${siteConfig.bookingUrl}"]`);
    expect(await links.count()).toBeGreaterThan(0);
  }
  await page
    .getByRole("link", { name: "Send project details instead", exact: true })
    .click();
  await expect(page).toHaveURL(/\/contact\/#project-details$/);
  await expect(page.locator("#project-details")).toBeInViewport();
  // Test the handoff without creating an appointment or depending on provider uptime.
  await page.route(siteConfig.bookingUrl, (route) =>
    route.fulfill({
      contentType: "text/html",
      body: "<h1>Booking destination test</h1>",
    }),
  );
  await page.getByRole("link", { name: "Choose a time", exact: true }).click();
  await expect(page).toHaveURL(siteConfig.bookingUrl);
  await expect(
    page.getByRole("heading", { name: "Booking destination test" }),
  ).toBeVisible();
});

test("contact validates input, preserves failures, prevents duplicate sends, and confirms accepted delivery", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/contact/");
  await expect(page.locator(".mobile-contact-bar")).toHaveCount(0);
  // Exercise the actual Worker origin/validation path without sending email.
  const invalidResponse = await page.evaluate(
    async () =>
      (
        await fetch("/api/contact", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: "{}",
        })
      ).status,
  );
  expect(invalidResponse).toBe(400);
  await page.getByRole("button", { name: "Send Message" }).click();
  expect(
    await page
      .locator("#email")
      .evaluate((element: HTMLInputElement) => element.validity.valueMissing),
  ).toBe(true);
  await page.locator("#company").fill("Browser verification");
  await page.locator("#email").fill("visitor@example.com");
  await page
    .locator("#details")
    .fill("Please help plan a network upgrade in Seneca.");
  await page.route("**/api/contact", (route) =>
    route.fulfill({
      status: 503,
      contentType: "application/json",
      body: '{"error":"Unavailable"}',
    }),
  );
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.locator(".contact-form").getByRole("alert")).toContainText(
    "couldn’t confirm delivery",
  );
  await expect(page.locator("#details")).toHaveValue(
    "Please help plan a network upgrade in Seneca.",
  );
  await expect(
    page.getByRole("link", { name: "open a pre-filled email" }),
  ).toHaveAttribute("href", /^mailto:/);
  await page.unroute("**/api/contact");
  let sends = 0;
  await page.route("**/api/contact", async (route) => {
    sends += 1;
    await new Promise((resolve) => setTimeout(resolve, 350));
    await route.fulfill({
      status: 202,
      contentType: "application/json",
      body: '{"ok":true}',
    });
  });
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(
    page.getByRole("button", { name: "Sending your message…" }),
  ).toBeDisabled();
  await expect(page.locator(".contact-form").getByRole("status")).toContainText(
    "Your message has been sent",
  );
  await expect(page.locator("#details")).toHaveValue("");
  expect(sends).toBe(1);
});

test("technology filters combine, expose an empty state, and reset", async ({
  page,
}) => {
  await page.goto("/technologies/");
  const initialStatus = await page.getByRole("status").textContent();
  await page.locator("#technology-filter").fill("Microsoft 365");
  await expect(page.getByRole("status")).toContainText("Showing 1 of");
  await page.locator("#technology-filter").fill("unmatched-platform-12345");
  await expect(
    page.getByRole("heading", { name: "No direct matches." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  await expect(page.getByRole("status")).toHaveText(initialStatus!);
  await page
    .getByRole("button", { name: "Networking and Wi-Fi", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Networking and Wi-Fi", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.locator("#technology-filter").fill("Wi-Fi");
  await expect(page.getByRole("status")).not.toContainText("Showing 0");
});

test("article anchors, FAQ disclosures, and PDF downloads are available", async ({
  page,
  request,
}) => {
  await page.goto("/guides/why-local-dns-matters/");
  const anchor = page
    .getByRole("navigation", { name: "Guide sections" })
    .getByRole("link")
    .first();
  const href = await anchor.getAttribute("href");
  expect(href).toMatch(/^#/);
  await anchor.click();
  await expect(page.locator(`[id="${href!.slice(1)}"]`)).toBeVisible();
  await page.goto("/faq/");
  await page.locator(".faq-list summary").first().click();
  await expect(page.locator(".faq-list details").first()).toHaveAttribute(
    "open",
    "",
  );
  await page.goto("/resources/policy-starter-kit/");
  const files = await page
    .locator("main a[download]")
    .evaluateAll((links) =>
      links.map((link) => (link as HTMLAnchorElement).pathname),
    );
  expect(files.length).toBeGreaterThan(5);
  for (const file of files) {
    const response = await request.get(file);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
    const canonical = /^<([^>]+)>; rel="canonical"$/.exec(
      response.headers().link ?? "",
    )?.[1];
    expect(canonical).toBeTruthy();
    expect(new URL(canonical!).origin).toBe("https://www.nextgridit.com");
    const html = await request.get(new URL(canonical!).pathname);
    expect(html.status()).toBe(200);
    expect(await html.text()).toContain(`href="${file}"`);
  }
});

test("Labs lookup validates domains and shows provider results and retry errors", async ({
  page,
}) => {
  await page.goto("/labs/");
  const input = page.getByLabel("Public domain", { exact: true });
  await input.fill("not-a-domain");
  await page.getByRole("button", { name: "Look up mail provider" }).click();
  await expect(page.locator("main").getByRole("alert")).toContainText(
    "Enter a valid domain",
  );
  await input.fill("example.com");
  await page.route("**/api/surface-scan", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        domain: "example.com",
        environment: "Microsoft 365 mail routing",
        mxRecords: ["example-com.mail.protection.outlook.com"],
        summary:
          "Public MX records identify the mail provider; they do not establish security posture.",
      }),
    }),
  );
  await page.getByRole("button", { name: "Look up mail provider" }).click();
  await expect(
    page.getByRole("heading", {
      name: "example.com: Microsoft 365 mail routing",
    }),
  ).toBeVisible();
  await page.unroute("**/api/surface-scan");
  await page.route("**/api/surface-scan", (route) =>
    route.fulfill({
      status: 502,
      contentType: "application/json",
      body: '{"error":"Lookup unavailable"}',
    }),
  );
  await page.getByRole("button", { name: "Look up mail provider" }).click();
  await expect(page.locator("main").getByRole("alert")).toContainText(
    "Please try again",
  );
  await expect(input).toHaveValue("example.com");
});

test("text resizing and reduced motion preserve usable navigation and content", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => {
      document.documentElement.style.fontSize = "200%";
    });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `text reflow at ${width}`,
    ).toBe(true);
    const overlaps = await page.locator(".header-row").evaluate((header) => {
      const boxes = [...header.children]
        .map((element) => element.getBoundingClientRect())
        .filter((rect) => rect.width && rect.height);
      return boxes.some((rect, index) =>
        boxes
          .slice(index + 1)
          .some(
            (other) =>
              rect.right > other.left + 1 &&
              rect.left < other.right - 1 &&
              rect.bottom > other.top + 1 &&
              rect.top < other.bottom - 1,
          ),
      );
    });
    expect(overlaps, `text resize header at ${width}`).toBe(false);
    expect(
      await page.evaluate(
        () => getComputedStyle(document.documentElement).scrollBehavior,
      ),
    ).toBe("auto");
    if (width === 1440) {
      const trigger = page.getByRole("button", { name: "Open navigation menu" });
      await trigger.click();
      await expect(page.locator("main")).toHaveAttribute("inert", "");
      const lastControl = page.locator("#mobile-navigation").getByRole("button", { name: "Light", exact: true });
      await lastControl.focus();
      await expect(lastControl).toBeInViewport();
      await page.evaluate(() => document.documentElement.style.fontSize = "100%");
      await expect(page.locator("main")).not.toHaveAttribute("inert", "");
      await expect(page.locator("#mobile-navigation")).toBeHidden();
    }
  }
});

test("phone and tablet contents navigate before the article, with usable touch controls", async ({ page }) => {
  for (const width of [390, 768, 820]) {
    await page.setViewportSize({ width, height: 900 });
    for (const [path, label] of [
      ["/guides/why-local-dns-matters/", "In this guide"],
      ["/resources/policy-starter-kit/password-and-mfa-policy/", "In this document"],
    ]) {
      await page.goto(path);
      const contents = page.locator(".reading-contents-mobile");
      expect(await contents.evaluate((element) => !!(element.compareDocumentPosition(document.querySelector("article")!) & Node.DOCUMENT_POSITION_FOLLOWING))).toBe(true);
      await expect(contents.locator("summary")).toContainText(label);
      await contents.locator("summary").click();
      const link = contents.getByRole("link").last();
      const href = await link.getAttribute("href");
      await link.click();
      await expect(page.locator(href!)).toBeInViewport();
      await expect.poll(() => page.locator(href!).evaluate((element) => element.getBoundingClientRect().top)).toBeGreaterThan(67);
    }
    await page.goto("/technologies/");
    for (const button of await page.locator(".category-filters button").all()) {
      const box = await button.boundingBox();
      expect(box!.height).toBeGreaterThanOrEqual(44);
      expect(box!.width).toBeGreaterThanOrEqual(44);
    }
  }
});

test("navigation transitions can be interrupted and short landscape menus scroll", async ({ page }) => {
  await page.setViewportSize({ width: 820, height: 480 });
  await page.goto("/");
  const panel = page.locator("#mobile-navigation");
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await panel.locator("summary").first().click();
  const booking = panel.getByRole("link", { name: "Book a consultation" });
  await booking.focus();
  await expect(booking).toBeInViewport();
  await page.keyboard.press("Escape");
  await expect(panel).toHaveAttribute("inert", "");
  await expect(panel).toBeHidden();
  await page.setViewportSize({ width: 1440, height: 900 });
  const services = page.locator(".desktop-nav").getByRole("button", { name: "Services", exact: true });
  await services.evaluate((button) => {
    if (!(button instanceof HTMLButtonElement)) throw new Error("Expected navigation button");
    button.click(); button.click(); button.click();
  });
  await expect(page.locator("#desktop-navigation")).toBeVisible();
  await expect(services).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(services).toBeFocused();
  await expect(page.locator("#desktop-navigation")).toHaveAttribute("inert", "");
  await expect(page.locator("#desktop-navigation")).toBeHidden();
});

test("section motion runs once, respects changed preferences, and content works without JavaScript", async ({ page, browser }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  // Observe actual animation creation, rather than inferring it from attributes.
  await page.evaluate(() => {
    const original = Element.prototype.animate;
    const recorded: string[] = [];
    Object.assign(window, { recordedArrivals: recorded });
    Element.prototype.animate = function (frames, options) {
      if (typeof options === "object" && options.id === "section-arrival") recorded.push(this.textContent!.slice(0, 80));
      return original.call(this, frames, options);
    };
  });
  const section = page.locator("[data-reveal]").first();
  await section.scrollIntoViewIfNeeded();
  await expect.poll(() => page.evaluate(() => (window as unknown as { recordedArrivals: string[] }).recordedArrivals.length)).toBeGreaterThan(0);
  await expect.poll(() => section.evaluate((element) => element.getAnimations().length)).toBe(0);
  const firstCount = await page.evaluate(() => (window as unknown as { recordedArrivals: string[] }).recordedArrivals.length);
  await page.evaluate(() => scrollTo(0, 0));
  await section.scrollIntoViewIfNeeded();
  expect(await page.evaluate(() => (window as unknown as { recordedArrivals: string[] }).recordedArrivals.length)).toBe(firstCount);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.locator("[data-reveal]").last().scrollIntoViewIfNeeded();
  expect(await page.evaluate(() => (window as unknown as { recordedArrivals: string[] }).recordedArrivals.length)).toBe(firstCount);
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const plain = await context.newPage();
  await plain.route("**/fw-cdn.com/**", (route) => route.abort());
  await plain.goto("/");
  await expect(plain.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(plain.locator(".project-cta")).toBeVisible();
  await plain.goto("/guides/why-local-dns-matters/");
  await plain.locator(".reading-contents-mobile summary").click();
  await expect(plain.locator(".reading-contents-mobile").getByRole("link").first()).toBeVisible();
  await expect(plain.locator("article")).toBeVisible();
  await context.close();
});
