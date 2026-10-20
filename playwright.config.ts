import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/browser",
  fullyParallel: true,
  workers: 2,
  timeout: 45000,
  reporter: "list",
  use: {
    baseURL: process.env.SITE_TEST_URL ?? "http://localhost:8790",
    browserName: "chromium",
    launchOptions: {
      ...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE
        ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE }
        : {}),
    },
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: process.env.SITE_TEST_URL
    ? undefined
    : {
        command:
          "npx wrangler dev --local --ip 127.0.0.1 --host localhost --port 8790",
        url: "http://localhost:8790",
        reuseExistingServer: false,
        timeout: 60000,
      },
});
