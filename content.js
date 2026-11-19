// ─────────────────────────────────────────────────────────────
// content.js — ALL visible page text for index.html (EN + FI)
//
// index.html holds only layout and styling; every sentence on the
// page lives here, exactly once. Each HTML element that shows text
// has a data-i18n="key" attribute (or data-i18n-alt="key" for image
// alt text) pointing at an entry below.
//
// How to edit:
//   • change a sentence  → edit its "en" / "fi" value here
//   • add Finnish        → add an fi: "..." line to that entry
//   • entries without "fi" show the English text in FI mode too
//     (used on purpose for names, "Piret Paal", footer, references)
//
// Loaded by index.html with <script src="content.js"> before the
// page's own script, so the text is in place before first paint.
// ─────────────────────────────────────────────────────────────

var translations = {
  // ── Top menu ──
  // Wordmark "clinicalgames" at the left of the menu: one word, two colours.
  // A logo, not translated — same text in EN and FI.
  wordmark_clinical: { en: "clinical" },
  wordmark_games: { en: "games" },
  nav_games: { en: "Games" },
  nav_card_games: { en: "Card games" },        // also the Card games section heading
  nav_learning_tools: { en: "Learning tools" }, // also the Learning tools section heading
  nav_about: { en: "About" },
  nav_contact: { en: "Contact" },

  // ── Header ──
  // The headline is split in three so "played" can be coloured.
  hero_headline_start: { en: "Medication learning, " },
  hero_headline_highlight: { en: "played" },
  hero_headline_end: { en: " — not just memorised." },
  hero_subline: { en: "Hi, I’m Piret Paal. I qualified as a registered nurse in 2026, and before nursing I trained as a designer at the Estonian Academy of Arts. I’ve been building learning games and digital tools for nursing studies, from medications and ward routines to reflective learning. Here you can try them out as they are now: working prototypes that I keep developing." },
  hero_btn_games: { en: "Play the games" },
  hero_btn_tools: { en: "See the learning tools" },
  why_carousel_label: { en: "Why this matters", fi: "Miksi tämä on tärkeää" }, // label on quote slides, followed by "· 1 / 4" counter
  why_sources_label: { en: "Sources", fi: "Lähteet" },  // label on the 4th slide (all three references)

  // ── Section headings ──
  scenario_heading: { en: "Scenario games" },
  scenario_subtitle: { en: "Story-based prototypes · play in your browser, no account" },
  card_games_subtitle: { en: "Quick drills for linking drugs, indications and drug classes" },
  learning_tools_subtitle: { en: "Working apps for everyday studying and placements" },

  // ── Not shown in the current design (kept, with their Finnish, in case they return) ──
  // hero_name, hero_tagline, why_heading,
  // hero_eyebrow (the old "Clinical Games" menu name, replaced by the wordmark)
  hero_eyebrow: { en: "Clinical Games" },
  hero_name: { en: "Piret Paal" },
  hero_tagline: {
    en: "A portfolio of learning games and digital tools designed to make medication learning and nursing studies a little easier and more fun.",
    fi: "Portfolio oppimispeleistä ja digitaalisista työkaluista, jotka tekevät lääkehoidon ja hoitotyön opiskelusta hieman helpompaa ja hauskempaa."
  },

  // ── Game & tool sections ──
  // Names are proper nouns: same in both languages.
  farmarush_name: { en: "FarmaRush" },
  myday_name: { en: "MyDay" },
  medichain_name: { en: "MediChain" },
  medilink_name: { en: "MediLink" },
  farmadiary_name: { en: "FarmaDiary" },
  pleksusdiaries_name: { en: "PleksusDiaries" },
  farmadiary_label: { en: "Learning tool · EN" },
  pleksusdiaries_label: { en: "Learning tool · EN/FI" },

  // Image alt text (screen readers / image descriptions)
  farmarush_img_alt: { en: "FarmaRush promo illustration: pharmacy chute, medicine shelves, and a nurse on shift" },
  myday_img_alt: { en: "MyDay nurse illustration with a medication checklist and ward supply cart" },
  medichain_img_alt: { en: "MediChain illustration: linking medicine cards by indication and drug class" },
  medilink_img_alt: { en: "MediLink illustration: chain-link logo and card-matching gameplay" },
  farmadiary_img_alt: { en: "FarmaDiary promo illustration: digital medicine notebook with quiz cards and progress dashboard" },
  pleksusdiaries_img_alt: { en: "PleksusDiaries landing page: 'Where everything you learn connects' with Write as you go, See what you know, and Think it through feature cards" },

  myday_desc: {
    en: "A day in the life of a nursing student on a cardiology ward — from morning handover to medication rounds to end-of-shift documentation. Built to capture the rhythm of a real shift, one room at a time.",
    fi: "Päivä sairaanhoitajaopiskelijana kardiologian osastolla — aamuraportista lääkkeiden jakoon ja työvuoron päättävään kirjaamiseen. Peli etenee aidon työvuoron tavoin, yksi tehtävä kerrallaan."
  },
  farmarush_desc: {
    en: "Medication requests arrive from hospital wards, one shift at a time. Catch the right drugs before they're dispatched — work fast, but don't let the wrong medication through.",
    fi: "Eri osastoilta saapuu työvuoron aikana lääketilauksia. Kerää oikeat lääkkeet mahdollisimman nopeasti, mutta vältä vääriä valintoja."
  },
  medichain_desc: {
    en: "Build the longest possible medicine chain by linking drugs that share an indication or drug class. A quick, focused way to test how well those connections actually stick.",
    fi: "Rakenna mahdollisimman pitkä lääkeketju yhdistämällä lääkkeitä, joilla on sama käyttöaihe tai lääkeryhmä. Nopea tapa testata, miten hyvin lääkkeet ovat jääneet mieleen."
  },
  medilink_desc: {
    en: "Match medicines to their active ingredients, indications, and drug classes — link by link. Built to reinforce the kind of pattern-recognition real prescribing depends on.",
    fi: "Yhdistä lääkkeet niiden vaikuttaviin aineisiin, käyttöaiheisiin ja lääkeryhmiin kortti kerrallaan. Peli auttaa hahmottamaan lääketiedon kokonaisuuksia ja eri käsitteiden välisiä yhteyksiä."
  },
  play_now: { en: "Play now →", fi: "Pelaa →" },
  game_label_1: { en: "Game 01 · FI/EN", fi: "Peli 01 · FI/EN" },
  game_label_2: { en: "Game 02 · EN", fi: "Peli 02 · EN" },
  game_label_3: { en: "Game 03 · FI", fi: "Peli 03 · FI" },
  game_label_4: { en: "Game 04 · FI", fi: "Peli 04 · FI" },

  // ── Why ──
  why_heading: { en: "Why", fi: "Miksi" },
  why1_statement: {
    en: "“Over half of surveyed nurses have caused a medication-related safety incident; half have given medicines without knowing their effects.”",
    fi: "“Yli puolet tutkimukseen osallistuneet sairaanhoitajista ovat joskus aiheuttanut potilaalle lääkehoidon virheen takia vaaratilanteen ja puolet ovat antaneet lääkkeitä, joiden vaikutuksia he eivät tietäneet.”"
  },
  why1_citation: { en: "Luokkamäki et al., 2016", fi: "Luokkamäki ym. 2016" },
  why2_statement: {
    en: "“Nursing students often see pharmacology as a ‘necessary evil’ rather than essential knowledge.”",
    fi: "“Tutkimuksen mukaan sairaanhoitajaopiskelijat ajattelevat farmakologiakurssin \"pakollisena pahana\" sen sijaan, että sen sisältö olisi tärkeä hallita.”"
  },
  why2_citation: { en: "Mauldin, 2023", fi: "Mauldin 2023" },
  why3_statement: {
    en: "“Online and gamified methods are among the most effective ways to teach pharmacology.”",
    fi: "“Vuonna 2019 tehdyn tutkimuksen mukaan on todettu online-menetelmien olevan yksi parhaimpia tapoja farmakologian opettamisessa opiskelijatyytyväisyyden ja tiedon hankinnan kannalta.”"
  },
  why3_citation: { en: "Gill et al., 2019", fi: "Gill ym. 2019" },

  // Full references below the cards (same in both languages)
  ref_gill: { en: "Gill, Manu & Andersen, Elizabeth & Hilsmann, Norma. 2019. Best practices for teaching pharmacology to undergraduate nursing students: A systematic review of the literature." },
  ref_luokkamaki: { en: "Luokkamäki, Sanna & Vehviläinen-Julkunen, Katri & Saano, Susanna & Härkänen, Marja 2016. “Sairaanhoitajien lääkehoidon osaaminen heidän itsensä arvioimana”, Tutkiva Hoitotyö, vol. 14, no. 2, pp. 23–32." },
  ref_mauldin: { en: "Mauldin, Betsy 2023. Bringing Clinical Context to the Classroom in Nursing Pharmacology: A Case Study." },

  // ── FarmaDiary & PleksusDiaries ──
  farmadiary_desc: {
    en: "A personal medicine notebook — log the drugs you encounter on placement, quiz yourself on what you've logged, and watch your own knowledge base grow shift by shift.",
    fi: "Henkilökohtainen lääkepäiväkirja, johon kirjaat opinnoissa ja harjoitteluissa kohtaamasi lääkkeet. Testaa osaamistasi omiin merkintöihisi perustuvilla kysymyksillä ja seuraa, miten osaamisesi kehittyy ajan myötä."
  },
  farmadiary_cta: { en: "Visit FarmaDiary →" },

  pleksusdiaries_desc: {
    en: "A personal learning diary for nursing students. Write down what you learn in your studies and placements and tag the topics behind it. Think about how different topics connect with each other. All your entries and topics are easy to find again later.",
    fi: "Henkilökohtainen oppimispäiväkirja hoitotyön opiskelijoille. Kirjaa päiväkirjaan, mitä opit koulussa ja harjoittelussa, ja liitä merkintöihin käsiteltyt teemat. Pohdi, miten eri teemat liittyvät toisiinsa. Kaikki merkinnät ja teemat löytyvät myöhemmin helposti."
  },
  pleksusdiaries_cta: { en: "Visit PleksusDiaries →" },

  // ── About Me ──
  about_heading: { en: "About Me", fi: "Minusta" },
  about_text_1: {
    en: "I’m a newly registered nurse with a particular interest in cardiology and pharmacology. Before nursing, I trained as a fashion designer at the Estonian Academy of Arts and worked as a software specialist for fashion design and production tools across Northern Europe.",
    fi: "Olen sairaanhoitajaopiskelija ja erikoisaloista minua kiinnostavat erityisesti kardiologia ja farmakologia. Ennen hoitoalalle siirtymistä kouluttauduin vaatesuunnittelijaksi Eesti Kunstiakademiassa ja työskentelin muotiin liittyvien suunnitteluohjelmistojen parissa Pohjoismaissa."
  },
  // Paragraph 2 is split in three so "bachelor’s thesis" can be a link (the <a> is in index.html).
  // FI: the whole existing Finnish paragraph 2 sits in about_text_2a; the link and after-link parts
  // are empty in FI, so FI mode shows the old Finnish paragraph unchanged (no link yet).
  about_text_2a: {
    en: "Somewhere along the way, design and healthcare started to overlap. Before nursing, I worked with researchers at the University of Helsinki on a service for parents of young children. In 2023 I began my nursing studies at Metropolia University of Applied Sciences, and in 2025 my co-authored ",
    fi: "Jossain vaiheessa muotoilu ja terveydenhuolto alkoivat luontevasti yhdistyä tekemisessäni. Olen esimerkiksi työskennellyt Helsingin yliopiston tutkijoiden kanssa palvelun parissa, joka tukee vanhempia varhaislapsuuden haasteissa. Vuonna 2025 opinnäytetyöni käsitteli aihetta, miten sairaanhoitajaopiskelijat opiskelevat lääkehoitoa ja miten sitä kannattaisi opettaa. Opinnäytetyössä totesimme, että farmakologiaa on vaikea opettaa, ja vielä vaikeampaa on opiskelijan saada opittu tieto jäämään mieleen."
  },
  about_text_2_link: { en: "bachelor’s thesis", fi: "" },
  about_text_2_link_hint: { en: "PDF, opens in a new tab", fi: "" }, // screen-reader description of the link
  about_text_2b: {
    en: " looked at medication safety among student nurses. We found what research keeps finding: pharmacology is hard to teach, and harder to make stick.",
    fi: ""
  },
  about_text_3: {
    en: "That’s what led me here. I started experimenting with AI coding tools to make pharmacology, and nursing studies more broadly, easier and more fun to learn. I have built a few games and digital tools that help students, and nurses too, learn medicines, understand life on a ward, and reflect on how different nursing concepts connect. Try them out above, and tell me what you think!",
    fi: "Inspiroituin opinnäytetyöstäni ja aloin rakentamaan pelejä ja digitaalisia oppimistyökaluja aluksi vain itselleni, helpottaakseni omaa oppimistani. Kokeilin niin sanottua vibe coding -työskentelyä ja kehitin erilaisten aiheiden ympärille pelillisiä ideoita. Tällä sivulla pääset tutustumaan kehittämiini oppimispeleihin. Jokainen peli on tässä vaiheessa vielä prototyyppi, ei valmis tuote. Ne ovat yrityksiä tehdä farmakologiasta hieman vähemmän abstraktia ja helpommin muistettavaa sairaanhoitajaopiskelijoille."
  },

  // ── Contact ──
  contact_heading: { en: "Contact", fi: "Ota yhteyttä" },
  contact_intro: {
    en: "Interested in developing nurse training together? I’d love to hear from you.",
    fi: "Haluaisitko kehittää sairaanhoitajien koulutusta yhdessä? Kuulisin sinusta mielelläni."
  },
  label_name: { en: "Name", fi: "Nimi" },
  label_email: { en: "Email", fi: "Sähköposti" },
  label_message: { en: "Message", fi: "Viesti" },
  submit_btn: { en: "Send message", fi: "Lähetä" },
  contact_success: { en: "Thank you for contacting me. I will get back to you soon.", fi: "Kiitos yhteydenotostasi. Vastaan sinulle pian" },
  contact_error: { en: "Something went wrong — please try again, or reach out directly." },

  // ── Footer ──
  footer: { en: "© 2026 Piret Paal" }
};
