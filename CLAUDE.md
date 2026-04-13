# CLAUDE.md — Inbox Athletics Marketing Site

## Project Overview

Marketing and waitlist site for Inbox Athletics. Static Next.js site deployed to Cloudflare Pages (project: `inbox-athletics-marketing`). Cloudflare watches `main` and auto-deploys on push; PRs get preview deployments. A GitHub Actions PR check runs type-check + build independently.

## Commands

```bash
pnpm dev            # Start dev server on port 8080
pnpm build          # Production build (static export)
pnpm type-check     # TypeScript type checking (tsc --noEmit)
pnpm lint           # ESLint
```

## Architecture

- **Static export** — `output: 'export'` in `next.config.mjs`. No server-side features (no API routes, no SSR, no ISR). All pages are statically generated.
- **Section-based composition** — The landing page (`app/page.tsx`) is composed of self-contained section components in `components/sections/`. Each section owns its own data (feature lists, plan details, FAQ items) as module-level constants.
- **shadcn/ui primitives** — Reusable UI components live in `components/ui/`. These are standard shadcn/ui components and should not be customized with business logic.
- **Client components** — Only use `"use client"` when the component needs interactivity (click handlers, form state, useState). Sections without interactivity are server components by default.

## Design System & Styling

### Brand Colors

Use the `brand-*` scale (Tailwind blue) for primary UI elements:
- **Primary actions:** `bg-brand-600 hover:bg-brand-700 text-white`
- **Secondary/outline:** `border-brand-600 text-brand-600 hover:bg-brand-50`
- **Accents/highlights:** `brand-50` through `brand-900`

### AI/Purple Palette

The `ai-*` tokens (purple, `#8b5cf6`) are reserved for AI-specific feature highlights (e.g., AI showcase section). Do not use for general UI.

### Text Colors

- **Primary text:** `text-text-primary` (#1E293B)
- **Secondary text:** `text-text-secondary` (#64748B)
- **Muted text:** `text-text-muted` (#94A3B8)

### Borders & Surfaces

- **Borders:** `border-[#E2E8F0]` for explicit borders, or `border-border` for the CSS variable
- **Surface background:** `bg-surface` (#F8FAFC) for alternating section backgrounds
- **White cards:** `bg-white` with `shadow-lg` and `rounded-xl`

### Typography

- **Font:** Inter (loaded via `next/font/google`)
- **Headings:** `text-3xl font-bold tracking-tight text-text-primary sm:text-4xl`
- **Body:** `text-text-secondary text-lg md:text-xl`

### Layout Patterns

- Sections use `container px-4 md:px-6` for consistent horizontal padding
- Section vertical spacing: `py-16 md:py-24`
- Content constrained with `mx-auto max-w-3xl` (text) or `max-w-5xl` (cards/grids)
- Responsive grids: `grid gap-8 md:grid-cols-2`

### Icons

Use `lucide-react` for all icons. Size them at `h-5 w-5` inline or `h-6 w-6` in feature cards.

## Conventions

- **Smooth scroll navigation** — In-page nav links use `smoothScrollTo(id)` from `lib/utils.ts` with `preventDefault`.
- **CTA tracking** — Use `TrackedCTA` component for links to `app.inboxathletics.com` that need PostHog event tracking. For in-page scroll CTAs, use `Button` + `Link` directly.
- **Waitlist form** — Email collection goes through Loops.so via `lib/loops.ts`. The `WaitlistForm` component handles validation (Zod), submission, and toast feedback.
- **Data co-located with components** — Feature lists, FAQ items, pricing plans, and nav links are defined as constants at the top of their respective component files, not in separate data files.
- **No dark mode** — The site is light-only. Dark mode CSS variables have been removed.

## Environment Variables

- `NEXT_PUBLIC_POSTHOG_KEY` — PostHog project API key
- `NEXT_PUBLIC_POSTHOG_HOST` — PostHog ingest host (defaults to `https://us.i.posthog.com`)
- `NEXT_PUBLIC_LOOPS_FORM_ID` — Loops.so form ID

All are required in CI (set as GitHub Actions secrets) and optional locally (`.env.local`).
