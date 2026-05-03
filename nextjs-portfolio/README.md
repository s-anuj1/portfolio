# Anuj Kumar — Portfolio (Next.js)

A premium dark-theme portfolio built with **Next.js 15 (App Router)**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

## Tech
- Next.js 15+ (App Router, React Server Components)
- React 19
- Tailwind CSS 3.4
- Framer Motion 12
- Lucide React Icons

## Quickstart

```bash
# 1) install
npm install      # or: yarn / pnpm install

# 2) run dev server  -> http://localhost:3000
npm run dev

# 3) production build
npm run build
npm start
```

## Project structure

```
anuj-portfolio/
├── app/
│   ├── layout.jsx          # root layout (server component, loads Inter via next/font)
│   ├── page.jsx            # home page (the entire portfolio)
│   └── globals.css         # tailwind + ambient bg + cursor + marquee + section-title
├── components/
│   └── portfolio/
│       ├── Header.jsx          # floating pill navbar
│       ├── Hero.jsx
│       ├── About.jsx           # narrative + Education block
│       ├── Experience.jsx
│       ├── Projects.jsx        # cards with 3D tilt
│       ├── ProjectModal.jsx    # embedded Drive preview
│       ├── Skills.jsx          # tool marquee
│       ├── Leadership.jsx      # roles + testimonials
│       ├── Contact.jsx
│       ├── Footer.jsx
│       ├── SectionLabel.jsx    # animated gradient titles
│       └── CustomCursor.jsx    # amber dot + trailing ring
├── data/
│   └── mock.js             # ALL content lives here (single source of truth)
├── public/
├── jsconfig.json           # @/ path alias
├── next.config.js          # remote image domains
├── postcss.config.js
├── tailwind.config.js
└── package.json
```

## Editing content

Everything user-facing is in **`data/mock.js`**:
- `profile`     → name, role, email, phone, photo URL, resume link, socials
- `hero`        → headline + subheadline
- `about`       → paragraphs
- `education`   → schools / degrees
- `experience`  → roles + bullet points
- `projects`    → titles, blurbs, Google Drive view + preview links, meta tags
- `skills`      → Product / Tools / Execution
- `toolLogos`   → marquee logos (Simple Icons slugs)
- `leadership`  → leadership roles with metric bullets
- `testimonials`→ quotes

Update the file and the site updates instantly.

## Notes
- All interactive components use the `"use client"` directive (required for hooks + Framer Motion).
- The `@/` alias is wired via `jsconfig.json` so imports look like `@/components/portfolio/Header` and `@/data/mock`.
- The custom cursor auto-disables on touch / coarse-pointer devices.
- Resume and project decks are hosted on Google Drive — update links in `data/mock.js`.

## Deploy

Works out of the box with **Vercel** (zero config). Push to GitHub and import the repo at vercel.com.

```bash
npx vercel        # one-shot deploy from terminal
```
