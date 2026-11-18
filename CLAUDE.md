CONTEXT: clinicalgames.fi redesign — status and how we work (Claude Code session)

REPO & BRANCHES
- Repo: paalpiret/farmagames-showcase (GitHub Pages, custom domain clinicalgames.fi)
- LIVE branch: claude/farmagames-landing-page-pmzh69 — pushing here (or to main) publishes the live site. NEVER push there during the redesign, and never create a main branch.
- WORK branch: redesign (created from the live branch). All redesign work happens only here. Pushing redesign does NOT change the live site (the deploy workflow only runs for main and the live branch).

WHAT WAS DONE (commit f5d538a on redesign)
- All page text (EN + FI) moved out of index.html into a new file, content.js. Every sentence now exists exactly once.
- index.html = layout, colors, spacing, behaviour only. Each text spot is an empty tag with data-i18n="key" (image alt texts use data-i18n-alt="key"). A script fills them from content.js in the chosen language.
- content.js = one "translations" dictionary: key → { en: "...", fi: "..." }. Entries with only "en" show English in FI mode too (used on purpose for: "Clinical Games", "Piret Paal", game/tool names, "Learning tool · …" labels, references, footer, image alt texts, the contact error message).
- Still in index.html on purpose: <title>, meta description (search engines/link previews need them without JS), the EN/FI button letters, the × lightbox close icon, aria-labels.
- No wording, colors, spacing or layout changed. Verified pixel-identical before/after (desktop 1280px + mobile 390px, EN and FI, FI default on clinicalgames.fi, toggle + saved choice after reload).
- DESIGN.md (new section "Where the page text lives"), TECH-NOTES.md and README.md updated to describe this.

HOW TO PROMPT CHANGES NOW
- Wording change / new Finnish translation → edit content.js only (add fi: "..." to an entry for Finnish).
- New text → new key in content.js + empty tag with data-i18n="that_key" in index.html.
- Design/layout change → index.html (CSS/HTML); text stays in content.js.

PREVIEW
- Private preview link of the redesign branch: https://claude.ai/artifact/WsAjjZgzLU9334HHfBsVaR
- Claude Code republishes the same link after each change. It opens in English (FI default only applies on clinicalgames.fi; the FI toggle works). The contact form may not send from the preview.
- The live site stays unchanged until a deliberate decision to publish the redesign (that will be a separate, explicit step: merging redesign into the live branch).

STANDING HABITS FOR EVERY SESSION
- Work only on branch redesign; say the branch name before pushing.
- Check JS syntax after edits (node --check).
- Playwright screenshots before and after; compare them; test the EN/FI toggle and a mobile-width view before reporting done.
- Grep for Piret's personal email before every commit — it must never appear in any file.
- Keep DESIGN.md (and TECH-NOTES.md when relevant) in sync with every change.
- Update the private preview link after changes.
