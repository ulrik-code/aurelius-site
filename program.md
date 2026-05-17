# Objective
Split the Aurelius landing page so desktop visitors see the existing desktop sales page and mobile visitors see the Stitch mobile-first sales page.

# Constraints
Allowed repo: `/Users/captiansparboe/clawd/projects/aurelius-site` for `aureliusagent.com`.
Allowed files: `src/pages/index.astro` and this `program.md` contract.
Allowed changes: responsive CSS display rules, viewport-specific visibility, waitlist anchor/form compatibility.
Forbidden actions: no webhook/backend changes, no deletion of guide source pages/routes, no secrets handling, no pricing/subscription changes, no mobile app/API changes.
Branch isolation: work on `vex/desktop-mobile-landing-split`; open PR against `master` after validation.

# Execution
From `/Users/captiansparboe/clawd/projects/aurelius-site` run:
1. `npm run build`
2. `git diff --check`
3. Static check that `https://n8n-u6v4.onrender.com/webhook/aurelius-waitlist`, both waitlist forms, and both honeypot fields remain present.
4. Verify rendered output at desktop width (>768px) exposes the desktop `nav/main/footer` and hides `.mobile-version`.
5. Verify rendered output at mobile width (<=768px) hides desktop `nav/main/footer` and exposes `.mobile-version`.

# Metric
Pass if desktop width renders the desktop landing page, mobile width renders the Stitch mobile sales page, waitlist submission structure remains intact on both versions, and build/diff checks pass.
