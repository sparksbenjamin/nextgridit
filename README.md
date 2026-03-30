This is a statically exported Next.js site configured for deployment to Cloudflare Workers with static assets.

## Local Development

Start the normal Next.js dev server:

```bash
npm run dev
```

To preview the site in the Cloudflare Workers runtime locally:

```bash
npm run preview
```

## Cloudflare Deploy

Production deploy:

```bash
npm run deploy
```

Non-production preview upload:

```bash
npm run deploy:preview
```

## Required Cloudflare Credentials

Wrangler requires Cloudflare credentials for non-interactive deploys.

Create a local `.env` file from `.env.example`, or set these in Cloudflare Workers Builds:

```bash
CLOUDFLARE_API_TOKEN=your_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
```

If you are configuring Cloudflare Workers Builds in the dashboard, use:

- Build command: `npm install && npm run build`
- Deploy command: `npm run deploy`
- Non-production branch deploy command: `npm run deploy:preview`

This project intentionally uses static export because the site is fully static and the OpenNext server bundle exceeded Cloudflare's free-plan Worker size limit. The Worker now just serves the generated `out` assets.

The API token should have permission to deploy Workers for the target account. `CLOUDFLARE_ACCOUNT_ID` is supported by Wrangler as an environment variable and helps ensure the deploy targets the correct account.

## Contact Form Email Delivery

The contact form can send mail directly through Microsoft 365 by using the Cloudflare Worker and Microsoft Graph.

### Required Worker secrets

For local `wrangler dev` preview, copy `.dev.vars.example` to `.dev.vars` and fill in:

```bash
M365_TENANT_ID=
M365_CLIENT_ID=
M365_CLIENT_SECRET=
CONTACT_FORM_FROM_EMAIL=contact@nextgridit.com
CONTACT_FORM_TO_EMAIL=contact@nextgridit.com
```

For deployed environments, set the same values as Worker secrets:

```bash
wrangler secret put M365_TENANT_ID
wrangler secret put M365_CLIENT_ID
wrangler secret put M365_CLIENT_SECRET
wrangler secret put CONTACT_FORM_FROM_EMAIL
wrangler secret put CONTACT_FORM_TO_EMAIL
```

### Microsoft 365 setup

1. Create or choose a mailbox that will send the form messages, for example `contact@nextgridit.com`.
2. Create an Entra app registration for the website contact form.
3. Add the Microsoft Graph application permission `Mail.Send`.
4. Grant admin consent for that permission.
5. Create a client secret and store it as `M365_CLIENT_SECRET`.
6. Use the sending mailbox address as `CONTACT_FORM_FROM_EMAIL`.
7. Use the destination mailbox address as `CONTACT_FORM_TO_EMAIL`.

If you want the app limited to one mailbox instead of broad tenant mail-send rights, add an Exchange application access restriction for the chosen contact mailbox after the basic flow is working.

### Fallback behavior

If the Worker secrets are missing or direct delivery is unavailable, the contact form falls back to opening a prefilled `mailto:` email so the page still remains usable.

References:

- [Next.js static export guide](https://nextjs.org/docs/app/guides/static-exports)
- [Cloudflare Workers static assets](https://developers.cloudflare.com/workers/static-assets/)
- [Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
- [Wrangler system environment variables](https://developers.cloudflare.com/workers/wrangler/system-environment-variables/)
