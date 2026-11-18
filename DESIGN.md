# Piret Paal — Showcase Site: Design & Content Reference

This file tracks the design decisions, content, and status for this repo, so both Claude Code and Piret have one shared source of truth instead of re-explaining things each session.

## Live site
https://clinicalgames.fi (custom domain, live — the old https://paalpiret.github.io/farmagames-showcase/ still works and redirects there)

## Page name & identity
> **Redesign:** tab title + meta description unchanged. The "Piret Paal" `<h1>`, the eyebrow styling and the italic tagline below are REPLACED — "Clinical Games" is now the name at the left of the top menu, and the header `<h1>` is the new headline (see "Redesign — new design").

- Browser tab title: **"Piret Paal — Interactive Nursing Projects"** and meta description "Piret Paal: interactive nursing projects and game prototypes." (not "FarmaGames" or "MediProjects" — both were dropped from these). The on-page `<h1>` itself stays just "Piret Paal" in both EN and FI — this "Interactive Nursing Projects" wording is tab-title/meta only, not visible page copy.
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

**Fonts:** headings (`h1`–`h3`, the "Clinical Games" name in the menu) **Space Grotesk 700**; everything else **Inter** (both Google Fonts).

**Colours (CSS tokens in `index.html` `:root`):**

| Token | Hex | Use |
|---|---|---|
| `--deep` | `#0F2E28` | page base: menu, header, Scenario games, About, footer |
| `--raised` | `#143A33` | Card games band, Contact band, Why card |
| `--line-dark` | `#2E5A50` | thin borders on dark (Why card, menu line, footer line) |
| `--mint` | `#D8E9E5` | Learning tools band |
| `--on-dark` | `#C9DDD7` | body text on dark (subline, About, subtitles, menu links) |
| `--on-dark-soft` | `#A9C4BC` | small print on dark (references, citations, footer) |
| `--heading-light` | `#0F2E28` | headings on white/mint cards |
| `--text-light` | `#4E5B58` | body text on white/mint |
| `--ink` | `#1A1A1A` | text on amber + on the coloured game tiles |
| `--amber` | `#FFB547` | the word "played", "Play the games" + "Send message" buttons, active carousel dot, focus ring on dark |
| `--teal-link` | `#157565` | Card games links, labels on white cards, filled Learning-tools buttons |
| `--tile-farmarush` / `--tile-myday` | `#FF9F1A` / `#A78BFA` | Scenario game tiles |
| `--edge-medichain` / `--edge-medilink` | `#38BDF8` / `#3ED07A` | 6px top border of the Card game cards |
| `--error-on-dark` | `#FFB4A8` | contact error message |

**Page order (one page; menu links scroll to sections, smooth scroll unless the visitor prefers reduced motion):**
1. **Top menu** (dark) — "Clinical Games" left; right: Games · Card games · Learning tools · About · Contact, then the EN/FI toggle (moved here from its old fixed top-right pill; active language = white pill). Sticky at the top on screens wider than 720px; on phones it is not sticky and wraps onto extra lines.
2. **Header** (`#0F2E28`, two columns, stacking ≤860px)
   - Left: headline "Medication learning, played — not just memorised." (Space Grotesk, "played" in `#FFB547`), subline in `#C9DDD7`, buttons "Play the games" (amber fill, `#1A1A1A` text → Scenario games) and "See the learning tools" (white outline + white text → Learning tools).
   - Right: **Why carousel** — small label "Why this work exists · 1 / 3", card `#143A33` with `#2E5A50` border, one statement at a time with its short citation below (existing texts, EN + FI), then a thin `#2E5A50` line (same as the one above the arrows) and **that quote's own full reference** in small `#A9C4BC` text — quote 1 → Luokkamäki 2016, 2 → Mauldin 2023, 3 → Gill 2019. Previous/next arrow buttons + three dot buttons; moves **only when clicked** (no auto-slide), ←/→ keys also work when focus is inside it. All controls are real `<button>`s with aria-labels; the visible slide is an `aria-live="polite"` region. Invisible copies of all three slides keep the card the height of the longest one, so it doesn't jump. There is **no separate reference list under the card** any more (replaced — first version of the redesign listed all three references there).
