# Learning Curve Approach: verktygen på boost.mickla.se

Arbetsbeskrivning för den som utvecklar verktygen vidare, människa eller Claude.

## Sammanhang

- Verktygen stödjer The Learning Curve Approach (Sense, See, Shift) i projektet Smart Built Boost (Smart Built Environment).
- Upphov: Dan Engström, Engströms Mickla AB. Dan äger allt innehåll; Claude föreslår, Dan beslutar.
- Tjänsten heter **Dialogverktyg -- Learning Curve Approach** (Dans namnval, även i rubriker). Modulerna heter Sense, See och Shift.
- **See** (självskattning av mottagningsförmåga och agency, tidigare kallad Dialogverktyget) ligger i `see/`.
- Micklas logotyp (`img/mickla.png`, ormen) visas diskret i sidfoten på alla sidor och i PDF-rapportens sidfot.
- Landningssidan ligger i roten och länkar till modulerna. Byggordning: See (klar), landningssida, Sense, Shift, slutsida.
- Modulerna ska kunna köras i valfri ordning och var för sig, och ge en egen rapport. Körs alla tre i rätt ordning ger slutsidan en samlad analys med slutrekommendationer.

## Fasta principer

- Allt på svenska. Inga tankstreck (varken — eller – som skiljetecken) i texter som skrivs nya.
- Ingen data lämnar besökarens webbläsare: ingen server, ingen statistik, inga cookies, inga externa typsnitt eller CDN. Bibliotek läggs i `vendor/`.
- Statisk sida på GitHub Pages (arkivet DrDanEng/boost, gren `main`, domänen boost.mickla.se via filen `CNAME`).
- Allt innehåll ligger i en innehållsfil (`js/content.js`), inte i koden, så att Dan kan redigera texter själv.
- Upphovsrad: "© Engströms Mickla AB 2026". Raden om Smart Built Environment och Formas läggs till först när finansieringen är beslutad.
- Verktygen är dialogverktyg, inte mätinstrument. Inga psykometriska anspråk.
- Publicera aldrig till `main` utan att Dan har sagt "publicera". Förslag läggs i en egen gren.
- Versionsnummer i `boost.version` i innehållsfilen räknas upp vid varje publicering och syns i sidfoten och i rapporterna.

## Grundperspektiv: absorptionsförmåga, inte implementering

LCA v2 bygger på Mats Freds forskning (Fred & Mukhtar-Landgren 2022): när externt finansierade projekt möter ordinarie verksamhet är problemet sällan resultaten, utan att mottagaren saknar förmåga, mandat och vilja att absorbera dem. Kunskap överförs inte från A till B; den översätts, tolkas, anpassas och integreras. Därför bedöms mottagaren, inte projektet.

- **Sense** beskriver *vad* som ska tas emot: framtidskollisioner och scenario.
- **See** bedömer *förmågan att ta emot det*: förmåga, mandat och vilja.
- **Shift** riktar små tester mot den svagaste axeln i See och bygger momentum.
- **Slutrapporten** svarar på vad som behöver hända i den mottagande organisationen.
- Rohrbeck & Kum (2018) ger stöd för kedjan: *perceiving* och *prospecting* (Sense), *probing* (Shift). Framtidsberedskap är ett relativt mått: behov (Sense) mot förmåga (See). Den räknas fram i slutrapporten och skattas inte separat.

## Beslut om modulerna (2026-10-10)

### Sense (Collision Compass, generaliserad)
- Skrivs om för en verksamhet i allmänhet, inte en fastighet. Strukturen med övningarna behålls.
- Nytt skede 0, *Välj fokus*: en krysslista med vanliga utmaningar, grundad i litteratur och branschagendor. Valen styr vilka områden som föreslås i skede 1.
- Skede 1 och 2 (signaler och trender; påverkan mot sannolikhet) behålls.
- Skede 3 (påverkansmatrisen, Vester/MICMAC) förenklas: verktyget föreslår fem trender utifrån skede 2 (högst påverkan och osäkerhet), gruppen kan byta. Därefter en fråga i taget ("Om A tar fart, hur mycket driver det B?", 0 till 3), 20 frågor. Verktyget räknar aktiv och passiv summa, ritar fyra fält (drivande, kritiska, påverkade, buffrande) och skriver en regelstyrd förklaring. Inget AI-stöd.
- Övningarna om värden (5 till 7) skrivs om till verksamhetens värden.
- Sista skedet är **Collision Map**: 1 till 3 prioriterade kollisioner, var och en med *tryck*, *tempo* (mot beslutshorisonten), *synlighet* (hur mycket den redan uppmärksammas) och *utmanat antagande* (Dewar, assumption-based planning). Elasticitet tas bort, eftersom inre förmåga bedöms i See.
- Hela processen ingår. Används i grupp med Dan som facilitator, gärna i Teams med delad skärm.

### See
- Ligger i `see/`. Tolv förmågor (elva blev tolv när agency lades till).
- Den separata självskattningen av framtidsberedskap från v1.0 utgår.

