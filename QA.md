# Testprotokoll · 1.2.0 · 14 september 2026

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
