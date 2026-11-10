# samupert.com — Personal Portfolio

Static portfolio website of **Samuele Perticarari** (*Strategic Cloud Engineer at Google Cloud*, specialized in GCP networking and cloud foundations), built with [Hugo](https://gohugo.io/), plain CSS, and JavaScript.

## Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/) (`hugo.toml`, `layouts/`, `data/`, `content/`, `static/`)
- **Theming**: Dark (default) and light modes using CSS custom properties, persisted in `localStorage`
- **Frontend**: Semantic HTML5, `static/css/style.css`, and `static/js/theme.js` with no external runtime dependencies
- **Primary Contact**: [LinkedIn — Samuele Perticarari](https://www.linkedin.com/in/samuele-perticarari/)

## Project Structure

```text
.
├── hugo.toml                  # Site configuration & metadata
├── content/
│   └── _index.md              # Home page frontmatter
├── data/
│   ├── projects.yaml          # Project entries
│   └── skills.yaml            # Technical focus areas
├── layouts/
│   ├── _default/
│   │   └── baseof.html        # Base HTML5 shell, SEO tags & FOUC-free theme init
│   └── index.html             # Single-page portfolio template
└── static/
    ├── CNAME                  # Custom domain configuration (samupert.com)
    ├── assets/images/         # Project images
    ├── css/style.css          # Dark/Light theme tokens & responsive styles
    └── js/theme.js            # Dark/Light theme controller
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
