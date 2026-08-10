# How this website actually works — technical notes

A plain-language reference for the pieces behind the FarmaGames showcase site, so it's easy to remember later.

## The basics

**GitHub repo** (`farmagames-showcase`) — think of this as a folder living in the cloud. It contains `index.html`, images, and everything else that makes up the site. Editing the site = editing files in this folder.

**GitHub Pages** — a free feature of GitHub that takes that folder and publishes it as an actual website. It watches the `main` branch; whenever it changes, the live site updates automatically (usually within a minute or two).

**Live URL right now:** https://clinicalgames.fi (the old https://paalpiret.github.io/farmagames-showcase/ still works and redirects there)

**Claude Code** (web version, at claude.ai/code) — the tool that actually edits the files in the repo, based on prompts. It reads/writes directly to GitHub on your behalf once connected via the Claude GitHub App.

**No server, no database.** This is a fully "static" site — just files, no backend to maintain or break. That's why it's simple and free to run.

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
| Live published site | GitHub Pages (auto-deploys from `main`) |
| Design/content decisions | `DESIGN.md` in the repo root |
| This technical overview | `TECH-NOTES.md` in the repo root (this file) |
| Contact form submissions | Formspree → forwarded to Gmail |
| Domain | `clinicalgames.fi`, DNS pointed at GitHub, `CNAME` file in repo root |

## Useful GitHub navigation reminders

- **Add a file:** repo page → green "Add file" button → "Upload files"
- **Check if something deployed:** repo page → **Actions** tab → look for a green checkmark (success) or red X (failed) on the latest run
- **Branches vs. folders:** a *branch* is a parallel version of the whole codebase (usually just stay on `main`); a *folder* is just a subfolder inside the repo, like folders on a computer
