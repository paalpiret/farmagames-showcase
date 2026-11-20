# Piret Paal — Showcase Site: Design & Content Reference

This file tracks the design decisions, content, and status for this repo, so both Claude Code and Piret have one shared source of truth instead of re-explaining things each session.

## Live site
https://clinicalgames.fi (custom domain, live — the old https://paalpiret.github.io/farmagames-showcase/ still works and redirects there)

## Page name & identity
> **Redesign — page title, description and link previews (2026-11):** the static `<head>` of index.html is **Finnish**, because search engines and link previews (WhatsApp, Slack, LinkedIn, Facebook…) read it without running JavaScript, and clinicalgames.fi is a Finnish site whose visitors get FI by default. `<html lang="fi">` in the static HTML (the language script still switches it to `en`/`fi`).
> - `<title>`: "clinicalgames: oppimispelejä ja -sovelluksia hoitotyön opiskeluun"
> - `<meta name="description">`: "Oppimispelejä ja digitaalisia työkaluja hoitotyön opiskeluun. Tekijänä Piret Paal, sairaanhoitaja ja suunnittelija. Kokeile prototyyppejä suoraan selaimessa."
> - Link-preview (Open Graph) tags: `og:title` + `og:description` (same Finnish texts), `og:type` "website", `og:url` "https://clinicalgames.fi/", `og:locale` "fi_FI". No `og:image` yet.
> - **The browser tab title follows the EN/FI toggle:** key `page_title` in content.js — EN "clinicalgames: learning games and tools for nursing studies", FI = same as the static title. The script sets `document.title` whenever the language is applied (first load, toggle click, saved choice after reload). The description and og tags stay Finnish in both modes (they're for search engines and previews, not visitors).
>
> The rest of the old head text (below) is REPLACED. The "Piret Paal" `<h1>`, the eyebrow styling and the italic tagline below are REPLACED — the top-left of the menu is now the **clinicalgames** wordmark (see Top menu below), and the header `<h1>` is the new headline (see "Redesign — new design").

- (REPLACED on the redesign branch — see above; still on the live site) Browser tab title: **"Piret Paal — Interactive Nursing Projects"** and meta description "Piret Paal: interactive nursing projects and game prototypes." (not "FarmaGames" or "MediProjects" — both were dropped from these). The on-page `<h1>` itself stays just "Piret Paal" in both EN and FI — this "Interactive Nursing Projects" wording is tab-title/meta only, not visible page copy.
- Heading size: 50px, weight 700.
- Small uppercase eyebrow label above the heading: "Clinical Games" (rendered `CLINICAL GAMES` via `text-transform: uppercase`), 13px, weight 600, `letter-spacing: 0.12em`, `rgba(255,255,255,0.7)` — matches the visual style of the `GAME 0X · [LANG]` labels elsewhere on the page. Not translated (proper noun, same as "Piret Paal" and the game names), and ties to the `clinicalgames.fi` domain.
- No subtitle line anymore (the old "Nursing education game prototypes" line was dropped as redundant).
- Tagline (italic, only supporting line under the name): "A portfolio of learning games and digital tools designed to make medication learning and nursing studies a little easier and more fun." FI: "Portfolio oppimispeleistä ja digitaalisista työkaluista, jotka tekevät lääkehoidon ja hoitotyön opiskelusta hieman helpompaa ja hauskempaa."
- "Farma" was avoided as a page-level brand name since it originates from Piret's bachelor's thesis, co-authored with Christina Lindberg — not solely hers to brand with.

## Purpose
This page doubles as a **CV/portfolio piece** (Piret graduates as a nurse in November 2026), not just an internal demo hub. Tone should stay portfolio-grade: confident, curated, not utility-dashboard-like.

## Redesign — new design (branch `redesign`, not live yet)
Built on the `redesign` branch; the live site keeps the old design until the redesign is merged into the live branch. Preview: the private link in `CLAUDE.md`. Sections below marked **REPLACED** describe the old (still-live) design.

**Removed in the redesign:** mesh-gradient hero blobs + glow, alternating white/tint bands, per-game accent tints inside image frames (incl. `.exact-bg` for PleksusDiaries), image-left/right alternating layout, the separate Why section further down the page (moved into the header), the "Piret Paal" `<h1>` and the italic tagline under it.

**Fonts:** headings (`h1`–`h3`, the clinicalgames wordmark in the menu) **Space Grotesk 700**; everything else **Inter** (both Google Fonts).

**Colours (CSS tokens in `index.html` `:root`):**

| Token | Hex | Use |
|---|---|---|
| `--deep` | `#0F2E28` | page base: menu, header, Scenario games, About, footer |
| `--raised` | `#143A33` | Card games band, Contact band, Why card |
| `--line-dark` | `#2E5A50` | thin borders on dark (Why card, menu line, footer line) |
| `--mint` | `#D8E9E5` | Learning tools band |
| `--on-dark` | `#C9DDD7` | body text on dark (subline, About, Contact intro, menu links) |
| `--on-dark-soft` | `#A9C4BC` | small print on dark (references, citations, footer) + section subtitles on dark |
| `--heading-light` | `#0F2E28` | headings on white/mint cards |
| `--text-light` | `#4E5B58` | body text on white/mint |
| `--ink` | `#1A1A1A` | text on amber + on the coloured game tiles |
| `--amber` | `#FFB547` | the word "played", "Play the games" + "Send message" buttons, active carousel dot, focus ring on dark |
| `--teal-link` | `#157565` | Card games links, labels on white cards, filled Learning-tools buttons |
| `--tile-farmarush` / `--tile-myday` | `#FF9F1A` / `#A78BFA` | Scenario game tiles |
| `--edge-medichain` / `--edge-medilink` | `#38BDF8` / `#3ED07A` | 6px top border of the Card game cards |
| `--error-on-dark` | `#FFB4A8` | contact error message |

**Page order (one page; menu links scroll to sections, smooth scroll unless the visitor prefers reduced motion):**
1. **Top menu** (dark) — **wordmark `clinicalgames`** left (design sketch): one word, all lowercase, no space; "clinical" `#FFFFFF` + "games" `#7BE3C6`; Space Grotesk `20px` / `700`, no letter-spacing, no uppercase. It is a logo, so it is the same in EN and FI (content.js keys `wordmark_clinical` + `wordmark_games`, EN only). It links to the very top of the page (`href="#top"`; the header no longer carries `id="top"`, so the browser scrolls to the page top instead of to the header below the menu). Replaces the earlier "Clinical Games" text (`hero_eyebrow`, kept unused in content.js). Menu right side: **four links** (reworked 2026-11; the "Card games" link was removed) — Games / FI Pelit → Scenario games (Card games follows directly below), Tools / FI Sovellukset → Learning tools, About / FI Minusta → About, Contact / FI Ota yhteyttä → Contact. The links have their **own keys** (`nav_games`, `nav_tools`, `nav_about`, `nav_contact`), separate from the section headings, so the menu can say "Tools" while the heading says "Learning tools" — then the EN/FI toggle (moved here from its old fixed top-right pill; active language = white pill). Sticky at the top on screens wider than 720px (one row; each link lands its section just below the menu); on phones it is not sticky and wraps: wordmark / links / toggle on three rows (148px tall). EN links stay on one row down to 320px; FI links fit one row at 390px, and at ≤360px "Ota yhteyttä" moves whole to a second row.
2. **Header** (`#0F2E28`, two columns, stacking ≤860px)
   - Left: headline "Medication learning, played — not just memorised." (Space Grotesk, "played" in `#FFB547`), subline (`hero_subline`, EN + FI since 2026-11-21) in `#C9DDD7`, buttons (design sketch: `padding: 15px 26px; border-radius: 12px; font-size: 16px`, both with a 1px border so they are the same height) — "Play the games" (FI "Pelaa pelejä"): fill `#FFB547`, text `#1A1A1A`, weight 700 (→ Scenario games); "See the learning tools" (FI "Tutustu sovelluksiin"): transparent, `1px solid #4F7A70` border, white text, weight 600 (→ Learning tools). (Replaced: 0.7rem/1.35rem padding, 0.75rem radius, weight 600, white 2px outline.) The contact form's "Send message" button keeps its own earlier style.
   - Right: **Why carousel card** (rebuilt to match the design sketch — values exactly as specified):
     - **Card:** background `#143A33`; border `1px solid #2E5A50`; radius `22px`; padding `36px`; shadow `0 24px 60px rgba(0,0,0,0.35)`; flex column, `justify-content: space-between`, `gap: 28px`. Height on desktop fits the tallest of the four slides (invisible copies of all slides share one grid cell, desktop only), so it never jumps when switching; on phones (≤860px) the height is auto.
     - **1. Label** inside the card, top: `13px`, `700`, `letter-spacing: 0.08em`, uppercase, `#FFB547` — "Why this matters · 1 / 4" / FI "Miksi tämä on tärkeää · 1 / 4" (2 / 4, 3 / 4) on the quote slides (`why_carousel_label`, EN + FI; replaced "Why this work exists"), "Sources · 4 / 4" / "Lähteet · 4 / 4" on the 4th (`why_sources_label`).
     - **2. Quote:** Space Grotesk `28px`, line-height `1.3`, weight `500` (now loaded from Google Fonts alongside 700), `#FFFFFF`, not italic. Long words break inside the card instead of overflowing (`overflow-wrap: break-word`; Finnish also `hyphens: auto` where the browser has Finnish hyphenation — English is never auto-hyphenated).
     - **3. Citation line:** Inter `14px`, `#A9C4BC`, not italic, no leading dash (the "— " was removed from `why1/2/3_citation` in content.js, EN + FI). Quote and citation sit 28px apart (same as the card gap).
     - **4th slide "Sources":** instead of a quote, the three full references (Gill, Luokkamäki, Mauldin — alphabetical) as three paragraphs, Inter `14px`, line-height `1.55`, `#C9DDD7`, `gap: 12px`.
     - **4. Controls row:** flex, `space-between`, centred vertically. Left: four dots, `gap: 10px` — active = `28×10px` pill `#FFB547`, inactive = `10×10px` circles `#4F7A70`, no outlines/borders. Right: two round `44×44px` buttons, `gap: 10px` — previous: transparent, `1px solid #4F7A70`, white "←"; next: filled `#FFB547`, `#1A1A1A` "→", no border. Text arrows (Inter, 20px), not icons.
     - **Behaviour (kept):** moves only when clicked (no auto-slide); ←/→ keys work when focus is inside the card; all controls are real `<button>`s with aria-labels ("Statement 1–3", "Sources", "Previous slide", "Next slide"); the slide text (quote + citation, or the sources) is an `aria-live="polite"` region; EN/FI from content.js.
     - **Removed (replaced from the earlier redesign version):** the label above/outside the card, the full reference under each quote, the divider lines, the centred dots between the arrows, the chevron icons, the italics, and the reference list under the card.
     - **Contrast note:** `#4F7A70` (inactive dots, previous-button border) is 2.59:1 against the card — below the 3:1 WCAG asks for non-text controls. The arrows themselves pass (white 12.5:1, dark-on-amber 9.9:1). Closest passing shade if wanted: `#56867B` (3.03:1).
   - **Bottom alignment (two-column view, wider than 860px):** both header columns share one height — the card stretches to fill its column (extra space goes into the card's `space-between`) and the two buttons sit at the bottom of the left column, so the buttons' bottom edge lines up exactly with the card's bottom edge. Whichever side is taller sets the height: at 1280px wide the left column (headline + the longer subline) sets the height in both EN and FI, and the card stretches to meet the buttons (542px). After the first Finnish quote was shortened (2026-11), the FI card is no longer taller than EN at 1280px; at narrower desktop widths (≈880–1000px) the long third FI quote (Gill) can still make the FI card taller, and the buttons then move down to meet it. Phones (stacked) are unaffected.
3. **Scenario games** (`#0F2E28`) — heading "Scenario games" / FI "Sairaalapelit" + subtitle "Step into a nursing shift · no account needed" / FI "Astu sairaanhoitajan työvuoroon · ilman kirjautumista"; FarmaRush (`#FF9F1A`) and MyDay (`#A78BFA`) as two large rounded tiles side by side, all text `#1A1A1A`. Tile: image, label, name, full description, "Play now →" as a **plain text link** (Inter `15px`, weight 700, `#1A1A1A`, no background/border, underline on hover — replaced the black filled button). **Games open in a new tab (2026-11):** the four "Play now →" links (FarmaRush, MyDay, MediChain, MediLink) have `target="_blank" rel="noopener noreferrer"`, like FarmaDiary and PleksusDiaries, so the main page stays open in its own tab. Screen readers get the description "opens in a new tab" / FI "avautuu uuteen välilehteen" (key `new_tab_hint`, one hidden `<span id="new-tab-hint">` referenced by `aria-describedby` on all four links); the links look exactly the same as before. **Link alignment:** the two tiles are equal height and each tile is a flex column with the link at `margin-top: auto`, so both links sit on the same line whatever the description length (checked at 880–1280px, EN + FI). On phones the tiles stack.
4. **Card games** (`#143A33`) — heading "Card games" / FI "Korttipelit" (key `card_games_heading`) + subtitle "Link medicines, indications and drug classes · no account needed" / FI "Yhdistä lääkkeet, käyttöaiheet ja lääkeryhmät · ilman kirjautumista"; MediChain and MediLink as white cards with a 6px coloured top border, heading `#0F2E28` at `26px`, text `#4E5B58`, label + "Play now →" text link `#157565`, weight 700. Same link alignment as the tiles: equal-height cards, link at the bottom (`margin-top: auto`), both links on one line.
5. **Learning tools** (`#D8E9E5`) — heading "Learning tools" / FI "Oppimissovellukset" (key `learning_tools_heading`) + subtitle "Apps for everyday studying and clinical placements" / FI "Sovelluksia opiskeluun ja kliinisiin harjoitteluihin". (The phone overflow of "Oppimissovellukset" at 40px was fixed 2026-11 by the phone heading size — see "Section title rows".) FarmaDiary and PleksusDiaries as white cards stacked vertically (design sketch: `border: 1px solid #DCE7E3; border-radius: 20px; padding: 24px`), image left / text right in equal columns (`1fr 1fr`, `gap: 32px`), stacking ≤720px; headings Space Grotesk `30px`; no border around the image (the mint frame border was removed); buttons (design sketch): background `#157565`, white text, `padding: 12px 20px; border-radius: 10px; font-size: 15px; font-weight: 700`, no border ("Visit FarmaDiary →" / FI "Avaa FarmaDiary →" → farmadiary.com, "Visit PleksusDiaries →" / FI "Avaa PleksusDiaries →"). (Replaced: 0.7rem/1.35rem padding, 12px radius, 16px, weight 600, 2px transparent border.)
6. **About** (`#0F2E28`) — heading + 3 paragraphs, text `#C9DDD7`, ~760px reading width. EN text replaced 2026-11 (see "About Me (EN, redesign branch)" below); FI unchanged. In paragraph 2 the words "bachelor’s thesis" link to the thesis PDF on theseus.fi (`https://www.theseus.fi/server/api/core/bitstreams/6765a411-b504-465a-bc58-f826b8bec0fb/content`), opening in a new tab (`target="_blank" rel="noopener noreferrer"`), styled `#7BE3C6`, underlined (`.about-link`). Screen readers get the description "PDF, opens in a new tab" (`aria-describedby` → hidden hint, key `about_text_2_link_hint`). Because texts are set with textContent, paragraph 2 is three keys — `about_text_2a` (before the link), `about_text_2_link`, `about_text_2b` (after) — with the `<a>` in index.html. **FI (new text 2026-11-21):** all three paragraphs have new Finnish text (see "About Me (FI, redesign branch)" below). Paragraph 2 is split the same way — `about_text_2a.fi` ends with "tekemämme " + link "opinnäytetyö" + `about_text_2b.fi` starting with " tarkasteli, …" — so the thesis link now works in FI mode too (same URL, new tab, same style), with the screen-reader description "PDF, avautuu uuteen välilehteen". Spaces: the text before the link ends with one space and the text after it starts with one space, in both languages.
7. **Contact** (`#143A33`) — heading, then one intro sentence (key `contact_intro`, same body style as About: Inter, `#C9DDD7`, max 760px wide) directly above the form; same Formspree form (endpoint, fields, AJAX, success/error messages unchanged); white labels, white fields with `#1A1A1A` text, amber focus ring, amber "Send message" button; success/error boxes on `#0F2E28`.
8. **Footer** — existing "© 2026 Piret Paal", `#A9C4BC` on `#0F2E28`, thin top line.

**Section title rows (Scenario games, Card games, Learning tools — matches the design sketch):** heading and subtitle in one row — `display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 28px`. Heading `h2`: Space Grotesk, `40px` on desktop (wider than 720px), `700`, `margin: 0`; **on phones (≤720px) it scales with screen width** — `clamp(28px, calc((100vw - 48px) / 9.6), 34px)`: 28px at 320px wide, 32.5px at 360px, 34px from ≈375px up — so the longest Finnish heading "Oppimissovellukset" always fits (311px at 375px wide, 259px at 320px) with no word breaking or hyphenation; white on the dark sections, `#0F2E28` in Learning tools. Subtitle: `17px` (raised from 15px), `margin: 0`, at the **right end of the same line** on desktop; `#A9C4BC` on the dark sections, `#4E5B58` in Learning tools. On narrow screens (phones) the subtitle wraps under the heading by itself via `flex-wrap` — no extra rule. (Replaces the first redesign version: stacked heading `clamp(28–36px)` + 16px `#C9DDD7` subtitle below it, 36px gap to content.)

**Images:** every frame 16:9, rounded (`--radius` 0.75rem), **white background**, `object-fit: contain` so nothing is cropped — **except MyDay and PleksusDiaries**, which use `object-fit: cover` (their files are slightly narrower than 16:9 and would otherwise show white side strips). Click-to-enlarge lightbox kept on all six images, `cursor: zoom-in`. No "Demo" links, no video placeholders.

**Labels (texts changed 2026-11, numbers removed):** FarmaRush `Game · FI/EN` / FI `Peli · FI/EN`; MyDay `Game · EN` / `Peli · EN`; MediChain `Game · FI` / `Peli · FI`; MediLink `Game · FI` / `Peli · FI`; FarmaDiary `Learning tool · EN` / FI `Oppimissovellus · EN`; PleksusDiaries `Learning tool · EN/FI` / FI `Oppimissovellus · EN/FI` (the learning-tool labels now have Finnish; before they showed English in FI mode). All fit on one line in EN and FI down to 320px wide. Style: uppercase, `13px`, weight 700, `letter-spacing: 0.06em` everywhere they appear (replaced 0.72rem / 0.08em); `#1A1A1A` on the tiles, `#157565` on white cards.

**New texts (EN only, no FI yet) in `content.js`:** menu labels (`nav_*`, now with FI; see Top menu), headline (split into three keys so "played" can be coloured), subline, the two header buttons, the three section subtitles + "Scenario games" heading. Still in `content.js` but not shown in this design: `hero_name`, `hero_tagline`, `why_heading` (kept with their Finnish in case they return). All other text is the existing wording, unchanged. The Why carousel label (`why_carousel_label`) now has both EN and FI: "Why this matters" / "Miksi tämä on tärkeää".

**Accessibility / responsiveness (checked):** every text/background pair passes WCAG AA (lowest is 5.58:1, `#157565` on white; checked automatically on all visible text in EN and FI, incl. the contact success/error boxes). Visible keyboard focus ring everywhere (amber on dark, dark green on tiles/white cards). No sideways overflow at 390px or 320px.

## Color tokens
> ⚠️ **REPLACED by the redesign** (see "Redesign — new design" above). This describes the design still on the live site until the redesign is published; kept for history.

Pulled directly from FarmaDiary's design system for visual consistency across the "Farma" project family:

| Token | Hex | Use |
|---|---|---|
| background | `#F6FBF9` | page background |
| foreground | `#1F2C3D` | body text |
| card | `#FFFFFF` | card backgrounds |
| primary (teal) | `#20A386` | all "Play now" / "Visit FarmaDiary" buttons |
| primary-dark | `#167B65` | all "GAME 0X · [LANG]" / "Learning tool · [LANG]" labels, hero base color |
| secondary/accent tint | `#EAF3F0` | alternating section background |
| muted | `#D6E7E1` | muted surfaces |
| muted-foreground | `#6B7280` | secondary/supporting text |
| border | `#DBE9E4` | dividers, borders |

**Decision: single teal accent for labels + buttons (done).** FarmaDiary's colorful per-activity accents (purple `#A78BFA`, blue `#38BDF8`, green `#3ED07A`, orange `#FF9F1A`, yellow `#F5C51F`) were tried per-game, then dropped for section labels and buttons — they carried no real meaning here (they were activity-type colors in FarmaDiary, not game identifiers) and made the page feel less cohesive. All game labels now use `#167B65`, all buttons (including FarmaDiary's) use `#20A386`.

**Per-game accent colors still exist in one place:** the subtle background tint inside each game's screenshot frame (`.game-media-box`, `color-mix(... var(--accent) 10%, white)`), so portrait-shaped screenshots don't letterbox into plain white. This was an intentional, narrower exception — the accent variables (`--accent-myday`, `--accent-farmarush`, `--accent-medichain`, `--accent-medilink`) are still defined in `:root` for this purpose only.

**Hero banner background (REPLACED by the redesign — blobs removed):** mesh-gradient effect (not flat linear) — base `#167B65` with three blurred color blobs (`#2FC9A6` top-left, `#38BDF8` bottom-right, `#20A386` upper-right, varying opacity, `blur(60–80px)`), plus a soft white radial glow (`rgba(255,255,255,0.18)`, ellipse shape to avoid a hard-edge clipping bug) centered behind the "Piret Paal" heading. `header` uses `overflow: hidden` so blobs stay contained on small screens.

## Typography
> ⚠️ **REPLACED by the redesign** (see "Redesign — new design" above). This describes the design still on the live site until the redesign is published; kept for history. New fonts: Space Grotesk 700 headings + Inter.

- Font: **Inter** (headings + body)
- Radius scale: `--radius: 0.75rem`, `--radius-lg: 1rem`

## Layout structure (old — still on the live site)
> ⚠️ **REPLACED by the redesign** (see "Redesign — new design" above). This describes the design still on the live site until the redesign is published; kept for history.

1. **Header/hero** — mesh-gradient banner, name, italic tagline, language toggle top-right (the project-names line that used to sit below the tagline, and the old subtitle line, were both removed)
2. **Game sections** (×4, in this order: **FarmaRush, MyDay, MediChain, MediLink**) — alternating white/`#EAF3F0` backgrounds, image-beside-text layout alternating sides per section (left/right/left/right), image in a fixed 16:9 box with rounded corners, full-bleed section color with content in a centered `max-width: ~1000px` column, generous responsive padding (not fixed height).
3. **FarmaDiary** — its own full section, same treatment as the game sections (sits directly after the four games)
4. **PleksusDiaries** — new product section, same treatment as the game/FarmaDiary sections, sits directly after FarmaDiary (see "PleksusDiaries" under Content below).
5. **Why** — three cards with research-based quotes + citations, plus a small full-citation reference list below the cards (see Content below) — sits after PleksusDiaries, not before it
6. **About Me** — full bio text, live (see Content below)
7. **Contact** — form via Formspree, live (see Contact section below for the endpoint and confirmation-message details); **no LinkedIn button** (added once, then explicitly removed — do not re-add without being asked); no personal email ever displayed in visible content or source
8. **Footer** — © 2026 Piret Paal, nothing else

## Section label style
> ⚠️ **REPLACED by the redesign** — both the label **texts** (no more numbers; Finnish "Oppimissovellus" for the learning tools — see "Labels" in "Redesign — new design" above) and their **colour** (`#1A1A1A` on game tiles, `#157565` on white cards). The list below is the old live-site version, kept for history.

No colored pill/chip badges anywhere on the page (including FarmaDiary's, which used to have a yellow pill). Small plain text label above each name, in `#167B65`:
- `Game 01 · FI/EN` (FarmaRush — the game itself has an in-game EN/FI toggle)
- `Game 02 · EN` (MyDay)
- `Game 03 · FI` (MediChain)
- `Game 04 · FI` (MediLink)
- `Learning tool · EN` (FarmaDiary — intentionally not numbered as a "game"; this one has no FI translation yet)
- `Learning tool · EN/FI` (PleksusDiaries — intentionally not numbered as a "game"; unlike FarmaDiary this one is bilingual, per Piret)

In FI mode, the four numbered labels become `Peli 01 · FI/EN`, `Peli 02 · EN`, `Peli 03 · FI`, `Peli 04 · FI` ("Game" → "Peli"), and every "Play now" button becomes "Pelaa".

## Where the page text lives (text and layout are separate)
- **All visible page text, EN and FI, lives in `content.js`** (repo root) — one `translations` dictionary, one entry per piece of text, each with an `en` value and (where it exists) an `fi` value. Every sentence exists in exactly one place; `index.html` contains no page copy.
- **`index.html` is layout + styling + behaviour only.** Each text element is an empty tag with a `data-i18n="key"` attribute (e.g. `<p data-i18n="farmarush_desc"></p>`); image alt texts use `data-i18n-alt="key"`. On load, the page's script fills every tag from `content.js` in the chosen language, and the EN/FI toggle refills them without a reload.
- **Moved into `content.js` in this split (previously only written directly in the HTML, never translated):** "Clinical Games" eyebrow, "Piret Paal" heading, the six product names, the two "Learning tool · …" labels, the three full references under the Why cards, the footer, and the six image alt texts. They have only an `en` value, so they read the same in both languages — exactly as before.
- **Deliberately left in `index.html`:** the `<title>`, meta description and Open Graph link-preview tags — in Finnish (search engines and link previews read these without running JavaScript; the visible tab title is then switched by the script from `page_title` in content.js), the `EN`/`FI` toggle button labels, the lightbox `×` close icon, and the `aria-label`s on controls. These are page metadata/interface controls, not page copy.
- **To change wording:** edit `content.js` only. To add a Finnish version of something English-only: add an `fi: "..."` line to that entry. To add new text: add a new key in `content.js` and an empty tag with `data-i18n="that_key"` in `index.html`.
- `content.js` is loaded with a plain `<script src="content.js">` placed right before the page script (not fetched as JSON), so the text is in place before first paint and the page also works when opened straight from disk.
- The split was verified pixel-identical: full-page screenshots before/after (desktop 1280px and mobile 390px; EN default on other hosts, FI default on `clinicalgames.fi`, toggle clicks, saved choice after reload) matched exactly, as did page text, `lang` attribute and alt texts.

## Language (FI/EN)
- **Redesign:** the toggle now sits inside the top menu (no longer a separate fixed pill); behaviour, default language and saved choice are unchanged.
- **Current status: toggle is built and live.** Fixed pill top-right (`EN`/`FI`), active language bolded/highlighted, choice persists via `localStorage`, full text swap via JS with no reload.
- **Default language depends on domain (live):** first-time visitors (no saved preference yet) get **FI** automatically on `clinicalgames.fi`, and **EN** everywhere else (e.g. the `paalpiret.github.io/farmagames-showcase/` fallback URL), based on `location.hostname`. Once someone clicks the toggle, their explicit choice is saved and always wins on later visits, regardless of domain.
- **Real Finnish content exists for:** the hero tagline, the "Why"/"About Me" section headings ("Miksi"/"Minusta"), the Why section (Piret's own thesis wording — see below; each card's citation is its own small gray line below the quote, with no trailing page number, same structure as the English cards), the five section descriptions (FarmaRush, MyDay, MediChain, MediLink, FarmaDiary) plus the PleksusDiaries description, the "Game"/"Play now" → "Peli"/"Pelaa" swap on game labels and buttons, the Contact section (heading, field labels, submit button), and About Me.
- **Everywhere else falls back to English automatically** when FI is selected (FarmaDiary's "Learning tool" label, footer) — the `translations` dictionary in `content.js` only has an `en` key for these, and the fallback logic shows English rather than blank text. Game names and "Piret Paal" are never translated (treated like proper nouns). Footer is intentionally identical in both languages, not a fallback gap.

## Content — final/ready to use, all live on the page

### Game and tool descriptions (redesign branch, EN + FI, set 2026-11-21 — replace the older texts below, which are still on the live site)
The Finnish word forms are Piret’s deliberate choices — keep them exactly as written.
- **FarmaRush** — EN: "Medication requests arrive from hospital wards, one shift at a time. Catch the right medicines as fast as you can, but watch out for the wrong ones."
  FI: "Eri osastot lähettävät työvuoron aikana lääketilauksia. Nappaa oikeat lääkkeet nopeasti, mutta varo, ettei mukaan tartu vääriä lääkkeitä."
- **MyDay** — EN: "Curious what a day on a cardiology ward is really like? Test out ward life before your first placement! Practise the ISBAR handover and the medication task, and explore the game’s own patient record system. More tasks coming soon."
  FI: "Millainen on päivä kardiologian osastolla? Harjoittele ISBAR-raportointia ja lääkehoidon tehtävää ja tutustu pelin omaan potilastietojärjestelmään ennen ensimmäistä harjoitteluasi. Uusia tehtäviä on tulossa pian."
- **MediChain** — EN: "Build the longest possible medicine chain by linking medicines that share an indication or drug class. A quick and focused way to learn how medicines connect and test your own knowledge."
  FI: "Rakenna mahdollisimman pitkä lääkeketju yhdistämällä lääkkeitä, joilla on sama käyttöaihe tai lääkeryhmä. Nopea ja keskittynyt tapa oppia lääkkeistä ja testata omaa osaamistasi."
- **MediLink** — EN: "Match medicines to their active ingredients, indications, and drug classes — link by link. A quick way to check what you know about each medicine, and learn what you don’t."
  FI: "Yhdistä lääkkeet niiden vaikuttaviin aineisiin, käyttöaiheisiin ja lääkeryhmiin kortti kerrallaan. Nopea tapa tarkistaa, mitä tiedät mistäkin lääkkeestä, ja oppia uutta."
- **FarmaDiary** — EN: "A personal medicine notebook — log the medicines you encounter on placement, quiz yourself on what you’ve logged, and watch your own knowledge base grow. Try out FarmaDiary without an account to see how it works!"
  FI: "Henkilökohtainen lääkepäiväkirja, johon kirjaat opinnoissa ja harjoitteluissa kohtaamasi lääkkeet. Testaa osaamistasi omiin merkintöihisi perustuvilla kysymyksillä ja seuraa, miten osaamisesi kehittyy ajan myötä. Kokeile FarmaDiarya kirjautumatta!"
- **PleksusDiaries** — EN: "A personal learning diary for nursing students. Write down what you learn in your studies and placements and tag the topics behind it. Think about how the topics connect, and let PleksusDiaries turn your connections into a mind map."
  FI: "Henkilökohtainen oppimispäiväkirja hoitotyön opiskelijoille. Kirjaa päiväkirjaan, mitä opit koulussa ja harjoittelussa, ja liitä merkintöihin käsitellyt teemat. Pohdi, miten teemat liittyvät toisiinsa, ja anna PleksusDiary:lla koota yhteyksistäsi ajatuskartta."
Layout check with these lengths: tiles/cards in a row stay equal height and the "Play now" / "Pelaa" links share one line at every two-column width (880–1280px) in EN and FI; on phones each card stacks with its link at the bottom.

### Game descriptions (EN, old — still on the live site)
- **FarmaRush**: "Medication requests arrive from hospital wards, one shift at a time. Catch the right drugs before they're dispatched — work fast, but don't let the wrong medication through."
- **MyDay**: "A day in the life of a nursing student on a cardiology ward — from morning handover to medication rounds to end-of-shift documentation. Built to capture the rhythm of a real shift, one room at a time."
- **MediChain** (never call it "Mediketju" on the page — that name only exists as an internal image filename): "Build the longest possible medicine chain by linking drugs that share an indication or drug class. A quick, focused way to test how well those connections actually stick."
- **MediLink**: "Match medicines to their active ingredients, indications, and drug classes — link by link. Built to reinforce the kind of pattern-recognition real prescribing depends on."
- **FarmaDiary**: "A personal medicine notebook — log the drugs you encounter on placement, quiz yourself on what you've logged, and watch your own knowledge base grow shift by shift."

### Game descriptions (FI, old — still on the live site)
- **FarmaRush**: "Eri osastoilta saapuu työvuoron aikana lääketilauksia. Kerää oikeat lääkkeet mahdollisimman nopeasti, mutta vältä vääriä valintoja."
- **MyDay**: "Päivä sairaanhoitajaopiskelijana kardiologian osastolla — aamuraportista lääkkeiden jakoon ja työvuoron päättävään kirjaamiseen. Peli etenee aidon työvuoron tavoin, yksi tehtävä kerrallaan."
- **MediChain**: "Rakenna mahdollisimman pitkä lääkeketju yhdistämällä lääkkeitä, joilla on sama käyttöaihe tai lääkeryhmä. Nopea tapa testata, miten hyvin lääkkeet ovat jääneet mieleen."
- **MediLink**: "Yhdistä lääkkeet niiden vaikuttaviin aineisiin, käyttöaiheisiin ja lääkeryhmiin kortti kerrallaan. Peli auttaa hahmottamaan lääketiedon kokonaisuuksia ja eri käsitteiden välisiä yhteyksiä."
- **FarmaDiary**: "Henkilökohtainen lääkepäiväkirja, johon kirjaat opinnoissa ja harjoitteluissa kohtaamasi lääkkeet. Testaa osaamistasi omiin merkintöihisi perustuvilla kysymyksillä ja seuraa, miten osaamisesi kehittyy ajan myötä."

### PleksusDiaries
New product section, added 2026-10-10, sitting right after FarmaDiary. Link `https://pleksusdiaries.lovable.app/`.
- **Description (EN, old — live site; new text in "Game and tool descriptions" above):** "A personal learning diary for nursing students. Write down what you learn in your studies and placements and tag the topics behind it. Think about how different topics connect with each other. All your entries and topics are easy to find again later."
- **Description (FI, old — live site; new text in "Game and tool descriptions" above):** "Henkilökohtainen oppimispäiväkirja hoitotyön opiskelijoille. Kirjaa päiväkirjaan, mitä opit koulussa ja harjoittelussa, ja liitä merkintöihin käsiteltyt teemat. Pohdi, miten eri teemat liittyvät toisiinsa. Kaikki merkinnät ja teemat löytyvät myöhemmin helposti." (unlike FarmaDiary, this one has a real FI translation, per Piret's brief that it's bilingual)
- **Image (live):** `PleksusDiaries promo image.png` — a screenshot of the PleksusDiaries landing page itself ("Where everything you learn connects" hero + the Write as you go / See what you know / Think it through feature cards), unlike the other sections' illustrated key-art. Aspect ratio is narrower than the 16:9 frame (1.56:1), so it letterboxes slightly left/right into the pink accent tint — same `object-fit: contain` behavior as the other sections, no special-casing needed.
- **CTA button:** "Visit PleksusDiaries →", links out to `https://pleksusdiaries.lovable.app/` (`target="_blank" rel="noopener noreferrer"`, same as FarmaDiary's external link).
- **Accent color (REPLACED by the redesign — no frame tints):** `--accent-pleksus: #F472B6` (soft pink), used only for the media-box tint, same narrow purpose as the other per-game accent vars.
- **Layout position (REPLACED by the redesign — now a stacked Learning tools card, image left):** image-right (`.game-flex.reverse`), `bg-white`, continuing the alternation after FarmaDiary (`bg-tint`). Adding this section shifted every section after it (Why onward) to the opposite background — see Layout structure above.

### Why section — card styling
> ⚠️ **REPLACED by the redesign** (see "Redesign — new design" above). This describes the design still on the live site until the redesign is published; kept for history. In the redesign the Why statements are a click-only carousel in the header.

Statement text is regular weight (400) in the same muted gray (`#6B7280`) as every other body paragraph on the page (game descriptions, About Me, etc.) — it was originally semi-bold (600) and dark navy, which stood out as the only body text styled that way; fixed for consistency. Citation line below stays smaller, italic, same gray. Font is Inter throughout, no separate font-family for this section.

### Why section (EN)
1. "Over half of surveyed nurses have caused a medication-related safety incident; half have given medicines without knowing their effects." — Luokkamäki et al., 2016
2. "Nursing students often see pharmacology as a 'necessary evil' rather than essential knowledge." — Mauldin, 2023
3. "Online and gamified methods are among the most effective ways to teach pharmacology." — Gill et al., 2019

### Why section (FI — Piret's original thesis wording, live)
Each statement's citation is stripped out of the sentence and shown as its own small gray line below (matching the English cards), not embedded inline:
1. "Yli puolet tutkimukseen osallistuneet sairaanhoitajista ovat joskus aiheuttanut potilaalle lääkehoidon virheen takia vaaratilanteen ja puolet ovat antaneet lääkkeitä, joiden vaikutuksia he eivät tietäneet." (shortened 2026-11: the opening "Vuonna 2016 julkaistun tutkimuksen mukaan" was removed — the year is in the citation) — Luokkamäki ym. 2016
2. "Tutkimuksen mukaan sairaanhoitajaopiskelijat ajattelevat farmakologiakurssin "pakollisena pahana" sen sijaan, että sen sisältö olisi tärkeä hallita." — Mauldin 2023
3. "Vuonna 2019 tehdyn tutkimuksen mukaan on todettu online-menetelmien olevan yksi parhaimpia tapoja farmakologian opettamisessa opiskelijatyytyväisyyden ja tiedon hankinnan kannalta." — Gill ym. 2019

### Why section — full citations (redesign: all three together on the carousel's 4th "Sources" slide, `#C9DDD7`, alphabetical — old live site: all three in gray `#6B7280` below the cards). Short citations in the carousel no longer start with "— ".
Gill, Manu & Andersen, Elizabeth & Hilsmann, Norma. 2019. Best practices for teaching pharmacology to undergraduate nursing students: A systematic review of the literature.

Luokkamäki, Sanna & Vehviläinen-Julkunen, Katri & Saano, Susanna & Härkänen, Marja 2016. "Sairaanhoitajien lääkehoidon osaaminen heidän itsensä arvioimana", Tutkiva Hoitotyö, vol. 14, no. 2, pp. 23–32.

Mauldin, Betsy 2023. Bringing Clinical Context to the Classroom in Nursing Pharmacology: A Case Study.

### About Me (EN, redesign branch — replaces the text below on the live site)
> I’m a newly registered nurse with a particular interest in cardiology and pharmacology. Before nursing, I trained as a fashion designer at the Estonian Academy of Arts and worked as a software specialist for fashion design and production tools across Northern Europe.
>
> Somewhere along the way, design and healthcare started to overlap. Before I started my nursing studies, I worked with researchers at the University of Helsinki on a service that supported parents of young children. In 2023 I began my nursing studies at Metropolia University of Applied Sciences, and in 2025 my co-authored [bachelor’s thesis](https://www.theseus.fi/server/api/core/bitstreams/6765a411-b504-465a-bc58-f826b8bec0fb/content) looked at how pharmacology is taught to student nurses, why it feels so hard to learn, and how teaching could be improved. We found what research keeps finding: pharmacology is hard to teach, and harder to make stick.
>
> Later, on a clinical placement, I noticed that my own medication learning wasn’t systematic enough. Around the same time, friends told me how you can build apps and websites with AI coding tools. I started exploring whether I could use them to bring more structure to my learning, and to make pharmacology, and nursing studies more broadly, easier and more fun to learn. I have built a few games and digital tools that help students, and nurses too, learn medicines, understand life on a ward, and reflect on how different nursing concepts connect. Try them out above, and tell me what you think!

### About Me (EN, old — still on the live site)
Note: Piret is Estonian, not Finnish — the bio must never say "nursing student from Finland" or similar; it previously did and was corrected.
> I'm a nursing student with a particular interest in cardiology and pharmacology. Before nursing, I trained as a fashion designer at the Estonian Academy of Arts and spent some time working in software for design tools across Northern Europe.
>
> Somewhere along the way, design and healthcare started to overlap, and I've worked, for example, with researchers at the University of Helsinki on a service for parents navigating early childhood. In 2025, my bachelor's thesis looked at medication safety among student nurses — and found what research keeps finding: pharmacology is hard to teach, and harder to make stick.
>
> That's what led me here — building games and digital learning tools instead of just writing about the problem. I started experimenting with vibe-coding and playing around with these subjects, and it grew from there — each one a focused prototype, not a finished product, but a genuine attempt to make pharmacology a little less abstract and a little more memorable, for students like me.

### About Me (FI, redesign branch — replaces the Finnish text below on the live site)
> Olen vastavalmistunut sairaanhoitaja. Erikoisaloista minua kiinnostavat erityisesti kardiologia ja farmakologia. Ennen hoitoalalle siirtymistä kouluttauduin vaatesuunnittelijaksi Eesti Kunstiakademiassa ja työskentelin muotisuunnittelun ja tuotannon ohjelmistojen asiantuntijana Pohjois-Euroopassa.
>
> Ajan myötä muotoilu ja terveydenhuolto alkoivat kulkea tekemisessäni käsi kädessä. Ennen kuin lähdin opiskelemaan hoitoalaa, työskentelin Helsingin yliopiston tutkijoiden kanssa palvelun parissa, joka tuki pienten lasten vanhempia. Aloitin sairaanhoitajaopinnot Metropolia Ammattikorkeakoulussa vuonna 2023, ja vuonna 2025 tekemämme [opinnäytetyö](https://www.theseus.fi/server/api/core/bitstreams/6765a411-b504-465a-bc58-f826b8bec0fb/content) tarkasteli, miten farmakologiaa opetetaan sairaanhoitajaopiskelijoille, miksi sen oppiminen koetaan vaikeaksi ja miten opetusta voisi kehittää. Totesimme saman kuin tutkimukset yleensäkin: farmakologiaa on vaikea opettaa, ja vielä vaikeampaa on saada opittu jäämään mieleen.
>
> Myöhemmin harjoittelussa huomasin, ettei lääkehoidon opiskeluni ollut tarpeeksi järjestelmällistä. Samoihin aikoihin kuulin ystäviltäni, miten tekoälyn avulla voi rakentaa sovelluksia ja verkkosivuja. Aloin kokeilla, voisinko kehittää itselleni oppimisvälineitä, jotka auttaisivat minua oppimaan lisää lääkkeistä ja tekisivät farmakologian ja laajemminkin hoitotyön opiskelusta helpompaa ja hauskempaa. Näistä kokeiluista on syntynyt muutamia pelejä ja digitaalisia työkaluja, jotka auttavat opiskelijoita, ja miksei myös valmistuneita sairaanhoitajia, oppimaan farmakologiaa, ymmärtämään osastotyön arkea ja pohtimaan, miten hoitotyön eri käsitteet liittyvät toisiinsa. Kokeile niitä tällä sivulla ja kerro, mitä mieltä olet!

### About Me (FI, old — still on the live site)
Note: the FI version splits into 4 paragraphs in Piret's original text; paragraphs 3 and 4 were merged into one on the page to keep the same 3-paragraph structure as the English version (no wording changed, just the paragraph break removed).
> Olen sairaanhoitajaopiskelija ja erikoisaloista minua kiinnostavat erityisesti kardiologia ja farmakologia. Ennen hoitoalalle siirtymistä kouluttauduin vaatesuunnittelijaksi Eesti Kunstiakademiassa ja työskentelin muotiin liittyvien suunnitteluohjelmistojen parissa Pohjoismaissa.
>
> Jossain vaiheessa muotoilu ja terveydenhuolto alkoivat luontevasti yhdistyä tekemisessäni. Olen esimerkiksi työskennellyt Helsingin yliopiston tutkijoiden kanssa palvelun parissa, joka tukee vanhempia varhaislapsuuden haasteissa. Vuonna 2025 opinnäytetyöni käsitteli aihetta, miten sairaanhoitajaopiskelijat opiskelevat lääkehoitoa ja miten sitä kannattaisi opettaa. Opinnäytetyössä totesimme, että farmakologiaa on vaikea opettaa, ja vielä vaikeampaa on opiskelijan saada opittu tieto jäämään mieleen.
>
> Inspiroituin opinnäytetyöstäni ja aloin rakentamaan pelejä ja digitaalisia oppimistyökaluja aluksi vain itselleni, helpottaakseni omaa oppimistani. Kokeilin niin sanottua vibe coding -työskentelyä ja kehitin erilaisten aiheiden ympärille pelillisiä ideoita. Tällä sivulla pääset tutustumaan kehittämiini oppimispeleihin. Jokainen peli on tässä vaiheessa vielä prototyyppi, ei valmis tuote. Ne ovat yrityksiä tehdä farmakologiasta hieman vähemmän abstraktia ja helpommin muistettavaa sairaanhoitajaopiskelijoille.

## Images
`/images/` holds exactly the 6 files actually referenced on the page — the original 13 raw screenshots (plus unused spares) were deleted once replaced.

**In use (lead image per section, in page order):**
- **FarmaRush** → `FarmaRush promo image.png` (key-art illustration: pharmacy chute, shelves, nurse)
- **MyDay** → `myday promo image.png` (illustrated nurse + medication cart scene)
- **MediChain** → `Medichain promo image.png` (illustrated chain-card diagram)
- **MediLink** → `Medilink promo image.png` (chain-link logo + card-matching UI; filename stays lowercase "Medilink" — only the on-page display text was recapitalized to "MediLink")
- **FarmaDiary** → `FarmaDiary promo image.png` (branded illustration: quiz cards + progress dashboard)
- **PleksusDiaries** → `PleksusDiaries promo image.png` (screenshot of the PleksusDiaries landing page itself, not illustrated key-art — see Content above)

**Frame treatment (REPLACED by the redesign — now white 16:9 frames, contain, cover only for MyDay + PleksusDiaries; no accent tints, no shadow):** each image sits in a fixed 16:9 box, `border-radius: 20px`, `box-shadow: 0 8px 24px rgba(0,0,0,0.08)`. Fill is `object-fit: contain` (MyDay uses `cover` specifically — its illustration's aspect ratio didn't match the 16:9 frame and left pale bars on the sides), with the frame's background tinted in that game's accent color for any image that doesn't exactly fill the box. That tint is normally a subtle 10%-accent blend toward white (`color-mix(in srgb, var(--accent) 10%, var(--card))`) — a deliberate design choice for the illustrated key-art. **PleksusDiaries is the exception:** its image is a literal screenshot, so a 10% tint left a faint off-white seam at the edges; its box instead uses a `.exact-bg` modifier (full-strength `var(--accent)`, no blending) with `--accent-pleksus` set to the image's own sampled background color (`#F9FBFA` / `rgb(249,251,250)`), so the frame matches exactly with no seam.

**Click-to-enlarge (live):** every section image shows `cursor: zoom-in` and opens in a simple lightbox on click — dark overlay, image centered at up to 90% viewport width/height. Closes via background click, the × button, or Escape. No gallery/navigation between images.

**Open idea, not decided:** cropping images square and applying a tilted/framed treatment (inspired by the Sonder portfolio template) instead of the current fixed-16:9 boxes.

## Games: no links back to this page (2026-11)
- The games contain **no "Back to main page" link** any more. A small "← Back to main page" link (English only, pointing to `https://clinicalgames.fi/`) had been added to the start screen of each game (FarmaRush, MyDay, MediChain, MediLink) in an earlier session; it was not part of Piret's own game files. It was **removed** on 2026-11-21, because the games now open in a new tab from this page (see "Games open in a new tab" above) and the main page stays open in its own tab — the link would only have opened a second copy of the main page.
- Only the one link element was removed from each game's `index.html` (it had all its styling inline; there was no separate CSS or script for it). Nothing else in the games changed. Checked: each game loads without JavaScript errors, its start screen shows no gap where the link was, the game starts, and in MediLink "Lopeta peli" still returns to the rules screen and the game can be started again.
- **Rule:** game `.html` files from Piret are used exactly as given — no back links or other extra elements are added (also in CLAUDE.md).

## Contact section
- Simple form (name, email, message) via **Formspree, live at `https://formspree.io/f/xjgnavqw`**. Submits via `fetch` with `Accept: application/json` (no page reload) — on success the form is replaced with a confirmation message; on failure the form stays visible with an error message so the user can retry.
- Confirmation message (live, both languages): EN "Thank you for contacting me. I will get back to you soon." / FI "Kiitos yhteydenotostasi. Vastaan sinulle pian"
- Error message (changed 2026-11, now EN + FI): EN "Something went wrong — please try again in a moment." / FI "Jokin meni pieleen — yritä hetken päästä uudelleen." (replaced EN "Something went wrong — please try again, or reach out directly.")
- **No LinkedIn button.** One was added, then explicitly removed at Piret's request — don't re-add it unless asked again.
- **Hard rule: never display Piret's personal email address anywhere in visible content or page source.**
- **Intro sentence (redesign branch, EN + FI, added 2026-11, reworded 2026-11-21):** directly under the heading, above the form — EN "Teaching nursing, developing training, or just tried one of the games? I’d love to hear from you." / FI "Opetatko hoitotyötä, kehitätkö koulutusta tai kokeilitko jotain peleistä? Kuulisin sinusta mielelläni."
- **FI translation (live):** heading "Ota yhteyttä", labels "Nimi" / "Sähköposti" / "Viesti", submit button "Lähetä", confirmation message (see above).

## Open / deferred items
- [x] Screenshot framing decided in the redesign: fixed 16:9 white frames (square + tilted idea dropped)
- [ ] Finnish version of the remaining new redesign label: the headline ("Medication learning, played — not just memorised." — needs Piret’s Finnish, incl. which word is orange). Done 2026-11: hero subline (`hero_subline` FI added 2026-11-21), header buttons, Learning tools buttons, contact error message, section headings + subtitles, all four menu links.
- [x] Fixed: FI heading "Oppimissovellukset" overflowed phones ≤375px at 40px — section headings now scale 28–34px on phones (desktop unchanged at 40px).
- [ ] Decide: inactive carousel dots / previous-button border `#4F7A70` (2.59:1) vs. `#56867B` (3.03:1, passes WCAG non-text contrast)
- [ ] Publish the redesign (merge `redesign` into the live branch, then update `CLAUDE.md`)
- [x] Custom domain — `clinicalgames.fi` is live (`CNAME` file, DNS, and Pages settings all done; see TECH-NOTES.md)
