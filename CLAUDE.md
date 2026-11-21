CONTEXT: clinicalgames.fi — how we work (Claude Code session)

REPO & BRANCHES
- Repo: paalpiret/farmagames-showcase (GitHub Pages, custom domain clinicalgames.fi).
- LIVE branch: claude/farmagames-landing-page-pmzh69. It publishes clinicalgames.fi: every push to it goes live straight away (deploy workflow .github/workflows/pages.yml). Work on this branch, and say the branch name before every push.
- If a deployment fails at the deploy step (e.g. "No artifacts named github-pages were found" — a temporary GitHub problem seen on 2026-11-21), do not change the workflow. Piret can start it again herself: Actions tab → "Deploy GitHub Pages" → Run workflow.
- Never create a main branch.
- BACKUP branch: old-site — a frozen copy of the old page from before the redesign (commit de305a4). NEVER commit to, push to, rebase, merge into or delete old-site. (Tag pushes are blocked in Claude sessions; Piret may create a tag on GitHub via Releases.)
- redesign: the finished redesign work branch, merged into the live branch on 2026-11-21. Kept as history; no new work there.

HOW THE SITE IS BUILT
- index.html = layout, colors, spacing, behaviour only. Each text spot is an empty tag with data-i18n="key"; image alt texts use data-i18n-alt, aria-labels use data-i18n-aria, the Why card's role description uses data-i18n-roledesc. A script fills them from content.js in the chosen language.
- content.js = all page text, one "translations" dictionary: key → { en: "...", fi: "..." }. Entries without fi show English in FI mode (on purpose for names such as the clinicalgames wordmark, game/tool names, the full references and the footer).
- The static <head> of index.html is in Finnish on purpose (title, meta description, og: link-preview tags), because search engines and link previews don't run JavaScript. The visible tab title switches with the EN/FI toggle (page_title in content.js).
- FI is the default language on clinicalgames.fi; elsewhere EN. A visitor's choice is saved.
- Games: one folder each (farmarush/, myday/, medichain/, medilink/) with an index.html. The main page opens them in a new tab.
- DESIGN.md = design and content decisions; TECH-NOTES.md = plain-language technical notes.

RULES
- When an English text changes, keep the existing fi value until Piret gives new Finnish text. Texts with no fi show English in FI mode. Never invent Finnish.
- When Piret gives a new game .html, use it exactly as it is. Do not add a back link or any other extra elements to the games.
- Never put Piret's personal email address in any file. Grep for it before every commit.
- New text → new key in content.js + empty tag with data-i18n="that_key" in index.html. Design/layout change → index.html (CSS/HTML); text stays in content.js.

STANDING HABITS FOR EVERY SESSION
- Say the branch name before every push (every push to the live branch goes live).
- Check JS syntax after edits (node --check).
- Playwright screenshots before and after; compare them; test the EN/FI toggle and a mobile-width view before pushing.
- After pushing, check that the GitHub Pages deployment succeeded.
- Keep DESIGN.md (and TECH-NOTES.md when relevant) in sync with every change.
- Optional: for bigger changes, a private preview can be published first (https://claude.ai/artifact/WsAjjZgzLU9334HHfBsVaR) so Piret can look before it goes live. The games and the contact form don't work in the preview.
