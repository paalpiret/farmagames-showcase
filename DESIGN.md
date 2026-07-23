# Piret Paal — Showcase Site: Design & Content Reference

This file tracks the design decisions, content, and status for this repo, so both Claude Code and Piret have one shared source of truth instead of re-explaining things each session.

## Live site
https://paalpiret.github.io/farmagames-showcase/

## Page name & identity
- Page title: **"Piret Paal"** (not "FarmaGames" or "MediProjects" — both were dropped)
- Subtitle: "Nursing education game prototypes"
- Tagline (italic, below subtitle): "A portfolio of interactive projects exploring medication learning, clinical reasoning and nursing practice."
- "Farma" was avoided as a page-level brand name since it originates from Piret's bachelor's thesis, co-authored with Christina Lindberg — not solely hers to brand with.

## Purpose
This page doubles as a **CV/portfolio piece** (Piret graduates as a nurse in November 2026), not just an internal demo hub. Tone should stay portfolio-grade: confident, curated, not utility-dashboard-like.

## Color tokens
Pulled directly from FarmaDiary's design system for visual consistency across the "Farma" project family:

| Token | Hex | Use |
|---|---|---|
| background | `#F6FBF9` | page background |
| foreground | `#1F2C3D` | body text |
| card | `#FFFFFF` | card backgrounds |
| primary (teal) | `#20A386` | primary accent — buttons, links |
| primary-dark | `#167B65` | deeper teal, labels |
| secondary/accent tint | `#EAF3F0` | alternating section background |
| muted | `#D6E7E1` | muted surfaces |
| muted-foreground | `#6B7280` | secondary/supporting text |
| border | `#DBE9E4` | dividers, borders |

**Decision: single teal accent only.** FarmaDiary's colorful per-activity accents (purple `#A78BFA`, blue `#38BDF8`, green `#3ED07A`, orange `#FF9F1A`, yellow `#F5C51F`) were tried per-game but dropped — they carried no real meaning in this context (they were activity-type colors in FarmaDiary, not game identifiers here) and made the page feel less cohesive. All buttons and labels now use `#20A386` / `#167B65` consistently.

**Hero banner background:** mesh-gradient effect (not flat linear) — base `#167B65` with blurred color blobs (`#2FC9A6`, `#38BDF8`, `#20A386` at varying opacity) for depth, plus a soft white radial glow behind the "Piret Paal" heading text.

## Typography
- Font: **Inter** (headings + body)
- Radius scale: lg `0.75rem`, md `0.625rem`, sm `0.5rem` — cards use `rounded-2xl`/`rounded-xl`

## Layout structure (current)
1. **Header/hero** — mesh-gradient banner, name, subtitle, tagline, project names as plain non-clickable text (`MyDay · FarmaRush · MediChain · Medilink` on one line, `Farmadiary` on its own line below to preserve banner height), language toggle top-right
2. **Game sections** (×4) — alternating white/`#EAF3F0` backgrounds, image-beside-text layout alternating sides per section, full-bleed section color with content in a centered `max-width: ~1000px` column, generous responsive padding (not fixed height)
3. **Why** — three cards with research-based quotes + citations (see Content below)
4. **Farmadiary** — own full section (not a footer link), same treatment as game sections
5. **About Me** — full bio text (see Content below)
6. **Contact** — form via Formspree (placeholder endpoint) + LinkedIn button; no personal email ever displayed in visible content or source
7. **Footer** — © [year] Piret Paal

**Under discussion, not yet sent:** reordering to Header → Games → Farmadiary → Why → About Me → Contact → Footer (groups "things built" together, moves Why to a reflective closing note rather than upfront justification).

## Section label style
No colored pill/chip badges. Small plain text label above each game name: `GAME 01 · EN`, `GAME 02 · FI/EN`, etc. — sequential number + the game's actual language.

