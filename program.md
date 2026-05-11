# Objective
Trim the Aurelius landing page after the hero so mobile visitors get a cleaner, shorter path to the waitlist with smooth premium glow transitions.

# Constraints
Allowed repo: `/Users/captiansparboe/clawd/projects/aurelius-site` for `aureliusagent.com`.
Allowed files: `src/pages/index.astro`, `src/components/WaitlistCTA.astro`, and this `program.md` contract.
Allowed changes: remove or condense post-hero landing-page content, preserve guide routes, smooth yellow/gold glow gradients, keep waitlist signup as the primary conversion path.
Forbidden actions: no webhook/backend changes, no deletion of guide source pages, no secrets handling, no pricing/subscription changes, no app/API changes.
Deployment: user requested seeing it live on the domain; merge/deploy is allowed after build/static validation.

# Execution
From `/Users/captiansparboe/clawd/projects/aurelius-site` run:
1. `npm run build`
2. `git diff --check`
3. Static check that `https://n8n-u6v4.onrender.com/webhook/aurelius-waitlist` and the `website` honeypot field remain present.
4. Verify live `https://aureliusagent.com/` after deployment contains the trimmed copy and no removed heavy sections.

# Metric
Pass if the landing page has roughly half as much post-hero content, the waitlist form still works structurally, the gold glow uses soft gradients without hard cutoffs, build/diff checks pass, and the deployed domain serves the new version.
