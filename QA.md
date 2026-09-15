# Testprotokoll · 2.0.0 · 15 september 2026

## Nya huvudunderlag

- 126 unika övningar: 25 VT22 + 40 Dk1 + 61 bevarade Växjöövningar. De 61 äldre posterna har jämförts med föregående gitversion: innehåll och ID:n är oförändrade; underlagsmetadata har lagts till.
- Alla 65 nya övningar har lärarsvar. Dk1-facit hämtades ur den separat funna rättningsmallen, som matchar datum, fall, bildfrågor, alternativ och originalets dubbla numrering. Wordfilernas källtext har extraherats separat från appens kommentarer.
- De 17 PDF-sidorna har renderats och granskats i översikter. Samtliga sex bilder ur Wordövningen har också inspekterats separat. 20 unika frågebilder är publiceringsresurser; alla referenser har kontrollerats.
- Hela VT22-passet (25/25) och hela Dk1-passet (40/40) har gåtts igenom i webbläsarens mobilvy 390 × 844. Lärarsvar finns efter avslöjande, alla 20 bilder har laddat med positiv originalbredd och ingen av frågesidorna har horisontell överrinning.
- De tre korrekta svaren på Dk1 18 ger 1/1 rätt. Två av tre ger 0/1. För många val och dubbletter avvisas i rättningsmodulens tester. De sex originalalternativen och facitindexen har verifierats.
- Fritext, flervalsval och en markerad checklista finns kvar efter omladdning. Lärarsvaret är dolt före avslöjande. Bedömningen ”Öva mer” går vidare till nästa fråga.
- Bilddialog, större bild och stängning har testats. Bildpasset innehåller 22 övningar som tillsammans använder de 20 unika bilderna.
- Snabbpassets tio frågor kommer enbart från de nya underlagen. Minneskort visar inga svarsalternativ. Bokmärkning och framstegsfilter fungerar.
- Växjö 2023 går att starta via den nedfällda extrasektionen och visar sitt äldre svarsförslag. Växjö 2024 kan väljas i framstegsöversikten. Tidigare framstegsformat migreras i kodtesterna.
- Rättslägessidan har kontrollerats vid 360 × 800 utan horisontell överrinning. Startsidan har inspekterats visuellt vid 390 × 844 och 1100 × 900; datorvyn visar de två tentorna sida vid sida. Inga konsolfel eller varningar under onlinetesterna.
- 48 offentliga källadresser svarade med HTTP 200. Tillgänglighet är separat från sakgranskningen i LEGAL-REVIEW.md.
- Offline: Chrome laddade om version 2.0.0 när den lokala servern var avstängd (stängd port verifierad). Lärarsvar och representativa frågebilder från både PDF och Word samt bildförstoring fungerade. Cachelistan omfattar 31 resurser, inklusive alla 20 bilder, och bildreferenserna kontrolleras i kodtestet.

## Testbegränsningar

Ingen fysisk iPhone eller Android användes. Offlineomladdning verifierades i Chrome, inte i alla webbläsare. Den mycket snabba automatiska Chrome-genomgången läste vissa bilders tillstånd innan laddningen var klar; det är inte belägg för trasiga bilder. Kontroller efter färdig laddning samt samtliga onlinetester användes för resultatet. Filimportens validering och återställning testades i kod; operativsystemets filväljare ingick inte. Ingen automatisk fritexträttning, officiell tentapoäng eller aktuell intern polisinstruktion verifieras av dessa tester.

---

## Tidigare protokoll · 1.2.0 · 14 september 2026

## Genomförda tester

- 61 unika övningar; samtliga 20 huvudfrågor per källtenta representerade; alla källnycklar giltiga.
- Repetitionsintervall 1/3/7/14/30 dagar, återställning efter svår fråga och hantering av äldre sparade svar.
- Ogiltiga sessions-ID:n och positioner avvisas; framsteg kan serialiseras och valideras tillbaka utan att testsvaret går förlorat.
- Tio gränsfall för B/B96/BE, inklusive 750/751 kg, exakt 3 500 och 4 250 kg samt ogiltiga värden.
- Webbläsare: fritext efter omladdning, nytt tomt försök, schemalagd repetition, återupptaget arkiverat pass, frågesökning och årsfilter.
- Webbläsare: fel och rätt quizsvar, resultat, överhoppad fråga och nytt pass med just den frågan, minneskort utan alternativ.
- Viktverktyget visar B vid 3 500 + 750 kg, BE vid 3 500 + 751 kg och avvisar nollvärde.
- Mobilvy 390 × 844 visuellt inspekterad. Rättslägessidan utan horisontell överrinning även vid 360 × 800. Inga fel i konsolloggen under onlinetesterna.
- Samtliga 33 då registrerade källadresser svarade med HTTP 200; därefter tillagd HD-adress för Krusegatan öppnades separat via webbsökningen.
- Offline: lyckad omladdning av ett pågående pass i vanlig Chrome efter att den lokala HTTP-servern stängts av. Den inbyggda testwebbläsarens offlineomladdning misslyckades; resultatet gäller därför Chrome, inte alla webbläsare.

## Avgränsning

Ingen fysisk iPhone/Android-enhet testades. Filimportens validering och återställning testades i kod; operativsystemets filväljare testades inte. Ingen automatisk fritexträttning eller officiell tentapoäng erbjuds. Installation som hemskärmsapp och framtida webbläsarversioner ingår inte i testet.
