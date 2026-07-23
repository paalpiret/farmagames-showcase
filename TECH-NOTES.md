# How this website actually works — technical notes

A plain-language reference for the pieces behind the FarmaGames showcase site, so it's easy to remember later.

## The basics

**GitHub repo** (`farmagames-showcase`) — think of this as a folder living in the cloud. It contains `index.html`, images, and everything else that makes up the site. Editing the site = editing files in this folder.

**GitHub Pages** — a free feature of GitHub that takes that folder and publishes it as an actual website. It watches the `main` branch; whenever it changes, the live site updates automatically (usually within a minute or two).

**Live URL right now:** https://paalpiret.github.io/farmagames-showcase/

**Claude Code** (web version, at claude.ai/code) — the tool that actually edits the files in the repo, based on prompts. It reads/writes directly to GitHub on your behalf once connected via the Claude GitHub App.

**No server, no database.** This is a fully "static" site — just files, no backend to maintain or break. That's why it's simple and free to run.

## How a domain would fit in (not bought yet)

A custom domain (e.g. `piretpaal.com`) doesn't change where the site lives — it's just a nicer name that points at the same GitHub Pages folder. Steps, when ready:

1. Buy the domain from an EU-based registrar (Hetzner, IONOS, OVHcloud, or one.com are good options)
2. Add a `CNAME` file to the repo root containing just the domain name
3. Point a couple of DNS records at the registrar toward GitHub's servers (GitHub's own docs give the exact values)
4. Enter the domain under repo **Settings → Pages → Custom domain** — GitHub then handles HTTPS automatically

**Note:** the domain registrar can be EU-based, but the actual hosting (GitHub Pages) remains US infrastructure (GitHub/Microsoft) either way — a custom domain doesn't change that. Decided this is fine.

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
| Domain (once bought) | EU registrar, DNS pointed at GitHub |

## Useful GitHub navigation reminders

- **Add a file:** repo page → green "Add file" button → "Upload files"
- **Check if something deployed:** repo page → **Actions** tab → look for a green checkmark (success) or red X (failed) on the latest run
- **Branches vs. folders:** a *branch* is a parallel version of the whole codebase (usually just stay on `main`); a *folder* is just a subfolder inside the repo, like folders on a computer
