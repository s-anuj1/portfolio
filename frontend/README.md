# Anuj Kumar — Portfolio

A premium dark-theme portfolio (React + Tailwind + Framer Motion).

## Tech
- React 19 (CRA + CRACO)
- Tailwind CSS
- Framer Motion
- Lucide Icons
- React Router

## Getting started

```bash
# 1) install deps (yarn preferred)
yarn install

# 2) run dev server on http://localhost:3000
yarn start

# 3) production build (outputs to /build)
yarn build
```

## Project structure

```
frontend/
├── public/
├── src/
│   ├── App.js                      # routes + layout + ambient bg + cursor
│   ├── App.css
│   ├── index.js
│   ├── index.css                   # tailwind, fonts, cursor, noise, grid, marquee
│   ├── data/
│   │   └── mock.js                 # ALL content (profile, projects, experience, etc.)
│   └── components/
│       ├── ui/                     # shadcn primitives
│       └── portfolio/
│           ├── Header.jsx          # floating pill navbar
│           ├── Hero.jsx
│           ├── About.jsx           # narrative + Education block
│           ├── Experience.jsx
│           ├── Projects.jsx        # cards (3D tilt)
│           ├── ProjectModal.jsx    # embedded Drive preview
│           ├── Skills.jsx          # tool marquee
│           ├── Leadership.jsx      # roles + testimonials
│           ├── Contact.jsx
│           ├── Footer.jsx
│           ├── SectionLabel.jsx    # animated gradient titles
│           └── CustomCursor.jsx    # amber dot + trailing ring
├── tailwind.config.js
├── craco.config.js
├── postcss.config.js
└── package.json
```

## Editing content

Everything recruiter-facing lives in **`src/data/mock.js`**:
- `profile` — name, email, phone, photo, resume link, socials
- `hero` — headline & subheadline
- `about` — paragraphs
- `education` — degrees
- `experience` — roles + bullets
- `projects` — titles, blurbs, Drive view + preview links, meta tags
- `skills` — Product / Tools / Execution
- `toolLogos` — marquee icons (Simple Icons slugs)
- `leadership` — roles with metric bullets
- `testimonials` — quotes

Update the file and the site updates instantly.

## Notes

- Resume and project decks are hosted on Google Drive. Update links in `mock.js`.
- The custom cursor auto-disables on touch devices.
- Social links use target=_blank + rel=noopener noreferrer. They're correctly wired; if you see a "refused to connect" page, that's only happening inside the Emergent preview iframe. Clicks work on deployed/direct URLs.
