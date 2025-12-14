# Link in Bio — Mattia Capomagi

A modern, responsive "link in bio" landing page with glassmorphic embossed cards and video background.

![Preview](https://mattiacapomagi.github.io/linkinbio/)

## 🚀 Live Demo

**[mattiacapomagi.github.io/linkinbio](https://mattiacapomagi.github.io/linkinbio/)**

---

## ✨ Features

- **Embossed Glass Cards** — Frosted glass effect with inset shadows for a tactile, recessed appearance
- **Video Background** — Looping MP4 video with film grain overlay
- **Custom Typography** — PP Mori font (Regular & Extrabold weights)
- **Responsive Layout** — Bento grid on desktop, stacked layout on mobile
- **Squircle Profile Image** — iOS-style rounded square avatar

---

## 🛠 Tech Stack

| Technology     | Usage                                     |
| -------------- | ----------------------------------------- |
| HTML5          | Semantic structure                        |
| CSS3           | Variables, Grid, Flexbox, backdrop-filter |
| Vanilla JS     | Dynamic card rendering from JSON          |
| PP Mori        | Custom webfont (WOFF/WOFF2)               |
| GitHub Actions | Automatic deployment to GitHub Pages      |

---

## 📁 Project Structure

```
linkinbio/
├── index.html          # Main HTML
├── style.css           # All styles
├── script.js           # Card rendering logic
├── data.json           # Content data
├── sfondo.mp4          # Background video (compressed)
├── favicon.jpg         # Profile image
├── font/               # PP Mori webfonts
└── .github/workflows/  # GitHub Pages deploy
```

---

## 🎨 Design Specifications

### Colors

- **Text Main:** `#1a1a1a`
- **Text Muted:** `rgba(0, 0, 0, 0.65)`
- **Card Background:** `rgba(255, 255, 255, 0.1)`

### Typography

- **Font:** PP Mori
- **Weights:** 400 (Regular), 800 (Extrabold)
- **Profile Title:** 3.8rem
- **Card Titles:** 2.2rem
- **Subtitles:** 1.1rem

### Layout

- **Grid:** 4 columns × 180px rows
- **Max Width:** 1200px
- **Card Radius:** 48px (squircle)
- **Gap:** 24px

### Breakpoints

- **Tablet:** < 900px (2 columns)
- **Mobile:** < 650px (single column)

---

## 📦 Performance

- **Video:** Compressed from 66MB → 2.9MB using FFmpeg
- **Fonts:** Subsetted WOFF2 for fast loading
- **CSS:** No external frameworks

---

## 🚀 Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to `main`.

---

## 📝 License

MIT © Mattia Capomagi
