# Dialogverktyget

Självskattning av mottagningsförmåga och agency inför förändring, utvecklat för See-fasen i Smart Built Boost.
Publiceras på https://boost.mickla.se

© Engströms Mickla AB 2026

## Struktur

- `index.html`: sidan
- `js/content.js`: **allt innehåll**, alla texter och gränsvärden. Redigera texter här, inte i koden.
  - `boost`: Boost-specifika texter (påståenden, tolkningar, regler för styrka och glapp)
  - `matchup`: förmågor, nivåer, rekommendationer och åtgärdsförslag från MatchUp-verktyget v1.0
- `js/app.js`: logiken
- `css/style.css`: utseendet
- `vendor/`: jsPDF och svg2pdf.js (MIT-licens), lokalt för att inga besökare ska skickas till tredje part

Ingen data lämnar besökarens webbläsare. Sidan har ingen statistik, inga cookies och inga externa typsnitt.
