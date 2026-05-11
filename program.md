# Objective
Refine the Aurelius landing page at `aureliusagent.com` for a premium mobile-first experience that keeps waitlist signup as the primary conversion path before channel/account warmup.

# Constraints
Allowed repo: `/Users/captiansparboe/clawd/projects/aurelius-site` cloned from `ulrik-code/aurelius-site`.
Allowed files: `src/pages/index.astro`, `src/components/WaitlistCTA.astro` only unless discovery proves a supporting style/layout file must change.
Allowed changes: responsive spacing, typography, nav density, hero stacking, visual polish, waitlist CTA prominence, form mobile ergonomics, accessible focus states, and minor copy tightening that preserves Aurelius positioning.
Forbidden actions: no production deploy, no webhook/backend changes, no deletion of AEO guide pages, no secrets handling, no force push to `master`, no changes to pricing/subscription claims, no app/API changes.
Branch discipline: create and work on a `vex/aurelius-mobile-waitlist` branch before implementation.

# Execution
From `/Users/captiansparboe/clawd/projects/aurelius-site` run:
1. `npm run build`
2. Mobile QA at widths 375x667, 390x844, and 430x932 using Playwright or browser automation.
3. Static check that the waitlist form still posts to `https://n8n-u6v4.onrender.com/webhook/aurelius-waitlist` and keeps the honeypot field.
4. `git diff --check`

# Metric
Pass if all verification commands succeed and mobile QA shows: no horizontal overflow at 375/390/430px, nav/logo/CTA are not clipped, hero headline and waitlist CTA are readable near the first screen, waitlist remains the dominant CTA, and no browser console errors are present.
