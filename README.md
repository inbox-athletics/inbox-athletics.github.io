# Inbox Athletics — Marketing Site

[![Deploy Status](https://github.com/inbox-athletics/inbox-athletics.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/inbox-athletics/inbox-athletics.github.io/actions)

Marketing and waitlist site for [Inbox Athletics](https://www.inboxathletics.com) — a recruiting productivity platform that helps student-athletes and their families organize coach conversations, follow up on time, and communicate confidently.

## Tech Stack

- **Framework:** Next.js 15 (static export via `output: 'export'`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **Forms:** react-hook-form + Zod validation
- **Waitlist:** Loops.so
- **Analytics:** PostHog
- **Hosting:** GitHub Pages

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
  tracked-cta.tsx       # CTA link with GA event tracking
  footer.tsx            # Site footer
lib/
  loops.ts              # Loops.so API client
  posthog.ts            # PostHog analytics init and helpers
  utils.ts              # Shared utilities (cn, smoothScrollTo)
public/
  screenshots/          # Product screenshots used in marketing sections
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow which type-checks, builds, and deploys to GitHub Pages automatically.
