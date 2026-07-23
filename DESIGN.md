# Piret Paal — Showcase Site: Design & Content Reference

This file tracks the design decisions, content, and status for this repo, so both Claude Code and Piret have one shared source of truth instead of re-explaining things each session.

## Live site
https://paalpiret.github.io/farmagames-showcase/

## Page name & identity
- Page title: **"Piret Paal"** (not "FarmaGames" or "MediProjects" — both were dropped, including from `<title>` and meta description). Name is unchanged in both EN and FI.
- Heading size: 50px, weight 700.
- No subtitle line anymore (the old "Nursing education game prototypes" line was dropped as redundant).
- Tagline (italic, only supporting line under the name): "A portfolio of interactive projects exploring medication learning, clinical reasoning and nursing practice." FI: "Interaktiivisia oppimisprojekteja, jotka tekevät lääkeoppimisesta, kliinisestä päättelystä ja hoitotyön arjesta selkeämpää, kiinnostavampaa ja helpommin muistettavaa."
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
| primary (teal) | `#20A386` | all "Play now" / "Visit Farmadiary" buttons |
| primary-dark | `#167B65` | all "GAME 0X · [LANG]" / "Learning tool · [LANG]" labels, hero base color |
| secondary/accent tint | `#EAF3F0` | alternating section background |
| muted | `#D6E7E1` | muted surfaces |
| muted-foreground | `#6B7280` | secondary/supporting text |
| border | `#DBE9E4` | dividers, borders |

**Decision: single teal accent for labels + buttons (done).** FarmaDiary's colorful per-activity accents (purple `#A78BFA`, blue `#38BDF8`, green `#3ED07A`, orange `#FF9F1A`, yellow `#F5C51F`) were tried per-game, then dropped for section labels and buttons — they carried no real meaning here (they were activity-type colors in FarmaDiary, not game identifiers) and made the page feel less cohesive. All game labels now use `#167B65`, all buttons (including Farmadiary's) use `#20A386`.

**Per-game accent colors still exist in one place:** the subtle background tint inside each game's screenshot frame (`.game-media-box`, `color-mix(... var(--accent) 10%, white)`), so portrait-shaped screenshots don't letterbox into plain white. This was an intentional, narrower exception — the accent variables (`--accent-myday`, `--accent-farmarush`, `--accent-medichain`, `--accent-medilink`) are still defined in `:root` for this purpose only.

**Hero banner background (done):** mesh-gradient effect (not flat linear) — base `#167B65` with three blurred color blobs (`#2FC9A6` top-left, `#38BDF8` bottom-right, `#20A386` upper-right, varying opacity, `blur(60–80px)`), plus a soft white radial glow (`rgba(255,255,255,0.18)`, ellipse shape to avoid a hard-edge clipping bug) centered behind the "Piret Paal" heading. `header` uses `overflow: hidden` so blobs stay contained on small screens.

## Typography
- Font: **Inter** (headings + body)
- Radius scale: `--radius: 0.75rem`, `--radius-lg: 1rem`

## Layout structure (current, live)
1. **Header/hero** — mesh-gradient banner, name, italic tagline, language toggle top-right (the project-names line that used to sit below the tagline, and the old subtitle line, were both removed)
2. **Game sections** (×4: MyDay, FarmaRush, MediChain, Medilink) — alternating white/`#EAF3F0` backgrounds, image-beside-text layout alternating sides per section (left/right/left/right), image in a fixed 16:9 box with rounded corners, full-bleed section color with content in a centered `max-width: ~1000px` column, generous responsive padding (not fixed height)
3. **Farmadiary** — its own full section, same treatment as the game sections (moved to directly follow the four games)
4. **Why** — three cards with research-based quotes + citations, plus a small full-citation reference list below the cards (see Content below) — now sits after Farmadiary, not before it
5. **About Me** — full bio text, live (see Content below)
6. **Contact** — form via Formspree (placeholder endpoint); **no LinkedIn button** (added once, then explicitly removed — do not re-add without being asked); no personal email ever displayed in visible content or source
7. **Footer** — © 2026 Piret Paal, nothing else

