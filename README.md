# samupert.com — Personal Portfolio

Static portfolio website of **Samuele Perticarari** (*Strategic Cloud Engineer @ Google Cloud*), built with [Hugo](https://gohugo.io/), Vanilla CSS Custom Properties, and minimal Vanilla JavaScript.

## Architecture & Highlights

- **Static Site Generator**: [Hugo](https://gohugo.io/) (`hugo.toml`, `layouts/`, `data/`, `content/`, `static/`)
- **Design System**: Swiss Technical Editorial with a **Dual Theme System** (`Dark` default + `Light` mode toggle persisted via `localStorage`)
- **Zero Framework Bloat**: Pure semantic HTML5, a single Vanilla CSS stylesheet (`static/css/style.css`), and a lightweight theme toggle script (`static/js/theme.js`)
- **Primary Contact**: [LinkedIn — Samuele Perticarari](https://www.linkedin.com/in/samuele-perticarari/)

## Project Structure

```text
.
├── hugo.toml                  # Site configuration & metadata
├── content/
│   └── _index.md              # Home page frontmatter
├── data/
│   ├── projects.yaml          # 6 selected engineering & security projects
│   └── skills.yaml            # 3 core technical expertise pillars
├── layouts/
│   ├── _default/
│   │   └── baseof.html        # Base HTML5 shell, SEO tags & FOUC-free theme init
│   └── index.html             # Single-page portfolio template
└── static/
    ├── CNAME                  # Custom domain configuration (samupert.com)
    ├── assets/images/         # Project showcase images
    ├── css/style.css          # Dark/Light theme tokens & responsive styles
    └── js/theme.js            # Accessible Dark/Light theme controller
```

## Local Development & Build

### Prerequisites

Install [Hugo](https://gohugo.io/installation/) (`v0.120+` recommended).

### Run Development Server

```bash
hugo server -D
```

Then open `http://localhost:1313` in your browser.

### Build Production Static Site

```bash
hugo --minify
```

The static production bundle is generated in `public/`.