3. **Scenario games** (`#0F2E28`) — heading + subtitle "Story-based prototypes · play in your browser, no account"; FarmaRush (`#FF9F1A`) and MyDay (`#A78BFA`) as two large rounded tiles side by side, all text `#1A1A1A`. Tile: image, label, name, full description, "Play now →" as a dark `#1A1A1A` button.
4. **Card games** (`#143A33`) — heading + subtitle "Quick drills for linking drugs, indications and drug classes"; MediChain and MediLink as white cards with a 6px coloured top border, heading `#0F2E28`, text `#4E5B58`, label + "Play now →" text link `#157565`.
5. **Learning tools** (`#D8E9E5`) — heading + subtitle "Working apps for everyday studying and placements"; FarmaDiary and PleksusDiaries as white cards stacked vertically, image left / text right (stacking ≤720px); buttons filled `#157565`, white text ("Visit FarmaDiary →" → farmadiary.com, "Visit PleksusDiaries →").
6. **About** (`#0F2E28`) — full existing heading + 3 paragraphs, text `#C9DDD7`, ~760px reading width.
7. **Contact** (`#143A33`) — same Formspree form (endpoint, fields, AJAX, success/error messages unchanged); white labels, white fields with `#1A1A1A` text, amber focus ring, amber "Send message" button; success/error boxes on `#0F2E28`.
8. **Footer** — existing "© 2026 Piret Paal", `#A9C4BC` on `#0F2E28`, thin top line.

**Images:** every frame 16:9, rounded (`--radius` 0.75rem), **white background**, `object-fit: contain` so nothing is cropped — **except MyDay and PleksusDiaries**, which use `object-fit: cover` (their files are slightly narrower than 16:9 and would otherwise show white side strips). Click-to-enlarge lightbox kept on all six images, `cursor: zoom-in`. No "Demo" links, no video placeholders.

**Labels:** same texts as before (`Game 0X · …` / `Peli 0X · …`, `Learning tool · …`), small uppercase; `#1A1A1A` on the tiles, `#157565` on white cards.

**New texts (EN only, no FI yet) in `content.js`:** menu labels (`nav_*`; "Card games"/"Learning tools" also serve as those section headings), headline (split into three keys so "played" can be coloured), subline, the two header buttons, "Why this work exists", the three section subtitles + "Scenario games" heading. Still in `content.js` but not shown in this design: `hero_name`, `hero_tagline`, `why_heading` (kept with their Finnish in case they return). All other text is the existing wording, unchanged.

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
> Label **texts** below are unchanged in the redesign; their **colour** is replaced (`#1A1A1A` on game tiles, `#157565` on white cards).

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
- **Deliberately left in `index.html`:** the `<title>` and meta description (search engines and link previews read these without running JavaScript), the `EN`/`FI` toggle button labels, the lightbox `×` close icon, and the `aria-label`s on controls. These are page metadata/interface controls, not page copy.
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

### Game descriptions (EN, live)
- **FarmaRush**: "Medication requests arrive from hospital wards, one shift at a time. Catch the right drugs before they're dispatched — work fast, but don't let the wrong medication through."
- **MyDay**: "A day in the life of a nursing student on a cardiology ward — from morning handover to medication rounds to end-of-shift documentation. Built to capture the rhythm of a real shift, one room at a time."
- **MediChain** (never call it "Mediketju" on the page — that name only exists as an internal image filename): "Build the longest possible medicine chain by linking drugs that share an indication or drug class. A quick, focused way to test how well those connections actually stick."
- **MediLink**: "Match medicines to their active ingredients, indications, and drug classes — link by link. Built to reinforce the kind of pattern-recognition real prescribing depends on."
- **FarmaDiary**: "A personal medicine notebook — log the drugs you encounter on placement, quiz yourself on what you've logged, and watch your own knowledge base grow shift by shift."

### Game descriptions (FI, live)
- **FarmaRush**: "Eri osastoilta saapuu työvuoron aikana lääketilauksia. Kerää oikeat lääkkeet mahdollisimman nopeasti, mutta vältä vääriä valintoja."
- **MyDay**: "Päivä sairaanhoitajaopiskelijana kardiologian osastolla — aamuraportista lääkkeiden jakoon ja työvuoron päättävään kirjaamiseen. Peli etenee aidon työvuoron tavoin, yksi tehtävä kerrallaan."
- **MediChain**: "Rakenna mahdollisimman pitkä lääkeketju yhdistämällä lääkkeitä, joilla on sama käyttöaihe tai lääkeryhmä. Nopea tapa testata, miten hyvin lääkkeet ovat jääneet mieleen."
- **MediLink**: "Yhdistä lääkkeet niiden vaikuttaviin aineisiin, käyttöaiheisiin ja lääkeryhmiin kortti kerrallaan. Peli auttaa hahmottamaan lääketiedon kokonaisuuksia ja eri käsitteiden välisiä yhteyksiä."
- **FarmaDiary**: "Henkilökohtainen lääkepäiväkirja, johon kirjaat opinnoissa ja harjoitteluissa kohtaamasi lääkkeet. Testaa osaamistasi omiin merkintöihisi perustuvilla kysymyksillä ja seuraa, miten osaamisesi kehittyy ajan myötä."

