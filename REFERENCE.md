# Project Reference

This file is a quick context handoff for future Codex sessions.

## Repo + Deploy
- Local path: `C:\Users\novel\Downloads\andrea_novellis_site_package`
- GitHub: `andrellis/personal-website`
- Deploy: Cloudflare Pages (auto-deploy on push to `main`)
- Live URLs:
  - `https://personal-website-3z3.pages.dev`
  - `https://andreanovellis.com`

## Site Structure (EN/IT pairs)
- `index.html`, `index.it.html`
- `research.html`, `research.it.html`
- `publications.html`, `publications.it.html`
- `policy-public-writing.html`, `policy-public-writing.it.html`
- `consulting.html`, `consulting.it.html`
- `conferences.html`, `conferences.it.html`
- `cv.html`, `cv.it.html`
- `risc.html`, `risc.it.html`

## Design Direction
- Minimalist academic style: serif headings + sans body; white/light background; dark text; one muted accent color.
- No gradients, no pills, no heavy shadows.
- Background photo kept in hero with a dark overlay.

## Homepage Logic
- Hero text:
  - “Andrea Novellis, PhD”
  - “Civil wars, rebel governance and post-conflict political orders”
  - “Kurdistan, Sri Lanka and the Middle East — with current projects on food security, political risk and early warning”
- Areas section is “Research focus / Linee di ricerca” with three columns:
  - Conflict & post-conflict political orders
  - Early warning & political risk
  - Food security & conflict
  Each links to the Research page.
- “Selected work” shows:
  - Recent publications (auto-updated)
  - Recent policy and public writing (auto-updated)

## Auto-update Script (Homepage)
- In `index.html` and `index.it.html` there is JS that:
  - fetches `publications*.html` and `policy-public-writing*.html`
  - reads lists with IDs:
    - `#accepted-list`, `#published-list`, `#dissertation-list` (from publications page)
    - `#public-writing-list` (from policy page)
  - uses `data-year` attributes to sort and pick the top 3
  - writes into homepage lists:
    - `#home-publications`
    - `#home-public-writing`
- Note: Works on deployed site (same-origin). Local file opening won’t run fetch due to browser restrictions. Use `python -m http.server` for local testing.

## Publications Structure
- Publications page has sections like: accepted/in press, R&R, under review, published, dissertation, full list.
- `data-year` attributes exist on list items for accepted/published/dissertation sections.

## PDFs
Stored in `files/`:
- `Novellis_Grasso_Introduction_PaCo.pdf`
- `Novellis_Kurdish_Movement_Occhiali.pdf`
- `Novellis_DAANES_External_Relations_Carocci.pdf`
- `Novellis_PhD_Thesis_Final.pdf`
- `Novellis_Rise_of_Feminism_PKK_Zanj.pdf`

## Consulting Page
- Separate from policy/public writing.
- Includes ACAPS, National Peace Council, Arci, Operazione Colomba.

## Language Switcher
- EN/IT toggle shows flags (🇬🇧/🇮🇹) next to labels.

## Note
- All content changes must be mirrored in both EN and IT pages.
