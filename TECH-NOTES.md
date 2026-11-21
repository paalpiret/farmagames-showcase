# How this website actually works — technical notes

A plain-language reference for the pieces behind the FarmaGames showcase site, so it's easy to remember later.

## The basics

**GitHub repo** (`farmagames-showcase`) — think of this as a folder living in the cloud. It contains `index.html`, images, and everything else that makes up the site. Editing the site = editing files in this folder.

**GitHub Pages** — a free feature of GitHub that takes that folder and publishes it as an actual website. It watches the live branch **`claude/farmagames-landing-page-pmzh69`** (there is no `main` branch, on purpose); whenever that branch changes, the live site updates automatically (usually within a minute or two).

**If an update doesn't appear:** open the repo's **Actions** tab. A red X on the latest "Deploy GitHub Pages" run means the publish step failed — often a temporary GitHub problem (this happened on 2026-11-21). Click **"Deploy GitHub Pages" → Run workflow** to start it again; a green check means it's live.

**Live URL right now:** https://clinicalgames.fi (the old https://paalpiret.github.io/farmagames-showcase/ still works and redirects there)

**Claude Code** (web version, at claude.ai/code) — the tool that actually edits the files in the repo, based on prompts. It reads/writes directly to GitHub on your behalf once connected via the Claude GitHub App.

**No server, no database.** This is a fully "static" site — just files, no backend to maintain or break. That's why it's simple and free to run.

## Text and layout are separate files

- **`content.js`** holds every piece of text shown on the landing page, in English and Finnish, each written exactly once. To change wording or add a Finnish translation, edit only this file.
- **`index.html`** holds the layout, colors and spacing. Its text spots are empty placeholders tagged with a key (e.g. `data-i18n="about_heading"`); when the page opens, a small script copies the matching text from `content.js` into each spot in the current language (FI by default on clinicalgames.fi, EN elsewhere, or whatever the visitor last picked).
- Only the Finnish page title / search-engine description / link-preview tags (see below), the `EN`/`FI` button letters and the `×` close icon stay inside `index.html`. The tab title visitors see is switched to EN or FI from `content.js`.
- Both files must be published together — if `content.js` is missing, the page shows its layout with no text.

## Page title and link previews (why the HTML head is Finnish)

- The `<head>` of `index.html` — the page title, the search-engine description and the link-preview tags (`og:…`, used when the link is shared in WhatsApp, Slack, LinkedIn, Facebook etc.) — is written **in Finnish, directly in the HTML**.
- Why: search engines and link previews read only the plain HTML; they don't run the page's language script and never click EN/FI. clinicalgames.fi is a Finnish site and shows Finnish by default, so that's what they should see.
- The **browser tab title** is still bilingual for visitors: it comes from `page_title` in `content.js` and switches with the EN/FI toggle (also after a reload). The description and preview tags stay Finnish.
- There is no preview image (`og:image`) yet — shared links show text only.

## Custom domain (done, live)

The site now runs on its own domain, **`clinicalgames.fi`**, instead of the default `github.io` address — it's just a nicer name pointing at the same GitHub Pages folder, nothing about how the site works changed. Setup steps, for reference:

1. ✅ Domain bought (`clinicalgames.fi`)
2. ✅ `CNAME` file added to the repo root containing just `clinicalgames.fi`
3. ✅ DNS records pointed at GitHub's servers with the registrar
4. ✅ Domain entered under repo **Settings → Pages → Custom domain** — GitHub handles HTTPS automatically

**Note:** the domain registrar can be anywhere, but the actual hosting (GitHub Pages) remains US infrastructure (GitHub/Microsoft) either way — a custom domain doesn't change that. Decided this is fine.

## Contact form (Formspree)

The site's contact form doesn't have its own backend — it sends form submissions to **Formspree**, a third-party service, which then emails them to a personal Gmail inbox.

- Formspree endpoint in use: `https://formspree.io/f/xjgnavqw`
- Free tier: 50 submissions/month, small "powered by Formspree" note included
- No email address is ever visible in the site's code or content — only inside Formspree's own private dashboard

## Where things live — quick map

| Thing | Where |
|---|---|
| Site code/files | GitHub repo `farmagames-showcase` |
| Live published site | GitHub Pages (auto-deploys from the live branch `claude/farmagames-landing-page-pmzh69`) |
| Backup of the old page (before 2026-11-21) | branch `old-site` — never change it |
| All page text (EN + FI) | `content.js` in the repo root |
| Page layout, styling, behaviour | `index.html` in the repo root |
| Design/content decisions | `DESIGN.md` in the repo root |
| This technical overview | `TECH-NOTES.md` in the repo root (this file) |
| Contact form submissions | Formspree → forwarded to Gmail |
| Domain | `clinicalgames.fi`, DNS pointed at GitHub, `CNAME` file in repo root |

## Useful GitHub navigation reminders

- **Add a file:** repo page → green "Add file" button → "Upload files"
- **Check if something deployed:** repo page → **Actions** tab → look for a green checkmark (success) or red X (failed) on the latest run
- **Branches vs. folders:** a *branch* is a parallel version of the whole codebase (the site lives on `claude/farmagames-landing-page-pmzh69`; `old-site` is a frozen backup; `redesign` is the finished redesign work); a *folder* is just a subfolder inside the repo, like folders on a computer