### PleksusDiaries
New product section, added 2026-10-10, sitting right after FarmaDiary. Link `https://pleksusdiaries.lovable.app/`.
- **Description (EN, live):** "A personal learning diary for nursing students. Write down what you learn in your studies and placements and tag the topics behind it. Think about how different topics connect with each other. All your entries and topics are easy to find again later."
- **Description (FI, live):** "Henkilökohtainen oppimispäiväkirja hoitotyön opiskelijoille. Kirjaa päiväkirjaan, mitä opit koulussa ja harjoittelussa, ja liitä merkintöihin käsiteltyt teemat. Pohdi, miten eri teemat liittyvät toisiinsa. Kaikki merkinnät ja teemat löytyvät myöhemmin helposti." (unlike FarmaDiary, this one has a real FI translation, per Piret's brief that it's bilingual)
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
1. "Vuonna 2016 julkaistun tutkimuksen mukaan yli puolet tutkimukseen osallistuneet sairaanhoitajista ovat joskus aiheuttanut potilaalle lääkehoidon virheen takia vaaratilanteen ja puolet ovat antaneet lääkkeitä, joiden vaikutuksia he eivät tietäneet." — Luokkamäki ym. 2016
2. "Tutkimuksen mukaan sairaanhoitajaopiskelijat ajattelevat farmakologiakurssin "pakollisena pahana" sen sijaan, että sen sisältö olisi tärkeä hallita." — Mauldin 2023
3. "Vuonna 2019 tehdyn tutkimuksen mukaan on todettu online-menetelmien olevan yksi parhaimpia tapoja farmakologian opettamisessa opiskelijatyytyväisyyden ja tiedon hankinnan kannalta." — Gill ym. 2019

### Why section — full citations (redesign: each shown inside the Why carousel with its own quote, `#A9C4BC`, below a thin line — old live site: all three in gray `#6B7280` below the cards, alphabetical)
Gill, Manu & Andersen, Elizabeth & Hilsmann, Norma. 2019. Best practices for teaching pharmacology to undergraduate nursing students: A systematic review of the literature.

Luokkamäki, Sanna & Vehviläinen-Julkunen, Katri & Saano, Susanna & Härkänen, Marja 2016. "Sairaanhoitajien lääkehoidon osaaminen heidän itsensä arvioimana", Tutkiva Hoitotyö, vol. 14, no. 2, pp. 23–32.

Mauldin, Betsy 2023. Bringing Clinical Context to the Classroom in Nursing Pharmacology: A Case Study.

### About Me (final, live — EN)
Note: Piret is Estonian, not Finnish — the bio must never say "nursing student from Finland" or similar; it previously did and was corrected.
> I'm a nursing student with a particular interest in cardiology and pharmacology. Before nursing, I trained as a fashion designer at the Estonian Academy of Arts and spent some time working in software for design tools across Northern Europe.
>
> Somewhere along the way, design and healthcare started to overlap, and I've worked, for example, with researchers at the University of Helsinki on a service for parents navigating early childhood. In 2025, my bachelor's thesis looked at medication safety among student nurses — and found what research keeps finding: pharmacology is hard to teach, and harder to make stick.
>
> That's what led me here — building games and digital learning tools instead of just writing about the problem. I started experimenting with vibe-coding and playing around with these subjects, and it grew from there — each one a focused prototype, not a finished product, but a genuine attempt to make pharmacology a little less abstract and a little more memorable, for students like me.

### About Me (FI, live)
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

## Cross-links back to this page
Each of the four games (FarmaRush, MyDay, MediChain, MediLink) has a small, unobtrusive "← Back to main page" link pointing to the live site URL, visible only on that game's own start/landing screen (never during gameplay). Styled to match each game's own visual language, not this page's design system.

## Contact section
- Simple form (name, email, message) via **Formspree, live at `https://formspree.io/f/xjgnavqw`**. Submits via `fetch` with `Accept: application/json` (no page reload) — on success the form is replaced with a confirmation message; on failure the form stays visible with an error message so the user can retry.
- Confirmation message (live, both languages): EN "Thank you for contacting me. I will get back to you soon." / FI "Kiitos yhteydenotostasi. Vastaan sinulle pian"
- Error message (EN only so far, no FI requested yet): "Something went wrong — please try again, or reach out directly."
- **No LinkedIn button.** One was added, then explicitly removed at Piret's request — don't re-add it unless asked again.
- **Hard rule: never display Piret's personal email address anywhere in visible content or page source.**
- **FI translation (live):** heading "Ota yhteyttä", labels "Nimi" / "Sähköposti" / "Viesti", submit button "Lähetä", confirmation message (see above).

## Open / deferred items
- [x] Screenshot framing decided in the redesign: fixed 16:9 white frames (square + tilted idea dropped)
- [ ] Finnish versions of the new redesign labels (menu, headline, subline, header buttons, section headings/subtitles, "Why this work exists")
- [ ] Publish the redesign (merge `redesign` into the live branch, then update `CLAUDE.md`)
- [x] Custom domain — `clinicalgames.fi` is live (`CNAME` file, DNS, and Pages settings all done; see TECH-NOTES.md)
