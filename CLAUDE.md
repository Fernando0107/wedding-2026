# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run start     # Run production build
npm run lint      # ESLint check
```

No test suite is configured.

## Architecture

This is a **Next.js 16 App Router** wedding invitation site with a serverless RSVP system.

### Key Design Principle

`lib/config.ts` is the single source of truth for all wedding content (couple names, date, venue, program, FAQ, etc.). Section components read from it — never hardcode content in components.

### Directory Map

- `app/page.tsx` — Home page that composes all 13 section components in order
- `app/api/rsvp/` — RSVP POST/GET endpoints; `admin/route.ts` requires `ADMIN_PASSWORD` header
- `app/admin/` — Password-protected dashboard to view all RSVPs
- `components/sections/` — One file per page section (Hero, Countdown, RSVP, etc.)
- `components/animations/` — `FadeIn`, `Aurora`, `ImageReveal`, `Parallax` wrappers used by sections
- `components/forms/RSVPForm.tsx` — React Hook Form + Zod, family key validation
- `lib/families.ts` + `data/families.json` — Guest list; RSVP submissions are validated against this
- `lib/redis.ts` — Upstash Redis client for RSVP persistence
- `lib/validations.ts` — Zod schema shared between frontend and API

### RSVP Flow

1. URL `/?fam=<familyKey>#rsvp` pre-fills the family in the RSVP form
2. `RSVPForm` validates via Zod, then POSTs to `/api/rsvp`
3. API re-validates the family key against `families.json`, then writes to Redis
4. Admin accesses `/admin` with `ADMIN_PASSWORD` (stored in `.env.local`)

### Styling

- Tailwind CSS 4 utility-first; custom wedding color palette defined as CSS variables in `app/globals.css` (9 rose/pink tones)
- Use `cn()` from `lib/utils.ts` (`clsx` + `tailwind-merge`) for conditional classes
- Fonts: **Playfair Display** for headings, **Lora** for body — loaded in `app/layout.tsx`
- Framer Motion for interactive animations; CSS keyframes in `globals.css` for the Aurora background effect

### Environment Variables (`.env.local`)

```
ADMIN_PASSWORD=...
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...
```
