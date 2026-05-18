# Objective
Replace the default/missing browser tab favicon with the Aurelius bust icon and wire favicon tags explicitly in the landing page head.

# Constraints
Allowed repo: `/Users/captiansparboe/clawd/projects/aurelius-site` for `aureliusagent.com`.
Allowed files: `src/pages/index.astro`, `public/favicon.ico`, `public/favicon.svg`, generated public favicon PNG/touch icon assets, and this `program.md` contract.
Allowed changes: favicon/head metadata only, plus generated icon assets derived from existing `public/aurelius-bust.png`.
Forbidden actions: no webhook/backend changes, no deletion of guide source pages/routes, no secrets handling, no pricing/subscription changes, no mobile app/API changes.
Branch isolation: work on `vex/aurelius-bust-favicon`; merge to `master` only after validation.

# Execution
From `/Users/captiansparboe/clawd/projects/aurelius-site` run:
1. `npm run build`
2. `git diff --check`
3. Static check that `https://n8n-u6v4.onrender.com/webhook/aurelius-waitlist`, both waitlist forms, and both honeypot fields remain present.
4. Verify rendered output at desktop width (>768px) exposes the desktop `nav/main/footer` and hides `.mobile-version`.
5. Verify rendered output at mobile width (<=768px) hides desktop `nav/main/footer` and exposes `.mobile-version`.

# Metric
Pass if desktop width renders the desktop landing page with a quieter hero waitlist CTA and visible four-step explanation before the final waitlist form, mobile width still renders the Stitch mobile sales page, waitlist submission structure remains intact on both versions, and build/diff checks pass.
