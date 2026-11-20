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
  // ── Browser tab title (follows the EN/FI toggle) ──
  // The static <title> in index.html is the Finnish one, for search engines.
  page_title: {
    en: "clinicalgames: learning games and tools for nursing studies",
    fi: "clinicalgames: oppimispelejä ja -sovelluksia hoitotyön opiskeluun"
  },

  // ── Top menu ──
  // Wordmark "clinicalgames" at the left of the menu: one word, two colours.
  // A logo, not translated — same text in EN and FI.
  wordmark_clinical: { en: "clinical" },
  wordmark_games: { en: "games" },
  // Menu links have their own keys (separate from the section headings).
  nav_games: { en: "Games", fi: "Pelit" },          // → Scenario games (Card games follows below)
  nav_tools: { en: "Tools", fi: "Sovellukset" },    // → Learning tools
  nav_about: { en: "About", fi: "Minusta" },
  nav_contact: { en: "Contact", fi: "Ota yhteyttä" },

  // ── Header ──
  // The headline is split in three so "played" can be coloured.
  hero_headline_start: { en: "Medication learning, " },
  hero_headline_highlight: { en: "played" },
  hero_headline_end: { en: " — not just memorised." },
  hero_subline: { en: "Hi, I’m Piret Paal. I qualified as a registered nurse in 2026, and before nursing I trained as a designer at the Estonian Academy of Arts. I’ve been building learning games and digital tools for nursing studies, from medications and ward routines to reflective learning. Here you can try them out as they are now: working prototypes that I keep developing." },
  hero_btn_games: { en: "Play the games", fi: "Pelaa pelejä" },
  hero_btn_tools: { en: "See the learning tools", fi: "Tutustu sovelluksiin" },
  why_carousel_label: { en: "Why this matters", fi: "Miksi tämä on tärkeää" }, // label on quote slides, followed by "· 1 / 4" counter
  why_sources_label: { en: "Sources", fi: "Lähteet" },  // label on the 4th slide (all three references)

  // ── Section headings ──
  scenario_heading: { en: "Scenario games", fi: "Sairaalapelit" },
  card_games_heading: { en: "Card games", fi: "Korttipelit" },
  learning_tools_heading: { en: "Learning tools", fi: "Oppimissovellukset" },
  scenario_subtitle: { en: "Step into a nursing shift · no account needed", fi: "Astu sairaanhoitajan työvuoroon · ilman kirjautumista" },
  card_games_subtitle: { en: "Link medicines, indications and drug classes · no account needed", fi: "Yhdistä lääkkeet, käyttöaiheet ja lääkeryhmät · ilman kirjautumista" },
  learning_tools_subtitle: { en: "Apps for everyday studying and clinical placements", fi: "Sovelluksia opiskeluun ja kliinisiin harjoitteluihin" },

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
  farmadiary_label: { en: "Learning tool · EN", fi: "Oppimissovellus · EN" },
  pleksusdiaries_label: { en: "Learning tool · EN/FI", fi: "Oppimissovellus · EN/FI" },

  // Image alt text (screen readers / image descriptions)
  farmarush_img_alt: { en: "FarmaRush promo illustration: pharmacy chute, medicine shelves, and a nurse on shift" },
  myday_img_alt: { en: "MyDay nurse illustration with a medication checklist and ward supply cart" },
  medichain_img_alt: { en: "MediChain illustration: linking medicine cards by indication and drug class" },
  medilink_img_alt: { en: "MediLink illustration: chain-link logo and card-matching gameplay" },
  farmadiary_img_alt: { en: "FarmaDiary promo illustration: digital medicine notebook with quiz cards and progress dashboard" },
  pleksusdiaries_img_alt: { en: "PleksusDiaries landing page: 'Where everything you learn connects' with Write as you go, See what you know, and Think it through feature cards" },

  myday_desc: {
    en: "Curious what a day on a cardiology ward is really like? Test out ward life before your first placement! Practise the ISBAR handover and the medication task, and explore the game’s own patient record system. More tasks coming soon.",
    fi: "Millainen on päivä kardiologian osastolla? Harjoittele ISBAR-raportointia ja lääkehoidon tehtävää ja tutustu pelin omaan potilastietojärjestelmään ennen ensimmäistä harjoitteluasi. Uusia tehtäviä on tulossa pian."
  },
  farmarush_desc: {
    en: "Medication requests arrive from hospital wards, one shift at a time. Catch the right medicines as fast as you can, but watch out for the wrong ones.",
    fi: "Eri osastot lähettävät työvuoron aikana lääketilauksia. Nappaa oikeat lääkkeet nopeasti, mutta varo, ettei mukaan tartu vääriä lääkkeitä."
  },
  medichain_desc: {
    en: "Build the longest possible medicine chain by linking medicines that share an indication or drug class. A quick and focused way to learn how medicines connect and test your own knowledge.",
    fi: "Rakenna mahdollisimman pitkä lääkeketju yhdistämällä lääkkeitä, joilla on sama käyttöaihe tai lääkeryhmä. Nopea ja keskittynyt tapa oppia lääkkeistä ja testata omaa osaamistasi."
  },
  medilink_desc: {
    en: "Match medicines to their active ingredients, indications, and drug classes — link by link. A quick way to check what you know about each medicine, and learn what you don’t.",
    fi: "Yhdistä lääkkeet niiden vaikuttaviin aineisiin, käyttöaiheisiin ja lääkeryhmiin kortti kerrallaan. Nopea tapa tarkistaa, mitä tiedät mistäkin lääkkeestä, ja oppia uutta."
  },
  play_now: { en: "Play now →", fi: "Pelaa →" },
  new_tab_hint: { en: "opens in a new tab", fi: "avautuu uuteen välilehteen" }, // screen-reader hint on the four Play now links
  game_label_1: { en: "Game · FI/EN", fi: "Peli · FI/EN" },
  game_label_2: { en: "Game · EN", fi: "Peli · EN" },
  game_label_3: { en: "Game · FI", fi: "Peli · FI" },
  game_label_4: { en: "Game · FI", fi: "Peli · FI" },

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
    en: "A personal medicine notebook — log the medicines you encounter on placement, quiz yourself on what you’ve logged, and watch your own knowledge base grow. Try out FarmaDiary without an account to see how it works!",
    fi: "Henkilökohtainen lääkepäiväkirja, johon kirjaat opinnoissa ja harjoitteluissa kohtaamasi lääkkeet. Testaa osaamistasi omiin merkintöihisi perustuvilla kysymyksillä ja seuraa, miten osaamisesi kehittyy ajan myötä. Kokeile FarmaDiarya kirjautumatta!"
  },
  farmadiary_cta: { en: "Visit FarmaDiary →", fi: "Avaa FarmaDiary →" },

  pleksusdiaries_desc: {
    en: "A personal learning diary for nursing students. Write down what you learn in your studies and placements and tag the topics behind it. Think about how the topics connect, and let PleksusDiaries turn your connections into a mind map.",
    fi: "Henkilökohtainen oppimispäiväkirja hoitotyön opiskelijoille. Kirjaa päiväkirjaan, mitä opit koulussa ja harjoittelussa, ja liitä merkintöihin käsitellyt teemat. Pohdi, miten teemat liittyvät toisiinsa, ja anna PleksusDiary:lla koota yhteyksistäsi ajatuskartta."
  },
  pleksusdiaries_cta: { en: "Visit PleksusDiaries →", fi: "Avaa PleksusDiaries →" },

  // ── About Me ──
  about_heading: { en: "About Me", fi: "Minusta" },
  about_text_1: {
    en: "I’m a newly registered nurse with a particular interest in cardiology and pharmacology. Before nursing, I trained as a fashion designer at the Estonian Academy of Arts and worked as a software specialist for fashion design and production tools across Northern Europe.",
    fi: "Olen vastavalmistunut sairaanhoitaja. Erikoisaloista minua kiinnostavat erityisesti kardiologia ja farmakologia. Ennen hoitoalalle siirtymistä kouluttauduin vaatesuunnittelijaksi Eesti Kunstiakademiassa ja työskentelin muotisuunnittelun ja tuotannon ohjelmistojen asiantuntijana Pohjois-Euroopassa."
  },
  // Paragraph 2 is split in three so the thesis words can be a link (the <a> is in index.html):
  // text before the link (ends with a space) + link text + text after the link (starts with a space).
  about_text_2a: {
    en: "Somewhere along the way, design and healthcare started to overlap. Before I started my nursing studies, I worked with researchers at the University of Helsinki on a service that supported parents of young children. In 2023 I began my nursing studies at Metropolia University of Applied Sciences, and in 2025 my co-authored ",
    fi: "Ajan myötä muotoilu ja terveydenhuolto alkoivat kulkea tekemisessäni käsi kädessä. Ennen kuin lähdin opiskelemaan hoitoalaa, työskentelin Helsingin yliopiston tutkijoiden kanssa palvelun parissa, joka tuki pienten lasten vanhempia. Aloitin sairaanhoitajaopinnot Metropolia Ammattikorkeakoulussa vuonna 2023, ja vuonna 2025 tekemämme "
  },
  about_text_2_link: { en: "bachelor’s thesis", fi: "opinnäytetyö" },
  about_text_2_link_hint: { en: "PDF, opens in a new tab", fi: "PDF, avautuu uuteen välilehteen" }, // screen-reader description of the link
  about_text_2b: {
    en: " looked at how pharmacology is taught to student nurses, why it feels so hard to learn, and how teaching could be improved. We found what research keeps finding: pharmacology is hard to teach, and harder to make stick.",
    fi: " tarkasteli, miten farmakologiaa opetetaan sairaanhoitajaopiskelijoille, miksi sen oppiminen koetaan vaikeaksi ja miten opetusta voisi kehittää. Totesimme saman kuin tutkimukset yleensäkin: farmakologiaa on vaikea opettaa, ja vielä vaikeampaa on saada opittu jäämään mieleen."
  },
  about_text_3: {
    en: "Later, on a clinical placement, I noticed that my own medication learning wasn’t systematic enough. Around the same time, friends told me how you can build apps and websites with AI coding tools. I started exploring whether I could use them to bring more structure to my learning, and to make pharmacology, and nursing studies more broadly, easier and more fun to learn. I have built a few games and digital tools that help students, and nurses too, learn medicines, understand life on a ward, and reflect on how different nursing concepts connect. Try them out above, and tell me what you think!",
    fi: "Myöhemmin harjoittelussa huomasin, ettei lääkehoidon opiskeluni ollut tarpeeksi järjestelmällistä. Samoihin aikoihin kuulin ystäviltäni, miten tekoälyn avulla voi rakentaa sovelluksia ja verkkosivuja. Aloin kokeilla, voisinko kehittää itselleni oppimisvälineitä, jotka auttaisivat minua oppimaan lisää lääkkeistä ja tekisivät farmakologian ja laajemminkin hoitotyön opiskelusta helpompaa ja hauskempaa. Näistä kokeiluista on syntynyt muutamia pelejä ja digitaalisia työkaluja, jotka auttavat opiskelijoita, ja miksei myös valmistuneita sairaanhoitajia, oppimaan farmakologiaa, ymmärtämään osastotyön arkea ja pohtimaan, miten hoitotyön eri käsitteet liittyvät toisiinsa. Kokeile niitä tällä sivulla ja kerro, mitä mieltä olet!"
  },

  // ── Contact ──
  contact_heading: { en: "Contact", fi: "Ota yhteyttä" },
  contact_intro: {
    en: "Teaching nursing, developing training, or just tried one of the games? I’d love to hear from you.",
    fi: "Opetatko hoitotyötä, kehitätkö koulutusta tai kokeilitko jotain peleistä? Kuulisin sinusta mielelläni."
  },
  label_name: { en: "Name", fi: "Nimi" },
  label_email: { en: "Email", fi: "Sähköposti" },
  label_message: { en: "Message", fi: "Viesti" },
  submit_btn: { en: "Send message", fi: "Lähetä" },
  contact_success: { en: "Thank you for contacting me. I will get back to you soon.", fi: "Kiitos yhteydenotostasi. Vastaan sinulle pian" },
  contact_error: { en: "Something went wrong — please try again in a moment.", fi: "Jokin meni pieleen — yritä hetken päästä uudelleen." },

  // ── Footer ──
  footer: { en: "© 2026 Piret Paal" }
};
