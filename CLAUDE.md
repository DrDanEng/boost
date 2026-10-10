# Learning Curve Approach: verktygen på boost.mickla.se

Arbetsbeskrivning för den som utvecklar verktygen vidare, människa eller Claude.

## Sammanhang

- Verktygen stödjer The Learning Curve Approach (Sense, See, Shift) i projektet Smart Built Boost (Smart Built Environment).
- Upphov: Dan Engström, Engströms Mickla AB. Dan äger allt innehåll; Claude föreslår, Dan beslutar.
- **See** är modulen *Dialogverktyget* (självskattning av mottagningsförmåga och agency). Den ligger i roten av arkivet.
- **Sense** och **Shift** utvecklas som egna moduler och ska länkas till See.

## Fasta principer

- Allt på svenska. Inga tankstreck (varken — eller – som skiljetecken) i texter som skrivs nya.
- Ingen data lämnar besökarens webbläsare: ingen server, ingen statistik, inga cookies, inga externa typsnitt eller CDN. Bibliotek läggs i `vendor/`.
- Statisk sida på GitHub Pages (arkivet DrDanEng/boost, gren `main`, domänen boost.mickla.se via filen `CNAME`).
- Allt innehåll ligger i en innehållsfil (`js/content.js`), inte i koden, så att Dan kan redigera texter själv.
- Upphovsrad: "© Engströms Mickla AB 2026". Raden om Smart Built Environment och Formas läggs till först när finansieringen är beslutad.
- Verktygen är dialogverktyg, inte mätinstrument. Inga psykometriska anspråk.
- Publicera aldrig till `main` utan att Dan har sagt "publicera". Förslag läggs i en egen gren.
- Versionsnummer i `boost.version` i innehållsfilen räknas upp vid varje publicering och syns i sidfoten och i rapporterna.

## Struktur för flera moduler

- See ligger i roten: `index.html`, `js/app.js`, `js/content.js`, `css/style.css`.
- Nya moduler läggs i egna mappar: `sense/` och `shift/`, med egen `index.html`, `app.js` och `content.js`, men samma `css/style.css` och samma `vendor/`.
- Alla moduler ligger på samma domän och delar därför webbläsarens lokala lagring. Använd egna nycklar per modul (See använder `dialogverktyget.v1`).
- Överföring mellan moduler sker via sparfiler (JSON) eller den lokala lagringen:
  - Sense ska kunna lämna ett scenario (namn och beskrivning) som See läser in i fälten `meta.scenarioNamn` och `meta.scenarioText`.
  - Shift ska kunna läsa in en sparfil från See: valda förmågor, svagaste axel per förmåga, beslut och åtgärdsförslag, och använda det för att designa experimentet.

## Formgivning

- Färger och typsnitt finns som variabler i `css/style.css` (papper `#f6f4ef`, grön accent `#2f6b5e`, svaghet `#b8532c`, styrka `#a57a12`, serif i rubriker, systemets sans-serif i brödtext).
- Ett steg per skärm, tydlig Nästa och Tillbaka, fungerar på telefon.
- PDF-rapport skapas med jsPDF och svg2pdf i `vendor/`.

## Dialogverktyget (See) i korthet

- Tolv förmågor i fyra fält: Upptäcka, Välja, Pröva, Förändra (`boost.kvadranter`). Skala 0 till 4 med halvsteg.
- Gränsvärden 1,8 / 2,6 / 3,2 för rekommendationer och åtgärdsförslag.
- De 2 till 3 lägst skattade förmågorna föreslås; gruppen kan byta med motivering. En tydlig styrka lyfts fram om den ligger minst 1,0 över medianen och är minst lika stor som dippen.
- För valda förmågor: mandat (formellt och upplevt), vilja och tilltro på skala 1 till 5. Den svagaste axeln styr riktningen för Shift.
- Beslut per förmåga: Ja, Fortsätt, Utred, Vänta, Nej. Vänta och Nej får automatiska tillägg.
- Forskningsunderlag: se historiken i chatten "Learning Curve Approach" i Dans projekt; viktigast är Weiner 2009, Michie m.fl. 2011 (COM-B), Blumberg & Pringle 1982, Zahra & George 2002, Teece 2007, Eriksson 2013 och Jacobsson & Linderoth 2026.

## Test

Kör hela flödet i en webbläsare (Playwright med Chromium finns i molnmiljön) innan något föreslås för publicering, både i datorstorlek och telefonstorlek, och kontrollera PDF-rapporten.
