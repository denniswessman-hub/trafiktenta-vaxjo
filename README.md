# Trafiktenta · Växjö

Mobilanpassat, självständigt studiestöd med 61 övningar som täcker 40 huvudfrågor i tentorna 2023-05-31 och 2024-05-28. Den andra filen beskrevs som 2022 men är daterad 2024.

## Användning

Öva tio blandade frågor, välj en hel tenta eller ett ämne, skriv egna svar, jämför förklaringar och repetera svåra frågor. Quiz rättas automatiskt; fritext bedöms av användaren. Resultaten är träningsresultat och inga officiella tentabetyg. Framsteg och egna svar sparas endast i lokal webbläsarlagring. Offlinefunktion efter första lyckade laddningen; externa rättskällor kräver uppkoppling.

## Rättskällor och avgränsning

Kontrolldatum: 2026-09-08. Alla övningar länkar till offentliga rättskällor eller relevanta myndighetskällor. Ingen automatisk rättsbevakning sker. Frågebanken anger osäkerheter, preciserade frågor och förändrade regler. Gamla elevsvar är inte officiellt facit. Offentliga katalognummer ska inte förväxlas med polisens interna ordningsbotskoder. Blankettfrågor har bearbetats till textbaserade kontrollövningar; originalbilder, namn, personnummer och andra personuppgifter publiceras inte.

## Teknik och uppdatering

Statisk HTML/CSS/JavaScript utan externa bibliotek, spårning eller konto. Publicera från repots rot med GitHub Pages. För lokal förhandsvisning: valfri statisk HTTP-server, exempelvis `python -m http.server 8765`.

Innehåll finns i `data.js`; varje övning har år, originalfrågenummer, svarsförslag, källor och vid behov ändringsnotis. `choices[0]` är det rätta quizsvaret; ordningen slumpas i gränssnittet. Uppdatera innehållsversion, kontrolldatum och service worker-cache när materialet granskas på nytt.
