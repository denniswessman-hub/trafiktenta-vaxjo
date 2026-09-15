# Trafiktenta · Polisiärt arbete i trafikmiljö

[Öppna appen](https://denniswessman-hub.github.io/trafiktenta-vaxjo/)

Mobilanpassad tentaträning med **65 övningar från två nya huvudunderlag**, lärarsvar och 20 frågebilder. De 61 tidigare Växjöövningarna finns kvar som extra träning. Version 2.0.0, 15 september 2026.

## Underlag och svar

| Underlag | Omfattning | Lärarsvar |
| --- | --- | --- |
| Övningsfrågor inför Tentamen VT-22, med svarsmall-1.docx | 14 huvudfrågor → 25 delövningar; 6 bilder | Svarsmallen i samma fil |
| Tentamen Dk1 Polisiärt arbete i trafikmiljö-1.pdf | 21 frågeblock → 40 delövningar; 14 bilder | Den separata filen Tentamen VT 22 Rättningsmall-1.doc |
| Växjö 2023 | 20 huvudfrågor | Tidigare bearbetade svarsförslag |
| Växjö 2024 | 20 huvudfrågor | Tidigare bearbetade svarsförslag |

Dk1-PDF:n innehåller inget ifyllt facit. Den separata rättningsmallen har matchats mot datumet 4 mars 2022, fallen och den dubbla numreringen. Lärarnas svar återges separat från appens kommentarer utifrån dagens regler. Underlagens poänganvisningar återges som källtext och används inte för automatisk bedömning av fritext.

Dk1 kallar hastighetsblocket ”19” på sida 15 och ”20 a–c” på sida 16. Därefter följer ytterligare fråga 19 och 20 på sida 17. Appen skiljer dessa åt med sidreferenser. Frågorna har delats upp och formaterats för mobilen; bilder och svarsalternativ hör till respektive originalfråga.

## Träna

- Korta pass, hela tentor, ämnen, bildfrågor och minneskort utgår från de två nya underlagen.
- Skriv ett eget svar, jämför lärarnas svar och den aktuella kommentaren, och använd checklistan för egen bedömning.
- Förstora frågebilder i en dialog. ”Visa större” ger en rullbar bild för detaljer.
- Fråga Dk1 18 behåller originalets sex alternativ. Exakt de tre rätta alternativen måste väljas för full rättning.
- Repetition planeras efter 1, 3, 7, 14 eller 30 dagar; svåra frågor efter en dag.
- Filtrera frågebanken och framstegen per underlag. Växjö finns under extra träning och i filtren.
- Bokmärken, fritext, val, checklistor och upp till tio tidigare pass sparas i webbläsaren. Tidigare Växjöframsteg behåller sina ID:n.
- Exportera/importera en framstegsfil för att byta enhet. Ingen inloggning, spårning eller automatisk synkronisering.

Appen ger träningsresultat, inte officiella tentabetyg. Fritext rättas inte automatiskt. Efter en fullständig första laddning lagras även frågebilderna för offlinebruk; externa rättskällor behöver internet.

## Rättskällor

De nya övningarnas kommentarer kontrollerades den 15 september 2026. Växjömaterialets kontroll är från den 14 september. Ingen automatisk rättsbevakning sker. Se [granskningsanteckningarna](LEGAL-REVIEW.md) och källänkarna vid varje övning.

När fordonsdata saknas redovisas villkoren för lärarsvarets slutsats. Äldre kursrutiner, exempelvis svaret ”6 km/h”, skiljs från lagens hastighetsgräns. Interna polisiära rutiner har inte verifierats som aktuella. Historiska strategifrågor besvaras utifrån kursunderlaget.

## Bilder och källfiler

Endast frågebilder har extraherats ur de nya underlagen. Befintliga bildtexter/vattenstämplar har bevarats. Originaldokument, försättsblad och administrativ information läggs inte upp. Bildernas eventuella rättigheter tillhör respektive rättighetshavare; ingen ny licens för dem påstås. De äldre Växjötentornas blankettfrågor är fortsatt omarbetade textövningar.

## Utveckling och kontroll

Statisk HTML/CSS/JavaScript utan externa bibliotek. GitHub Pages publicerar repots rot. Lokal förhandsvisning kan köras med `python -m http.server`.

Kör `node tests.cjs`. Tester omfattar 126 unika övningar, källhänvisningar, lärarsvar, bildfiler/offlinecache, flervalsrättning, tillståndsmigrering och behörighetsgränser. Webbläsartester och begränsningar finns i [QA.md](QA.md).

`data.js` innehåller `exams`, `questions` och offentliga `sources`. `teacher` är källans svarstext, `answer` appens kommentar. `images` innehåller relativa sökvägar, alternativtext och dimensioner. Vanliga quiz har rätt svar i `choices[0]`; frågor med flera rätt har explicit `correct` med nollbaserade index. Ändra inte befintliga fråge-ID:n. Uppdatera version i data, HTML och service worker samt cachelistan när nya resurser läggs till.
