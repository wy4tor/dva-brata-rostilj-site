# Dva Brata Roštilj — landing page

Ovo je statički landing page za ćevabžinicu / roštilj **Dva Brata Roštilj**. Projekat je napravljen da ga možeš otvoriti direktno u **Cursoru**.

## Struktura

```txt
index.html          glavna stranica
styles.css          kompletan dizajn
script.js           meni, filteri i animacije
assets/hero.jpg     landscape hero slika
assets/menu-board.webp  slika menija kao referenca
assets/gallery/     dodatne slike hrane
assets/logo-dva-brata.svg  jednostavan SVG logo placeholder
```

## Kako da pokreneš

Najlakše:

1. Raspakuj ZIP.
2. Otvori folder `dva-brata-rostilj-site` u Cursoru.
3. Desni klik na `index.html` → Open with Live Server, ako imaš Live Server ekstenziju.

Može i bez Live Servera: samo dupli klik na `index.html`.

## Hero video

U `index.html` sam podesio `<video>` sekciju da prvo traži lokalni fajl:

```txt
assets/hero-video.mp4
```

Ako želiš 100% lokalno bez spoljnog linka, preuzmi generisani MP4 i snimi ga baš pod tim imenom:

```txt
assets/hero-video.mp4
```

Trenutno je dodat i eksterni Higgsfield MP4 link kao rezervna opcija, ali za pravi sajt je bolje da video fajl bude lokalno u `assets` folderu.

## Šta treba da promeniš

U `index.html` su već uneti:

- telefon: `063 / 8307‑526`
- `tel:+381638307526`
- adresa: `Trg Slobode 10, Bojnik`

Po potrebi zameni radno vreme.

U `script.js` možeš menjati cene i artikle u nizovima `menuData` i `kiloData`.

## Napomena

Ovo je front-end landing page. Nema bazu, admin panel ni online poručivanje. Može kasnije da se proširi na kontakt formu, online meni, naručivanje ili CMS.
