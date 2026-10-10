# Learning Curve Approach: verktygen på boost.mickla.se

Arbetsbeskrivning för den som utvecklar verktygen vidare, människa eller Claude.

## Sammanhang

- Verktygen stödjer The Learning Curve Approach (Sense, See, Shift) i projektet Smart Built Boost (Smart Built Environment).
- Upphov: Dan Engström, Engströms Mickla AB. Dan äger allt innehåll; Claude föreslår, Dan beslutar.
- Tjänsten heter **Dialogverktyg — Learning Curve Approach** (Dans namnval, även i rubriker; det långa tankstrecket i namnet är ett uttryckligt undantag från regeln om tankstreck). Modulerna heter Sense, See och Shift.
- **See** (självskattning av mottagningsförmåga och agency, tidigare kallad Dialogverktyget) ligger i `see/`.
- Micklas logotyp (`img/mickla.png`, ormen) visas diskret i sidfoten på alla sidor och i PDF-rapportens sidfot.
- Landningssidan ligger i roten och länkar till modulerna. Byggordning: See (klar), landningssida (klar), Sense (publicerad), Shift (version 0.1), slutsida (version 0.1).
- Modulerna ska kunna köras i valfri ordning och var för sig, och ge en egen rapport. Körs alla tre i rätt ordning ger slutsidan en samlad analys med slutrekommendationer.

## Fasta principer

- Allt på svenska. Inga tankstreck (varken — eller – som skiljetecken) i texter som skrivs nya.
- Ingen data lämnar besökarens webbläsare: ingen server, ingen statistik, inga cookies, inga externa typsnitt eller CDN. Bibliotek läggs i `vendor/`.
- Statisk sida på GitHub Pages (arkivet DrDanEng/boost, gren `main`, domänen boost.mickla.se via filen `CNAME`).
- Allt innehåll ligger i en innehållsfil (`js/content.js`), inte i koden, så att Dan kan redigera texter själv.
- Upphovsrad: "© Engströms Mickla AB 2026". Raden om Smart Built Environment och Formas läggs till först när finansieringen är beslutad.
- Verktygen är dialogverktyg, inte mätinstrument. Inga psykometriska anspråk.
- Publicera aldrig till `main` utan att Dan har sagt "publicera". Förslag läggs i en egen gren.
- Versionsnummer (`version` i varje innehållsfil) räknas upp vid varje publicering och syns i sidfoten och i rapporterna. Sedan 2026-10-10 heter alla moduler och hela verktyget "prototyp v0.1" (första testrundan med användare).

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
- Version 0.1 byggd i `sense/` (2026-10-10). Skede 2 sorterar trender i kritiska osäkerheter och förutbestämda element (Wack; Burt & Wright 2006). Skede 4: verktyget föreslår två axlar (mest drivande osäkra trender), gruppen väljer och motiverar vid byte; varningar för säker trend och för beroende axlar (svar 3 i matrisen). Fyra scenarier i ett 2×2-kors. Skede 5 bygger på affärsmodellens byggstenar med ett bärande antagande per del (Dewar). Skede 6 och 7 i förlagan är sammanslagna till vindtunneln (van der Heijden). Scenariot till See föreslås som det där kollisionerna är störst.
- Individuellt förarbete finns som alternativ (grupparbete är huvudspåret): deltagare gör skede 0 och 1 själva och sparar en fil; facilitatorn läser in filerna i skede 1, trender läggs till och dubbletter hoppas över. Deltagarnas fokusval slås inte ihop.
- Rapporten börjar, som i See, med en sammanfattning: fokusfråga, axlar, förutbestämda element, de fyra framtiderna och vad de betyder för verksamhetens värden, sårbarheter och styrkor, samt de viktigaste slutsatserna (kollisionerna och robusta åtgärder). Texterna ligger i `rapport.sammanfattning` i `sense/content.js`.
- Begrepp (Dans beslut): skede 5 heter *Det som bär verksamheten*; affärsmodellens byggstenar kallas **bärande delar**, var och en med ett **bärande antagande** (Dewar: load-bearing assumptions). Ordet "värden" används inte, eftersom det förväxlas med värderingar eller pengar. I vindtunneln bedöms *verksamhetens ställning* (försämras, står sig, förbättras).
- "Lärande och förnyelse" är struken ur skede 5 eftersom det är en förmåga som bedöms i See. Tio bärande delar.
- Version 0.2 (gren `sense-v0.2`): tre exempel per område (ett läggs in, fler hämtas som förslag), förklaring av siffrorna under diagrammen, och under Nästa visas vad som saknas för att gå vidare.
- Senare versioner: femtrendsvariant med max och min som tillval.

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