## Section label style
No colored pill/chip badges anywhere on the page (including Farmadiary's, which used to have a yellow pill). Small plain text label above each name, in `#167B65`:
- `Game 01 · EN` (MyDay)
- `Game 02 · FI/EN` (FarmaRush — the game itself has an in-game EN/FI toggle)
- `Game 03 · FI` (MediChain)
- `Game 04 · FI` (Medilink)
- `Learning tool · EN` (Farmadiary — intentionally not numbered as a "game"; this one has no FI translation yet)

In FI mode, the four numbered labels become `Peli 01 · EN`, `Peli 02 · FI/EN`, `Peli 03 · FI`, `Peli 04 · FI` ("Game" → "Peli"), and every "Play now" button becomes "Pelaa".

## Language (FI/EN)
- **Current status: toggle is built and live.** Fixed pill top-right (`EN`/`FI`), active language bolded/highlighted, choice persists via `localStorage`, full text swap via JS with no reload.
- **Real Finnish content exists for:** the hero tagline, the Why section (Piret's own thesis wording — see below; each card's citation is its own small gray line below the quote, with no trailing page number, same structure as the English cards), the five section descriptions (MyDay, FarmaRush, MediChain, Medilink, Farmadiary), the "Game"/"Play now" → "Peli"/"Pelaa" swap on game labels and buttons, the Contact section (heading, field labels, submit button), and About Me.
- **Everywhere else falls back to English automatically** when FI is selected (Farmadiary's "Learning tool" label, footer) — the `translations` dictionary in `index.html` only has an `en` key for these, and the fallback logic shows English rather than blank text. Game names and "Piret Paal" are never translated (treated like proper nouns). Footer is intentionally identical in both languages, not a fallback gap.

## Content — final/ready to use, all live on the page

### Game descriptions
- **MyDay**: "A day in the life of a nursing student on a cardiology ward — from morning handover to medication rounds to end-of-shift documentation. Built to capture the rhythm of a real shift, one room at a time."
- **FarmaRush**: "Medication requests arrive from hospital wards, one shift at a time. Catch the right drugs before they're dispatched — work fast, but don't let the wrong medication through."
- **MediChain** (never call it "Mediketju" on the page — that name only exists as an internal image filename): "Build the longest possible medicine chain by linking drugs that share an indication or drug class. A quick, focused way to test how well those connections actually stick."
- **Medilink**: "Match medicines to their active ingredients, indications, and drug classes — link by link. Built to reinforce the kind of pattern-recognition real prescribing depends on."
- **Farmadiary**: "A personal medicine notebook — log the drugs you encounter on placement, quiz yourself on what you've logged, and watch your own knowledge base grow shift by shift."

### Why section (EN)
1. "Over half of surveyed nurses have caused a medication-related safety incident; half have given medicines without knowing their effects." — Luokkamäki et al., 2016
2. "Nursing students often see pharmacology as a 'necessary evil' rather than essential knowledge." — Mauldin, 2021
3. "Online and gamified methods are among the most effective ways to teach pharmacology." — Gill et al., 2019

### Why section (FI — Piret's original thesis wording, live)
Each statement's citation is stripped out of the sentence and shown as its own small gray line below (matching the English cards), not embedded inline:
1. "Vuonna 2016 julkaistun tutkimuksen mukaan yli puolet tutkimukseen osallistuneet sairaanhoitajista ovat joskus aiheuttanut potilaalle lääkehoidon virheen takia vaaratilanteen ja puolet ovat antaneet lääkkeitä, joiden vaikutuksia he eivät tietäneet." — Luokkamäki ym. 2016
2. "Tutkimuksen mukaan sairaanhoitajaopiskelijat ajattelevat farmakologiakurssin "pakollisena pahana" sen sijaan, että sen sisältö olisi tärkeä hallita." — Mauldin 2021
3. "Vuonna 2019 tehdyn tutkimuksen mukaan on todettu online-menetelmien olevan yksi parhaimpia tapoja farmakologian opettamisessa opiskelijatyytyväisyyden ja tiedon hankinnan kannalta." — Gill ym. 2019

### Why section — full citations (small gray `#6B7280` text, below the cards, live, alphabetical order)
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
> Jossain vaiheessa huomasin, että voin yhdistää muotoilun taustani ja sairaanhoitajuuden. Olen esimerkiksi työskennellyt Helsingin yliopiston tutkijoiden kanssa palvelun parissa, joka tukee vanhempia varhaislapsuuden haasteissa. Vuonna 2025 opinnäytetyöni käsitteli aihetta, miten sairaanhoitajaopiskelijat opiskelevat lääkehoitoa ja miten sitä kannattaisi opettaa. Opinnäytetyössä totesimme, että farmakologiaa on vaikea opettaa, ja vielä vaikeampaa on opiskelijan saada opittu tieto jäämään mieleen.
>
> Inspiroituin opinnäytetyöstäni ja aloin rakentamaan pelejä ja digitaalisia oppimistyökaluja aluksi vain itselleni, helpottaakseni omaa oppimistani. Kokeilin niin sanottua vibe coding -työskentelyä ja kehitin erilaisten aiheiden ympärille pelillisiä ideoita. Tällä sivulla pääset tutustumaan kehittämiini oppimispeleihin. Jokainen peli on tässä vaiheessa vielä prototyyppi, ei valmis tuote. Ne ovat yrityksiä tehdä farmakologiasta hieman vähemmän abstraktia ja helpommin muistettavaa sairaanhoitajaopiskelijoille.

## Images
`/images/` holds exactly the 5 files actually referenced on the page — the original 13 raw screenshots (plus unused spares) were deleted once replaced.

**In use (lead image per section):**
- **MyDay** → `myday promo image.png` (illustrated nurse + medication cart scene)
- **FarmaRush** → `FarmaRush promo image.png` (key-art illustration: pharmacy chute, shelves, nurse)
- **MediChain** → `Medichain promo image.png` (illustrated chain-card diagram)
- **Medilink** → `Medilink promo image.png` (chain-link logo + card-matching UI)
- **Farmadiary** → `FarmaDiary promo image.png` (branded illustration: quiz cards + progress dashboard)

**Frame treatment (live):** each image sits in a fixed 16:9 box, `border-radius: 20px`, `box-shadow: 0 8px 24px rgba(0,0,0,0.08)`. Fill is `object-fit: contain` (MyDay uses `cover` specifically — its illustration's aspect ratio didn't match the 16:9 frame and left pale bars on the sides), with the frame's background tinted in that game's accent color for any image that doesn't exactly fill the box.

**Click-to-enlarge (live):** every section image shows `cursor: zoom-in` and opens in a simple lightbox on click — dark overlay, image centered at up to 90% viewport width/height. Closes via background click, the × button, or Escape. No gallery/navigation between images.

**Open idea, not decided:** cropping images square and applying a tilted/framed treatment (inspired by the Sonder portfolio template) instead of the current fixed-16:9 boxes.

## Cross-links back to this page
Each of the four games (MyDay, FarmaRush, MediChain, Medilink) has a small, unobtrusive "← Back to FarmaGames" link pointing to the live site URL, visible only on that game's own start/landing screen (never during gameplay). Styled to match each game's own visual language, not this page's design system.

## Contact section
- Simple form (name, email, message) via **Formspree** (needs a real account + endpoint — currently placeholder: `https://formspree.io/f/REPLACE_WITH_FORM_ID`)
- **No LinkedIn button.** One was added, then explicitly removed at Piret's request — don't re-add it unless asked again.
- **Hard rule: never display Piret's personal email address anywhere in visible content or page source.**
- **FI translation (live):** heading "Ota yhteyttä", labels "Nimi" / "Sähköposti" / "Viesti", submit button "Lähetä".

## Open / deferred items
- [ ] Set up real Formspree account + swap in the real endpoint
- [ ] Decide on screenshot cropping/framing treatment (square + tilted vs. current fixed-16:9 boxes)
- [ ] Custom domain (optional, future) — just needs a `CNAME` file + DNS records + Pages settings once purchased; no rebuild required
