// Innehållsfil för Utvalda tillämpningar. Texter kan redigeras här utan att röra koden.
// Ett nytt fall läggs till som ett nytt objekt i listan "fall". Koden behöver inte ändras.
window.CONTENT = {
 "version": "prototyp v0.1",
 "titel": "Utvalda tillämpningar",
 "verktyg": "Dialogverktyg — Learning Curve Approach",
 "upphov": "© Engströms Mickla AB 2026",
 "undertitel": "Fördjupningar som använder framtiderna från Sense för en särskild fråga",
 "intro": [
  "Sense, See och Shift är huvudspåret: de hjälper en organisation att ta sig upp på sin lärandekurva. Underlaget från Sense går också att använda för analys och strategi i en särskild fråga.",
  "En tillämpning tar de fyra framtiderna från Sense och bedömer dem mot något annat än verksamheten som helhet, till exempel värdet på en fastighet. Resultatet får en egen rapport och följer med i sparfilen till See, Shift och slutsidan."
 ],
 "listRubrik": "Välj tillämpning",
 "integritet": "Allt ni skriver sparas bara i er webbläsare och i de filer ni själva laddar ner. Ingenting skickas till oss eller någon annan.",

 "start": {
  "fortsatt": "Fortsätt där ni var",
  "fortsattText": "Det finns en påbörjad körning sparad i den här webbläsaren",
  "ny": "Ny körning",
  "nyText": "Börja från början. Har ni en sparfil från Sense, öppna den i stället, så följer framtiderna med.",
  "oppna": "Öppna en sparfil",
  "oppnaText": "En sparfil från Sense, eller en tidigare körning av den här tillämpningen.",
  "senseVantar": "Underlag från Sense finns.",
  "senseStarta": "Starta med detta underlag",
  "nejTack": "Nej tack",
  "tillLista": "Alla tillämpningar"
 },
 "uppgifter": {
  "rubrik": "Om arbetet",
  "text": "Uppgifterna hamnar i rapporten. Inget av det lämnar er dator.",
  "org": "Organisation",
  "datum": "Datum",
  "vem": "Vem arbetar?",
  "grupp": "Vi gör det tillsammans som grupp",
  "individ": "Jag gör det som enskild person",
  "namnGrupp": "Gruppens namn, till exempel ledningsgruppen",
  "namnIndivid": "Ditt namn eller din roll",
  "frivilligt": "(frivilligt)"
 },
 "underlag": {
  "rubrik": "Framtiderna",
  "medSense": "Tillämpningen bygger på de fyra framtiderna från Sense. Läs igenom dem innan ni går vidare.",
  "utanSense": "Ni har inte läst in någon sparfil från Sense. Öppna den, eller skriv in fyra framtider kort. Det går, men bedömningen blir tunnare utan arbetet i Sense.",
  "lasIn": "Läs in sparfil från Sense",
  "fokus": "Fokusfråga i Sense",
  "namn": "Framtidens namn",
  "text": "Kort beskrivning",
  "senseMarkering": "Från Sense"
 },
 "nav": { "tillbaka": "← Tillbaka", "nasta": "Nästa", "rapport": "Visa rapporten", "spara": "Spara sparfil", "forVidare": "För att gå vidare:" },
 "rapport": {
  "rubrik": "Rapport",
  "pdf": "Ladda ner rapport (PDF)",
  "spara": "Spara sparfil",
  "nastaRubrik": "Nästa steg",
  "nastaText": "Resultatet följer med i sparfilen. I See bedömer ni om organisationen har förmåga, mandat och vilja att genomföra de robusta åtgärderna.",
  "tillSee": "Gå vidare till See",
  "tillLista": "Gör en till tillämpning",
  "borjaOm": "Börja om med en ny körning",
  "fyraFramtider": "Fyra framtider",
  "saknadSense": "Framtiderna är inskrivna direkt i tillämpningen, utan underlag från Sense."
 },

 "fall": [
  {
   "id": "fastighet",
   "namn": "Fastighetens värdeutveckling",
   "kort": "Hur påverkar framtiderna från Sense värdet på en fastighet? Ni beskriver fastighetens värdefaktorer, bedömer dem i varje framtid och landar i robusta åtgärder och en samlad värdebedömning.",
   "tid": "Cirka en och en halv timme i grupp.",
   "grund": "Bygger på övningarna 5 till 8 i arbetsbladen för Collision Compass (Chalmers 2025) och på forskning om vad som bär fastighetsvärde, om värdeminskning och inkurans, om flexibilitet och om hur hållbarhet och klimatrisker prisas. Se Teoriplattformen.",
   "objekt": { "etikett": "Vilken fastighet gäller det?", "hjalp": "Namn eller beteckning, och gärna vad den används till.", "ref": "fastigheten" },
   "vardeDefinition": "Med värde menas här fastighetens samlade värde: marknadsvärde och driftnetto, men också värdet för dem som använder den och för platsen. Bedömningen är kvalitativ och ersätter inte en värdering.",
   "faktorRubrik": "Fastighetens värdefaktorer",
   "faktorText": "Markera de faktorer som väger tyngst för just den här fastigheten, helst fem till åtta, och beskriv kort hur det är hos er. Korta beskrivningar räcker: centralt, orenoverat, lång hyresgäst.",
   "faktorOrd": { "en": "värdefaktor", "flera": "värdefaktorer" },
   "hosOss": "Så är det hos oss",
   "egen": "Egen värdefaktor",
   "minFaktorer": 3,
   "faktorer": [
    { "id": "lage", "namn": "Läge och omgivning", "text": "Tillgång till service, grönområden och kollektivtrafik", "exempel": "Centralt, nära pendeltåg" },
    { "id": "mobilitet", "namn": "Tillgänglighet och mobilitet", "text": "Parkering, gång- och cykelvägar, anslutning till kollektivtrafik", "exempel": "Stort parkeringsdäck, dålig cykelanslutning" },
    { "id": "skick", "namn": "Byggnadens tekniska skick", "text": "Underhållsbehov, energieffektivitet, installationer", "exempel": "Orenoverat sedan 1990-talet" },
    { "id": "livslangd", "namn": "Återstående teknisk livslängd", "text": "Bedömd livslängd för stomme och system", "exempel": "Stommen håller länge, ventilationen behöver bytas" },
    { "id": "flexibilitet", "namn": "Flexibilitet i användning", "text": "Möjlighet att ändra planlösning, användning eller verksamhet", "exempel": "Pelarstomme, öppna plan" },
    { "id": "drift", "namn": "Drift- och underhållskostnader", "text": "Energiförbrukning, personalbehov, automatiseringsgrad", "exempel": "Hög energianvändning" },
    { "id": "digital", "namn": "Digital infrastruktur", "text": "Sensorer, datakvalitet, uppkoppling, systemintegration", "exempel": "Få mätpunkter, gamla system" },
    { "id": "miljo", "namn": "Miljö- och hållbarhetsprofil", "text": "Klimatpåverkan, materialval, återbrukspotential, certifiering", "exempel": "Ingen certifiering" },
    { "id": "klimatrisk", "namn": "Klimatrisker på platsen", "text": "Översvämning, skyfall, värme, ras och skred", "exempel": "Lågt läge nära ån" },
    { "id": "ekonomi", "namn": "Ekonomisk stabilitet", "text": "Hyresintäkter, kontraktslängd, hyresgäster, finansieringsvillkor", "exempel": "En stor hyresgäst, kontrakt till 2029" },
    { "id": "socialt", "namn": "Socialt värde", "text": "Trygghet, gemenskap, attraktivitet för boende och verksamheter", "exempel": "Uppskattad gård, otrygg entré kvällstid" },
    { "id": "kultur", "namn": "Kultur- och identitetsvärde", "text": "Arkitektonisk kvalitet, historisk betydelse, platskänsla", "exempel": "Känd fasad i kvarteret" }
   ],
   "bedomning": {
    "rubrik": "Värdet i framtiden",
    "text": "Tänk er att den här framtiden har inträffat. Hur påverkas varje värdefaktor?",
    "lagen": ["Försvagas", "Opåverkad", "Stärks"],
    "orsak": "Varför?",
    "utvecklingFraga": "Trolig värdeutveckling i den här framtiden",
    "utveckling": ["Vikande", "Stabil", "Ökande"],
    "orsaker": "Primära orsaker till värdeutvecklingen",
    "atgarder": "Möjliga åtgärder att rekommendera i den här framtiden"
   },
   "syntes": {
    "rubrik": "Syntes",
    "text": "Vilka slutsatser, risker och möjligheter återkommer oavsett framtid? Målet är inte att förutsäga utvecklingen, utan att förstå vad som driver värdet under olika framtider.",
    "sarbarheter": "Värdefaktorer som försvagas i minst två framtider",
    "styrkor": "Värdefaktorer som stärks i minst två framtider",
    "inga": "Ingen värdefaktor försvagas i mer än en framtid.",
    "tabell": ["Framtid", "Värdeutveckling", "Åtgärder"],
    "monster": "Gemensamma mönster: återkommande trender, risker och möjligheter",
    "robusta": "Robusta åtgärder: åtgärder som fungerar i flera framtider (en per rad)",
    "samlad": "Samlad värdebedömning på längre sikt",
    "samladSkala": ["Värdet minskar", "Värdet är stabilt", "Värdet ökar"],
    "sakerhet": "Hur säkra är ni på att ni har landat ungefär rätt?",
    "sakerhetSkala": ["Osäkra", "Ganska säkra", "Säkra"],
    "osakert": "Vad är ni fortfarande osäkra på?",
    "slutord": "Ni förutser inte framtiden. Ni har gjort något bättre: beskrivit vilka faktorer som påverkar värdet mest och hur man kan agera robust inför förändring."
   },
   "rapport": {
    "inledning": "{org} har bedömt hur värdet på {objekt} kan utvecklas i fyra framtider{fran}.",
    "franSense": " från Sense, med fokusfrågan ”{fraga}”",
    "faktorer": "Bedömningen bygger på {n}: {lista}.",
    "samlad": "Den samlade bedömningen är att {samlad} på längre sikt. Gruppen är {sakerhet} på bedömningen.",
    "samladSaknas": "Gruppen har inte gjort någon samlad värdebedömning.",
    "sakerhetOrd": ["osäker", "ganska säker", "säker"],
    "framtid": "Värdet bedöms som {utv}.",
    "utvecklingOrd": ["vikande", "stabilt", "ökande"],
    "forsvagas": "Försvagas: {lista}.",
    "starks": "Stärks: {lista}.",
    "orsak": "Orsaker: {text}",
    "sarbarTitel": "Sårbara värdefaktorer",
    "sarbar": "{lista} försvagas i minst två av fyra framtider. Det är där fastighetens värde är mest utsatt, oavsett hur framtiden blir.",
    "ingenSarbar": "Ingen värdefaktor försvagas i mer än en framtid. Värdet verkar inte hänga på en enskild faktor.",
    "styrkaTitel": "Bärande styrkor",
    "styrka": "{lista} stärks i minst två av fyra framtider.",
    "monsterTitel": "Gemensamma mönster",
    "robustaTitel": "Robusta åtgärder",
    "vikandeTitel": "Åtgärder där värdet viker",
    "vikande": "I {framtider} bedöms värdet som vikande. Föreslagna åtgärder: {atg}",
    "osakertTitel": "Bevaka det som är osäkert",
    "vidareTitel": "Pröva förmågan att genomföra",
    "vidare": "Ta med de robusta åtgärderna till See och bedöm om organisationen har förmåga, mandat och vilja att genomföra dem.",
    "matrisRubrik": "Värdefaktorer i fyra framtider",
    "faktorerRubrik": "Värdefaktorer och nuläge",
    "lamnarSamlad": ["minskar", "är stabilt", "ökar"]
   }
  }
 ]
};