## Language (FI/EN)
- **Current status: English-only build.** FI toggle structure to be added later.
- Toggle requirements (for later): top-right corner, persists across visits (localStorage), visible active-state indicator, full two-language text swap via JS (no page reload).
- **Exception:** the Why section already has real Finnish text ready (Piret's own thesis wording, not placeholder — see below). Everywhere else should fall back to English when FI is toggled, not show blank/placeholder text.

## Content — final/ready to use

### Game descriptions
- **MyDay**: "A day in the life of a nursing student on a cardiology ward — from morning handover to medication rounds to end-of-shift documentation. Built to capture the rhythm of a real shift, one room at a time."
- **FarmaRush**: "Medication requests arrive from hospital wards, one shift at a time. Catch the right drugs before they're dispatched — work fast, but don't let the wrong medication through."
- **MediChain** (never call it "Mediketju" on the page): "Build the longest possible medicine chain by linking drugs that share an indication or drug class. A quick, focused way to test how well those connections actually stick."
- **Medilink**: "Match medicines to their active ingredients, indications, and drug classes — link by link. Built to reinforce the kind of pattern-recognition real prescribing depends on."
- **Farmadiary**: "A personal medicine notebook — log the drugs you encounter on placement, quiz yourself on what you've logged, and watch your own knowledge base grow shift by shift."

### Why section (EN)
1. "Over half of surveyed nurses have caused a medication-related safety incident; half have given medicines without knowing their effects." — Luokkamäki et al., 2016
2. "Nursing students often see pharmacology as a 'necessary evil' rather than essential knowledge." — Mauldin, 2021
3. "Online and gamified methods are among the most effective ways to teach pharmacology." — Gill et al., 2019

### Why section (FI — Piret's original thesis wording, ready to use)
1. "Vuonna 2016 julkaistun tutkimuksen mukaan yli puolet tutkimukseen osallistuneet sairaanhoitajista ovat joskus aiheuttanut potilaalle lääkehoidon virheen takia vaaratilanteen ja puolet ovat antaneet lääkkeitä, joiden vaikutuksia he eivät tietäneet (Luokkamäki ym. 2016: 30)."
2. "Tutkimuksen mukaan sairaanhoitajaopiskelijat ajattelevat farmakologiakurssin "pakollisena pahana" sen sijaan, että sen sisältö olisi tärkeä hallita (Mauldin 2021)."
3. "Vuonna 2019 tehdyn tutkimuksen mukaan on todettu online-menetelmien olevan yksi parhaimpia tapoja farmakologian opettamisessa opiskelijatyytyväisyyden ja tiedon hankinnan kannalta (Gill ym. 2019:1)."

### Why section — full citations (small gray text, below the cards)
Gill, Manu & Andersen, Elizabeth & Hilsmann, Norma. 2019. Best practices for teaching pharmacology to undergraduate nursing students: A systematic review of the literature.

Mauldin, Betsy 2023. Bringing Clinical Context to the Classroom in Nursing Pharmacology: A Case Study.

Luokkamäki, Sanna & Vehviläinen-Julkunen, Katri & Saano, Susanna & Härkänen, Marja 2016. "Sairaanhoitajien lääkehoidon osaaminen heidän itsensä arvioimana", Tutkiva Hoitotyö, vol. 14, no. 2, pp. 23–32.

### About Me (final)
> I'm a nursing student from Finland with a particular interest in cardiology and pharmacology. Before nursing, I trained as a fashion designer at the Estonian Academy of Arts and spent some time working in software for design tools across Northern Europe.
>
> Somewhere along the way, design and healthcare started to overlap, and I've worked, for example, with researchers at the University of Helsinki on a service for parents navigating early childhood. In 2025, my bachelor's thesis looked at medication safety among student nurses — and found what research keeps finding: pharmacology is hard to teach, and harder to make stick.
>
> That's what led me here — building games and digital learning tools instead of just writing about the problem. I started experimenting with vibe-coding and playing around with these subjects, and it grew from there — each one a focused prototype, not a finished product, but a genuine attempt to make pharmacology a little less abstract and a little more memorable, for students like me.

*Note: this text has not yet been sent to Claude Code — still pending.*

## Images
Real screenshots for all games + Farmadiary have been uploaded to the repo. Recommended lead image per section:
- **MyDay** → hospital game-map overview (nurse running through rooms)
- **FarmaRush** → active gameplay shot (conveyor belt, catching medicine)
- **MediChain** → chain-building gameplay screenshot ("Apiksabaani" card)
- **Medilink** → card-matching gameplay screenshot ("Furosemidi" card)
- **Farmadiary** → "Track Progress" dashboard screenshot (stats + donut chart)

Open idea, not decided: cropping screenshots square and applying a tilted/framed treatment (inspired by the Sonder portfolio template) instead of keeping them landscape/16:9.

**Status: not yet wired into the page** — images are in the repo but placeholders are still showing in most sections.

## Contact section
- Simple form (name, email, message) via **Formspree** (needs a real account + endpoint — currently placeholder)
- "Connect on LinkedIn" button alongside/below the form
- **Hard rule: never display Piret's personal email address anywhere in visible content or page source.**

## Open / deferred items
- [ ] Wire real screenshots into game/Farmadiary sections (currently placeholders)
- [ ] Send About Me text to Claude Code
- [ ] Decide on and possibly send section reordering (Games → Farmadiary → Why → About Me)
- [ ] Confirm latest header prompt (mesh gradient, tagline, Farmadiary line) is fully deployed
- [ ] Set up real Formspree account + swap in real endpoint
- [ ] Build FI language toggle mechanism + translate remaining sections (Farmadiary, About Me, Contact, footer copy)
- [ ] Decide on screenshot cropping/framing treatment (square + tilted vs. current landscape)
- [ ] Custom domain (optional, future) — just needs a `CNAME` file + DNS records + Pages settings once purchased; no rebuild required
