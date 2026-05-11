# Objective
Simplify the Aurelius landing page and make the full page background match the mobile app's dark navy.

# Constraints
Allowed repo: `/Users/captiansparboe/clawd/projects/aurelius-site` for `aureliusagent.com`.
Allowed files: `src/pages/index.astro` and this `program.md` contract.
Allowed changes: reduce visible landing-page content, simplify nav/sections, align background with app theme color `#111319`, preserve the waitlist signup flow.
Forbidden actions: no webhook/backend changes, no deletion of guide source pages/routes, no secrets handling, no pricing/subscription changes, no mobile app/API changes.
Deployment: user wants the live domain updated; direct merge/push to `master` is allowed after validation.

# Execution
From `/Users/captiansparboe/clawd/projects/aurelius-site` run:
1. `npm run build`
2. `git diff --check`
3. Static check that `https://n8n-u6v4.onrender.com/webhook/aurelius-waitlist` and the `website` honeypot field remain present.
4. Verify live `https://aureliusagent.com/` after deployment contains the simpler page and app navy background CSS.

# Metric
Pass if the landing page is reduced to the core hero + waitlist path, the full-page background uses app navy `#111319`, build/diff checks pass, the waitlist structure is preserved, and the deployed domain serves the new version.
