This is a Next.js site configured for deployment to Cloudflare Workers using the OpenNext Cloudflare adapter.

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

The API token should have permission to deploy Workers for the target account. `CLOUDFLARE_ACCOUNT_ID` is supported by Wrangler as an environment variable and helps ensure the deploy targets the correct account.

References:

- [Next.js on Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/)
- [Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
- [Wrangler system environment variables](https://developers.cloudflare.com/workers/wrangler/system-environment-variables/)
- [OpenNext Cloudflare get started](https://opennext.js.org/cloudflare/get-started)
