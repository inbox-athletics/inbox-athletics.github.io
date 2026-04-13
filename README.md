# Inbox Athletics — Marketing Site

Marketing and waitlist site for [Inbox Athletics](https://www.inboxathletics.com) — a recruiting productivity platform that helps student-athletes and their families organize coach conversations, follow up on time, and communicate confidently.

## Tech Stack

- **Framework:** Next.js 15 (static export via `output: 'export'`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **Forms:** react-hook-form + Zod validation
- **Waitlist:** Loops.so
- **Analytics:** PostHog
- **Hosting:** Cloudflare Workers (Workers Builds)

## Getting Started

```bash
pnpm install
pnpm dev          # http://localhost:8080
```

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project API key |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog ingest host (defaults to `https://us.i.posthog.com`) |
| `NEXT_PUBLIC_LOOPS_FORM_ID` | Loops.so waitlist form ID |

For local development, create a `.env.local` file with these values.

## Project Structure

```
app/
  page.tsx              # Landing page (composes section components)
  layout.tsx            # Root layout, metadata, structured data
  globals.css           # CSS variables and Tailwind base
components/
  sections/             # Page sections (header, hero, problem, how-it-works, etc.)
  ui/                   # shadcn/ui primitives
  waitlist-form.tsx     # Early-access email form (Loops integration)
  tracked-cta.tsx       # CTA link with PostHog event tracking
  footer.tsx            # Site footer
lib/
  loops.ts              # Loops.so API client
  posthog.ts            # PostHog analytics init and helpers
  utils.ts              # Shared utilities (cn, smoothScrollTo)
public/
  screenshots/          # Product screenshots used in marketing sections
```

## Deployment

Hosted on [Cloudflare Workers](https://workers.cloudflare.com/) via [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) (project: `inbox-athletics-marketing`). Cloudflare watches this repo and deploys on every push to `main`; pull requests get automatic preview deployments. Build settings are managed in the Cloudflare dashboard and in `wrangler.jsonc`:

- **Build command:** `pnpm build`
- **Deploy command:** `pnpm dlx wrangler deploy`
- **Static assets:** `./out` (see `wrangler.jsonc`)
- **Environment variables:** configured in the Worker project settings (see table above)

Pull requests also run a GitHub Actions check (`.github/workflows/pull-request-check.yml`) that type-checks and builds the site independently of the Cloudflare preview.