### Shift, version 0.1 (byggd 2026-10-10)
- Namn (Dans beslut att byta från strategyzers test card och learning card): **trimförsök** (planen) och **kursavläsning** (uppföljningen), i linje med trimroder-bilden.
- Filen hålls av en kontaktperson, eller av facilitatorn om gruppen har gemensamma avstämningar.
- Ett försök per lärandefråga från start, högst tre lärandefrågor.
- Efter varje försök skattas den axel som försöket riktades mot igen (1 till 5, samma skala som i See). Det ger rörelsen i mottagningsförmågan till slutrapporten.
- Perspektiv i kursavläsningen, grundade i litteraturen om lärandekurvor: effekt i vardagen (tid, kvalitet, energi, trivsel, intäkter, från Trim Tab Canvas), **lärdomens väg** (stannar hos oss, delad med kollegor, införd i rutin eller beslut; Zollo & Winter 2002: erfarenhet, artikulering, kodifiering), förutsägelse mot utfall, beslut och nästa lilla försök. Organisationer med samma erfarenhet lär i olika takt beroende på reflektion och delning (Pisano, Bohmer & Edmondson 2001; Edmondson m.fl. 2001). "Lärande" läggs därför inte till som ett sjätte effektvärde.
- Översikten visar försöken som kedjor per lärandefråga, **er lärandekurva** (kumulativt antal lärdomar, delade och införda) och rörelsen per axel.
- Steg: underlag (sparfil från See, eller två korta frågor om See och Sense saknas), Learning Direction Canvas (tryck och beredskap förifyllda, förslag på lärandefrågor ur kollision × förmåga × svagaste axel), kommunikationsram och stöd (inklusive vilket hinder ledningen tar bort; Edmondson 1999), första trimförsöket per fråga, översikt, kursavläsning, lärperiodens slut (pröva frågorna: behåll, justera, byt; Argyris & Schön 1978).

## Slutsidan, version 0.1 (byggd 2026-10-10)
- `slut/` visas bara när Sense, See och Shift är gjorda i följd (Shift-filen bär kedjan). Annars förklarar sidan vad som saknas; modulrapporterna räcker när en eller två faser är gjorda.
- Nås från Shift-rapporten (knapp när kedjan är hel), från startsidan och genom att öppna en Shift-sparfil. Senaste slutsida sparas i `lca.slut.v1`.
- **Framtidsberedskap** (Rohrbeck & Kum 2018, relativt mått): tryck från Sense (starkaste kollisionen; högt = tryck minst 4 och tempo högst 1 till 3 år; måttligt = tryck minst 4, eller minst 3 med tempo högst 3 till 10 år) mot förmåga från See (lärandeindex under 1,8 låg, under 2,6 måttlig, annars hög). Lägen: mer förberedd än trycket kräver, vaksam, sårbar, i fara.
- **Lärandekurvan** värderas med fyra tecken från Shift (0, 1 eller 2 vardera): uppföljda försök, rörelse i axlarna, lärdomarnas fäste (delade, införda), prövad riktning. Omdömen: för tidigt att säga (inga kursavläsningar), ni har börjat, ni är på väg uppför (minst 3), ni har tagit er uppför (minst 6). Positionen visas på en S-kurva från oro via insikt och rörelse till fäste.
- Följer den fasta rapportmallen; slutrapporten laddas ner som PDF.

## Fast rapportmall (alla moduler och slutrapporten)
- Varje rapport börjar med **Sammanfattning**, **Analys** och **Förslag**, därefter rubriken **Detaljer**. Mallen finns i `LCA.reportBlock` och `LCA.reportPDF` i `js/lca.js`.

## Begrepp, Om metoden och Teoriplattform
- `teori/` (Teoriplattform) innehåller resonemanget om metodens vetenskapliga grund och hela litteraturlistan, i `js/info.js` under `teori`. Den nås från Om metoden, Begrepp och startsidan.
- Rapporterna listar inga källor; de hänvisar till Teoriplattformen (`LCA.teoriHTML`, `LCA.TEORI`). Nya källor läggs i `js/info.js`.
- `begrepp/` är en sökbar begreppslista; `om/` beskriver bakgrund, upplägg, mål, upphovsman och kontakt (dan@mickla.se, 0709 60 70 76). Innehållet ligger i `js/info.js`.
- Länkarna Begrepp och Om metoden finns i sidhuvudet på alla sidor och öppnas i en ny flik så att körningen inte avbryts.
- Första gången ett begrepp eller en canvas dyker upp i en modul visas en kort beskrivning med länk till begreppslistan.

## Introduktionsfilm
- `video/intro.mp4` (100 sekunder, 1280×720, H.264, text men inget ljud) och `video/intro-poster.jpg` (filmens startbild med titeln) visas på startsidan, mellan de två inledande styckena, med en nedladdningslänk. Texterna i `js/content.js` under `film`.
- Filmen är byggd av skärmbilder från verktygen med Engströms Mickla AB som exempelföretag (påhittade svar) och textskyltar, bland annat om att förändring inte börjar i ledningsrummet och om varje medarbetare som ett trimroder. Den ska göras om när verktygen ändras märkbart.

## Navigering och sparande
- Länken Hem finns i sidhuvudet på alla sidor utom startsidan. Körningen sparas löpande i webbläsaren, och varje modul minns senaste steg (`state.steg`), så Fortsätt tar användaren tillbaka exakt dit hen var.
- Knappen Spara sparfil finns på varje steg i alla moduler, eftersom webbläsarens lagring kan tömmas (privat läge, rensning, annan dator).
- Shift kan ladda ner en kalenderfil (.ics) med datum för start, kursavläsning och lärperiodens slut.

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