### Shift (process, inte frågebatteri)
- Tre steg: *riktning* (Learning Direction Canvas), *första test* (testkort), *återkoppling* (lärkort). Körningen sparas och öppnas igen vid varje cykel.
- Testtyp föreslås från svagaste axeln i See (COM-B): svag förmåga ger tester som bygger kunskap, svagt mandat tester som ändrar förutsättningar och tillåtelse, svag vilja tester som gör nyttan synlig.
- Testkortet: koppling till lärandefrågan, om-då-hypotes med när och var (Gollwitzer & Sheeran 2006), förutsägelse före testet, få och enkla mått för förbättring, inte redovisning (Solberg m.fl. 1997; Reed & Card 2016).
- Lärkortet: vad hände, jämfört med förutsägelsen, beslut (fortsätt, justera, skala, avbryt) och obligatoriskt *nästa lilla test* (Weick 1984; Amabile & Kramer 2011).
- Tid: första testet startas inom en vecka (IHI). Lärperiod om fyra veckor med 2 till 3 cykler om 1 till 2 veckor, avslutas med gemensam återkoppling där Learning Direction Canvas uppdateras.
- Grund för korten: test card och learning card (Bland & Osterwalder 2019), Trim Tab Canvas.

## Struktur för flera moduler

- Landningssidan ligger i roten: `index.html`, `js/app.js`, `js/content.js`.
- Modulerna ligger i egna mappar: `sense/`, `see/`, `shift/`, med egen `index.html`, `app.js` och `content.js`. Slutsidan läggs i `slut/`.
- Gemensamt: `css/style.css`, `vendor/` och `js/lca.js` (sparformatet).
- Alla moduler ligger på samma domän och delar webbläsarens lokala lagring. Nycklar: Sense `lca.sense.v1`, See `dialogverktyget.v1`, Shift `lca.shift.v1`, överlämning mellan sidor `lca.overlamning`.

## Gemensamt sparformat (`js/lca.js`)

```
{
  "lca": 1,
  "modul": "sense" | "see" | "shift",
  "version": "…", "skapad": "…", "andrad": "…",
  "organisation": { "namn": "", "typ": "grupp|individ", "deltagare": "" },
  "data":   { … },   // modulens egen körning
  "lamnar": { … },   // det modulen lämnar vidare, fast format
  "kedja":  { "sense": {…}, "see": {…} }   // tidigare modulers lamnar
}
```

- **Sense lämnar:** `scenario {namn, text}`, `kollisioner [{namn, tryck, tempo, synlighet, antagande}]`, `fokus []`, `robustaAtgarder []`.
- **See lämnar:** `scenario`, `index`, `form`, `omdome`, `valda [{id, namn, niva, axlar {formaga, mandat, vilja, tilltro}, svagastAxel [], beslut, atgard}]`, `styrka`, `egnaAtgarder`.
- **Shift lämnar:** `riktning [lärandefrågor]`, `tester [{testkort, larkort}]`.
- Varje modul läser vilken tidigare fil som helst. Saknas underlag frågar modulen kort efter det, och rapporten anger vad som saknats.
- Gamla sparfiler från See (`app: "dialogverktyget"`, utan kuvert) läses fortfarande.
- Slutsidan behöver bara den sista filen i kedjan, eftersom `kedja` bär med sig allt tidigare.

## Formgivning

- Färger och typsnitt finns som variabler i `css/style.css` (papper `#f6f4ef`, grön accent `#2f6b5e`, svaghet `#b8532c`, styrka `#a57a12`, serif i rubriker, systemets sans-serif i brödtext).
- Ett steg per skärm, tydlig Nästa och Tillbaka, fungerar på telefon.
- PDF-rapport skapas med jsPDF och svg2pdf i `vendor/`.

## See i korthet

- Tolv förmågor i fyra fält: Upptäcka, Välja, Pröva, Förändra (`boost.kvadranter`). Skala 0 till 4 med halvsteg.
- Gränsvärden 1,8 / 2,6 / 3,2 för rekommendationer och åtgärdsförslag.
- De 2 till 3 lägst skattade förmågorna föreslås; gruppen kan byta med motivering. En tydlig styrka lyfts fram om den ligger minst 1,0 över medianen och är minst lika stor som dippen.
- För valda förmågor: mandat (formellt och upplevt), vilja och tilltro på skala 1 till 5. Den svagaste axeln styr riktningen för Shift.
- Beslut per förmåga: Ja, Fortsätt, Utred, Vänta, Nej. Vänta och Nej får automatiska tillägg.
- Forskningsunderlag: se historiken i chatterna i projektet "Learning Curve Approach"; viktigast är Fred & Mukhtar-Landgren 2022, Weiner 2009, Michie m.fl. 2011 (COM-B), Blumberg & Pringle 1982, Zahra & George 2002, Teece 2007, Eriksson 2013 och Jacobsson & Linderoth 2026.

## Test

Kör hela flödet i en webbläsare (Playwright med Chromium finns i molnmiljön) innan något föreslås för publicering, både i datorstorlek och telefonstorlek, och kontrollera PDF-rapporten.
