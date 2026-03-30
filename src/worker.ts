type AssetBinding = {
  fetch(input: Request | URL | string, init?: RequestInit): Promise<Response>;
};

type WorkerEnv = {
  ASSETS: AssetBinding;
  CONTACT_FORM_FROM_EMAIL?: string;
  CONTACT_FORM_TO_EMAIL?: string;
  M365_CLIENT_ID?: string;
  M365_CLIENT_SECRET?: string;
  M365_TENANT_ID?: string;
};

type ContactSecretKey =
  | "CONTACT_FORM_FROM_EMAIL"
  | "CONTACT_FORM_TO_EMAIL"
  | "M365_CLIENT_ID"
  | "M365_CLIENT_SECRET"
  | "M365_TENANT_ID";

type ContactFormPayload = {
  company?: string;
  details?: string;
  email?: string;
  website?: string;
};

type NormalizedContactForm = {
  company: string;
  details: string;
  email: string;
  website: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const JSON_HEADERS = {
  "cache-control": "no-store",
  "content-type": "application/json; charset=utf-8",
};

class ContactConfigError extends Error {}

class ContactValidationError extends Error {}

function jsonResponse(body: unknown, init: ResponseInit = {}) {
  const headers = new Headers(init.headers);

  Object.entries(JSON_HEADERS).forEach(([key, value]) => {
    if (!headers.has(key)) {
      headers.set(key, value);
    }
  });

  return new Response(JSON.stringify(body), {
    ...init,
    headers,
  });
}

function normalizeField(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function parseContactFormPayload(payload: unknown): NormalizedContactForm {
  if (payload === null || typeof payload !== "object") {
    throw new ContactValidationError("Invalid form payload.");
  }

  const candidate = payload as ContactFormPayload;
  const company = normalizeField(candidate.company, 200);
  const email = normalizeField(candidate.email, 320).toLowerCase();
  const details = normalizeField(candidate.details, 5000);
  const website = normalizeField(candidate.website, 200);

  if (!email || !EMAIL_PATTERN.test(email)) {
    throw new ContactValidationError("Enter a valid email address.");
  }

  if (!details || details.length < 10) {
    throw new ContactValidationError("Add a little more project detail before sending.");
  }

  return {
    company,
    details,
    email,
    website,
  };
}

function getRequiredEnvValue(env: WorkerEnv, key: ContactSecretKey) {
  const value = env[key];

  if (!value) {
    throw new ContactConfigError(`Missing required environment value: ${key}`);
  }

  return value;
}

async function getGraphAccessToken(env: WorkerEnv) {
  const tenantId = getRequiredEnvValue(env, "M365_TENANT_ID");
  const clientId = getRequiredEnvValue(env, "M365_CLIENT_ID");
  const clientSecret = getRequiredEnvValue(env, "M365_CLIENT_SECRET");

  const tokenResponse = await fetch(
    `https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials",
        scope: "https://graph.microsoft.com/.default",
      }),
    },
  );

  if (!tokenResponse.ok) {
    const responseBody = await tokenResponse.text();
    throw new Error(`Microsoft token request failed: ${tokenResponse.status} ${responseBody}`);
  }

  const data = (await tokenResponse.json()) as { access_token?: string };

  if (!data.access_token) {
    throw new Error("Microsoft token response did not include an access token.");
  }

  return data.access_token;
}

function buildContactEmailBody(form: NormalizedContactForm, request: Request) {
  const requestUrl = new URL(request.url);
  const submittedAt = new Date().toISOString();
  const ipAddress = request.headers.get("cf-connecting-ip") ?? "Unavailable";
  const userAgent = request.headers.get("user-agent") ?? "Unavailable";

  return [
    "New contact form submission from nextgridit.com",
    "",
    `Submitted at (UTC): ${submittedAt}`,
    `Page: ${requestUrl.origin}/contact/`,
    `Company: ${form.company || "Not provided"}`,
    `Reply-to email: ${form.email}`,
    `IP address: ${ipAddress}`,
    `User agent: ${userAgent}`,
    "",
    "Project details:",
    form.details,
  ].join("\n");
}

async function sendContactEmail(form: NormalizedContactForm, request: Request, env: WorkerEnv) {
  const sender = getRequiredEnvValue(env, "CONTACT_FORM_FROM_EMAIL");
  const recipient = getRequiredEnvValue(env, "CONTACT_FORM_TO_EMAIL");
  const accessToken = await getGraphAccessToken(env);
  const subject = `NextGridIT inquiry from ${form.company || "Website visitor"}`;
  const body = buildContactEmailBody(form, request);

  const graphResponse = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject,
          body: {
            contentType: "Text",
            content: body,
          },
          toRecipients: [
            {
              emailAddress: {
                address: recipient,
              },
            },
          ],
          replyTo: [
            {
              emailAddress: {
                address: form.email,
              },
            },
          ],
          internetMessageHeaders: [
            {
              name: "x-nextgridit-source",
              value: "website-contact-form",
            },
          ],
        },
        saveToSentItems: true,
      }),
    },
  );

  if (!graphResponse.ok) {
    const responseBody = await graphResponse.text();
    throw new Error(`Microsoft Graph sendMail failed: ${graphResponse.status} ${responseBody}`);
  }
}

async function handleContactRequest(request: Request, env: WorkerEnv) {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        Allow: "OPTIONS, POST",
      },
    });
  }

  if (request.method !== "POST") {
    return jsonResponse(
      { error: "Method not allowed." },
      {
        status: 405,
        headers: {
          Allow: "OPTIONS, POST",
        },
      },
    );
  }

  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return jsonResponse(
      { error: "Use application/json when submitting the contact form." },
      { status: 415 },
    );
  }

  let form: NormalizedContactForm;

  try {
    const payload = (await request.json()) as unknown;
    form = parseContactFormPayload(payload);
  } catch (error) {
    if (error instanceof ContactValidationError) {
      return jsonResponse({ error: error.message }, { status: 400 });
    }

    return jsonResponse({ error: "Unable to read the contact form payload." }, { status: 400 });
  }

  // Quietly accept obvious bot submissions so the public endpoint is less useful to abuse.
  if (form.website) {
    return jsonResponse({ ok: true }, { status: 202 });
  }

  try {
    await sendContactEmail(form, request, env);

    return jsonResponse({ ok: true }, { status: 202 });
  } catch (error) {
    if (error instanceof ContactConfigError) {
      return jsonResponse(
        { error: "Direct form delivery is not configured yet." },
        { status: 503 },
      );
    }

    console.error("Contact form delivery failed.", error);

    return jsonResponse(
      { error: "We could not deliver your message right now." },
      { status: 502 },
    );
  }
}

const worker = {
  async fetch(request: Request, env: WorkerEnv) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      return handleContactRequest(request, env);
    }

    if (
      request.method === "GET" &&
      !url.pathname.endsWith("/") &&
      !url.pathname.includes(".")
    ) {
      url.pathname = `${url.pathname}/`;
      return env.ASSETS.fetch(new Request(url, request));
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;
