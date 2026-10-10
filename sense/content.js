// Innehållsfil för Sense (Collision Compass). Texter kan redigeras här utan att röra koden.
// Strukturen bygger på Dans Collision Compass, generaliserad från fastighet till verksamhet.
// Forskningsstöd per skede: se CLAUDE.md och "kallor" nedan.
window.CONTENT = {
 "version": "0.1 prototyp",
 "titel": "Sense",
 "verktyg": "Dialogverktyg -- Learning Curve Approach",
 "undertitel": "Collision Compass: var möter framtiden er verksamhet?",
 "upphov": "© Engströms Mickla AB 2026",
 "integritet": "Allt ni skriver sparas bara i er webbläsare och i de filer ni själva laddar ner. Ingenting skickas till oss eller någon annan.",
 "intro": [
  "Sense är en strukturerad omvärldsövning. Målet är inte att förutsäga framtiden, utan att tillsammans förstå vad som håller på att förändras och vilka antaganden det utmanar.",
  "Resultatet är en Collision Map: de framtidskollisioner där omvärldens tryck möter det som i dag skapar värde i er verksamhet. Den blir underlaget för See."
 ],
 "skeden": [
  { "nr": 0, "namn": "Fokus", "tid": "15 min" },
  { "nr": 1, "namn": "Signaler och trender", "tid": "40 min" },
  { "nr": 2, "namn": "Påverkan och säkerhet", "tid": "20 min" },
  { "nr": 3, "namn": "Hur trenderna driver varandra", "tid": "20 min" },
  { "nr": 4, "namn": "Scenarier", "tid": "35 min" },
  { "nr": 5, "namn": "Verksamhetens värden", "tid": "20 min" },
  { "nr": 6, "namn": "Vindtunnel", "tid": "35 min" },
  { "nr": 7, "namn": "Syntes", "tid": "20 min" },
  { "nr": 8, "namn": "Collision Map", "tid": "20 min" }
 ],
 "tidstext": "Räkna med en förmiddag, ungefär 3 timmar och 45 minuter med paus. Verktyget är gjort för en grupp vid en gemensam skärm, med en facilitator som håller i tangentbordet.",

 "fokus": {
  "rubrik": "Vad vill ni förstå?",
  "text": "Ett bra omvärldsarbete börjar i något ni genuint undrar över eller oroas av. Kryssa de utmaningar som är viktigast för er just nu. Valen styr vilka områden som föreslås i nästa skede.",
  "egenEtikett": "Egen utmaning (frivilligt)",
  "fragaEtikett": "Er fokusfråga",
  "fragaHjalp": "Verktyget föreslår en fråga utifrån era val. Skriv om den så att den låter som ni.",
  "fragaMall": "Hur kan {lista} förändra vad som skapar värde för {org} fram till {ar}?",
  "horisontEtikett": "Hur långt fram tittar ni?",
  "horisontHjalp": "Längre horisont ger större osäkerhet och friare tänkande. Tio år är ett vanligt val.",
  "horisonter": [5, 10, 15]
 },
 "utmaningar": [
  { "id": "klimat", "namn": "Klimatkrav och fossilfrihet", "omraden": ["hallbarhet", "energi", "politik"] },
  { "id": "cirk", "namn": "Cirkularitet och resurser", "omraden": ["cirk", "hallbarhet", "ekonomi"] },
  { "id": "digital", "namn": "Digitalisering, data och AI", "omraden": ["digital", "teknik", "larande"] },
  { "id": "kompetens", "namn": "Kompetensförsörjning", "omraden": ["demografi", "larande", "socialt"] },
  { "id": "lonsamhet", "namn": "Lönsamhet och produktivitet", "omraden": ["ekonomi", "teknik", "digital"] },
  { "id": "konjunktur", "namn": "Konjunktur, räntor och finansiering", "omraden": ["ekonomi", "politik"] },
  { "id": "regler", "namn": "Regelverk och rapporteringskrav", "omraden": ["politik", "hallbarhet", "digital"] },
  { "id": "energi", "namn": "Energi och effekt", "omraden": ["energi", "hallbarhet"] },
  { "id": "anpassning", "namn": "Klimatanpassning och resiliens", "omraden": ["hallbarhet", "ekonomi", "politik"] },
  { "id": "beredskap", "namn": "Försörjningsberedskap och leveranskedjor", "omraden": ["ekonomi", "cirk", "politik"] },
  { "id": "kunder", "namn": "Kundernas behov och nya affärsmodeller", "omraden": ["teknik", "flex", "socialt"] },
  { "id": "demografi", "namn": "Demografi, boende och livsstil", "omraden": ["demografi", "flex", "mobilitet"] },
  { "id": "social", "namn": "Social hållbarhet och trygghet", "omraden": ["socialt", "halsa", "mobilitet"] },
  { "id": "samverkan", "namn": "Samverkan och industrialisering i värdekedjan", "omraden": ["teknik", "larande", "digital"] }
 ],

 "signaler": {
  "rubrik": "Signaler och trender",
  "text": "En signal är något ni faktiskt kan se i omvärlden: ett beteende, en nyhet, ett beslut, en teknik eller en händelse. En trend är en möjlig riktning som flera signaler tillsammans pekar mot. Ändra, stryk och lägg till. Det viktiga är inte att få allt rätt, utan att börja se mönster.",
  "forslagRubrik": "Områden kopplade till er fokusfråga",
  "ovrigaRubrik": "Fler områden",
  "minText": "Ha minst fem trender med innan ni går vidare."
 },
 "omraden": [
  { "id": "hallbarhet", "namn": "Hållbarhet och klimat", "signal": "Klimatdeklarationer, gränsvärden för klimatpåverkan, stigande försäkringspremier", "trend": "Klimatpåverkan blir avgörande för värde och lönsamhet" },
  { "id": "energi", "namn": "Energi och försörjning", "signal": "Solceller, lokala elnät, energilagring, effektbrist i storstäder", "trend": "Från central till lokal energiförsörjning" },
  { "id": "cirk", "namn": "Cirkularitet och material", "signal": "Återbrukskrav, byggdelshubbar, materialpass", "trend": "Återbruk blir standard" },
  { "id": "digital", "namn": "Digitalisering och AI", "signal": "AI-stöd i projektering och drift, generativ design, digitala tvillingar", "trend": "Verksamheten blir datadriven och mer automatiserad" },
  { "id": "mobilitet", "namn": "Mobilitet och plats", "signal": "Delad mobilitet, färre parkeringar, distansarbete", "trend": "Mobilitet som tjänst förändrar platsers värde" },
  { "id": "flex", "namn": "Flexibilitet och användning", "signal": "Korta kontrakt, delade ytor, tjänster i stället för produkter", "trend": "Från ägande till användning" },
  { "id": "ekonomi", "namn": "Ekonomi och geopolitik", "signal": "Ränteoro, materialbrist, handelshinder, krigshot", "trend": "Resiliens blir viktigare än effektivitet" },
  { "id": "socialt", "namn": "Sociala och kulturella värden", "signal": "Krav på trygghet, platsidentitet och gemenskap", "trend": "Social hållbarhet blir en värdeskapare" },
  { "id": "larande", "namn": "Lärande och innovation", "signal": "Testbäddar, samverkan med akademi, innovationsupphandling", "trend": "Förmågan att lära blir en konkurrensfaktor" },
  { "id": "teknik", "namn": "Teknik och affärsmodeller", "signal": "Data säljs som tjänst, AI ersätter debiterbara timmar, plattformar i värdekedjan", "trend": "Affären blir digital och insiktsdriven" },
  { "id": "demografi", "namn": "Demografi och livsstil", "signal": "Pensionsavgångar, åldrande befolkning, urbanisering, nya hushållsformer", "trend": "Brist på arbetskraft och nya behov av bostäder och lokaler" },
  { "id": "halsa", "namn": "Hälsa och välbefinnande", "signal": "Fokus på inomhusmiljö, psykosocial arbetsmiljö, sjukskrivningstal", "trend": "Hälsa blir ett krav på miljöer och arbetsplatser" },
  { "id": "politik", "namn": "Politik och styrning", "signal": "EU:s taxonomi, hållbarhetsrapportering, nya upphandlingskrav", "trend": "Styrning genom regler och rapportering ökar" }
 ],

 "bedomning": {
  "rubrik": "Påverkan och säkerhet",
  "text": "Bedöm varje trend på två sätt: hur stor påverkan den kan få på er verksamhet, och hur säkert det är att den slår igenom inom er tidshorisont.",
  "paverkan": ["Ingen", "Liten", "Märkbar", "Stor", "Omvälvande"],
  "sakerhet": ["Ingen vet", "Osäker", "Kanske", "Trolig", "Helt säker"],
  "klasser": {
   "kritisk": { "namn": "Kritisk osäkerhet", "text": "Stor påverkan och osäker utveckling. Det är de här trenderna som skiljer framtiderna åt, och de används för att bygga scenarier." },
   "forutbestamd": { "namn": "Förutbestämt element", "text": "Stor påverkan och säker utveckling. Förändringen är redan i rörelse, även om följderna inte märks än. Den ingår i alla scenarier." },
   "bevaka": { "namn": "Bevaka", "text": "Märkbar påverkan. Värd att följa, men inte i centrum för scenarierna." },
   "ignorera": { "namn": "Lägg åt sidan", "text": "Liten påverkan på er verksamhet just nu." }
  }
 },

 "urval": {
  "rubrik": "Välj trender för påverkansmatrisen",
  "text": "Nu undersöker ni hur trenderna påverkar varandra. Verktyget föreslår de trender som har störst påverkan och mest osäker utveckling. Ni kan byta. Välj tre till fem.",
  "forutbestamdaText": "Förutbestämda element behöver inte vara med här. De finns med i alla scenarier ändå."
 },
 "fragor": {
  "rubrik": "Hur driver trenderna varandra?",
  "fraga": "Om {a} tar fart, hur mycket driver det {b}?",
  "skala": ["Ingen påverkan", "Svag, indirekt eller fördröjd", "Medelstark", "Stark eller direkt"],
  "hjalp": "Tänk bara i en riktning: från den första trenden till den andra. Den omvända riktningen kommer som en egen fråga."
 },
 "matris": {
  "rubrik": "Vilka trender driver utvecklingen?",
  "text": "Aktiv summa visar hur mycket en trend driver de andra. Passiv summa visar hur mycket den påverkas av dem. Tillsammans visar de vilken roll varje trend spelar i systemet.",
  "kategorier": {
   "drivande": { "namn": "Drivande", "text": "{trend} driver de andra men påverkas lite av dem. Den är en hävstång i systemet och passar som axel i era scenarier." },
   "kritisk": { "namn": "Kritisk", "text": "{trend} både driver och påverkas starkt. Den är instabil: små förändringar kan förstärkas åt båda hållen. Följ den noga." },
   "paverkad": { "namn": "Påverkad", "text": "{trend} påverkas mycket av de andra men driver lite själv. Den är mer en följd än en orsak och visar hur utvecklingen slår igenom." },
   "buffrande": { "namn": "Buffrande", "text": "{trend} hänger löst ihop med de andra. Den styr inte systemet, men kan ändå vara viktig för er." }
  }
 },

 "axlar": {
  "rubrik": "Välj två axlar för scenarierna",
  "text": "Två kritiska osäkerheter bildar axlarna i ett scenariokors, och kombinationerna ger fyra framtider. Verktyget föreslår de två mest drivande osäkra trenderna. Det är ert val.",
  "motivering": "Varför valde ni andra axlar än förslaget?",
  "varningSaker": "{trend} bedömdes som säker. En säker trend skiljer inte framtiderna åt, eftersom den ingår i alla scenarier. Överväg en annan.",
  "varningBeroende": "{a} driver {b} starkt (svar 3 i påverkansmatrisen). När axlarna hänger ihop blir två av de fyra framtiderna svåra att tro på. Överväg en annan kombination.",
  "andpunkterRubrik": "Vad betyder ändpunkterna?",
  "andpunkterText": "Beskriv kort hur det ser ut om trenden går svagt respektive starkt. Det gör scenarierna begripliga och avslöjar tidigt om en axel inte fungerar.",
  "svag": "Svag utveckling",
  "stark": "Stark utveckling"
 },
 "scenarier": {
  "rubrik": "Fyra framtider",
  "text": "Ge varje framtid ett namn och en kort berättelse om hur det ser ut där. Använd byggstenarna: de förutbestämda elementen finns i alla fyra, och de övriga trenderna kan färga berättelserna.",
  "byggstenar": "Byggstenar",
  "namn": "Namn",
  "berattelse": "Kort berättelse"
 },
 "varden": {
  "rubrik": "Vad skapar värde för er i dag?",
  "text": "Markera de områden som är viktigast för hur er verksamhet skapar värde. Skriv kort vad det är hos er, och vilket antagande det vilar på: vad måste vara sant för att det ska fortsätta skapa värde?",
  "hosOss": "Hos oss",
  "antagande": "Antagande",
  "minText": "Markera minst tre områden.",
  "lista": [
   { "id": "erbjudande", "namn": "Erbjudande och kundvärde", "text": "Det ni levererar och varför kunderna väljer er.", "exempel": "Kunderna betalar för det vi levererar i dag" },
   { "id": "kunder", "namn": "Kunder och marknad", "text": "Vilka ni skapar värde för.", "exempel": "Våra kunder finns kvar och har samma behov" },
   { "id": "relationer", "namn": "Relationer och kanaler", "text": "Hur ni når och behåller kunder.", "exempel": "Långa relationer väger tyngre än pris" },
   { "id": "kompetens", "namn": "Kompetens och medarbetare", "text": "Det ni kan och de som kan det.", "exempel": "Vi kan rekrytera den kompetens vi behöver" },
   { "id": "processer", "namn": "Processer och produktion", "text": "Hur ni arbetar och levererar.", "exempel": "Våra arbetssätt är tillräckligt effektiva" },
   { "id": "partners", "namn": "Partners och leverantörer", "text": "De ni är beroende av.", "exempel": "Material och tjänster finns att köpa när vi behöver dem" },
   { "id": "data", "namn": "Data och digital infrastruktur", "text": "Information, system och verktyg.", "exempel": "Vår data räcker för att fatta bra beslut" },
   { "id": "ekonomi", "namn": "Ekonomi och finansiering", "text": "Intäkter, kostnader och kapital.", "exempel": "Finansiering går att få till rimliga villkor" },
   { "id": "fortroende", "namn": "Förtroende och varumärke", "text": "Hur andra ser på er.", "exempel": "Vårt namn står för kvalitet" },
   { "id": "hallbarhet", "namn": "Hållbarhet och regelefterlevnad", "text": "Krav ni lever upp till.", "exempel": "Vi klarar kraven utan stora förändringar" },
   { "id": "larande", "namn": "Lärande och förnyelse", "text": "Förmågan att pröva nytt och anpassa sig.", "exempel": "Vi hinner anpassa oss när det behövs" }
  ]
 },
 "vind": {
  "rubrik": "Vindtunnel",
  "text": "Pröva era värden mot framtiden. Allt står sig tills ni säger något annat. Markera det som försvagas eller stärks, och skriv kort varför.",
  "lagen": ["Försvagas", "Står sig", "Stärks"],
  "orsak": "Varför?",
  "utvecklingFraga": "Hur utvecklas verksamhetens samlade värde i den här framtiden?",
  "utveckling": ["Minskar", "Stabilt", "Ökar"],
  "atgarder": "Möjliga åtgärder för att minska riskerna eller stärka värdet i den här framtiden"
 },
 "syntes": {
  "rubrik": "Vad återkommer oavsett framtid?",
  "text": "Målet är inte att förutsäga, utan att se vad som gäller i flera framtider. Det som försvagas i flera scenarier är en sårbarhet oavsett hur det blir.",
  "sarbarheter": "Försvagas i flera framtider",
  "styrkor": "Stärks i flera framtider",
  "inga": "Inget värde försvagas i mer än en framtid.",
  "monster": "Gemensamma mönster: återkommande drivkrafter, risker och möjligheter",
  "robusta": "Robusta åtgärder: sådant som är klokt i flera framtider (en per rad)",
  "signalerRubrik": "Signaler att bevaka",
  "signalerText": "Vilka tecken skulle visa att utvecklingen går mot respektive framtid?",
  "samlad": "Samlad bedömning: hur utvecklas verksamhetens värde på längre sikt?",
  "osakert": "Det här är vi fortfarande osäkra på"
 },
 "karta": {
  "rubrik": "Collision Map",
  "text": "En framtidskollision är där omvärldens tryck möter ett antagande som verksamheten vilar på. Välj en till tre kollisioner att ta vidare. Verktyget föreslår utifrån de värden som försvagas.",
  "forslag": "Förslag",
  "laggTill": "Ta med",
  "egen": "Lägg till egen kollision",
  "namn": "Kollisionen i några ord",
  "antagande": "Antagandet som utmanas",
  "tryck": "Tryck: hur starkt påverkar den er verksamhet?",
  "tryckSkala": ["Knappt", "Lite", "Märkbart", "Starkt", "Hotar kärnan"],
  "tempo": "Tempo: när slår den igenom, jämfört med hur långt fram ni planerar?",
  "tempoSkala": ["Redan nu", "Inom 1 till 3 år", "Inom 3 till 10 år", "Bortom 10 år"],
  "synlighet": "Synlighet: hur mycket uppmärksammas den hos er i dag?",
  "synlighetSkala": ["Ingen talar om den", "Någon enstaka", "Diskuteras ibland", "Diskuteras ofta", "På ledningens agenda"],
  "doldNot": "Låg synlighet och högt tryck: en dold kollision. Den förtjänar extra uppmärksamhet.",
  "scenarioRubrik": "Vilken framtid tar ni med till See?",
  "scenarioText": "I See bedömer ni hur redo ni är för en bestämd framtid. Välj den som prövar verksamheten hårdast, inte den mest troliga. Scenarier är inga prognoser.",
  "scenarioMotivering": "Varför valde ni en annan framtid än förslaget?",
  "max": "Högst tre kollisioner."
 },
 "parkering": {
  "rubrik": "Parkering",
  "text": "Tankar att hantera senare. Kommer med i rapporten."
 },
 "rapport": {
  "rubrik": "Rapport",
  "nastaRubrik": "Nästa steg: See",
  "nastaText": "I See bedömer ni hur redo organisationen är att ta emot den framtid ni valt: förmåga, mandat och vilja. Scenariot och kollisionerna följer med.",
  "tillSee": "Gå vidare till See",
  "kallorRubrik": "Metod och källor"
 },
 "kallor": [
  "Ramírez, R. & Wilkinson, A. (2016). Strategic Reframing: The Oxford Scenario Planning Approach. Oxford University Press.",
  "Voros, J. (2003). A generic foresight process framework. Foresight, 5(3), 10-21.",
  "Hiltunen, E. (2008). The future sign and its three dimensions. Futures, 40(3), 247-260.",
  "Burt, G. & Wright, G. (2006). Pre-determined elements in the business environment: Reflecting on the legacy of Pierre Wack. Futures, 38(7), 830-840.",
  "Vester, F. (2007). The Art of Interconnected Thinking. MCB Verlag.",
  "Wright, G., Bradfield, R. & Cairns, G. (2013). Does the intuitive logics method, and its recent enhancements, produce effective scenarios? Technological Forecasting and Social Change, 80(4), 631-642.",
  "Osterwalder, A. & Pigneur, Y. (2010). Business Model Generation. Wiley.",
  "Dewar, J. A. (2002). Assumption-Based Planning. Cambridge University Press.",
  "van der Heijden, K. (2005). Scenarios: The Art of Strategic Conversation. Wiley.",
  "Rohrbeck, R. & Kum, M. E. (2018). Corporate foresight and its impact on firm performance. Technological Forecasting and Social Change, 129, 105-116."
 ]
};
