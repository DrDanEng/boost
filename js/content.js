// Innehållsfil för Dialogverktyget. Texter kan redigeras här utan att röra koden.
// MatchUp-delen är hämtad ur Självskattning mottagningsförmåga MatchUp v1.0 (rättad referens för Strategiskt ledarskap, Nej).
window.CONTENT = {
 "boost": {
  "version": "0.2 prototyp",
  "sammanfattning": {
    "rubrik": "Sammanfattning",
    "helhet": "Lärandeindex {index}, {omdome}. Profilen är {form}.",
    "valda": "Ni går vidare med {lista}.",
    "monster": "Mönstret går igen: för {n} av {m} valda förmågor är {axel} den svagaste axeln. Det tyder på ett gemensamt hinder i organisationen snarare än brister i enskilda förmågor, och där bör ni börja.",
    "spritt": "De valda förmågorna har olika svagaste axlar, så första steget ser olika ut för var och en.",
    "styrka": "{styrka} sticker ut som en styrka som kan användas som hävstång.",
    "recRubrik": "De viktigaste rekommendationerna",
    "recStyrka": "Använd {styrka} som hävstång för att stärka {svag}. Fråga er samtidigt om styrkan gör er för säkra på nuvarande arbetssätt."
  },
  "titel": "Dialogverktyget",
  "undertitel": "Självskattning av mottagningsförmåga och agency inför förändring",
  "upphov": "© Engströms Mickla AB 2026",
  "integritet": "Dina svar sparas bara i din webbläsare och i de filer du själv laddar ner. Ingenting skickas till oss eller någon annan.",
  "gransvarden": [
   1.8,
   2.6,
   3.2
  ],
  "form": {
   "jamn": 1.0,
   "taggig": 2.0,
   "texter": {
    "jämn": "Profilen är jämn. Förmågorna ligger nära varandra, och indexet ger en rättvisande bild av helheten.",
    "ojämn": "Profilen är ojämn. Några förmågor sticker ut åt något håll; läs indexet tillsammans med formen.",
    "taggig": "Profilen är taggig. De svaga punkterna begränsar sannolikt mer än genomsnittet antyder."
   }
  },
  "indexnot": "Ett genomsnitt säger mindre än era svagaste punkter. Läs indexet tillsammans med diagrammets form.",
  "valtext": "Förmågor samverkar. En organisation blir sällan starkare än sin svagaste länk, och starka förmågor kompenserar sällan för svaga. Därför föreslår vi att ni fortsätter med era lägst skattade förmågor. Om någon av dem saknar betydelse för ert scenario kan ni byta ut den. Skriv i så fall kort varför.",
  "styrka": {
   "overMedian": 1.0,
   "fraga": "Er starkaste förmåga är {styrka}. Den sticker ut tydligt i profilen. Har den betydelse för ert scenario?",
   "dialog": [
    "Hur kan {styrka} användas för att stärka {svag}?",
    "Finns det en risk att {styrka} gör er för säkra på nuvarande arbetssätt?"
   ]
  },
  "skala": [
   "Stämmer inte alls",
   "Stämmer dåligt",
   "Stämmer delvis",
   "Stämmer ganska bra",
   "Stämmer helt"
  ],
  "pastaenden": [
   {
    "id": "F1",
    "axel": "formellt",
    "text": "Vi har beslutsrätt att förändra hur vi arbetar med {förmåga} utan att först gå vidare uppåt."
   },
   {
    "id": "F2",
    "axel": "formellt",
    "text": "Det finns avsatt tid och resurser för att stärka {förmåga} under det kommande året."
   },
   {
    "id": "U1",
    "axel": "upplevt",
    "text": "Vi känner oss fria att själva avgöra hur vi ska stärka {förmåga}."
   },
   {
    "id": "U2",
    "axel": "upplevt",
    "text": "Det vi gör för att stärka {förmåga} får märkbar effekt i organisationen."
   },
   {
    "id": "V1",
    "axel": "vilja",
    "text": "Att stärka {förmåga} är viktigt för oss med tanke på scenariot."
   },
   {
    "id": "V2",
    "axel": "vilja",
    "text": "Vi är beredda att prioritera ner annat för att stärka {förmåga}."
   },
   {
    "id": "T1",
    "axel": "tilltro",
    "text": "Vi är övertygade om att vi tillsammans kan stärka {förmåga}, även när det blir motigt."
   }
  ],
  "axlar": {
   "formaga": "Förmåga",
   "mandat": "Mandat",
   "vilja": "Vilja",
   "tilltro": "Tilltro"
  },
  "svagastAxel": {
   "formaga": {
    "rubrik": "Förmågan är den svagaste axeln",
    "text": "Ni har mandat och vilja, men saknar ännu arbetssätt eller kunskap. Mer beslut eller mer engagemang löser inte det.",
    "shift": "Ett passande första steg är ett avgränsat lärexperiment: pröva en metod i ett projekt, lär av någon som redan gör det, eller ta in stöd för ett första försök."
   },
   "mandat": {
    "rubrik": "Mandatet är den svagaste axeln",
    "text": "Viljan och kunskapen finns, men förutsättningarna saknas. Mer utbildning eller entusiasm hjälper inte.",
    "shift": "Ett passande första steg är att skapa förutsättningen: ett avgränsat beslut, en tidsbudget, eller en pilot som får eget mandat."
   },
   "vilja": {
    "rubrik": "Viljan är den svagaste axeln",
    "text": "Förutsättningarna finns, men frågan känns inte angelägen, eller inte angelägen nog att prioritera.",
    "shift": "Ett passande första steg handlar om mening: gå tillbaka till scenariot, gör konsekvensen av att inte agera konkret, och låt ett litet test visa nyttan."
   },
   "jamn": {
    "rubrik": "Axlarna ligger i nivå med varandra",
    "text": "Ingen axel sticker ut som tydligt svagast. Diskutera vilken av dem som skulle ge mest effekt att stärka just nu.",
    "shift": "Välj ett första steg som är litet nog att vara möjligt och stort nog att vara meningsfullt, och följ upp vad det lär er."
   }
  },
  "glapp": {
   "grans": 1.0,
   "formelltStorre": {
    "rubrik": "Mandatet finns på papperet men används inte",
    "text": "Det formella mandatet är tydligt större än det upplevda. Det beror ofta på otydlighet om vad som faktiskt är tillåtet, tidigare erfarenheter av att initiativ har stoppats, eller en kultur där man väntar in ledningen. Ett passande första steg är att använda mandatet synligt i en liten fråga, så att det bekräftas i praktiken."
   },
   "upplevtStorre": {
    "rubrik": "Engagemanget bärs av eldsjälar utan formellt stöd",
    "text": "Det upplevda mandatet är tydligt större än det formella. Det fungerar en tid men riskerar att bli ett sidoprojekt som självdör. Ett passande första steg är att formalisera något av det som redan pågår: ett beslut, en tidspost eller ett utpekat ansvar."
   }
  },
  "tilltroGlapp": {
   "grans": 1.5,
   "lagTilltro": "Nivån är högre än tilltron. Kunskapen finns, men den syns inte för er själva. Synliggör vad ni redan har lyckats med.",
   "hogTilltro": "Tilltron är högre än nivån. Det finns en risk för överskattning. Testa i liten skala innan ni lovar något större."
  },
  "beslut": {
   "fraga": "Vad bestämmer ni er för när det gäller {förmåga}?",
   "alternativ": {
    "Ja": "Ja, vi satsar på att stärka den nu",
    "Fortsätt": "Fortsätt, vi bygger vidare på det vi redan gör",
    "Utred": "Utred, vi behöver förstå mer först",
    "Vänta": "Vänta, inte nu men senare",
    "Nej": "Nej, vi avstår medvetet"
   },
   "lagViljaJa": "Ni har bestämt er för att gå vidare, men skattade viljan lågt. Det är värt att stanna vid: vad har ändrats under samtalet, eller vad krävs för att beslutet ska hålla?",
   "hogViljaNej": "Ni skattade viljan högt men väljer att vänta eller avstå. Vad är det som håller emot? Det kan peka på mandatet snarare än viljan."
  }
 },
 "matchup": {
  "intro": [
   "Målet med detta verktyg är att ge användarna ökad insikt om organisationens förmåga att värdera och integrera innovationer – på ett sätt som balanserar affärsmässig effektivitet på kort sikt med strategisk förnyelse och hållbar utveckling på längre sikt. Det kan också användas av innovatörer för att förstå vilka krav som ställs på deras kunder – inte för att bedöma, utan för att bättre anpassa samarbete, stöd och leverans till kunden.",
   "Verktyget är inte primärt till för att mäta prestation utan för att skapa gemensam förståelse, riktning och lärande – ett stöd för reflektion, samverkan och medveten rörelse framåt."
  ],
  "formagor": [
   {
    "id": 1,
    "namn": "Strategisk ambidexteritet",
    "vad": "Förmågan att styra både det etablerade och det utforskande",
    "syfte": "För att kunna balansera kortsiktig effektivitet med långsiktig innovation och konkurrenskraft",
    "nivaer": [
     {
      "namn": "Omedveten",
      "text": "Allt mäts utifrån samma logik"
     },
     {
      "namn": "Konceptuell",
      "text": "Vi har börjat skilja på utforskande och genomförande"
     },
     {
      "namn": "Definierad",
      "text": "Vi har olika mål, indikatorer och processer för drift och sökande"
     },
     {
      "namn": "Integrerad",
      "text": "Processer är anpassade efter typ av arbete"
     },
     {
      "namn": "Transformerad",
      "text": "Organisationen växlar sömlöst mellan utforskande och genomförande"
     }
    ],
    "intern": [
     "Kartlägg hur resurser, mål och mätetal fördelas idag mellan drift och utveckling för att skapa gemensam förståelse.",
     "Testa enkla styrmodeller där små resurser avsätts till utveckling utan att störa drift, och följ upp lärdomarna.",
     "Bygg en återkommande rutin för att följa upp både driftmål och utvecklingsmål i ledningsgruppen och reflektera över balansen.",
     "Dokumentera och sprid era arbetssätt som goda exempel, och dela erfarenheter i nätverk eller projekt."
    ],
    "extern": [
     "Anlita facilitator för att visualisera skillnader mellan drift och utveckling och skapa gemensam förståelse.",
     "Ta in stöd för att bygga en balanserad styrmodell och reflektera över lärande från den.",
     "Låt extern part göra en benchmark och föreslå hur dubbel logik kan förbättras.",
     "Dela erfarenheter i branschnätverk och bidra till utveckling av ambidext styrning."
    ],
    "atgard": {
     "Ja": [
      "Skapa rutin i ledningsgruppen för att följa upp både drift- och utvecklingsmål. Lägg till reflektion om lärande.",
      "Testa dubbel styrning i ett pilotprojekt med separata mål för drift och utveckling. Utvärdera lärdomar.",
      "Inför årlig uppföljning där effektivitet och förnyelse behandlas som likvärdiga mål. Dokumentera lärdomarna.",
      "Dela arbetssättet externt i nätverk eller projekt. Visa hur balansen mellan drift och utveckling stärker konkurrenskraft och lärande."
     ],
     "Fortsätt": [
      "Behåll befintlig rytm men lägg till enkel månadsreflektion om balans mellan drift, utveckling och lärande.",
      "Fortsätt pilot eller spår, säkra 5–10 % kapacitet för utveckling och reflektera över vad ni lär.",
      "Fortsätt med dubbel styrning och gör kvartalsvisa kontroller så att utvecklingsmål följs upp lika systematiskt som driftmål.",
      "Fortsätt och förvalta ambidexteriteten; bevara kadens, planera succession i roller och dela arbetssätt internt/externt."
     ],
     "Utred": [
      "Kartlägg hur beslut fattas idag och var drift och utveckling krockar. Identifiera exempel att diskutera.",
      "Analysera målkonflikter där idéer möter driftlogik. Föreslå justeringar som stärker lärandet.",
      "Jämför var dubbel logik fungerar bäst i organisationen. Identifiera lärdomar att sprida till andra delar.",
      "Utvärdera hur modellen påverkar innovationsförmågan långsiktigt och hur den kan skalas till andra organisationer."
     ],
     "Vänta": [
      "Notera varför frågan pausas – saknas tid, stöd eller mandat? Skriv vad som krävs för att ta upp den igen.",
      "Avvakta med större förändringar men följ upp hur mycket innovationsarbete får plats i praktiken.",
      "Behåll nuvarande styrning men följ upp om driftfokus hämmar lärande och anpassning.",
      "Planera en reflektion snarare än ny struktur – fokusera på hur dynamiken bevaras över tid."
     ],
     "Nej": [
      "Om fokus ligger på drift, dokumentera varför. Undvik att kortsiktiga effektivitetsmål hindrar lärande och utveckling.",
      "Avstå endast om befintlig styrning redan skapar balans. Dokumentera varför beslutet togs.",
      "Om utvecklingsdelen pausas, säkerställ att beslutet inte begränsar framtida initiativ. Kommunicera orsaken.",
      "Om vidareutveckling stoppas, reflektera om beslutet grundas i mättnad eller verklig strategisk prioritering."
     ]
    }
   },
   {
    "id": 2,
    "namn": "Tvärfunktionell samverkan",
    "vad": "Förmågan att nyttja hela organisationens kompetens",
    "syfte": "För att lösa komplexa utmaningar som kräver flera perspektiv och undvika silotänkande",
    "nivaer": [
     {
      "namn": "Omedveten",
      "text": "Silostrukturer dominerar"
     },
     {
      "namn": "Konceptuell",
      "text": "Det finns en vilja, men inte struktur eller forum"
     },
     {
      "namn": "Definierad",
      "text": "Samverkansforum och metoder finns"
     },
     {
      "namn": "Integrerad",
      "text": "Samverkan sker naturligt i alla utvecklingsinitiativ"
     },
     {
      "namn": "Transformerad",
      "text": "Organisationen är byggd för att integrera olika perspektiv löpande"
     }
    ],
    "intern": [
     "Starta små tvärfunktionella arbetsgrupper för utvalda initiativ och låt dem testa nya arbetssätt.",
     "Skapa fasta forum där olika funktioner möts regelbundet för att utbyta insikter och gemensamt lösa problem.",
     "Koppla tvärfunktionella arbetssätt till projektmodeller och belöningssystem, och reflektera över vad som driver samarbete.",
     "Dokumentera arbetssättet som intern standard och sprid det externt – bjud in andra till lärande utbyte."
    ],
    "extern": [
     "Anlita facilitator för första tvärfunktionella workshopen kring ett gemensamt mål.",
     "Ta in hjälp för att utforma verktyg och rutiner för lärande samverkan (t.ex. design thinking).",
     "Låt extern aktör utvärdera er samarbetskultur och ge återkoppling på förbättringsmöjligheter.",
     "Delta i nätverk eller forskningsprojekt om gränsöverskridande samverkan."
    ],
    "atgard": {
     "Ja": [
      "Starta tvärfunktionella möten kring ett gemensamt tema. Fokusera på att förstå varandras perspektiv och utmaningar.",
      "Etablera ett stående forum där olika funktioner möts regelbundet för att dela insikter och utveckla gemensamma mål.",
      "Integrera tvärfunktionell samverkan i projektmodeller och planering. Säkerställ att lärande dokumenteras och sprids.",
      "Dela erfarenheter externt genom nätverk eller partnerskap. Visa hur tvärfunktionell samverkan skapar lärande och innovation."
     ],
     "Fortsätt": [
      "Fortsätt med nuvarande samverkan men lägg in korta reflektioner om vad som hindrar eller stärker lärandet.",
      "Fortsätt med forumet men fokusera på att stärka kopplingen mellan lärdomar och beslut.",
      "Fortsätt utveckla arbetssättet och följ upp hur det påverkar kvalitet, engagemang och innovationskraft.",
      "Fortsätt och förvalta samverkanskulturen; stötta nya medarbetare i att förstå logiken bakom arbetssättet."
     ],
     "Utred": [
      "Kartlägg vilka funktioner som behöver samverka och vilka hinder som finns i dagens struktur.",
      "Utred vilka forum eller metoder som fungerar bäst för lärande mellan funktioner.",
      "Utred var samverkan fortfarande är beroende av personliga initiativ och föreslå lösningar.",
      "Utvärdera hur er modell kan spridas till andra delar av organisationen eller samarbetspartner."
     ],
     "Vänta": [
      "Vänta tills pågående initiativ har avslutats och använd erfarenheterna som startpunkt.",
      "Avvakta med att skapa nya forum, men följ upp hur mycket samverkan som sker spontant.",
      "Vänta tills befintliga projekt avslutats, men samla in lärdomar för framtida arbetssätt.",
      "Vänta tills resurser finns att sprida arbetssättet brett."
     ],
     "Nej": [
      "Om ni väljer bort frågan, dokumentera varför samverkan inte prioriteras just nu och när den kan tas upp igen.",
      "Avstå bara om befintliga strukturer redan stödjer tvärfunktionellt lärande. Förklara beslutet öppet.",
      "Om samverkan minskas, förtydliga hur ni ändå säkerställer lärande mellan funktioner.",
      "Reflektera över riskerna med att pausa samverkan och hur det påverkar lärande och engagemang."
     ]
    }
   },
   {
    "id": 3,
    "namn": "Strategiskt ledarskap för förnyelse",
    "vad": "Förmågan att visa riktning, prioritera långsiktigt och ge legitimitet åt förnyelse",
    "syfte": "För att säkerställa att innovation är förankrad i ledningen och blir en del av organisationens strategiska agenda",
    "nivaer": [
     {
      "namn": "Omedveten",
      "text": "Innovation ses som operativt eller perifert"
     },
     {
      "namn": "Konceptuell",
      "text": "Ledningen uttrycker stöd för innovation men är inte aktivt involverad"
     },
     {
      "namn": "Definierad",
      "text": "Utveckling och förnyelse har formell förankring i ledningsarbetet"
     },
     {
      "namn": "Integrerad",
      "text": "Ledningen följer upp och tar beslut om innovationsarbete löpande"
     },
     {
      "namn": "Transformerad",
      "text": "Ledning och styrelse tar ett systematiskt, långsiktigt ansvar för strategisk förnyelse"
     }
    ],
    "intern": [
     "Skapa en stående punkt om innovationsklimat och framtidsperspektiv på ledningsmöten.",
     "Identifiera och kommunicera hur strategiska utmaningar kopplar till behov av förnyelse och lärande.",
     "Etablera innovationsnyckeltal eller utse ambassadörer i ledningsgruppen för att hålla lärande och riktning levande.",
     "Integrera långsiktig förnyelse i alla styrelse- och ledningsprocesser och dela erfarenheter i omvärlden."
    ],
    "extern": [
     "Ta in stöd för att leda workshop om VUCA och strategiskt lärande i ledningen.",
     "Anlita coach för scenarioplanering och reflekterande strategiarbete.",
     "Låt extern facilitator utvärdera ledningsgruppens arbete kring förnyelse.",
     "Dela erfarenheter nationellt eller internationellt och bidra i policy- eller forskningsforum."
    ],
    "atgard": {
     "Ja": [
      "Skapa utrymme i ledningsgruppen för att diskutera framtid, lärande och förändringens drivkrafter.",
      "Identifiera hur utveckling bidrar till affärsmål och kommunicera kopplingen till organisationen.",
      "Etablera tydliga roller, mål och forum för att följa upp innovationsarbete i ledningen.",
      "Dela erfarenheter internt och externt om hur strategiskt ledarskap kan skapa lärande i osäkra lägen."
     ],
     "Fortsätt": [
      "Fortsätt nuvarande arbete men lägg in regelbunden reflektion om långsiktig riktning.",
      "Fortsätt utveckla strategiska mål men följ upp hur de inspirerar lärande och förnyelse.",
      "Fortsätt driva strategiska initiativ men bygg in tid för reflektion kring vad ni lär er.",
      "Fortsätt förvalta förnyelsearbetet; integrera reflektion och lärande i ordinarie ledningsprocesser."
     ],
     "Utred": [
      "Kartlägg hur ledningen idag arbetar med utveckling och var frågor om framtid hanteras.",
      "Utred vilka delar av strategiarbetet som främjar respektive hindrar innovation.",
      "Utred hur ledningsgruppen kan stärka sin förmåga att prioritera långsiktigt mitt i vardagsbeslut.",
      "Utvärdera hur ert arbetssätt kan skalas till andra delar av organisationen eller partners."
     ],
     "Vänta": [
      "Vänta tills pågående strategiprocesser är avslutade, men notera behov av längre perspektiv.",
      "Avvakta tills pågående omorganisation eller planperiod är färdig, men samla lärdomar.",
      "Vänta tills planerade strategiska förändringar stabiliserats.",
      "Vänta tills ni har resurser att dela och sprida erfarenheter på ett hållbart sätt."
     ],
     "Nej": [
      "Dokumentera varför ni väljer bort frågan och hur ni kompenserar för brist på framtidsfokus.",
      "Om fokus ligger på drift, tydliggör hur ni ändå säkerställer reflektion kring förnyelse.",
      "Dokumentera varför ni avstår från att utveckla förnyelsearbetet nu och när frågan tas upp igen.",
      "Reflektera över konsekvenserna av att pausa utvecklingen av strategiskt ledarskap."
     ]
    }
   },
   {
    "id": 4,
    "namn": "Förankringsförmåga",
    "vad": "Förmågan att skapa engagemang och mandat hos medarbetare",
    "syfte": "För att innovationer ska få genomslag i hela organisationen och inte fastna som sidoprojekt",
    "nivaer": [
     {
      "namn": "Omedveten",
      "text": "Innovation är något några få arbetar med vid sidan av"
     },
     {
      "namn": "Konceptuell",
      "text": "Det finns en ambition, men den är inte kopplad till mandat eller tid"
     },
     {
      "namn": "Definierad",
      "text": "Roller, ansvar och resurser är delvis fördelade"
     },
     {
      "namn": "Integrerad",
      "text": "Drivkrafter, mål och mandat är tydligt integrerade i styrning och HR"
     },
     {
      "namn": "Transformerad",
      "text": "Innovation är en del av uppdraget för alla medarbetare"
     }
    ],
    "intern": [
     "Identifiera hinder och möjligheter för medarbetares engagemang i utvecklingsarbete.",
     "Genomför dialogmöten där medarbetare kan dela idéer och förslag, och samla lärdomar.",
     "Utse interna ambassadörer för innovationsarbete och följ upp hur deras initiativ påverkar lärandet i organisationen.",
     "Sprid framgångsrika exempel på engagemang och utveckla former för kollegialt lärande."
    ],
    "extern": [
     "Ta in processledning för att utforska kultur och engagemang i förändring.",
     "Anlita facilitator för workshops om motivation, delaktighet och ägarskap.",
     "Ta stöd för att bygga strukturer för lärande och delaktighet i styrning och HR.",
     "Bjud in forskare eller experter för att knyta engagemang till långsiktiga mål."
    ],
    "atgard": {
     "Ja": [
      "Skapa dialog med medarbetare om vad förnyelse betyder i deras vardag. Lyssna efter hinder och drivkrafter.",
      "Anordna en workshop där medarbetare kan bidra med idéer kring hur ni stärker ägarskap i förändring.",
      "Skapa en struktur för ambassadörer eller interna förebilder som sprider lärande och engagemang.",
      "Visa hur engagemanget bidrar till organisationens lärande och resultat. Dela exempel internt och externt."
     ],
     "Fortsätt": [
      "Fortsätt nuvarande kommunikation men lägg till korta reflektioner om lärande och engagemang.",
      "Fortsätt med insamling av idéer, men följ upp vad som leder till handling och lärande.",
      "Fortsätt följa upp hur era ambassadörer verkar och sprider erfarenheter i organisationen.",
      "Fortsätt förvalta kulturen av delaktighet; stöd nya medarbetare att förstå dess värde."
     ],
     "Utred": [
      "Kartlägg vilka faktorer som påverkar motivation och delaktighet i utvecklingsarbete.",
      "Utred hur mandat, ansvar och tid påverkar engagemang i förnyelsearbete.",
      "Utred hur ledarskapet kan stötta engagemang i vardagen utan nya roller.",
      "Utvärdera hur modellen för engagemang kan spridas till andra delar av organisationen."
     ],
     "Vänta": [
      "Vänta tills andra förändringsinitiativ har landat, men håll frågan levande i samtal.",
      "Avvakta med nya initiativ, men observera hur befintliga forum fungerar.",
      "Vänta tills pågående initiativ är utvärderade, men notera vad som stärker engagemang.",
      "Vänta tills resurser finns för att bredda spridningen, men säkra kontinuitet i arbetet."
     ],
     "Nej": [
      "Dokumentera varför engagemang inte prioriteras just nu och när frågan ska tas upp igen.",
      "Om ni väljer bort förankring, förklara hur ni ändå säkrar delaktighet i beslut.",
      "Dokumentera varför initiativet pausas och hur lärdomarna tas till vara.",
      "Reflektera över riskerna med att minska medarbetarinflytandet och dokumentera skälen."
     ]
    }
   },
   {
    "id": 5,
    "namn": "Datadriven innovation",
    "vad": "Förmågan att fatta beslut grundade i fakta och insikter",
    "syfte": "För att innovationer ska prioriteras och implementeras baserat på verkliga behov och mätbara effekter",
    "nivaer": [
     {
      "namn": "Omedveten",
      "text": "Data används reaktivt eller inte alls"
     },
     {
      "namn": "Konceptuell",
      "text": "Det finns en ambition, men få verktyg eller metoder"
     },
     {
      "namn": "Definierad",
      "text": "Strukturerad datainsamling sker inom vissa områden"
     },
     {
      "namn": "Integrerad",
      "text": "Data används proaktivt för beslut och prioriteringar"
     },
     {
      "namn": "Transformerad",
      "text": "Data är en strategisk tillgång som driver lärande och innovation"
     }
    ],
    "intern": [
     "Identifiera vilka datamängder som redan finns tillgängliga och vilka som saknas för lärande.",
     "Skapa rutiner för att samla och strukturera data i prioriterade områden, och pröva hur de kan ge insikt.",
     "Använd data proaktivt i beslutsfattande och diskutera hur de påverkar era val och prioriteringar.",
     "Dokumentera hur data används strategiskt för lärande och innovation och dela goda exempel internt."
    ],
    "extern": [
     "Anlita stöd för att sätta upp enkla verktyg för datainsamling och reflektion.",
     "Ta hjälp för att bygga datadrivna insiktsmodeller för lärande och beslut.",
     "Engagera extern analysresurs eller AI-expert för fördjupad mönsteranalys.",
     "Delta i bransch- eller forskningsnätverk kring datadriven innovation."
    ],
    "atgard": {
     "Ja": [
      "Identifiera vilka data ni redan har tillgång till och vad de kan lära er om verksamheten.",
      "Sätt upp enkel rutin för att samla och visualisera data kopplad till pågående initiativ. Diskutera vad ni lär er.",
      "Etablera processer för att använda data aktivt i analys, prioritering och reflektion kring resultat.",
      "Visa hur data bidrar till lärande och strategiska beslut. Dela exempel internt och i nätverk."
     ],
     "Fortsätt": [
      "Fortsätt samla data men lägg till reflektioner om vad siffrorna faktiskt betyder för besluten.",
      "Fortsätt använda data i mindre projekt, men dokumentera lärdomar för framtida användning.",
      "Fortsätt med datadrivet arbetssätt men lägg fokus på att dela insikter mellan team.",
      "Fortsätt förvalta arbetssättet; håll fokus på kvalitet, transparens och lärandekultur."
     ],
     "Utred": [
      "Kartlägg hur data används idag och vilka beslut som saknar faktabaserat underlag.",
      "Utred var data kan göra störst skillnad för att förbättra beslutsfattande och lärande.",
      "Utred vilka hinder som finns för att använda data i tvärfunktionellt lärande.",
      "Utvärdera hur datadrivna insikter kan bidra till lärande i andra organisationer eller projekt."
     ],
     "Vänta": [
      "Vänta tills ni har en tydligare bild av vilka frågor som kan stärkas med data.",
      "Avvakta med nya datainitiativ tills ni har färdigställt basstrukturer för insamling.",
      "Vänta tills pilotprojekt har utvärderats, men följ upp vilka beslut som byggde på fakta.",
      "Vänta tills resurser finns för bred delning av erfarenheter, men säkra kontinuitet."
     ],
     "Nej": [
      "Om ni avstår, dokumentera varför och säkerställ att beslut inte enbart bygger på magkänsla.",
      "Om datainsamling pausas, notera konsekvenser för utveckling och beslut.",
      "Dokumentera varför datadrivet arbete pausas och hur det påverkar er förnyelseförmåga.",
      "Reflektera över varför datadriven utveckling pausas och hur ni bevarar insiktskapacitet."
     ]
    }
   },
   {
    "id": 6,
    "namn": "Test- och lärförmåga",
    "vad": "Förmågan att snabbt pröva och lära i liten skala",
    "syfte": "För att minska risker, undvika felinvesteringar och bygga en kultur av lärande och kontinuerlig förbättring",
    "nivaer": [
     {
      "namn": "Omedveten",
      "text": "Utveckling sker som engångsinsatser och lanseringar"
     },
     {
      "namn": "Konceptuell",
      "text": "Vi diskuterar fail-fast men saknar praktik"
     },
     {
      "namn": "Definierad",
      "text": "Det finns metoder för tester men de används sällan"
     },
     {
      "namn": "Integrerad",
      "text": "Kundtester och iterativa arbetssätt är standard"
     },
     {
      "namn": "Transformerad",
      "text": "Kultur och struktur stöder hypotesdrivet arbetssätt i hela organisationen"
     }
    ],
    "intern": [
     "Välj en idé och gör ett enkelt test med användare för att se vad ni lär er – inte bara om den fungerar.",
     "Skapa en rutin för att alltid testa nya idéer i liten skala innan större beslut.",
     "Bygg ett bibliotek med erfarenheter från tidigare tester så att lärandet blir tillgång, inte minne.",
     "Dela era test- och lärmetoder internt och utbilda andra team i hur man lär snabbare genom test."
    ],
    "extern": [
     "Be extern partner leda en “fail fast”-workshop för att träna små experiment.",
     "Ta in stöd för att utveckla metoder för prototypande och feedback.",
     "Anlita aktör som hjälper er att mäta lärande och nytta i tidiga tester.",
     "Låt innovationspartners eller forskare utvärdera er testkultur och föreslå nästa steg."
    ],
    "atgard": {
     "Ja": [
      "Genomför ett enkelt test i liten skala för att se vad ni lär er – inte om idén ”fungerar”.",
      "Inför rutin att varje utvecklingsidé testas i liten skala innan beslut. Samla lärdomar i gemensamt format.",
      "Etablera en kultur där hypotesdrivet arbetssätt används i flera delar av organisationen.",
      "Dela ert arbetssätt i nätverk eller samarbeten för att bidra till gemensamt lärande om testkultur."
     ],
     "Fortsätt": [
      "Fortsätt nuvarande arbete men lägg in kort reflektion efter varje försök: vad lärde vi oss?",
      "Fortsätt med testning i projekt men följ upp hur lärdomarna delas mellan team.",
      "Fortsätt använda testmetoderna men skapa forum för att dela erfarenheter och misstag.",
      "Fortsätt förvalta lärandekulturen – håll kvar rytmen i test och reflektion."
     ],
     "Utred": [
      "Kartlägg hur nya idéer idag prövas, vem som gör det och vad som händer med resultaten.",
      "Utred hur testresultat används i beslutsprocessen och vilka som tar del av dem.",
      "Utred vilka hinder som finns för att sprida test- och lärsätt till fler funktioner.",
      "Utred hur erfarenheterna kan skalas till partners eller andra delar av organisationen."
     ],
     "Vänta": [
      "Vänta tills ni har tydliggjort syftet med testandet, men dokumentera vilka frågor som behöver prövas.",
      "Avvakta med fler tester tills pågående pilotprojekt är analyserade, men samla reflektioner.",
      "Vänta tills större förändringar är stabila men håll testmetodiken aktiv i mindre skala.",
      "Vänta tills resurser finns att sprida modellen men dokumentera lärdomar löpande."
     ],
     "Nej": [
      "Notera varför ni väljer bort testning nu och vad som skulle krävas för att återuppta lärande i liten skala.",
      "Dokumentera varför testandet pausas och hur det påverkar er förmåga att utvecklas.",
      "Klargör varför testkulturen inte prioriteras just nu och hur ni bevarar lärande i drift.",
      "Reflektera över riskerna med att pausa testkulturen och hur ni skyddar lärandeförmågan."
     ]
    }
   },
   {
    "id": 7,
    "namn": "Process- och styrförmåga",
    "vad": "Förmågan att styra olika typer av arbete på rätt sätt",
    "syfte": "För att styra både drift och utveckling effektivt och undvika att innovation kvävs av standardlogik",
    "nivaer": [
     {
      "namn": "Omedveten",
      "text": "Organisationen ser utveckling och drift som motsättningar"
     },
     {
      "namn": "Konceptuell",
      "text": "Vi diskuterar behovet av balans men har inte format strukturer för det"
     },
     {
      "namn": "Definierad",
      "text": "Det finns principer för hur resurser ska fördelas mellan drift och innovation"
     },
     {
      "namn": "Integrerad",
      "text": "Organisationen arbetar aktivt med olika styrprinciper för drift och utveckling"
     },
     {
      "namn": "Transformerad",
      "text": "Vi har tydlig fördelning av roller, styrning och kultur för samtidig utveckling och drift"
     }
    ],
    "intern": [
     "Identifiera var dagens mätetal och rutiner missgynnar innovation eller lärande.",
     "Skapa parallella mål för drift respektive utveckling i ett pilotprojekt och analysera effekterna.",
     "Integrera utforskande/utförande-logik i ordinarie styrprocesser och följ upp vad det betyder för tempo och engagemang.",
     "Dokumentera ert styrsätt som ramverk och bidra till gemensam lärande praxis i nätverk."
    ],
    "extern": [
     "Ta in hjälp för att analysera styrmodeller och föreslå dubbel logik.",
     "Anlita stöd för att utveckla balanserad styrning som främjar lärande.",
     "Be extern part jämföra er styrning med andra organisationer.",
     "Dela erfarenheter i branschforum och bidra till standarder för adaptiv styrning."
    ],
    "atgard": {
     "Ja": [
      "Identifiera var nuvarande processer och styrning hindrar utveckling och lärande.",
      "Testa parallella mål eller processer för drift och utveckling i ett pilotprojekt.",
      "Inför anpassade styrprinciper för olika typer av arbete och följ upp hur det påverkar engagemang och resultat.",
      "Dela erfarenheter av hur ni kombinerar stabilitet och lärande i styrningen, internt och i nätverk."
     ],
     "Fortsätt": [
      "Fortsätt nuvarande arbetssätt men lägg in reflektion om hur styrningen påverkar utvecklingsförmågan.",
      "Fortsätt med pilot men säkerställ att lärdomar dokumenteras och diskuteras i ledningsgruppen.",
      "Fortsätt utveckla dubbel styrning och integrera reflektion om lärande i uppföljningen.",
      "Fortsätt förvalta och förfina er modell; håll kvar rytmen i reflektion och förbättring."
     ],
     "Utred": [
      "Kartlägg hur beslut tas och var det finns spänningar mellan effektivitet och lärande.",
      "Utred hur ni kan skapa mer flexibla processer utan att tappa kontroll.",
      "Utred hur erfarenheter från utvecklingsprojekt kan återföras till ordinarie styrning.",
      "Utred hur ert styrsätt kan spridas eller inspirera andra delar av organisationen."
     ],
     "Vänta": [
      "Vänta tills nuvarande styrmodell har utvärderats, men samla observationer under tiden.",
      "Avvakta tills pågående förändringsprojekt är avslutade, men följ upp vad de lär er.",
      "Vänta tills pågående styrjusteringar är utvärderade, men observera effekterna på lärandet.",
      "Vänta tills resurser finns för bred spridning men håll fast vid strukturer för reflektion."
     ],
     "Nej": [
      "Dokumentera varför ni väljer bort frågan och vilka konsekvenser det får för lärande och utveckling.",
      "Om ni pausar arbetet, notera vilka frågor som behöver återupptas för att inte tappa rörelse framåt.",
      "Dokumentera skälen till att ni avstår från fortsatt styrutveckling och hur det påverkar innovation.",
      "Reflektera över riskerna med att stanna upp styrutvecklingen och dokumentera lärdomarna."
     ]
    }
   },
   {
    "id": 8,
    "namn": "Affärsmodellsutforskning",
    "vad": "Förmågan att hitta nya sätt att skapa, fånga och erbjuda värde",
    "syfte": "För att organisationen ska kunna anpassa sig till nya marknader och hitta hållbara intäktsströmmar",
    "nivaer": [
     {
      "namn": "Omedveten",
      "text": "Vi ser vår affärsmodell som statisk och självklar"
     },
     {
      "namn": "Konceptuell",
      "text": "Vi överväger andra affärsmodeller men saknar metodik"
     },
     {
      "namn": "Definierad",
      "text": "Vi har verktyg för att utveckla och testa alternativa modeller"
     },
     {
      "namn": "Integrerad",
      "text": "Prototypande och experiment kopplat till affärsmodell sker löpande"
     },
     {
      "namn": "Transformerad",
      "text": "Sökande efter nya modeller är en del av innovationsstrategin"
     }
    ],
    "intern": [
     "Gör en nulägesanalys av nuvarande affärsmodell och reflektera över dess antaganden.",
     "Identifiera alternativa intäktslogiker och testa dem i liten skala tillsammans med kunder.",
     "Genomför återkommande experiment med nya erbjudanden och analysera vad ni lär av varje försök.",
     "Dokumentera och sprid er metod för affärsutforskning i organisationen och i samarbeten."
    ],
    "extern": [
     "Låt facilitator leda workshop om nya affärsmodeller i er bransch.",
     "Ta hjälp att testa idéer med kunder genom intervjuer eller mock-ups.",
     "Låt extern part stödja strukturerade experiment (Lean Startup m.fl.).",
     "Dela lärdomar i bransch- eller forskningsnätverk om affärsmodeller."
    ],
    "atgard": {
     "Ja": [
      "Gör en enkel kartläggning av hur ni skapar, levererar och fångar värde idag. Diskutera antagandena bakom modellen.",
      "Välj ett erbjudande och testa en alternativ värde- eller intäktslogik i liten skala.",
      "Inför återkommande reflektion i ledningsgruppen kring nya affärslogiker och lärdomar från pilotprojekt.",
      "Dela ert arbetssätt för affärsmodellinnovation i nätverk eller samarbeten för att bidra till gemensamt lärande."
     ],
     "Fortsätt": [
      "Fortsätt med befintlig modell men lägg in reflektion om vad som skulle kunna förändras på sikt.",
      "Fortsätt utveckla testet och följ upp vilka lärdomar ni får om kundbehov och värde.",
      "Fortsätt experimentera med nya erbjudanden och följ upp lärandet i organisationen.",
      "Fortsätt utveckla era modeller men håll fast vid reflektion kring värdeskapande, inte bara tillväxt."
     ],
     "Utred": [
      "Kartlägg vilka yttre faktorer (kundbeteende, teknik, regelverk) som kan påverka er affärslogik.",
      "Utred vilka delar av affärsmodellen som är mest känsliga för förändring.",
      "Utred hur nya affärsmodeller kan integreras i styrning och målstruktur.",
      "Utred hur ert sätt att arbeta kan spridas till partners eller nya affärsområden."
     ],
     "Vänta": [
      "Vänta tills ni har samlat mer information om marknad och omvärld, men dokumentera möjliga risker.",
      "Avvakta tills nuvarande satsningar utvärderats men samla idéer från kunder eller partners.",
      "Vänta tills pilotprojekt är avslutade men analysera resultaten tillsammans med teamen.",
      "Vänta tills resurser finns att bredda arbetet men håll reflektionen levande i ledningen."
     ],
     "Nej": [
      "Dokumentera varför affärsmodellen inte ses som prioriterad just nu och vad som skulle krävas för att återuppta arbetet.",
      "Om ni väljer bort utforskning, beskriv varför och hur ni säkrar omvärldsbevakning ändå.",
      "Dokumentera varför ni pausar vidare utveckling och vilka möjligheter som riskerar att gå förlorade.",
      "Reflektera över följderna av att inte utforska nya värden och dokumentera resonemangen."
     ]
    }
   },
   {
    "id": 9,
    "namn": "Kompetensförsörjning",
    "vad": "Förmågan att säkra rätt förmåga även utanför egna nätverk",
    "syfte": "För att organisationen ska kunna växa och utvecklas i takt med nya krav och teknologier",
    "nivaer": [
     {
      "namn": "Omedveten",
      "text": "Kompetens ses som en HR-fråga"
     },
     {
      "namn": "Konceptuell",
      "text": "Kompetensbehov identifieras men inte systematiskt"
     },
     {
      "namn": "Definierad",
      "text": "Kompetenskartläggning görs regelbundet"
     },
     {
      "namn": "Integrerad",
      "text": "Kompetensförsörjning är strategisk del av utveckling"
     },
     {
      "namn": "Transformerad",
      "text": "Organisationen söker aktivt nya partners och lärandemiljöer utanför sitt nätverk"
     }
    ],
    "intern": [
     "Kartlägg vilken kompetens som är kritisk för utveckling och var den finns idag.",
     "Utveckla en plan för intern kompetensutveckling och lärande mellan team.",
     "Etablera samarbeten med externa aktörer som kompletterar era kompetensbehov.",
     "Dokumentera er strategi för kompetensförsörjning och sprid lärdomar om hur partnerskap stärker er utveckling."
    ],
    "extern": [
     "Ta hjälp att analysera framtida kompetensbehov och lärandegap.",
     "Anlita stöd för att identifiera nya kompetensspår och samarbeten.",
     "Be extern part hjälpa till att bygga partnerskap för långsiktig kompetens.",
     "Delta i nationella eller internationella nätverk för kompetens och lärande."
    ],
    "atgard": {
     "Ja": [
      "Kartlägg vilken kompetens som är avgörande för utveckling och var den finns idag.",
      "Gör en plan för intern kunskapsöverföring mellan team och funktioner.",
      "Etablera partnerskap med externa aktörer för att stärka kompetens och innovation.",
      "Dela erfarenheter av hur ni utvecklar kompetens genom samverkan i nätverk och projekt."
     ],
     "Fortsätt": [
      "Fortsätt med befintlig bemanning men lägg in reflektion om framtida kompetensbehov.",
      "Fortsätt med befintliga lärinsatser men följ upp hur de bidrar till verksamhetsmål.",
      "Fortsätt samarbeten men lägg in rutiner för gemensam reflektion och lärande.",
      "Fortsätt och förvalta partnerskapen; håll fokus på lärande och ömsesidigt värde."
     ],
     "Utred": [
      "Utred vilka kompetenser som saknas för att möta nya krav eller förändrad teknik.",
      "Utred hur lärande och kompetensutveckling kan integreras i vardagen snarare än ske vid sidan av.",
      "Utred hur samarbeten och interna program kan kopplas till strategi och styrning.",
      "Utred hur er modell kan spridas till andra delar av organisationen eller externa nätverk."
     ],
     "Vänta": [
      "Vänta tills pågående organisationsförändringar är klara men samla idéer om framtida behov.",
      "Avvakta tills nuvarande utbildningsinsatser är utvärderade men dokumentera lärdomarna.",
      "Vänta tills pågående samarbeten har utvärderats, men samla erfarenheter.",
      "Vänta tills resurser finns för bredare satsning men håll dialogen med nyckelaktörer levande."
     ],
     "Nej": [
      "Dokumentera varför kompetensfrågan inte prioriteras nu och när den ska tas upp igen.",
      "Om ni väljer bort utvecklingsinsatser, förtydliga hur ni ändå säkrar långsiktig kompetens.",
      "Dokumentera varför partnerskap pausas och hur ni hanterar kunskapsbehov under tiden.",
      "Reflektera över riskerna med att pausa kompetensutveckling och hur det påverkar lärandet."
     ]
    }
   },
   {
    "id": 10,
    "namn": "Förändringsledning",
    "vad": "Förmågan att leda människor och processer genom osäkerhet",
    "syfte": "För att skapa engagemang och trygghet i förändring och säkerställa att nödvändiga initiativ blir genomförda",
    "nivaer": [
     {
      "namn": "Omedveten",
      "text": "Förändring sker ad hoc, utan ledarskap eller process"
     },
     {
      "namn": "Konceptuell",
      "text": "Vi inser behovet men saknar gemensamma arbetssätt"
     },
     {
      "namn": "Definierad",
      "text": "Det finns definierade roller och processer för förändringsledning"
     },
     {
      "namn": "Integrerad",
      "text": "Förändringsledning är en naturlig del i alla utvecklingsinitiativ"
     },
     {
      "namn": "Transformerad",
      "text": "Kultur och struktur gör förändring till vardag"
     }
    ],
    "intern": [
     "Lista pågående förändringar och analysera varför de lyckats eller misslyckats – vad lär vi oss?",
     "Skapa ett gemensamt arbetssätt för små förändringsinitiativ (t.ex. checklista eller mall).",
     "Integrera förändringsledning i projektmodeller och utvecklingsprocesser och följ upp effekten.",
     "Dela goda exempel i organisationen och bygg en kultur som lär av förändring."
    ],
    "extern": [
     "Ta in processledare för att facilitera lärande av tidigare förändringscase.",
     "Låt coach träna chefer i reflekterande förändringsledning.",
     "Ta hjälp att utveckla indikatorer för förändringsklimat och engagemang.",
     "Bjud in externa experter för att stress-testa er förändringskultur mot framtiden."
    ],
    "atgard": {
     "Ja": [
      "Samla erfarenheter från tidigare förändringar och prata om vad ni lärde er – inte bara vad som gick fel.",
      "Skapa en enkel metod för små förändringar med tydliga steg, syfte och reflektion.",
      "Integrera förändringsledning i projekt- och styrmodeller. Gör reflektion och lärande till en del av processen.",
      "Dela era arbetssätt för lärande förändringsledning internt och i nätverk."
     ],
     "Fortsätt": [
      "Fortsätt pågående förändring men avsätt tid för korta reflektioner efter varje steg.",
      "Fortsätt använda er metod men följ upp hur den påverkar engagemang och tempo.",
      "Fortsätt arbetet men skapa forum där chefer och medarbetare delar erfarenheter av förändring.",
      "Fortsätt förvalta er modell och håll fokus på reflektion och delning av lärdomar."
     ],
     "Utred": [
      "Kartlägg hur förändringar drivs idag och var kommunikationen eller engagemanget brister.",
      "Utred vilka delar av organisationen som saknar stöd i förändringsarbete och vad som krävs.",
      "Utred hur förändringsarbetet kan bli mer lärandeorienterat och mindre reaktivt.",
      "Utred hur ert sätt att arbeta kan inspirera eller spridas till andra organisationer."
     ],
     "Vänta": [
      "Vänta tills nuvarande förändringar stabiliserats men dokumentera observationer.",
      "Avvakta tills pågående initiativ är avslutade men håll kvar fokus på lärande.",
      "Vänta tills ny modell testats i mindre skala men följ upp resultaten.",
      "Vänta tills resurser finns för spridning men behåll strukturen för reflektion i vardagen."
     ],
     "Nej": [
      "Dokumentera varför förändringsledning inte prioriteras just nu och vilka risker det medför.",
      "Om ni väljer bort arbetet, förklara hur ni ändå bevarar lärande i förändringar.",
      "Klargör varför förändringsstödet pausas och hur ni hanterar effekterna på kultur och tillit.",
      "Reflektera över riskerna med att pausa förändringsarbete och dokumentera lärdomarna."
     ]
    }
   },
   {
    "id": 11,
    "namn": "System- och teknologiförståelse",
    "vad": "Förmågan att se samband mellan teknik, processer och mål",
    "syfte": "För att kunna fatta kloka beslut om investeringar, interoperabilitet och resurseffektivitet",
    "nivaer": [
     {
      "namn": "Omedveten",
      "text": "Teknik ses som en isolerad fråga"
     },
     {
      "namn": "Konceptuell",
      "text": "Vi förstår kopplingen mellan verksamhet och teknik men  analyserar den sällan"
     },
     {
      "namn": "Definierad",
      "text": "Vi har kompetens att analysera systemberoenden"
     },
     {
      "namn": "Integrerad",
      "text": "Systemtänkande präglar beslutsfattande"
     },
     {
      "namn": "Transformerad",
      "text": "Organisationen optimerar helheten och lär av sina beroenden"
     }
    ],
    "intern": [
     "Identifiera beroenden mellan teknik, process och mål i ett konkret projekt.",
     "Utbilda projektledare i grundläggande systemtänk och reflektion kring teknikens roll.",
     "Integrera teknologiska scenarier i strategisk planering och följ upp hur de påverkar arbetet.",
     "Dokumentera och sprid arbetssätt för helhetssyn i beslutsfattande och lär av samverkan mellan teknik och människa."
    ],
    "extern": [
     "Ta hjälp att visualisera beroenden mellan teknik, process och mål.",
     "Anlita experter för risk- och beroendeanalyser ur systemperspektiv.",
     "Ta in stöd för att testa ny teknik i pilotskala och reflektera över utfall.",
     "Samarbeta i bransch- eller forskningsprojekt kring systemintegration och lärande."
    ],
    "atgard": {
     "Ja": [
      "Identifiera hur teknik, process och mål hänger ihop i ett konkret projekt. Diskutera vad som fungerar och inte.",
      "Utbilda team i hur tekniska beslut påverkar processer och mål. Använd ett konkret case som underlag.",
      "Inkludera teknik- och systemperspektiv i strategiska diskussioner och beslutsunderlag.",
      "Dela erfarenheter om hur ni integrerar teknik, process och mål i lärande och beslutsfattande."
     ],
     "Fortsätt": [
      "Fortsätt med nuvarande teknikanvändning men lyft reflektioner om hur den påverkar arbetssätt och lärande.",
      "Fortsätt befintlig utveckling men inkludera gemensamma reflektioner om teknikens roll i beslutsfattande.",
      "Fortsätt utveckla systemförståelsen men lägg till regelbundna genomgångar av samband och risker.",
      "Fortsätt förvalta helhetsperspektivet; uppmuntra andra att reflektera kring systemens konsekvenser."
     ],
     "Utred": [
      "Kartlägg vilka tekniska system som används, av vem och hur de stöder eller hindrar helhetssyn.",
      "Utred var det saknas kompetens för att förstå tekniska samband och vad som krävs för att stärka den.",
      "Utred hur samspel mellan teknik, människor och processer kan stärkas genom gemensamma rutiner.",
      "Utred hur ert arbetssätt kan spridas till samarbetspartners eller andra organisationer."
     ],
     "Vänta": [
      "Vänta tills nuvarande digitaliseringsinitiativ är avslutade men dokumentera insikter under tiden.",
      "Avvakta tills ni har översikt över pågående system, men samla input från användarna.",
      "Vänta tills nuvarande investeringar utvärderats men håll reflektionen levande i projekten.",
      "Vänta tills resurser finns för spridning men håll kvar kontinuerliga reflektioner i projekten."
     ],
     "Nej": [
      "Dokumentera varför teknikutveckling inte prioriteras nu och vilka effekter det får på lärande och effektivitet.",
      "Om ni väljer bort arbetet, säkra att någon ansvarar för tekniska beroenden i större projekt.",
      "Dokumentera varför ni avstår från vidare teknikutveckling och hur det påverkar helhetsperspektivet.",
      "Reflektera över riskerna med att pausa systemtänkandet och hur ni bevarar förståelsen för helheten."
     ]
    }
   }
  ],
  "omdome": [
   {
    "namn": "Omedveten",
    "text": "Organisationen befinner sig i ett tidigt skede av lärandeutveckling. Förnyelse sker ad hoc och styrs ofta av eldsjälar snarare än av struktur. Fokus bör ligga på att skapa gemensam förståelse för vad lärande innebär i praktiken och att etablera grundläggande rutiner för reflektion, uppföljning och kunskapsdelning."
   },
   {
    "namn": "Konceptuell",
    "text": "Insikten om behovet av lärande finns, men arbetssätt och ansvar är ännu otydliga. Initiativ pågår, men de saknar ofta koppling till ledningens prioriteringar eller till organisationens mål. Nästa steg är att omsätta ambition till praktik genom att testa enkla former för lärande arbetssätt i liten skala."
   },
   {
    "namn": "Definierad",
    "text": "Lärande är etablerat som en del av utvecklingsarbetet, men sker fortfarande inom begränsade områden. Roller, metoder och forum finns – nu handlar det om att öka tempo, systematik och tvärfunktionell spridning. Reflektion och mätning bör integreras i styrningen för att befästa lärandekulturen."
   },
   {
    "namn": "Integrerad",
    "text": "Organisationen präglas av reflektion, samverkan och kontinuerlig förbättring. Lärande sker naturligt i vardagen och genomsyrar beslutsfattande, ledarskap och innovation. Fokus framåt är att bevara dynamiken – att fortsätta utmana sig själv, dela erfarenheter externt och använda lärandet som strategisk konkurrensfördel."
   }
  ]
 }
};
