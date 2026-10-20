import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import worker from "../src/worker";
import { looksLikeDomain } from "../src/lib/surface-scan";

const originalFetch = globalThis.fetch;
afterEach(() => { globalThis.fetch = originalFetch; });
const env = {
  ASSETS: { fetch: async () => new Response("static asset") },
  CONTACT_FORM_FROM_EMAIL: "contact@example.com",
  CONTACT_FORM_TO_EMAIL: "owner@example.com",
  M365_TENANT_ID: "tenant",
  M365_CLIENT_ID: "client",
  M365_CLIENT_SECRET: "secret",
};
function post(path: string, payload: unknown, headers: Record<string, string> = {}) {
  return new Request(`https://www.nextgridit.com${path}`, {
    method: "POST", headers: { "content-type": "application/json", ...headers },
    body: JSON.stringify(payload),
  });
}
const inquiry = { email: "visitor@example.com", company: "Example", details: "Please review our network." };

test("contact delivers through Graph with a fixed recipient and visitor reply-to", async () => {
  const calls: string[] = [];
  globalThis.fetch = async (input, init) => {
    calls.push(String(input));
    if (calls.length === 1) return Response.json({ access_token: "token" });
    const body = JSON.parse(String(init?.body));
    assert.equal(body.message.toRecipients[0].emailAddress.address, env.CONTACT_FORM_TO_EMAIL);
    assert.equal(body.message.replyTo[0].emailAddress.address, inquiry.email);
    assert.match(body.message.body.content, /Please review our network/);
    assert.equal(new Headers(init?.headers).get("authorization"), "Bearer token");
    return new Response(null, { status: 202 });
  };
  const response = await worker.fetch(post("/api/contact/", inquiry), env);
  assert.equal(response.status, 202);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(calls.length, 2);
});

test("honeypot submissions do not send mail", async () => {
  globalThis.fetch = async () => { throw new Error("No external request expected"); };
  assert.equal((await worker.fetch(post("/api/contact", { ...inquiry, website: "bot" }), env)).status, 202);
});

test("unconfigured delivery returns 503 instead of reporting success", async () => {
  assert.equal((await worker.fetch(post("/api/contact", inquiry), { ASSETS: env.ASSETS })).status, 503);
});

test("delivery failures do not leak provider error bodies", async () => {
  globalThis.fetch = async () => new Response("private-provider-details", { status: 401 });
  const response = await worker.fetch(post("/api/contact", inquiry), env);
  assert.equal(response.status, 502);
  assert.doesNotMatch(await response.text(), /private-provider-details/);
});

for (const path of ["/api/contact", "/api/surface-scan"]) {
  test(`${path} rejects GET and unsupported content types`, async () => {
    assert.equal((await worker.fetch(new Request(`https://www.nextgridit.com${path}`), env)).status, 405);
    assert.equal((await worker.fetch(post(path, {}, { "content-type": "text/plain" }), env)).status, 415);
  });
  test(`${path} rejects cross-origin and oversized requests`, async () => {
    assert.equal((await worker.fetch(post(path, inquiry, { origin: "https://other.example" }), env)).status, 403);
    assert.equal((await worker.fetch(post(path, { data: "x".repeat(17000) }), env)).status, 413);
  });
  test(`${path} handles malformed JSON and invalid input`, async () => {
    const request = new Request(`https://www.nextgridit.com${path}`, {
      method: "POST", headers: { "content-type": "application/json" }, body: "{",
    });
    assert.equal((await worker.fetch(request, env)).status, 400);
    assert.equal((await worker.fetch(post(path, null), env)).status, 400);
    assert.equal((await worker.fetch(post(path, {}), env)).status, 400);
  });
}

for (const [host, expected] of [
  ["example-com.mail.protection.outlook.com.", "Microsoft 365 mail routing"],
  ["aspmx.l.google.com.", "Google Workspace mail routing"],
  ["smtp.google.com.", "Google Workspace mail routing"],
  ["attacker-protection.outlook.com.example.net.", "Other mail provider"],
]) {
  test(`DNS provider classification: ${host}`, async () => {
    globalThis.fetch = async () => Response.json({ Status: 0, Answer: [
      { type: 5, data: "unrelated.google.com." }, { type: 15, data: `10 ${host}` },
    ] });
    const response = await worker.fetch(post("/api/surface-scan", { domain: "example.com" }), env);
    const result = await response.json() as Record<string, unknown>;
    assert.equal(response.status, 200);
    assert.equal(result.environment, expected);
    assert.deepEqual(result.mxRecords, [host.slice(0, -1)]);
    assert.equal("riskScore" in result, false);
  });
}

test("empty and null MX results are distinguished from resolver failures", async () => {
  for (const payload of [{ Status: 3 }, { Status: 0, Answer: [{ type: 15, data: "0 ." }] }]) {
    globalThis.fetch = async () => Response.json(payload);
    const response = await worker.fetch(post("/api/surface-scan", { domain: "example.com" }), env);
    assert.equal((await response.json() as { environment: string }).environment, "No mail exchanger found");
  }
  globalThis.fetch = async () => Response.json({ Status: 2 });
  assert.equal((await worker.fetch(post("/api/surface-scan", { domain: "example.com" }), env)).status, 502);
});

test("domain validation rejects bad labels, IPs, URL syntax, and overlong domains", () => {
  for (const domain of ["example.com", "mx.example.co.uk", "xn--bcher-kva.de"]) assert.equal(looksLikeDomain(domain), true);
  for (const domain of ["-bad.com", "bad-.com", "127.0.0.1", "https://example.com", "foo..com", "a".repeat(64) + ".com", "x.com/", "x".repeat(254)]) {
    assert.equal(looksLikeDomain(domain), false, domain);
  }
});

test("API misses return JSON; page requests are delegated to assets", async () => {
  const response = await worker.fetch(new Request("https://www.nextgridit.com/api/missing"), env);
  assert.equal(response.status, 404);
  assert.match(response.headers.get("content-type") ?? "", /application\/json/);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal(await (await worker.fetch(new Request("https://www.nextgridit.com/about"), env)).text(), "static asset");
});


test("production aliases redirect permanently without losing path or query", async () => {
  for (const source of ["http://www.nextgridit.com/services/?ref=test", "https://nextgridit.com/services/?ref=test"]) {
    const response = await worker.fetch(new Request(source), env);
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), "https://www.nextgridit.com/services/?ref=test");
  }
});

test("preview assets carry noindex while production assets remain indexable", async () => {
  for (const host of ["preview.example.workers.dev", "localhost:8787", "www.nextgridit.com"]) {
    const response = await worker.fetch(new Request(`https://${host}/about/`), env);
    assert.equal(response.headers.get("x-robots-tag"), host === "www.nextgridit.com" ? null : "noindex, nofollow");
  }
});

test("asset normalization is permanent and missing pages keep their 404", async () => {
  for (const status of [307, 404]) {
    const response = await worker.fetch(new Request("https://www.nextgridit.com/about"), {
      ASSETS: { fetch: async () => new Response(null, { status, headers: status === 307 ? { location: "/about/" } : {} }) },
    });
    assert.equal(response.status, status === 307 ? 308 : 404);
    if (status === 307) assert.equal(response.headers.get("location"), "/about/");
  }
});
